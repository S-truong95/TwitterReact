import React, { Component } from 'react';
import Avatar from "./Avatar"
import Message from "./Message"
import Comment from "./Comment"
import Like from "./Like"
import Share from "./Share"
import Retweet from "./Retweet"
import TimeStamp from "./TimeStamp"
import Username from "./Username"
import Name from "./Name"
import More from "./More"

function formatDate(date) {
    return date.toLocaleDateString();
}

const testTweet = {
    message: "Something about cats.",
    gravatar: "xyz",
    author: {
        handle: "catdad",
        name: "I have to many cats at home!"
    },
    likes: 2,
    retweets: 0,
    time: formatDate(new Date()) 
};

class Tweet extends Component {

constructor(props){
    super(props);
}

    render() {
        return (
            <div className="tweet">
                <Avatar {...testTweet}/>
                <div className="content">
                    <Name {...testTweet}/>
                    <Username {...testTweet}/>
                    <TimeStamp {...testTweet}/>
                    <Message {...testTweet}/>
                    <div className="buttons">
                        <Comment {...testTweet}/>
                        <Like {...testTweet}/>
                        <Share {...testTweet}/>
                        <Retweet {...testTweet}/>
                        <More {...testTweet}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tweet;