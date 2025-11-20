import React from "react";
import "./AskQuestion.css"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AskQuestion = () => {
  const navigate=useNavigate()
    const [message,setMessage]=useState("")
    const [error,setError]=useState("")
    const [loading,setLoading]=useState("")

    const [formData,setFormData] =useState({
            title:"",
            body:"",
            tags:[]
        })

        const handleChange=(e)=>{
            setFormData({...formData ,[e.target.name]:e.target.value} )
            console.log(formData);
            
        }

   const tagOptions = ["c","cpp","java","python","javascript","typescript","html","css","react","nodejs","express","mongodb","mysql","android","flutter","dsa","dbms","os","computer-networks","machine-learning","ai","cybersecurity","cloud-computing","git","github","academics","exams","notes","projects","campus-life","hostel","mess","sports","library","events","clubs","announcements","lost-and-found","help","feedback","issues","placements","internships","opportunities"];



  const toggleTag = (tag) => {
    setFormData((prev) => {
      const exists = prev.tags.includes(tag);
      return {
        ...prev,
        tags: exists
          ? prev.tags.filter((t) => t !== tag) // REMOVE
          : [...prev.tags, tag]               // ADD
      };
    });
  };

  const handleSubmit=async (e)=>{
        e.preventDefault()
        setMessage("")
        setError("")
        setLoading(true)

        try{
            const res=await axios.post("http://localhost:8000/api/v1/posts/create",formData,{ withCredentials: true })
            if(res.data.success){
                console.log("Question Submitted successfully")
                setMessage("Question Submitted successfully 👍")
                setFormData({
                    title:"",
                    body:"",
                    tags:[]
                })
                setTimeout(() => {
                  navigate("/home");
                }, 1000); 
               
            }
        }catch(err){
            if (err.response) {
                setError("❌"+err.response?.data?.message+"❌" || "Subbimission Failed");
                console.log(error);
            } else {
                setError("Something went wrong!");
                console.log(error)
            }
        }
    }


  return (
    <div className="main">
      <div className="container">
        <h1>Your Question</h1>
        <p className="subtitle">
          Provide as much detail as possible to get the best answers
        </p>

        <form className="ask-form" onSubmit={handleSubmit}>
          <label className="label">
            Title <span className="required">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g., How do I implement authentication in React?"
            className="input"
            name="title"
            value={formData.title}  
            onChange={handleChange}
          />
          <p className="hint">
            Be specific and imagine you’re asking a question to another person
          </p>

          <label className="label">
            Body <span className="required">*</span>
          </label>
          <textarea
            className="textarea"
            placeholder="Include all the information someone would need to answer your question..."
            name="body"
            value={formData.body}  
            onChange={handleChange}
          ></textarea>

          <p className="hint">
            Provide context, what you've tried, and what you expect to happen
          </p>

          <label className="label">Tags</label>

          <div className="tags-container">
            {tagOptions.map((tag) => (
              <span
                key={tag}
                className={
                  formData.tags.includes(tag) ? "tag selected" : "tag"
                }
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="hint">
            Add up to 5 tags to describe what your question is about
          </p>

          <button className="submit-btn">Submit Question</button>
        </form>
        <h1>{message}</h1>
      </div>
    </div>
  );
};

export default AskQuestion;
