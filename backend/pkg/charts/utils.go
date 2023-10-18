package charts

import (
	"bytes"
	"errors"
	"fmt"
	"io/fs"
	"os"
	"path/filepath"
	"strings"
	"text/template"
)

const NEW_LINE = "\n"

const DIR_ALLOW_CREATION_FOR_GROUP = 0776
const FILE_ALLOW_READ_WRITE_ALL = 0666

func EnvOrError(env string) (string, error) {

	res, ok := os.LookupEnv(env)
	if !ok || strings.EqualFold(res, "") {
		return "", errors.New("ENV not set: " + env)
	}

	return res, nil
}

func Map[I any, O any](inputs []I, mapping func(I) O) []O {

	output := make([]O, 0)
	for _, i := range inputs {
		output = append(output, mapping(i))
	}
	return output
}

func Filter[I any](inputs []I, predicate func(I) bool) []I {

	output := make([]I, 0)
	for _, i := range inputs {
		if predicate(i) {
			output = append(output)
		}
	}
	return output
}

func ParseReplaceWrite(path string, data any) error {

	parsed, err := parse(path)
	if err != nil {
		fmt.Println("failed parsing template:", err.Error())
		return err
	}

	err = replace(path, parsed, data)
	if err != nil {
		fmt.Println("failed replacing template strings:", err.Error())
		return err
	}

	return nil
}

func parse(path string) (*template.Template, error) {

	reader, err := FileOpen(path, FILE_ALLOW_READ_WRITE_ALL)
	if err != nil {
		fmt.Println("failed opening template:", err.Error())
		return nil, err
	}
	defer reader.Close()
	templateAsString := FileAsString(reader)

	temp, err := template.New(path).Parse(templateAsString)
	if err != nil {
		fmt.Println("failed parsing path:", err.Error())
		return nil, err
	}

	return temp, nil
}

func replace(path string, t *template.Template, data any) error {

	FileDelete(path)

	writer, err := FileOpen(path, FILE_ALLOW_READ_WRITE_ALL|os.O_CREATE)
	if err != nil {
		fmt.Println("failed opening template:", err.Error())
		return err
	}
	defer writer.Close()
	err = t.Execute(writer, data)
	return err
}

func entriesNames(dirPath string) []string {

	rawEntries, err := entries(dirPath)
	if err != nil {
		return make([]string, 0)
	}

	return Map(rawEntries, func(in fs.DirEntry) string { return in.Name() })
}

func entries(dirPath string) ([]fs.DirEntry, error) {

	dir, err := FileOpen(dirPath, int(os.ModeDir.Perm()))
	if err != nil {
		return nil, err
	}
	defer dir.Close()

	return dir.ReadDir(-1) // reads all entries
}

func directoryContains(name string, entries []fs.DirEntry) bool {

	for _, entry := range entries {

		if strings.EqualFold(entry.Name(), name) {
			return true
		}
	}

	return false
}

func EnvOrPanic(env string) string {

	res, ok := os.LookupEnv(env)
	if !ok || strings.EqualFold(res, "") {
		panic("ENV not set: " + env + " - shall never happen!")
	}

	return res
}

func IsDirectory(path string) bool {

	stat, err := os.Stat(path)
	if err != nil {
		fmt.Println("Failed opening stat of file " + path)
		return false
	}
	return stat.IsDir()
}

func FileExists(name string) bool {

	_, err := os.Stat(name)
	return !os.IsNotExist(err)
}

func FileAsLines(f *os.File) []string {

	file := FileAsString(f)
	return strings.Split(file, NEW_LINE)
}

func FileCopy(from string, to string) bool {

	copy := func(f *os.File) bool {

		stat, _ := f.Stat()
		fileSize := stat.Size()
		buf := make([]byte, fileSize)
		f.Read(buf)

		return write(to, fileSize, buf)
	}

	return fileSaveHandle(from, copy)
}

// Copies a directory recursively from origin to destination.
// You can define renamings. I empty or nil no renamings are executed.
// The keys of the renamings are alwasy base name (not entire paths) and must match exactly.
func DirCopy(origin string, destination string) (string, error) {

	if !IsDirectory(origin) || FileExists(destination) {
		return destination, errors.New("from path must be directory and to path must be non existent")
	}

	return destination, dirCopyRecursive(origin, destination, "")
}

func DirCreate(path string) error {

	return os.Mkdir(path, DIR_ALLOW_CREATION_FOR_GROUP)
}

