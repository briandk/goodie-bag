import {
    Router
} from 'express'

const router = Router()

router.use("/", async (req, res, next) => {
    console.log("trying to find all candies")
    // const allCandies = await // findAllCandies
})

module.exports = {
    candies: router
}
