import video from "../data/video.js";
import Video from "./Video.js"
import VideoDetails from "./VideoDetails.js";
import Comments from "./Comments.js"

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video embedUrl={video.embedUrl} />
      <VideoDetails video={video} />
      <Comments />
      
    </div>
  );
}

export default App;