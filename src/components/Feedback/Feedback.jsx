import css from './Feedback.module.css';
import PropTypes from 'prop-types';



export const Feedback = ({feedback, clickfeedback}) => {
    const {good, neutral, bad} = feedback;

    return (
        <div className={css.feedback}>
            <div>
                <h2 className={css.feedback__heading}>Please leave feedback</h2>
                <ul className={css.feedback__list}>
                <li>
                    <button
                        onClick={clickfeedback}
                        name="good"
                        value={good}
                        className={css.feedback__button}>
                            Good
                    </button >
                </li>
                <li>
                    <button
                        onClick={clickfeedback} 
                        name="neutral"
                        value={neutral}
                        className={css.feedback__button}>
                            Neutral
                    </button>
                </li>
                <li>
                    <button
                        onClick={clickfeedback} 
                        name="bad"
                        value={bad}
                        className={css.feedback__button}>
                            Bad
                    </button>
                </li>
                </ul>
            </div>
        </div>
    );
};

Feedback.protoType = {
    feedback: PropTypes.shape({
        good: PropTypes.number,
        neutral: PropTypes.number,
        bad: PropTypes.number,
      }).isRequired,
      clickfeedback: PropTypes.func.isRequired,
};