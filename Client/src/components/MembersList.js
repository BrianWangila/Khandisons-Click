import { ExpansionPanelActions } from '@material-ui/core'
import React from 'react'
// import MemberCard from './MemberCard'


function MembersList( { members, onDeleteMember } ) {
  const { id, first_name, last_name, position, email, is_developer: isDeveloper } = members


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

        {members.map((member) => {
          return (
          <tbody>
            <tr key={member.id} id={member.id}>
              <td>{member.first_name}</td>
              <td>{member.last_name}</td>
              <td>{member.position}</td>
              <td>{member.email}</td>
              
              <button onClick={handleDeleteClick}>🗑</button><button onClick={handleUpdateClick}>✏️</button>
            </tr>
          </tbody>  
          )})}

        </table>
    </div>

    </div>
  )
}
export default MembersList