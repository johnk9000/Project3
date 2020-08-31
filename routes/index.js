const router = require("express").Router()
const fighterRoutes = require("./fighters")

router.use("/fighter", fighterRoutes)

module.exports = router