import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.scss';
import { Channels } from './components/channels'
import { Conversations } from './components/conversations'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      messageData: [],
      currentUser: {}
    }

    this.getMsgFromAPI = this.getMsgFromAPI.bind(this)
    this.getUserInfo = this.getUserInfo.bind(this)
    this.render = this.render.bind(this)

  }

  // Returns arrays of messages
  getMsgFromAPI(id) {
    fetch(`http://localhost:3000/conversations/${id}` )
    .then(res => res.json())
    .then(json => {
      this.setState({ messageData: json })
    })
    .catch(err => console.error(err))
  }

  // Gets current user id and name
  getUserInfo() {
    fetch('http://localhost:3000/me')
    .then(res => res.json())
    .then(json => {
      this.setState({ currentUser: json })
    })
    .catch(err => console.error(err))
  }

  componentDidMount() {
    this.getUserInfo()
  }

  render(){
    return(
      <div className="slack-clone">
        <h1>Slack Clone
          <div id="user-status">
            <p
            key={this.state.currentUser.id}>
            {this.state.currentUser.name}
            </p>
          </div>
        </h1>
        <Channels getMsgFromAPI={this.getMsgFromAPI} />
        <Conversations
        messageData={this.state.messageData}
        currentUserId={this.state.currentUser.id} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
