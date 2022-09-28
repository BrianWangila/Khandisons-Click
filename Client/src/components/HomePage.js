import React, { useState, useEffect } from "react";
import { Button, Dialog } from '@material-ui/core'
import MemberForm from "./MemberForm";
import MembersList from "./MembersList";

 
 function HomePage() {
  const [open, setOpen] = useState(false);
  const [members, setMembers] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/members")
    .then((resp) => resp.json())
    .then((data) => setMembers(data))
  }, [])

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleAddMember = (newMember) => {
    setMembers([...members, newMember])
  }

  const handleDelete = (id) => {
    const updatedList = members.filter((member) => member.id !== id)
    setMembers(updatedList)
  }

  const handleDisplayMembers = members.filter((member) => {
    return member
  })

   return (
      <div>

        <Dialog open={open} onClose={handleClose}>
          <MemberForm handleClose={handleClose} onAddMember={handleAddMember}/>
        </Dialog>

        <div>
          <MembersList 
            members={handleDisplayMembers}
            onDeleteMember={handleDelete}
          />
        </div>

        <div className="button">
          <Button variant="contained" color="primary" onClick={handleOpen}>Add New Member</Button>
        </div>
      </div>
   )
 }
 
 export default HomePage