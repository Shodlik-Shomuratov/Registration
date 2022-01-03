require("dotenv").config()
const express = require("express")
const logger = require("morgan")
const cors = require("cors")
const app = express()

app.use(logger("dev"))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

const client = require("./routes/index")

app.use("/api", client)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	res.status(err.status || 404).json({
		message: "No such route exists",
	})
})

// error handler
app.use(function (err, req, res, next) {
	res.status(err.status || 500).json({
		message: "Error Message",
	})
})

module.exports = app