/* eslint-disable no-useless-constructor */
import React, {Component} from 'react';
import ChannelEmbedding from './ChannelEmbedding';

class ChannelCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            isViewing: false
        }
    
    }
    handleViewingOptions = () =>{
        this.setState({isViewing: !this.state.isViewing})
    }

    render(){
        let {src, alt} = this.props;

        return(
            <div className="channel-card">
                {(!this.state.isViewing) ? (
                <div className="card">
                    <img className="card-img-top" src={src} alt={alt} />
                    <p>{alt}</p>
                    <div className="card-body">
                        <button className="btn btn-success" onClick={this.handleViewingOptions}>
                            View {alt} streaming live!{" "}
                        </button>
                    </div>
                </div>)
              : <div>
                    <ChannelEmbedding streamerName={alt}/>                
                </div>}
            </div>
                
            
        );
    }   
}

export default ChannelCard;