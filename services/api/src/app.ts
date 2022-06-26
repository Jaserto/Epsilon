import express from 'express'

const app = express()

app.use(express.json())

app.get("/health", (req, res) => {
    res.status(200).send({ status: 'OK' })
})

app.get("/workouts", (req, res) => {
    res.status(200).send({ status: 'OK' })
})


export { app }