/* eslint-disable no-useless-constructor */
import React, {Component} from 'react';
import {client} from '../contentful-client.js';
import api from '../api';
import ChannelCard from './ChannelCard';

class Channels extends Component {
    constructor(props){
        super(props);
        this.state = {
            channelKeyWords: [],
            channels: []
        }
    }
    async componentDidMount(){
        //1. Call contentful api:
        //grab the query keywords from CMS and update the state accordingly
        let response = await client.getEntries()
        //console.log(response);
        let keywordsArray = response.items.map((obj) => {
            return obj.fields.channelKeyWord
        }).sort();
        this.setState({
            channelKeyWords: keywordsArray
        });
        //console.log(this.state.channelKeyWords);
        //2. construct the query string of channels to search for
        let queryString = '';
        let displayLimit = 100;
        this.state.channelKeyWords.forEach((keyword, idx) => {
            if(idx !== this.state.channelKeyWords.length - 1){
                queryString += keyword
                queryString += ','
            }else queryString += keyword; 
        })
        //3. Call twitch api:
        let resp = await api.get(`https://api.twitch.tv/helix/search/channels?query=${queryString}&first=${displayLimit}`);
        console.log(resp);
        let dataArray = resp.data.data;
        this.setState({
            channels: dataArray
        });
    }

    render(){
        let channels = this.state.channels.map((channel) => {
            return <ChannelCard key={channel.id} src={channel.thumbnail_url} alt={channel.display_name} />
        });

        return(
            <div className='channels'>
            <h1>Recommended Channels</h1>
                <div className='channels-container'>
                    <ul>{channels}</ul>
                </div>
            </div>
           
        );
    }   
}

export default Channels;