import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import './App.css';

// https://github.com/wenliangdai/react-audioplayer
// https://github.com/xiaolin/react-image-gallery
// https://github.com/leandrowd/react-responsive-carousel

// https://scotch.io/tutorials/building-a-video-blog-with-gatsby-and-markdown-mdx



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
             
          <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing />
          <ReactPlayer url='https://www.youtube.com/watch?v=q_7cWXw2h4c' playing />
        </header>
      </div>
    );
  }
}

export default App;
