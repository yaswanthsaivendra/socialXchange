import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import "./Home.css";
import PaidIcon from "@mui/icons-material/Paid";
import { Box } from "@mui/system";
import {ethers} from 'ethers';
import CreditFi from '../.././artifacts/contracts/CreditFi.sol/CreditFi.json'
import PixRoundedIcon from "@mui/icons-material/PixRounded"
import banner from '../../images/6583.jpg'
import bgImg from '../../images/cleaning_crew_of_plastic_in_the_beach.jpg'
import bg from '../../images/1.png'


let user;

const Home = ({setAccount,setLogin,setProvider,setBackend,isRegistered,setIsRegistered}) => {
  const connect = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts'})
    const account = ethers.utils.getAddress(accounts[0])
    setAccount(account)
    setLogin(true)
    localStorage.setItem('login',account)

    //connect to blockchain



 
  }

  return (
    <>
    <div >
    <Box sx={{backgroundColor:'var(--secondary)',minHeight:'100vh'}}>
    <AppBar
        position="fixed"
       >
        <Toolbar sx={{ backgroundColor: "var(--primary)" }}>
          <PixRoundedIcon sx={{ m: 1 }} fontSize="large" />
          <Typography variant="h6" component="div"  sx={{ flexGrow: 1 }}>
            xChange
          </Typography> 
          

        {/* <Button variant="outlined" color="secondary" >Login</Button> */}
        <button className=" btn btn-light" sx={{color:'var(--secondary)'}} onClick={connect}>Login</button>

        </Toolbar>
      </AppBar>
      <div className="container mt-5 pt-5 w-100 d-flex  align-items-center " style={{minHeight:'85vh',backgroundImage:bgImg}}>
        <div className="w-50">
        <h1 style={{ fontSize:'60px'}}>Invest in Future, </h1>
        <h1 style={{ fontSize:'60px'}}>Let it be time or money. </h1>
        </div>
        <div className="img">
            <img src={bg} alt="" style={{width:'600px',height:'600px'}}/>
        </div>
      
      </div>
    </Box>
    </div>
   
      
    </>
  );
};

export default Home;