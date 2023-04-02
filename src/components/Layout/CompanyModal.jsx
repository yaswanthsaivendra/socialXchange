import { Button, FormControl, InputLabel, MenuItem, Select, TextareaAutosize, TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

const CompanyModal = ({ companyModal, setCompanyModal }) => {
  const [activityDetails,setActivityDetails] = useState({})
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setActivityDetails(values => ({...values, [name]: value}))
  }
  return (
    <>
      <Dialog
        open={companyModal}
        onClose={() => {
          setCompanyModal(false);
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
              label="Enter amount you want to spend"
              variant="filled"
              fullWidth
              sx={{width:'800px'}}
              name="amount"
              value={activityDetails.amount || ""}
              onChange={handleChange}
            />
            </div>
           <div className="py-2">
           <FormControl  fullWidth variant="filled">
             <InputLabel id="demo-simple-select-label" >Which Credits your org want?</InputLabel>
             <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Document type"
                name="creditType"
                value={activityDetails.creditType}
                onChange={handleChange}
            >
                <MenuItem value={1}>Green Credits</MenuItem>
                <MenuItem value={2}>Blue Credits</MenuItem>
                <MenuItem value={3}>Hunger Credits</MenuItem>
                <MenuItem value={4}>Pink Credits</MenuItem>
                <MenuItem value={5}>Edu Credits</MenuItem>
                <MenuItem value={6}>Health Credits</MenuItem>


            </Select>
             </FormControl>
             

           </div>
            
           
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setCompanyModal(false);
            }}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              setCompanyModal(false);
            }}>
            Buy
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default CompanyModal;