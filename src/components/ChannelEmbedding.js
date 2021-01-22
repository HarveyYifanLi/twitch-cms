import React, {Component} from 'react';
import { TwitchEmbed} from 'react-twitch-embed';

class ChannelEmbedding extends Component {
    render(){
        return(
            <div className='ChannelEmbedding'>
                <b><p>{this.props.streamerName}'s channel</p></b>
                <div>
                <TwitchEmbed
                    channel={this.props.streamerName}
                    id={this.props.streamerName}
                    theme="dark"
                    muted
                    onVideoPause={() => console.log('Streaming paused')}
                />
                </div>
            </div>
        );
    }   
}

export default ChannelEmbedding;