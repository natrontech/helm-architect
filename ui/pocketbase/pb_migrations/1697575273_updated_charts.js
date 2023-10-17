/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gnegtavc9uwul8q")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tqhazyvv",
    "name": "teams",
    "type": "relation",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "collectionId": "7vqpdoj28xmfzo9",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gnegtavc9uwul8q")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tqhazyvv",
    "name": "teams",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "7vqpdoj28xmfzo9",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
