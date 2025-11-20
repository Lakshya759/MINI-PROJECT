import "./Login.css"
import axios from "axios"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [loading, setLoading] = useState(false);
    const [message,setMessage]=useState("");
    const[error,setError]=useState("")
    const navigate = useNavigate()
    const [formData,setFormData] =useState({
        email:"",
        password:""
    })

    const handleChange=(e)=>{
        setFormData({...formData ,[e.target.name]:e.target.value} )
        console.log(formData);
        
    }


    const handleSubmit=async (e)=>{
        e.preventDefault()
        setMessage("")
        setError("")
        setLoading("true")

        try{
            const res=await axios.post("http://localhost:8000/api/v1/users/login",formData,{ withCredentials: true })
            if(res.data.success){
                console.log("login successful")
                setMessage("login successful 👍")
                navigate("/home")
                // window.location.href(/main)
            }
        }catch(err){
            if (err.response) {
                setError("❌"+err.response?.data?.message+"❌" || "login unsuccessful");
                console.log(error);
            } else {
                setError("Something went wrong!");
                console.log(error)
            }
        }
    }
  return (
    <>
    <div className="containers">
        <div className="bg-blur purple"></div>
        <div className="bg-blur blue"></div>
        <div className="bg-blur pink"></div>

        <div className="login-card">
            <div className="login-icon">
                 <img src="/lock.png" alt="" />
            </div>

            <h2>Welcome back</h2>
            <p className="subtitle">Sign in to continue to your account</p>

            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <div className="input-box">
                    <i className="fas fa-envelope"></i>
                    <input type="email" placeholder="you@example.com" name="email" value={formData.email}  onChange={handleChange} />
                </div>

                <label>Password</label>
                <div className="input-box">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="••••••••" id="password" name="password" value={formData.password}  onChange={handleChange}/>
                    <i className="fas fa-eye" id="togglePassword"></i>
                </div>


                <button className="btn">
                    Sign in <i className="fas fa-arrow-right"></i>
                </button>
                <h1 className="text-center text-red-600">{error}</h1>
                <h1 className="text-center text-green-500">{message}</h1>

                <p className="signup-text">
                    Don't have an account? <a href="#">Sign up</a>
                </p>
            </form>
        </div>
        </div>
    </>
  )
}

export default Login