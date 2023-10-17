/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7vqpdoj28xmfzo9")

  collection.listRule = "@request.auth.id != \"\" && users.id ?~ @request.auth.id"
  collection.viewRule = "@request.auth.id != \"\" && users.id ?~ @request.auth.id"
  collection.createRule = "@request.auth.id != \"\" && users.id ?~ @request.auth.id"
  collection.updateRule = "@request.auth.id != \"\" && users.id ?~ @request.auth.id"
  collection.deleteRule = "@request.auth.id != \"\" && users.id ?~ @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7vqpdoj28xmfzo9")

  collection.listRule = "@request.auth.id != \"\" && users.id ~ @request.auth.id"
  collection.viewRule = "@request.auth.id != \"\" && users.id ~ @request.auth.id"
  collection.createRule = "@request.auth.id != \"\" && users.id ~ @request.auth.id"
  collection.updateRule = "@request.auth.id != \"\" && users.id ~ @request.auth.id"
  collection.deleteRule = "@request.auth.id != \"\" && users.id ~ @request.auth.id"

  return dao.saveCollection(collection)
})
