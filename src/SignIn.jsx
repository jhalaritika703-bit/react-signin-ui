import React, { useState } from 'react'
import './SignIn.css'
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";

export const SignIn = () => {

    const [form,setform]=useState({
       email:"",
       password:"",
       remember:false, 
    });

    const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange=(e)=>{
    const{name,value,type,checked}=e.target;
    setform({
        ...form,[name]:type==="checkbox"?checked:value,
    });
  };

  const handleSubmit=(e)=>{
        e.preventDefault();
        if(!form.email||!form.password){
            setError("please fill all fields");
            return;
        }
        setError("");
        setLoading(true);

      setTimeout(() => {
      setLoading(false);
      alert("Login successful 🎉");
    }, 1500);
  }

  return (
    <div className='container'>
     <form className='form' onSubmit={handleSubmit}>
        <h2> Welcome back</h2>
        <p className='subtitle'>Sign in to your account</p>
  
   {error && <p className="error">{error}</p>}
        {/* Email */}

        <div className="email">
            <input type='email'
            name='email'
            value={form.email}
            onChange={handleChange}
            required></input>
         <label>Email address</label>
        </div>

        {/* password */}

        <div className="password">
            <input type={showPassword ? "text" : "password"}
            name='password'
            value={form.password}
            onChange={handleChange}
            required></input>

            <label>Password</label>
          <span onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>

          {/* options */}

          <div className="options">
            <input type='checkbox'
            name='remember'
            checked={form.remember}
            onChange={handleChange}></input>
            <label>Remember Me</label>

            <a href="#">Forgot password?</a>
        </div>
          </div>


          <button disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </button>

           <div className="divider">or continue with</div>

           {/* socials */}
           <div className="social">
          <button type="button">
            <FaGoogle /> Google
          </button>
          <button type="button">
            <FaGithub /> GitHub
          </button>
        </div>
        <p className="switch">
          Don’t have an account? <span>Sign up</span>
        </p>
      </form>

        </div>
        
     

  )
}
