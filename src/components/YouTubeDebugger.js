// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

class YouTubeDebugger extends Component {
    state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      }
    handleClick1=(event) => {
        this.setState({
            settings:{...this.state.settings,
            bitrate: 12
            }
        })
    }
    
    handleClick2=(event) => {
        this.setState({
            settings:{
                ...this.state.settings,
            video: {
                ...this.state.settings.video,
                resolution: '720p'
            }
            }
        })
    }

  render() {
     return(
      
        <div>
            <button className="bitrate" onClick={this.handleClick1}>bitrate</button>
            <button className="resolution" onClick={this.handleClick2}>resolution</button>
        </div>
        
      
     )
  }
}

export default YouTubeDebugger;