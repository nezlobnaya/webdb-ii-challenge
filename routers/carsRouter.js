const express = require('express')
const knex = require('knex')

const db = require('../data/dbConfig')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        res.json(await db('cars'))
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const payload = {
            vin: req.body.vin,
            make: req.body.make,
            model: req.body.model,
            mileage: req.body.mileage,
            transmission: req.body.transmission,
            title: req.body.title,
        }
    const [id] = await db('cars').insert(payload)
    res.json(await db('cars').where('id', id).first())
    } catch (err) {
        next(err)
    }
})

router.put("/:id", async (req, res, next) => {
    try {
        const payload = {
            vin: req.body.vin,
            make: req.body.make,
            model: req.body.model,
            mileage: req.body.mileage,
            transmission: req.body.transmission,
            title: req.body.title,
        }
        await db('cars').where('id', req.params.id).update(payload)
        res.json(await db('cars').where('id', req.params.id).first())
    } catch (err) {
        next(err)
    }
})

router.delete("/:id", async (req, res, next) => {
    try {
        await db('cars').where('id', req.params.id).del()
        res.status(204).end()
    } catch (err) {
        next(err)
    }
})


module.exports = router;