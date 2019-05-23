import React from 'react'

// Displays received messages id and text
export const Conversations = props => {
    return(
      <div>
        <ReceivedMessages messageData={props.messageData} />
        <SendMessages />
      </div>
    )
}

const ReceivedMessages = props => {
  return(
    <div className="conversation-pannel">
      {
        props.messageData.map(msg => {
          return (
              <div key={msg.id}>{msg.messages.map((i, id) => {
                return <p key={id}><b>User says:</b> {i.text}</p>
              })}
              </div>
        )})
      }
    </div>
  )

}

class SendMessages extends React.Component {
  constructor(){
    super()
    this.state = {
      message: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      message: e.target.value
    })
  }

  /* Sends message to back-end
  POST /conversations/:channelId : post a new message to a conversation. Request body: { userId, text }
  */
  
  handleSubmit(e) {
    e.preventDefault()
    let message = this.state.message
    
    fetch('http://localhost:3000/conversations/1', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'content-type': 'application/json'
      },
      body: JSON.stringify({ userId: 1, text: message })
    })
    .then(res => res.text())
    .then(data => {
      console.log('Created Gist:', data);
    })
    .catch(err => console.error(err))

    this.setState({
      message: ''
    })
  }

 
  render(){
    return(
      <div>
        <form className="send-msg-form" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Type your message here..."
          onChange={this.handleChange} value={this.state.message} 
          />
        </form>
      </div>
    )
  }
}

