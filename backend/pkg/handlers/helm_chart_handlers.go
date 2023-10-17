package handlers

import (
	"context"
	"encoding/json"
	"net/http"

	"github.com/natrontech/helmarchitect/backend/pkg/models"
	"github.com/natrontech/helmarchitect/backend/pkg/utils"
	"go.mongodb.org/mongo-driver/bson"
)

func GetAllCharts(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	var charts []models.HelmChart

	collection := utils.ConnectDB()

	cursor, err := collection.Find(context.TODO(), bson.M{})
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(`{ "message": "` + err.Error() + `" }`))
		return
	}
	defer cursor.Close(context.TODO())

	for cursor.Next(context.TODO()) {
		var chart models.HelmChart
		cursor.Decode(&chart)
		charts = append(charts, chart)
	}

	if err := cursor.Err(); err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(`{ "message": "` + err.Error() + `" }`))
		return
	}

	json.NewEncoder(w).Encode(charts)
}

// TODO: Implement other handlers (CreateChart, GetChart, UpdateChart, DeleteChart).

func CreateChart(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	var chart models.HelmChart

	// Decode the request body into chart struct
	err := json.NewDecoder(r.Body).Decode(&chart)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte(`{ "message": "Invalid request payload" }`))
		return
	}

	collection := utils.ConnectDB()

	// Insert the chart data into the MongoDB collection
	result, err := collection.InsertOne(context.TODO(), chart)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(`{ "message": "` + err.Error() + `" }`))
		return
	}

	// Return the MongoDB ID of the new chart
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(result.InsertedID)
}
