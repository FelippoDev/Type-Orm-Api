import "reflect-metadata"
import express from 'express'
import bodyParser from "body-parser";
import { AppDataSource } from "./db/data-source"
import categoryRouter from "./router/routerCategory"

const app = express()
app.use(bodyParser.json())

const baseUrl = "/api/v1/"

app.use(baseUrl, categoryRouter)

AppDataSource.initialize()
    .then(() => {
        console.log("Database connection established.")
    })
    .catch((error) => console.log(error))



app.listen("8080", () => console.log("Server listenning on http://127.0.0.1:8080"))

