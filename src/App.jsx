import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button } from "@mui/material";
import Home from "./components/Home/Home";
import { HashRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Layout from "./components/Layout/Layout";
import Credits from "./components/Credits/Credits";
import Activities from "./components/Activities/Activities";
import Registration from "./components/Registration/Registration";
import Top from "./components/Top/Top";

import CreditFi from "./artifacts/contracts/CreditFi.sol/CreditFi.json";


function App() {
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [backend, setBackend] = useState(null);
  const [login, setLogin] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const CREDITFI_ADDRESS = "0x50dcd918A7Cfac7B61f6E1F4CD72216fCBE2f001";
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        // light: will be calculated from palette.primary.main,
        main: "#00ADB5",
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        light: "#0066ff",
        main: "#393E46",
        // dark: will be calculated from palette.secondary.main,
        contrastText: "#ffcc00",
      },
      divider: { main: "#393e46" },
      background: {
        paper: "#222831",
        default: "#222831",
      },
    },
  });
  useEffect(() => {
    setAccount(localStorage.getItem("login"));
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(provider);
    const signer = provider.getSigner();
    const backend = new ethers.Contract(CREDITFI_ADDRESS, CreditFi.abi, signer);
    setBackend(backend);
    console.log(localStorage.getItem("login"));
    if (localStorage.getItem("login")) {
      setLogin(true);
    }
    const getUser = async () => {

      try {
        const user = await backend.users(localStorage.getItem("login"));
        if(user.name!="") {
          setIsRegistered(true);
          setIsUser(true);
          console.log(user)

          
        }
      } catch (error) {
        console.log(error)
      }

    }
    const getCompany = async () => {

      try {
        const company = await backend.organizations(localStorage.getItem("login"));
        if(company.name!="") {
          setIsRegistered(true);
          // setIsUser(true);
          console.log(company)

          
        }
      } catch (error) {
        console.log(error)
      }

    }
    getUser()
    getCompany()
    // if()
  }, []);

  const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), "ether");
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <Routes>
            {login ? (
              <>
                {!isRegistered ? (
                  <>
                    <Route
                      path="/"
                      // path="/register"
                      element={
                        <Registration
                          setIsRegistered={setIsRegistered}
                          backend={backend}
                          account={account}
                          setIsUser={setIsUser}
                        />
                      }
                    />

                  </>
                ) : (
                  <>
                    <Route
                      path="/"
                      // path="/login"
                      element={
                        <Layout
                          login={login}
                          isUser={isUser}
                          backend={backend}
                        />
                      }>
                      <Route
                        index
                        element={
                          <Dashboard
                            isUser={isUser}
                            account={account}
                            backend={backend}
                          />
                        }
                      />
                      <Route path="/credits" element={<Credits />} />
                      <Route path="/top" element={<Top backend={backend} account={account} />} />
                      <Route
                        path="/activities"
                        element={
                          <Activities backend={backend} isUser={isUser} />
                        }
                      />
                    </Route>
                  </>
                )}
              </>
            ) : (
              <>
                <Route
                  path="/"
                  element={
                    <Home
                      setAccount={setAccount}
                      setLogin={setLogin}
                      setProvider={setProvider}
                      setBackend={setBackend}
                      isRegistered={isRegistered}
                      setIsRegistered={setIsRegistered}
                    />
                  }
                />
                 {/* <Route path="/credits" element={<Credits />} /> */}
                 {/* confusion 2 */}
              </>
            )}
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
