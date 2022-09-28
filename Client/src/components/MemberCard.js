import React from 'react'



function MemberCard({ member, onDeleteMember }) {
  const { id, first_name, last_name, position, email, is_developer: isDeveloper } = member


  const handleUpdateClick = () => {
    fetch(`http://localhost:4000/members/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify()
    })
  }

  return (
    <div>
      <div className= "card card2 col-sm-6" style={{width: 18+"rem", margin: 2+"rem"}}>
        <div className="card-body">
          {isDeveloper ? (
            <button>FrontEnd</button>
          ):(
            <button>BackEnd</button>
          )} 
        </div>
      </div> 
    </div>
  )
}

export default MemberCard