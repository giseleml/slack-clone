import React from 'react'

export const Conversations = props => {
  return(
    <div>
      {
        props.messageData.map(msg => {
          return (
              <div id={msg.id}>{msg.messages.map(i => {
                return <p id={i.userId}>{i.text}</p>
              })}
              </div>
        )})
      }
    </div>
  )
}
