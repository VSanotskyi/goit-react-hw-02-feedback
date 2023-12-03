import { Component } from 'react';

import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = ({ target: { name } }) => {
    this.setState(prev => ({ ...prev, [name]: prev[name] + 1 }));
  };

  options = () => Object.keys(this.state);

  total = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  positivePercentage = () => {
    if (this.state.good === 0 && this.state.bad === 0 && this.state.neutral ===
      0) return 0;
    return ((this.state.good /
      (this.state.good + this.state.bad + this.state.neutral)) * 100).toFixed(
      0);
  };

  render() {
    return (
      <>
        <Section title='Please leave feedback'>
          {
            <FeedbackOptions
              onLeaveFeedback={this.onLeaveFeedback}
              options={this.options()}
            />
          }
        </Section>
        {
          this.total() ? (
            <Section title='Statistic'>
              {
                <Statistics
                  options={this.state}
                  good={this.state.good}
                  neutral={this.state.neutral}
                  bad={this.state.bad}
                  total={this.total()}
                  positivePercentage={this.positivePercentage()}
                />
              }
            </Section>
          ) : <Notification message='There is no feedback' />
        }
      </>
    );
  }
}

export default App;

