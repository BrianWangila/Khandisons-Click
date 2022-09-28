import React from 'react'



function MemberCard({ member }) {
  const { name, position, email, is_developer: isDeveloper } = member



  return (
    <div>
      <div className= "card" style={{width: 18+"rem", color: "red"}}>
        <li className="card-body">
          <h4>Name: {name}</h4>
          <h5>Position: {position}</h5>
          <p>Email: {email}</p>
          {isDeveloper ? (
            <button>FrontEnd</button>
          ):(
            <button>BackEnd</button>
          )}
          <button>Remove</button>
        </li>
      </div>
    </div>
  )
}

export default MemberCard