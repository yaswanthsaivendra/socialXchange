import { Avatar, Box, Button, ButtonGroup, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, InputLabel, MenuItem, Select, Tab, Tabs, TextField, Typography } from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import "./Activities.css";
const Activities = ({ backend,isUser}) => {
  const [value, setValue] = React.useState(0);
  const [activities, setActivities] = useState([]);
  const [users, setUsers] = useState([]);
  const [creditCount, setCreditCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [id,setId] = useState({});
  const [buyModal,setBuyModal]= useState(false)
  const [ether,setEther] = useState(0)
  const [maximum,setMaximum] = useState(0);
  const [activityId,setActivityId] = useState();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    const getAllActivities = async () => {
      const allActivites = await backend.getActivities();
      setActivities(allActivites);
      console.log(allActivites);

    }
   

    getAllActivities();
  }, [])
  const FormBuySubmit = async ()=>{
    const res = await backend.buyCredits(activityId,ether, {value: ethers.utils.parseUnits((ether*0.005).toString(), 18)});
    console.log(res)
  }
  const upVote = async (id) => {
    console.log(await backend.upVote(id, creditCount))
  }
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}>
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <>
      <div className="activities">
        <h2>Social Activities</h2>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example">
              <Tab label="Unverified" {...a11yProps(0)} />
              <Tab label="Verified" {...a11yProps(1)} />
              {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <div className="container">
              <div className="px-5">
                {activities.map((e) => {
                  return (
                    <>
                    {e.status==0?<><div className="activity-card bgsecondary rounded p-3 my-3">
                <div className="top">
                  <Avatar>N</Avatar>
                  <div className="p-2">
                    <p className="p-0 m-0">Neha Deekonda</p>
                    <p className="tsecondary p-0 m-0">Posted on 18-02-2023</p>
                  </div>
                </div>
                <div className="matter p-3">
                    <h5>{e.title}</h5>
                   
                    <p className="tsecondary">
                      Credit Type: &nbsp;&nbsp;
                      {e.category==0?<>Green Credits</>:<></>}
                      {e.category==1?<>Blue Credits</>:<></>}
                    {e.category==2?<>Edu Credits</>:<></>}
                    {e.category==3?<>Health Credits</>:<></>}
                    {e.category==4?<>Pink Credits</>:<></>}
                    {e.category==5?<>Hunger Credits</>:<></>}
                    </p>
                   
                    
                    <div id="carouselExampleControls" class="carousel slide bgprimary m-5" data-bs-ride="carousel">
                    <div class="carousel-inner ">
                        <div class="carousel-item active">
                            <div className="imageContainer d-flex justify-content-center ">
                            <img src={"https://"+ e.fileHashes[0] + ".ipfs.w3s.link/"+e.fileHashes[1]} class="d-block w-50" alt="..." style={{objectFit:'cover'}}/>
                            </div>
                       
                        </div>
                        <div class="carousel-item">
                        <div className="imageContainer d-flex justify-content-center ">
                            <img src={"https://"+ e.fileHashes[0] + ".ipfs.w3s.link/"+e.fileHashes[1]} class="d-block w-50" alt="..." style={{objectFit:'cover'}}/>
                            </div>
                        </div>
                        <div class="carousel-item">
                        <div className="imageContainer d-flex justify-content-center ">
                            <img src={"https://"+ e.fileHashes[0] + ".ipfs.w3s.link/"+e.fileHashes[1]} class="d-block w-50" alt="..." style={{objectFit:'cover'}}/>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div>
                    <p className="tsecondary px-5 py-1">{e.description}</p>
                    <div className="votes px-3 d-flex justify-content-end">
                    <ButtonGroup variant="contained" aria-label="outlined button group">
                            <Button startIcon={<ThumbUpIcon/>} onClick={() => {setOpen(true);setId(e.activityId)}}>Upvote</Button>
                            <Button startIcon={<ThumbDownIcon/>}>Downvote</Button>
                            </ButtonGroup>
                    </div>
                </div>

              </div></>:<></>}
                    </>
                  )
                }
              )}
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
          <div className="container">
              <div className="px-5">
                {activities.map((e) => {
                  return (
                    <>
                    {e.status!=0?<><div className="activity-card bgsecondary rounded p-3 my-3">
                <div className="top">
                  <Avatar>N</Avatar>
                  <div className="p-2">
                    <p className="p-0 m-0">Neha Deekonda</p>
                    <p className="tsecondary p-0 m-0">Posted on 18-02-2023</p>
                  </div>
                </div>
                <div className="matter p-3">
                    <h5>{e.title}</h5>
                    <p className="tsecondary">
                      Credit Type: &nbsp;&nbsp;
                      {e.category==0?<>Green Credits</>:<></>}
                      {e.category==1?<>Blue Credits</>:<></>}
                    {e.category==2?<>Edu Credits</>:<></>}
                    {e.category==3?<>Health Credits</>:<></>}
                    {e.category==4?<>Pink Credits</>:<></>}
                    {e.category==5?<>Hunger Credits</>:<></>}
                    </p>

                    <div id="carouselExampleControls" class="carousel slide bgprimary m-5" data-bs-ride="carousel">
                    <div class="carousel-inner ">
                        <div class="carousel-item active">
                            <div className="imageContainer d-flex justify-content-center ">
                            <img src={"https://"+ e.fileHashes[0] + ".ipfs.w3s.link/"+e.fileHashes[1]} class="d-block w-50" alt="..." style={{objectFit:'cover'}}/>
                            </div>
                       
                        </div>
                        <div class="carousel-item">
                        <div className="imageContainer d-flex justify-content-center ">
                            <img src={"https://"+ e.fileHashes[0] + ".ipfs.w3s.link/"+e.fileHashes[1]} class="d-block w-50" alt="..." style={{objectFit:'cover'}}/>
                            </div>
                        </div>
                        <div class="carousel-item">
                        <div className="imageContainer d-flex justify-content-center ">
                            <img src={"https://"+ e.fileHashes[0] + ".ipfs.w3s.link/"+e.fileHashes[1]} class="d-block w-50" alt="..." style={{objectFit:'cover'}}/>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div>
                    <p className="tsecondary px-5 py-1">{e.description}</p>
                    <div className="votes px-3 d-flex justify-content-end">
                      {!isUser?<><Button onClick={()=>{setBuyModal(true);setMaximum(e.fixedCredits);setActivityId(e.activityId)}}>Buy Credits</Button></>:<></>}
                    {/* <ButtonGroup variant="contained" aria-label="outlined button group">
                            <Button startIcon={<ThumbUpIcon/>}>Upvote</Button>
                            <Button startIcon={<ThumbDownIcon/>}>Downvote</Button>
                            </ButtonGroup> */}
                    </div>
                </div>

              </div></>:<></>}
                    </>
                  )
                }
              )}
              </div>
            </div>
          </TabPanel>
        </Box>
      </div>



      <Dialog open={open} onClose={()=>{setOpen(false)}}>
        <DialogTitle>Vote a valid credit for their work</DialogTitle>
        <DialogContent>
          <DialogContentText>
            How much Credits should be Given for their work
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Credit Count"
            type="number"
            fullWidth
            variant="standard"
            value={creditCount}
            name="creditCount"
            onChange = {(e) => {setCreditCount(e.target.value)}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{setOpen(false)}}>Cancel</Button>
          <Button onClick={()=>{upVote(id); setOpen(false)}}>Submit</Button>
        </DialogActions>
      </Dialog>

      {/* buy modal */}
      <Dialog
        open={buyModal}
        onClose={() => {
          setBuyModal(false);
        }}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        maxWidth="md">
        <DialogTitle id="scroll-dialog-title">
          Buy Credits
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
            <div className="py-2">
            <TextField
              id="filled-basic"
              label="Enter number of credits you want to buy"
              variant="filled"
              fullWidth
              sx={{width:'800px'}}
              name="amount"
              type="number"
              InputProps={{
                inputProps: { 
                    max: maximum, min: 0
                }
            }}
              value={ether}
              onChange={(e)=>{setEther(e.target.value)}}
            />
            </div>
            <p className="tsecondary">
            You have to spend {ether*0.0005} ether
            </p>
           
            
           
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setBuyModal(false);
            }}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              setBuyModal(false)
              FormBuySubmit()
              
            }}>
            Buy
          </Button>
        </DialogActions>
      </Dialog>
    

    </>
  );
};
export default Activities;
