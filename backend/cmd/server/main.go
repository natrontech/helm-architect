package main

import (
	"log"
	"net/http"

	"github.com/natrontech/helmarchitect/backend/pkg/env"
	"github.com/natrontech/helmarchitect/backend/pkg/handlers"
)

func init() {
	// Initialize environment variables
	env.Init()
}

func main() {
	http.HandleFunc("/charts", func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case "GET":
			handlers.GetAllCharts(w, r)
		case "POST":
			handlers.CreateChart(w, r)
		default:
			w.WriteHeader(http.StatusMethodNotAllowed)
			w.Write([]byte(`{ "message": "Method not allowed" }`))
		}
	})

	log.Fatal(http.ListenAndServe(":8080", nil))
}
