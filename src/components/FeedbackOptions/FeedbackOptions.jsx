const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <div>
    {
      options.map(option => (
        <button
          key={option}
          type='button'
          name={option}
          onClick={(e) => onLeaveFeedback(e)}
        >{option}</button>
      ))
    }
  </div>
);

export default FeedbackOptions;
