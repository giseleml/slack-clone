import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { Channels } from './components/channels'
import { Conversations } from './components/conversations'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      messageData: [],
      currentUserId: {}
    }

    this.getMsgFromAPI = this.getMsgFromAPI.bind(this)
    this.getUserId = this.getUserId.bind(this)
    this.render = this.render.bind(this)
  }

  getMsgFromAPI(id) {
    fetch(`http://localhost:3000/conversations/${id}` )
    .then(res => res.json())
    .then(json => {
      this.setState({ messageData: json })
    })
    .catch(err => console.error(err))
  }

  getUserId() {
    fetch('http://localhost:3000/me')
    .then(res => res.json())
    .then(json => {
      this.setState({ currentUserId: json})
    })
    .catch(err => console.error(err))
  }

  componentDidMount() {
    this.getUserId()
  }

  render(){
    return(
      <div className="slack-clone">
        <h1>Slack Clone
          <div id="user-status">
            <p
            key={this.state.currentUserId.id}>
            {this.state.currentUserId.name}
            </p>
          </div>
        </h1>
        <Channels getMsgFromAPI={this.getMsgFromAPI} />
        <Conversations messageData={this.state.messageData}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
