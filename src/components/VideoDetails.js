import React from "react";
import {useState} from "react";

export default function VideoDetails(props) {

  const [upVotes, setUpVotes] = useState(props.video.upvotes);
  const [downVotes, setDownVotes] = useState(props.video.downvotes);

  function handleUpVote() {
    setUpVotes(upVotes + 1);
  }

  function handleDownVote() {
    setDownVotes(downVotes - 1);
  }

  console.log("Here's your data:", props.video);

  return (
    <div>
        <h1>{props.video.title}</h1>
        <p>{props.video.views} Views | Upload {props.video.createdAt}</p>
        <button onClick={handleUpVote}>{upVotes}👍</button>
        <button onClick={handleDownVote}>{downVotes}👎</button> <br/>
    </div>
  );
}