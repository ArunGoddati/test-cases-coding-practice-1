import Feedback from './components/Feedback'
import {Component} from 'react'

import './App.css'

const resources = {
  emojis: [
    {
      id: 0,
      name: 'Sad',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/sad-emoji-img.png',
    },
    {
      id: 1,
      name: 'None',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/none-emoji-img.png',
    },
    {
      id: 2,
      name: 'Happy',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-emoji-img.png',
    },
  ],
  loveEmojiUrl: 'https://assets.ccbp.in/frontend/react-js/love-emoji-img.png',
}

class App extends Component {
  state = {
    clickOnEmoji: true,
    emojisResources: resources.emojis,
    loveEmojiUrl: resources.loveEmojiUrl,
  }

  onClickStatus = () => {
    this.setState({
      clickOnEmoji: false,
    })
  }

  render() {
    const {clickOnEmoji, emojisResources, loveEmojiUrl} = this.state
    const containerStatus =
      clickOnEmoji === true ? (
        <div>
          <h1 className="emojis-main-heading">
            How satisfied are you with our customer support performance
          </h1>
          <ul className="unOrderList">
            {emojisResources.map(eachEmoji => (
              <Feedback
                emojiDetails={eachEmoji}
                key={eachEmoji.id}
                onClickStatus={this.onClickStatus}
              />
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <img src={loveEmojiUrl} className="love-image" alt="love emoji" />
          <h1 className="main-heading">Thank You</h1>
          <p className="description">
            We will use feedback to improve our customer support performance.
          </p>
        </div>
      )
    return (
      <div className="big-container">
        <div className="inner-container">{containerStatus}</div>
      </div>
    )
  }
}

export default App
