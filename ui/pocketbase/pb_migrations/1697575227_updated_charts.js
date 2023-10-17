/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gnegtavc9uwul8q")

  // remove
  collection.schema.removeField("74hb0630")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9amz88wy",
    "name": "version",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gnegtavc9uwul8q")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "74hb0630",
    "name": "version",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // remove
  collection.schema.removeField("9amz88wy")

  return dao.saveCollection(collection)
})
