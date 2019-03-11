import React from 'react'

export class Channels extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      channelsList : []
    }
  }

  getChannelsFromAPI() {
    fetch('http://localhost:3000/channels')
    .then(res => res.json())
    .then(json => {
      this.setState({ channelsList: json })
    })
    .catch(err => console.log(err));
  }

  componentDidMount() {
    this.getChannelsFromAPI()
  }

  render(){
    return(
      <div className="channel-pannel">
        {
          this.state.channelsList.map(channel => {
            return <div key={channel.id}>
              <h1 onClick={this.props.getMsgFromAPI}>{channel.name}</h1>
            </div>
          })
        }
      </div>
    )
  }
}
