import { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback, options } = this.props;

    return (
      <>
        <Container onClick={onLeaveFeedback}>
          {options.map(option => (
            <Button type="button" name={option}>
              {option}
            </Button>
          ))}
        </Container>
      </>
    );
  }
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
