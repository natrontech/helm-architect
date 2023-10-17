/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gnegtavc9uwul8q")

  collection.listRule = "@request.auth.id != \"\" && teams.users.id ~ @request.auth.id"
  collection.viewRule = "@request.auth.id != \"\" && teams.users.id ~ @request.auth.id"
  collection.createRule = "@request.auth.id != \"\" && teams.users.id ~ @request.auth.id"
  collection.updateRule = "@request.auth.id != \"\" && teams.users.id ~ @request.auth.id"
  collection.deleteRule = "@request.auth.id != \"\" && teams.users.id ~ @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gnegtavc9uwul8q")

  collection.listRule = "@request.auth.id != \"\""
  collection.viewRule = "@request.auth.id != \"\""
  collection.createRule = "@request.auth.id != \"\""
  collection.updateRule = "@request.auth.id != \"\""
  collection.deleteRule = "@request.auth.id != \"\""

  return dao.saveCollection(collection)
})
