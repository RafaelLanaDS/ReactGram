const express = require("express")
const router = express()

router.use('/api/users', require('./UserRouter'))
router.use('/api/photos', require('./photoRouter'))

//TEST ROUTE

router.get("/", (req, res) => {
    res.send("API Working!")
})

module.exports = router