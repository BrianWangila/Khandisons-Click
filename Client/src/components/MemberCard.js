import React from 'react'



function MemberCard({ member }) {
  const { first_name, last_name, position, email, is_developer: isDeveloper } = member



  return (
    <div>
      <div className= "card" style={{width: 18+"rem", margin: 2+"rem"}}>
        <div className="card-body">
          <h4>{first_name} {last_name}</h4>
          <h5>Position: {position}</h5>
          <p>Email: {email}</p>
          {isDeveloper ? (
            <button>FrontEnd</button>
          ):(
            <button>BackEnd</button>
          )}
          <button>Remove</button>
        </div>
      </div>
    </div>
  )
}

export default MemberCard