import './index.css'

const Feedback = props => {
  const {emojiDetails, onClickStatus} = props
  const {id, name, imageUrl} = emojiDetails
  const onClickImage = () => {
    onClickStatus()
  }
  return (
    <li className="list-item">
      <div className="button-item-container">
        <img
          src={imageUrl}
          className="image"
          onClick={onClickImage}
          alt="name"
        />
        <p className="emojiName">{name}</p>
      </div>
    </li>
  )
}
export default Feedback
