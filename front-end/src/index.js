import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { Channels } from './components/channels'
import { Conversations } from './components/conversations'

class App extends React.Component {
  constructor(props){
    super(props);
    this.messageData = {}
    this.getMsgFromAPI = this.getMsgFromAPI.bind(this)
    this.render = this.render.bind(this)
  }

  getMsgFromAPI() {
    fetch('http://localhost:3000/conversations/2')
    .then(res => res.json())
    .then(json => {
    this.messageData = json
    })
    .catch(err => console.log(err))
  }

  render(){
    return(
      <div>
        <h1>Slack Clone</h1>
        <Channels getMsgFromAPI={this.getMsgFromAPI}/>
        <Conversations props={this.messageData}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
