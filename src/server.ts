import "reflect-metadata"
import express from 'express'
import { AppDataSource } from "./db/data-source"

const app = express()
app.use(express.json())

AppDataSource.initialize()
    .then(() => {
        console.log("Database connection established.")
    })
    .catch((error) => console.log(error))

app.listen("8080", () => console.log("Server listenning on http://127.0.0.1:8080"))

