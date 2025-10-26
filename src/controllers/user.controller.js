import {asyncHandler} from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import {User} from "../models/user.model.js"
import jwt from "jsonwebtoken"
import nodemailer from "nodemailer"



const signUpUser =asyncHandler(async (req,res)=>{
    const { name , email , password , branch, year, skills  }=req.body


    //checking if the information is not empty
    if(
        [name , email, password, branch, year ].some((field)=> field?.trim()==="")
    ){
        throw new ApiError(400,"All fields are required")
    }

    
    //Checking if the user is using the college email id
    const collegeDomain="ietlucknow.ac.in"
    if(!email.endsWith(`@${collegeDomain}`)){
        throw new ApiError(500,"Please login through via college E-mail id only");
    }

    //Checking if the user already existed
    const existedUser=await User.findOne({email});
    if(existedUser){
        throw new ApiError(400, "Email Id is already registered")
    }
    //Generating verification token and saving it to database
    const token = jwt.sign({ email,name, password,branch,year}, process.env.VERIFICATION_TOKEN_SECRET, { expiresIn: '15m' });
    

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
        },
    });



    const verifyUrl = `http://localhost:${process.env.PORT}/api/v1/users/verify-email?token=${token}`;


    await transporter.sendMail({
        to: email,
        subject: "Verify your college email",
        html: `<p>Click <a href="${verifyUrl}">here</a> to verify your email.</p>`,
    });

    return res.status(200).json(
        new ApiResponse(200,{}, "Verification Link Has Been Sent To Your College Email")
    )

})


const registerUser=asyncHandler(async (req,res)=>{
    const { token } = req.query;
    const decoded = jwt.verify(token, process.env.VERIFICATION_TOKEN_SECRET);

    const { email,name, password,branch , year } = decoded;

    const existingUser= await User.findOne({email})

    if(existingUser){
        throw new ApiError(400,"Email already exists ")
    }


    const user=User.create({
        email,password,name,branch,year
    })
    
    return res
    .status(200)
    .json(
        new ApiResponse(200,{},"The User Has Been Verified And Registred Successfully")
    )


})

export {signUpUser,registerUser}