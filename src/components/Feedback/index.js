// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isFeedbackSubmitted: false}

  onClickEmoji = () => {
    this.setState({isFeedbackSubmitted: true})
  }

  submitFeedback = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="submitFeedback-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance
        </h1>
        <ul className="emojis-list">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button
                type="button"
                className="button-emoji"
                onClick={this.onClickEmoji}
              >
                <img
                  src={emoji.imageUrl}
                  alt={emoji.name}
                  className="image-emoji"
                />
                <br />
                <span className="span-text">{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  thankYou = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="love-image-cont">
        <img className="love-image" src={loveEmojiUrl} alt="love emoji" />
        <h1 className="heading">Thank You</h1>
        <p className="span-text">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSubmitted} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          {isFeedbackSubmitted ? this.thankYou() : this.submitFeedback()}
        </div>
      </div>
    )
  }
}

export default Feedback
