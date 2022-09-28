import React from 'react'



function MemberCard({ id, first_name, last_name, position, email, is_vetted: isVetted, onDeleteMember }) {
  // const { id, first_name, last_name, position, email, is_vetted: isVetted } = member


  const handleUpdateClick = () => {
    fetch(`http://localhost:9292/members/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify()
    })
  }

  return (
    <div>

          <td>{first_name}</td>
          <td>{last_name}</td>
          <td>{position}</td>
          <td>{email}</td>
          {isVetted ? (
            <button>Pass</button>
          ):(
            <button>Fail</button>
          )} 

    </div>
  )
}

export default MemberCard