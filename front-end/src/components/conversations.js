import React from 'react'

export const Conversations = props => {
  return(
    <div className="conversation-pannel">
      {
        props.messageData.map(msg => {
          return (
              <div key={msg.id}>{msg.messages.map(i => {
                return <p key={i.userId}>{i.text}</p>
              })}
              </div>
        )})
      }
    </div>
  )
}
