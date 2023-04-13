import React from 'react'
import VerticalBlock from '../../../Components/BasicBlocks/VerticalBlock'
import PrimaryTemplate from '../../../Components/ColorTemplates/PrimaryTemplate'
import  { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate  } from 'react-router-dom';
import { login } from "../../../Store/Actions/auth";


const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};



const LoginCard = () => {

  let navigate = useNavigate();

  const form = useRef();
  const checkBtn = useRef();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();

  const onChangeId = (e) => {
    const id = e.target.value;
    setId(id);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    
    console.log(form);
    
    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(id, password))
        .then(() => {
          navigate("/profile");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/profile" />;
  }




  return (
    <VerticalBlock style={form}>
     <form  style={formContainer} onSubmit={handleLogin} ref={form} >
       <label  style={title}>Log In</label>
       <div  style={inputContainer}>
         <input type="text" name="uname" placeholder='Enter login Id '  style={inputField} required  value={id} onChange={onChangeId} validations={[required]}/>
       </div>
       <div  style={inputContainer}>
         <input type="password" name="pass" placeholder='Enter Password '  style={inputField} required  value={password} onChange={onChangePassword} validations={[required]}/>
       </div>
       <div  style={inputContainer}>
         <button type="submit" style={loginButton} disabled={loading}>  
            {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Login</span>
         </button>
       </div>
       
       {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}

       <a  style={forgotPass}>Forgot Password?</a>
     </form>
   </VerticalBlock>
  )
}

export default LoginCard

const form={
  justifyContent: "center",
  alignItems:"center"
}

const formContainer={
  justifyContent: "center",
  alignItems: "center"
}

const title ={
  paddingLeft: "43%",
  fontSize: "25px",
  marginBottom: "20px",
  color:PrimaryTemplate.yellow,
  fontFamily: "'Inter', sans-serif"
}

const inputContainer ={
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
}

const inputField={
  width: "75%",
  padding: "15px",
  border: "2px solid "+PrimaryTemplate.gray58,
  marginTop: "10px",
  marginBottom: "15px",
  color: "#000000c2",
  fontSize: "18px",
}

const loginButton={
  width:"82%",
  padding:"15px",
  marginTop: "10px",
  marginBottom: "15px",
  backgroundColor: PrimaryTemplate.blue,
  color: "white",
  border: "1px solid"+PrimaryTemplate.blue,
}

const forgotPass={
  color:PrimaryTemplate.yellow,
  paddingLeft: "38%",
  fontSize: "small",
  fontFamily: "'Inter', sans-serif"
}

