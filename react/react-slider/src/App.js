import React from 'react'
import logo from './logo.svg'
import './App.css'
import Frame from './components/Frame';
import images from './images/images.js'

class App extends React.Component {
  state = {
    init: images[0],
    images: images
  }
  prevImage = () => {
    alert('prevImage')
  }

  nextImage = () => {
    alert('nextImage')
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <div className='App-container'>
          <Frame image={this.state.init} prevImage={this.prevImage} nextImage={this.nextImage} />
        </div>
      </div>
    )
  }
}

export default App
