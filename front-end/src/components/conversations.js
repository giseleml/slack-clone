import React from 'react'

export const Conversations = props => {
  return(
    <div>
      {
         props.messageData.map(msg => {
          return (
            <div key={msg.id}>
              <h1>{msg.messages}</h1>
              <p>{msg.channelId}</p>
            </div>
        )})
      }
    </div>
  )
}
