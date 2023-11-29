import { Component } from 'react';

import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    isShowStatics: false,
  };

  showStatics = () => {
    this.setState(prev => ({ isShowStatics: true }));
  };

  good = () => {
    this.showStatics();
    this.setState((prevState) => (
      { good: prevState.good += 1 }
    ));
  };

  neutral = () => {
    this.showStatics();
    this.setState(
      (prevState) => (
        { neutral: prevState.neutral += 1 }
      ));
  };

  bad = () => {
    this.showStatics();
    this.setState((prev) => (
      { bad: prev.bad += 1 }
    ));
  };

  countTotalFeedback = (state) => {
    const { bad, good, neutral } = state;

    return bad + good + neutral;

  };

  countPositiveFeedbackPercentage = (state = { good: 0, bad: 0 }) => {
    const { bad, good, neutral } = state;
    if (good !== 0 || bad !== 0) {
      return (good / (good + bad + neutral) * 100).toFixed(2);

    }
    return 0;
  };

  render() {
    return (
      <>
        <Section title='Please leave feedback'>
          <FeedbackOptions good={this.good}
                           neutral={this.neutral}
                           bad={this.bad}
          />
        </Section>
        <Section title='Statistics'>
          {
            this.state.isShowStatics ?
              <Statistics showStatics={this.showStatics}
                          state={this.state}
                          countTotalFeedback={this.countTotalFeedback}
                          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
              /> : <Notification message='There is no feedback' />
          }

        </Section>
      </>
    );
  }
}

