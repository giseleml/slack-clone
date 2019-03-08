import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { Channels } from './components/channels'

class App extends React.Component {
  render(){
    return(
      <div>
        <h1>Slack Clone</h1>
        <Channels />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
