import { ExpansionPanelActions } from '@material-ui/core'
import React from 'react'
// import MemberCard from './MemberCard'


function MembersList( { members, onDeleteMember, onUpdateMember } ) {
  const { id, vetted: isVetted } = members


  const handleDeleteClick = () => {
    fetch(`http://localhost:9292/members/${id}`, {
      method: "DELETE"
    })
    onDeleteMember(id)
  }

  const handleUpdateVetting = () => {
    fetch(`http://localhost:9292/members/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({vetted: !isVetted})
    })
    .then((resp) => resp.json())
    .then((updatedMember) => onUpdateMember(updatedMember))
  }




  return (
    <div>   
      <div className='table-high'>
        <table> 
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Address</th>
              <th>Position</th>
              <th>Vetted</th>
            </tr>
          </thead>

        {members.map((member) => {
          return (
          <tbody>
            <tr key={member.id}>
                {console.log(id)}
              <td>{member.firstName}</td>
              <td>{member.lastName}</td>
              <td>{member.email}</td>
              <td>{member.position}</td>
              <td>{!isVetted ? (
                <button onClick={handleUpdateVetting}>Passed</button>
              ):(
                <button onClick={handleUpdateVetting}>Failed</button>
              )}</td>
             

              <button onClick={handleDeleteClick}>🗑</button> {/*<button onClick={handleUpdateClick}>✏️</button>*/}
            </tr>
          </tbody>  
          )})}

        </table>
    </div>

    </div>
  )
}
export default MembersList