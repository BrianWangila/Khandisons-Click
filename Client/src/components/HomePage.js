import React, { useState } from "react";
import { Button, Dialog } from '@material-ui/core'
import MemberForm from "./MemberForm";
import MembersList from "./MembersList";

 
 function HomePage() {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

   return (
      <div className="signUp">
        <Button variant="contained" color="primary" onClick={handleOpen}>Add New Member</Button>

        <Dialog open={open} onClose={handleClose}>
          <MemberForm handleClose={handleClose} handleSubmitForm={onAddM}/>
        </Dialog>

        <div>
          <h3>Members of Khandison Click</h3>
          <MembersList />
        </div>
      </div>
   )
 }
 
 export default HomePage