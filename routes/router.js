const express = require('express')
const router = express.Router()
const { storeData, allData, deleteStore } = require('../controllers/storeController')

router.get("/", allData)
router.get("/products", storeData)
router.delete("/:id", deleteStore)

module.exports = router
