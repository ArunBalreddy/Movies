import './index.css'

const FailureView = props => {
  const {onClickTryAgain} = props

  return (
    <div className="failure-container">
      <img
        src="https://res.cloudinary.com/dkbxi5qts/image/upload/v1660451047/movies%20prime%20app/alert-triangle_najaul.png"
        alt="failure view"
        className="failure-img"
      />
      <p className="failure-para">Something went wrong. Please try again</p>
      <button
        type="button"
        className="try-again-button"
        onClick={() => {
          onClickTryAgain()
        }}
      >
        Try Again
      </button>
    </div>
  )
}

export default FailureView
