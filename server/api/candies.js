import {
    Router
} from 'express'
import {
    Candy
} from "../db/models/Candy"

const router = Router()

router.use("/", async (req, res, next) => {
    console.log("trying to find all candies")
    console.log("----", "Candy is", Candy)
    const allCandies = await Candy.findAll()
    res.send(allCandies)
})

router.use((req, res, next) => {
    res.send("Hello, World!")
})

export {
    router
}
