package utils

import (
	"context"
	"log"

	"github.com/natrontech/helmarchitect/backend/pkg/env"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func ConnectDB() *mongo.Collection {
	db_host := env.Config.MongoDBHost
	db_port := env.Config.MongoDBPort
	db_user := env.Config.MongoDBUser
	db_password := env.Config.MongoDBPassword
	db_name := env.Config.MongoDBDatabase

	clientOptions := options.Client().ApplyURI("mongodb://" + db_user + ":" + db_password + "@" + db_host + ":" + db_port)
	client, err := mongo.Connect(context.TODO(), clientOptions)
	if err != nil {
		log.Fatal(err)
	}

	err = client.Ping(context.TODO(), nil)
	if err != nil {
		log.Fatal(err)
	}

	collection := client.Database(db_name).Collection("charts")

	return collection
}
