import { ExpansionPanelActions } from '@material-ui/core'
import React from 'react'
import MemberCard from './MemberCard'


function MembersList( { members } ) {


  return (
    <div>
      <ul className='membersArea'>
      {members.map((member) => {
        return (
          <MemberCard
            member={member}
          />
        )
      })}
      </ul>
    </div>
  )
}
export default MembersList