const Store = require("../models/storeModel")
const asyncHandler = require('express-async-handler')


const allData = async (req, res) => {
    const allDataHere = await Store.find()

    if (allDataHere) {
        res.status(200)
        res.json(allDataHere)
    }
}

const storeData = async (req, res) => {
    const {  title, price, description, category, image, rating } = req.body

    if ( !title || !price || !description || !category || !image || !rating) {
        res.status(401)
        res.send({ msg: 'please fill all fields' })
    }

    const createStore = await Store.create({
       title, price, description, category, image, rating
    })

    if (!createStore) {
        res.status(401)
        res.send({ msg: "Not Created" })
    }
    else {
        res.status(201).json(createStore)
    }

}

const deleteStore = async (req, res) => {

    deleteData = await Store.findByIdAndDelete(req.params.id)

    if (!deleteData) {
        res.status(401)
        res.send({ msg: 'data not deleted' })
    }
    else {
        res.status(201).json({ msg: 'data deleted' })
    }
}



module.exports = { storeData, allData, deleteStore }