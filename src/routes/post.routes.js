import {Router} from "express"
import {createPost,viewSinglePost,updatePost,deletePost,viewAllPost} from "../controllers/post.controller.js"
import {verifyJWT} from "../middlewares/auth.middleware.js"


const router = Router()


router.route("/create").post(verifyJWT,createPost)

router.route("/view").get(verifyJWT,viewAllPost)

router.route("/view/:id").get(viewSinglePost);

router.route("/update/:id").put(verifyJWT, updatePost);

router.route("/delete/:id").delete(verifyJWT, deletePost);

export default router