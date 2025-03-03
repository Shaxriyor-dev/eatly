import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import g from "../assets/G.png";
import pa from "../assets/pa.png";
import { Link } from "react-router-dom";
import imsga from "../assets/imga.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleClick = () => {
      if (login === 'admin' && password === '123456') {
        setTimeout(()=>{
          navigate('/');
        } , 1000);
          login.style.border = 'lime';
          password.style.border = 'lime';
      } else {
        alert('Xato password yoki loginingiz!');
      }
    };
  return (
    <div className="h-[100vh] flex justify-center items-center bg-white">
      <div className="h-screen w-[100%] flex justify-center items-center">
        <div className="p-4">
          <p className="text-4xl font-[Poppins] font-[600] text-[#323142] text-center p-8">
            Sign In To eatly
          </p>
          <div className="flex justify-center m-3">
            <Box sx={{ "& button": { m: 1 } }}>
              <div>
                <Button onClick={()=> window.location.href = 'https://www.google.com'}
                  sx={{
                    background: "#F5F5F5",
                    boxShadow: "none",
                    height: "63px",
                    width: "185px",
                    borderRadius: "14px",
                  }}
                  variant="contained"
                  size="large"
                >
                  <img src={g} alt="" />
                </Button>
                <Button onClick={()=> window.location.href = 'https://www.apple.com'}
                  sx={{
                    background: "#F5F5F5",
                    boxShadow: "none",
                    height: "63px",
                    width: "185px",
                    borderRadius: "14px",
                  }}
                  variant="contained"
                  size="large"
                >
                  <img src={pa} alt="" />
                </Button>
              </div>
            </Box>
          </div>
          <div className="flex justify-center align-center flex-wrap m-4">
            <TextField  onChange={(e) => setLogin(e.target.value)}
              variant="outlined"
              placeholder="Email"
              sx={{
                "& .MuiOutlinedInput-root": {
                  border: "none",
                  borderRadius: "16px",
                  backgroundColor: "#F5F5F5",
                  width: "382px",
                  padding: "8px",
                  marginTop: "15px",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            />
            <TextField  onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              placeholder="Password"
              sx={{
                "& .MuiOutlinedInput-root": {
                  border: "none",
                  borderRadius: "16px",
                  backgroundColor: "#F5F5F5",
                  width: "382px",
                  padding: "8px",
                  marginTop: "15px",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            />
            <Box sx={{ "& button": { m: 7 } }}>
              <Button  onClick={handleClick}
                sx={{
                  width: "382px",
                  padding: "17px",
                  borderRadius: "15px",
                  background: "#6C5FBC",
                }}
                variant="contained"
                size="large"
              >
                Sign in
              </Button>
            </Box>
            <p className="text-[18px] font-[Poppins] text-[#3E3E3E]">
              Create A New Account?{" "}
              <Link className="text-[#6C5FBC]" to={"/sinup"}>
                Sign Up
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="h-[100vh] w-[100%] bg-[#6C5FBC] flex align-center justify-center flex-wrap flex-col gap-5">
        <div className="flex justify-center p-0">
          <img className="h-[400px]" src={imsga} alt="" />
        </div>
        <div>
          <p className="text-[40px] font-extrabold text-white font-[Manrope] text-center m-2">Find Foods With Love </p>
          <p className="text-[17px] text-center font-[Manrope] text-white px-18">
            Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes
            Including Asian, Chinese, Italians And Many More. Our Dashboard
            Helps You To Manage Orders And Money.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
