export default function Statistics({
                                     state,
                                     countTotalFeedback,
                                     countPositiveFeedbackPercentage,
                                   }) {
  return (
    <div>
      <div>
        <div>
          <h4>Statistics</h4>
          <p>Good: {state.good}</p>
          <p>Neutral: {state.neutral}</p>
          <p>Bad: {state.bad}</p>
        </div>
        <div>
          <h4>Total:{countTotalFeedback(state)}
          </h4>
        </div>
        <div>
          <h4>Positive feedback: {
            countPositiveFeedbackPercentage(state)
          }%</h4>
        </div>
      </div>
    </div>
  );
}
