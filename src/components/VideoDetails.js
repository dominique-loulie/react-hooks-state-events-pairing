export default function VideoDetails(props) {
    return (
        <div>
        <h1>{props.video.title}</h1>
        <p>{props.video.views} Views | Upload {props.video.createdAt}</p>
        <button>{props.video.upvotes}👍</button>
        <button>{props.video.downvotes}👎</button> <br/>
        <button>Hide Comments</button>
        </div>
    );
}