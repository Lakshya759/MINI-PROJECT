import { useState } from "react";
import "./Login.css"
import axios from "axios"

const Login = () => {
    

    const [loading, setLoading] = useState(false);
    const [message,setMessage]=useState("");
    const[error,setError]=useState("")

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
            const res=await axios.post("http://localhost:8000/api/v1/users/login",formData)
            if(res.data.success){
                console.log("login successful")
                setMessage("login successful 👍")
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
      <div className="page">
        <div className="card">
          <h1 className="title">Campus Query Login</h1>

          <form className="form" onSubmit={handleSubmit}>

            <div className="field">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" name="email" value={formData.email}  onChange={handleChange}/>
            </div>

            <div className="field">
              <label>Password</label>
              <input type="password" placeholder="Enter your password" name="password" value={formData.password}  onChange={handleChange} />
            </div>

            <button className="btn">Login</button>
          </form>
          <h1 className="text-center text-red-600">{error}</h1>
          <h1 className="text-center text-green-500">{message}</h1>
        </div>
      </div>
    </>
  );
};

export default Login;
