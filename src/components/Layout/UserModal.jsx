import { Button, FormControl, InputLabel, MenuItem, Select, TextareaAutosize, TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { Web3Storage } from "web3.storage";
const client = new Web3Storage({
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEE1NzBCZjU0Rjc4Zjg0RWE4MjVEODljYTU5NTlERGU2MWQyM2NEM0MiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzY3NTMwNzM4NDUsIm5hbWUiOiJwYXJpbCJ9.gHSD5s8cE7PVFt3SNzYg72P8ru3_Zx6UDcRYrEp-rCc",
});

const UserModal = ({ userModal, setUserModal, backend }) => {
  const [activityDetails,setActivityDetails] = useState({})
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setActivityDetails(values => ({...values, [name]: value}))
  }

  const submitForm =  async () => {
    let rootCid;
    const getCid =async ()  =>{
      const fileInput = document.getElementById('doc')
      console.log(fileInput);
      console.log(fileInput.files[0].name);
      let fileName = fileInput.files[0].name;
      rootCid = await client.put(fileInput.files, {
        name: 'doc',
        maxRetries: 3,
      });
      console.log(rootCid)
      console.log(backend)
    const activity = await backend.createActivity(activityDetails.title, [rootCid,fileName], activityDetails.description, activityDetails.creditType);
    console.log(activity)
  
    }
    getCid()
    
  }
  
 
  return (
    <>
      <Dialog
        open={userModal}
        onClose={() => {
          setUserModal(false);
        }}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        maxWidth="md">
        <DialogTitle id="scroll-dialog-title">
          Add your Social Activity
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
            <div className="py-2">
            <TextField
              id="filled-basic"
              label="Enter a Title"
              variant="filled"
              name="title"
              fullWidth
              value={activityDetails.title || ""}
              onChange={handleChange}

            />
            </div>
           <div className="py-2">
           <TextareaAutosize
              aria-label="minimum height"
              minRows={3}
              placeholder="Describe what you have done..."
              style={{ width: 800 ,padding:'5px'}}
              name="description"
              value={activityDetails.description || ""}
              onChange={handleChange}
            />
             
            
           </div>
           <div className="py-2">
           <FormControl  fullWidth variant="filled">
             <InputLabel id="demo-simple-select-label" >Document Type</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="docType"
                value={activityDetails.doctype}
                onChange={handleChange}
                label="Document type"
                
            >
                <MenuItem value={1}>Pictures</MenuItem>
                <MenuItem value={3}>PDF</MenuItem>
            </Select>
             </FormControl>
             

           </div>
           <div className="py-2">
           <label for="formFileLg" class="form-label">Profile Picture</label>
            <input multiple class="form-control form-control-lg w-100" id="doc" type="file"/>
           </div>
          
           <div className="py-2">
           <FormControl  fullWidth variant="filled">
             <InputLabel id="demo-simple-select-label" >Which Credit Best defines your work?</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Document type"
                name="creditType"
                value={activityDetails.creditType}
                onChange={handleChange}
            >
                <MenuItem value={0}>Green Credits</MenuItem>
                <MenuItem value={1}>Blue Credits</MenuItem>
                <MenuItem value={2}>Edu Credits</MenuItem>
                <MenuItem value={3}>Health Credits</MenuItem>
                <MenuItem value={4}>Pink Credits</MenuItem>
                <MenuItem value={5}>Hunger Credits</MenuItem>


            </Select>
             </FormControl>
             

           </div>
            
           
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setUserModal(false);
            }}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              // setUserModal(false);
              submitForm()
              setUserModal(false);
              
            }}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default UserModal;
