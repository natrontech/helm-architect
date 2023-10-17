package env

import (
	"log"

	"github.com/caarlos0/env/v8"
)

type config struct {
	Local           bool   `env:"LOCAL"`
	MongoDBHost     string `env:"MONGODB_HOST"`
	MongoDBPort     string `env:"MONGODB_PORT"`
	MongoDBUser     string `env:"MONGODB_USER"`
	MongoDBPassword string `env:"MONGODB_PASSWORD"`
	MongoDBDatabase string `env:"MONGODB_DATABASE"`
}

var Config config

func Init() {
	if err := env.Parse(&Config); err != nil {
		log.Printf("%+v\n", err)
	}

	if Config.Local {
		log.Println("Running in local mode")
	}
}
