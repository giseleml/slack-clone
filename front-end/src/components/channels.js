import React from 'react'

export class Channels extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      channelsList : []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/channels')
    //gets resolve of API and converts to JSON
    .then(res => res.json())
    .then(json => {
      //converts from object to string
      this.setState({ channelsList: json })
    })
    .catch(err => console.log(err));
  }

  render(){
    return(
      <div className="channel-pannel">
        {
          this.state.channelsList.map(channel => {
            return <div key={channel.id}>
              <h1>{channel.name}</h1>
            </div>
          })
        }
      </div>
    )
  }
}
