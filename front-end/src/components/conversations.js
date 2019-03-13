import React from 'react'

export const Conversations = props => {
  return(
    <div className="conversation-pannel">
      <ReceivedMessages messageData={props.messageData}/>
      <SendMessages />
    </div>
  )
}

const ReceivedMessages = props => {
  return(
    <div className="received-msg">
    {
      props.messageData.map(msg => {
        return (
            <div key={msg.id}>{msg.messages.map(i => {
              return <p><b>User says:</b> {i.text}</p>
            })}
            </div>
      )})
    }
    </div>
  )
}

const SendMessages = () => {
  return(
    <div className="send-msg">
      <div>
        <button>SEND</button>
        <input type="text" id="type-msg"></input>
      </div>
    </div>
  )
}
