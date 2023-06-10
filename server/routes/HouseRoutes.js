const express = require('express')
const { House } = require('../models')
const router = express.Router({ mergeParams: true })

router.post("/", (req, res) => {
    const { address, currentValue, loanAmount } = req.body;
    House.create({ address, currentValue, loanAmount })
        .then(data => res.send(data))
        .catch(err => console.log(err))
})

router.get('/', (req, res) => {
    House.findOne({ where: { id: req.query.id } })
        .then(data => res.send(data))
        .catch(err => console.log(err))
})

router.put("/", (req, res) => {
    House.findOne({ where: { id: req.query.id } })
        .then(house => {
            if (house) {
                const { address, currentValue, loanAmount } = req.body;
                house.address = address
                house.currentValue = currentValue
                house.loanAmount = loanAmount
                return house.save();
            }
        })
        .then(data => res.send(data))
        .catch(err => console.log(err))
})

module.exports = router
