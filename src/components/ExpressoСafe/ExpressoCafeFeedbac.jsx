import React from 'react';
import {Feedback} from '../Feedback/Feedback';
import {Statistics} from '../Statistics/Statistics';


class ExpressoCafeFeedbac extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad:0,
    };

    totalFeedback =() => {
        const {good, neutral, bad} = this.state;
        return good + neutral + bad;
    };

    positivePercentage = () => {
        return parseInt((this.state.good / this.totalFeedback()) * 100);
    };

    hendleCange = e => {
        const { name } = e.target;
        this.setState(prevState => ({
          [name]: prevState[name] + 1,
        }));

        this.positivePercentage();
        this.totalFeedback()
       }



    

    render () {

        const feedback = this.totalFeedback();
        
        return (
            <div>
                <Feedback
                feedback ={this.state}
                clickfeedback = {this.hendleCange}
                /> 
            
                {feedback ? (
                    <Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={feedback}
                    pisitivePercentage={this.positivePercentage()}
                    />
                ) : (<p className='no__feedback'>There is no feedback</p>)}
            </div>
        )
    }

}

export default ExpressoCafeFeedbac;