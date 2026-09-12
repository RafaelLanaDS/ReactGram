const express = require("express")
const router = express()

//TEST ROUTE

router.get("/", (req, res) => {
    res.send("API Working!")
})

module.exports = router