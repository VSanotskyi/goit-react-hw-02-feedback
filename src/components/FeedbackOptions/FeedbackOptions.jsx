export default function FeedbackOptions({ good, neutral, bad }) {
  return (
    <div>
      <button onClick={good}>Good</button>
      <button onClick={neutral}>Neutral</button>
      <button onClick={bad}>Bad</button>
    </div>
  );
}
