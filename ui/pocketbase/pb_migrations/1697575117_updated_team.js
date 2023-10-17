/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7vqpdoj28xmfzo9")

  collection.name = "teams"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7vqpdoj28xmfzo9")

  collection.name = "team"

  return dao.saveCollection(collection)
})
