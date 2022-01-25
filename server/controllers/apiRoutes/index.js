

const worldRoutes = require('./worldRoutes')
const characterRoutes = require('./characterRoutes')
const userRoutes = require('./userRoutes')
const religionRoutes = require('./religionRoutes')
const regionRoutes = require('./regionRoutes')
const quoteRoutes = require('./quoteRoutes')
const orgRoutes = require('./orgRoutes')
const countryRoutes = require('./countryRoutes')
const cityRoutes = require('./cityRoutes')
const historyRoutes = require('./historyRoutes')

const router = require('express').Router()


router.use('/world', worldRoutes)
router.use('/region', regionRoutes)
router.use('/character', characterRoutes)
router.use('/user', userRoutes)
router.use('/religion', religionRoutes)
router.use('/quote', quoteRoutes)
router.use('/organization', orgRoutes)
router.use('/country', countryRoutes)
router.use('/city', cityRoutes)
router.use('/history', historyRoutes)


module.exports = router