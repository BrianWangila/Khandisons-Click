import React from 'react'



function MemberCard({ member, onDeleteMember }) {
  const { id, first_name, last_name, position, email, is_developer: isDeveloper } = member

  const handleDeleteClick = () => {
    fetch(`http://localhost:4000/members/${id}`, {
      method: "DELETE"
    })
    onDeleteMember(id)
  }

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
      <div className='table-high'>
        <table> 
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Position</th>
              <th>Email Address</th>
            </tr>
          </thead>
          <tbody className='table'>
            <tr>
              <td>{first_name}</td>
              <td>{last_name}</td>
              <td>{position}</td>
              <td>{email}</td>
              {/* <td>{isDeveloper}</td> */}
            </tr>
          </tbody>
        </table>
      </div>

      {/* <div className= "card card2 col-sm-6" style={{width: 18+"rem", margin: 2+"rem"}}>
        <div className="card-body">
          <h4>{first_name} {last_name}</h4>
          <h5>Position: {position}</h5>
          <p>Email: {email}</p>
          {/* {isDeveloper ? (
            <button>FrontEnd</button>
          ):(
            <button>BackEnd</button>
          )} */}
          {/* <button onClick={handleDeleteClick}>Remove</button>
        </div>
      </div> */} 
    </div>
  )
}

export default MemberCard