import express from "express"
import cookieParser from "cookie-parser"
const app=express();

app.use(express.json())
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//routes
import userRouter from "./routes/user.routes.js"
import postRouter from "./routes/post.routes.js"
import answerRouter from "./routes/answer.routes.js"

//routes declaration

app.use("/api/v1/users",userRouter)
app.use("/api/v1/posts",postRouter)
app.use("/api/v1/answer",answerRouter)

export {app}