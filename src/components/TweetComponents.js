
import './Tweet.css'

const Tweet = (props) => {
  return (
    <div className="tweet-container">
      <div className="username">{props.username}</div>
      <div className="name">{props.name}</div>
      <div className="date">{props.date}</div>
      <div className="message">{props.message}</div>
    </div>
  );
}

export default Tweet;