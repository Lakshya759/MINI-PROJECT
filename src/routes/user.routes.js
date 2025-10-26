import {Router} from "express";
import {signUpUser,registerUser} from "../controllers/user.controller.js"

const router = Router()

router.route("/signup").post(signUpUser)
router.route("/verify-email").get(registerUser)


export default router