const {Router} = require('express')
const Flower = require('../models/Flower')
const User = require('../models/User')
const router = Router()

router.get('/', async (req, res) => {

    try{
        const flowers = await Flower.findAll({
            raw:true
        })
        console.log(flowers)
        res.render('flowers', {
            title: 'Цветы',
            flowers
        })

    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Server error'
        })
    }
})



module.exports = router