func DirDelete(path string) error {

	return os.RemoveAll(path)
}

func dirCopyRecursive(rootOrigin string, rootDestination string, relativeToParent string) error {

	errs := make([]error, 0)
	from := BuildPath(rootOrigin, relativeToParent)
	to := BuildPath(rootDestination, relativeToParent)

	info, err := os.Stat(from)
	if err != nil {
		fmt.Println("dirCopyRecursive: Error reading stat from", from, err)
		errs = append(errs, err)
	} else {
		if info.IsDir() {
			dir, err := FileOpen(from, int(os.ModeDir.Perm()))
			if err != nil {
				fmt.Println("dirCopyRecursive: Error opening file", from, err)
				errs = append(errs, err)
			} else {
				dirEntries, err := dir.ReadDir(-1) // reads all entries of directory
				if err != nil {
					fmt.Println("dirCopyRecursive: Error reading dirEntries from", from, err)
					errs = append(errs, err)
				} else {
					err := DirCreate(to)
					if err != nil {
						errs = append(errs, err)
					}
					for _, de := range dirEntries {
						errs = append(errs, dirCopyRecursive(from, to, de.Name()))
					}
				}
			}
		} else {
			if !FileCopy(from, to) {
				fmt.Println("dirCopyRecursive: Failed copying file from ", from, "to", to)
				errs = append(errs, errors.New("Failed copying file from "+from+" to "+to))
			}
		}
	}

	return errors.Join(errs...)
}

func FileWrite(path string, content string) bool {

	buf := make([]byte, 0)
	buf = append(buf, bytes.NewBufferString(content).Bytes()...)

	return write(path, int64(len(buf)), buf)
}

func FileWriteLines(path string, lines []string) bool {

	buf := make([]byte, 0)
	for _, l := range lines {
		buf = append(buf, bytes.NewBufferString(strings.Trim(l, NEW_LINE)).Bytes()...)
		buf = append(buf, bytes.NewBufferString(NEW_LINE).Bytes()...)
	}

	return write(path, int64(len(buf)), buf)
}

func BuildPath(parts ...string) string {

	return filepath.Join(parts...)
}

func LastPartOfPath(path string) string {

	parts := strings.Split(path, "/")
	if strings.HasSuffix(path, "/") {
		return parts[len(parts)-2]
	}
	return parts[len(parts)-1]
}

func FileEmpty(path string) bool {

	return fileSizeByPath(path) == 0
}

func FileDelete(path string) {

	if FileExists(path) {
		err := os.RemoveAll(path)
		if err != nil {
			panic("Unable to remove file or Directory.")
		}
	} else {
		fmt.Println("File or directory requested to delete was not present.")
	}
}

func fileSizeByPath(path string) int64 {

	f, err := FileOpen(path, os.O_RDONLY)
	if err != nil {
		return -1
	}
	defer f.Close()

	return fileSizeByFile(f)
}

func fileSizeByFile(f *os.File) int64 {

	fInfo, statError := f.Stat()
	if statError != nil {
		return -1
	}

	return fInfo.Size()
}

func fileSaveHandle(path string, handler func(*os.File) bool) bool {

	if FileExists(path) {

		f, err := FileOpen(path, os.O_RDWR)
		if err != nil {
			fmt.Printf("Failed opening file %s. Cause: %s\n", path, err.Error())
			return false
		}
		defer f.Close()

		return handler(f)
	}

	return false
}

func write(path string, fileSize int64, buf []byte) bool {

	target, err := FileOpen(path, os.O_CREATE|os.O_WRONLY)
	if err != nil {
		fmt.Println("ERROR", err.Error())
		return false
	}
	defer target.Close()

	n, _ := target.Write(buf)
	return int64(n) == fileSize
}

func FileAsString(f *os.File) string {

	buf := make([]byte, fileSizeByFile(f))
	_, err := f.Read(buf)

	if err != nil {
		panic("Unable to read file " + f.Name() + " :" + err.Error())
	}

	return string(buf)
}

func FileOpen(path string, mode int) (*os.File, error) {

	if FileExists(path) || os.O_CREATE&mode == os.O_CREATE {
		target, err := os.OpenFile(path, mode, FILE_ALLOW_READ_WRITE_ALL)
		if err != nil {
			return target, errors.New("unable to open file " + path + ", because " + err.Error())
		}
		return target, nil
	}

	return nil, errors.New("file " + path + " does not exist and mode does not allow the creation of a new file")
}
