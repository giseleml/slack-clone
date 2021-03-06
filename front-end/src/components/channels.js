import React from 'react'

// Displays each channel id and name on a sidebar
export class Channels extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      channelsList : []
    }
  }

  // Returns Channels id and name
  getChannelsFromAPI() {
    fetch('http://localhost:3000/channels')
    .then(res => res.json())
    .then(json => {
      this.setState({ channelsList: json })
    })
    .catch(err => console.error(err));
  }

  componentDidMount() {
    this.getChannelsFromAPI()
  }

  render(){
    return(
      <div className="channel-pannel">
        {
          this.state.channelsList.map(channel => {
            return (
              <h1
              key={channel.id}
              onClick={() => this.props.getMsgFromAPI(channel.id)}># {channel.name}
              </h1>
            )
          })
        }
      </div>
    )
  }
}
