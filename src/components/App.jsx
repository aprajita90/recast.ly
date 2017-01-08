class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0] 
    };
  }

  handleVideoClick(video) {
    this.setState(
      {currentVideo: video}
    );
  }

  componentDidMount () {
    var input = {
      key: 00001,
      q: 5,
      max: 1000
    };

    window.searchYouTube(input);
  }
  
  render() {
    return (<div>
      <Nav />
      <div className="col-md-7">
        <VideoPlayer video={this.state.currentVideo}/>
      </div>
      <div className="col-md-5">
        <VideoList videos={this.state.videos} handleVideoClick={this.handleVideoClick.bind(this)} />
      </div>
    </div>);
  } 
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
