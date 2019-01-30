import * as React from 'react';
import { connect } from 'react-redux';
import Slider from '@material-ui/lab/Slider';
import { getDecayTime } from '../selectors';
import { setDecayTime } from '../actions';
import constants from '../constants';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 10px;
  padding-bottom: 20px;
  text-align: center;
`;

interface Props {
  decayTime: number;
  setDecayTime(evt: any): void;
}

interface State {
  sliderVal: number;
}

export class DecayTime extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      sliderVal: convertDecayTimeToSliderStep(props.decayTime),
    };
  }

  public componentWillReceiveProps(props) {
    this.setState({
      sliderVal: convertDecayTimeToSliderStep(props.decayTime),
    });
  }

  private onInputChange = (evt) => {
    const value = parseFloat(evt.target.value);
    this.props.setDecayTime(value);
  };

  private onSliderChange = (evt, value) => {
    this.setState({
      sliderVal: value,
    });

    this.props.setDecayTime(convertSliderStepToDecayTime(value));
  };

  public render() {
    const { decayTime } = this.props;
    const { sliderVal } = this.state;

    return (
      <Wrapper>
        <label>
          <span>Decay Time: </span>
          <input type={'number'} min={constants.DECAY_TIME_MIN} max={constants.DECAY_TIME_MAX} value={decayTime} onChange={this.onInputChange} />
          <span>years</span>
        </label>
        <Slider min={0} max={constants.DECAY_TIME_SLIDER_STEPS} value={sliderVal} onChange={this.onSliderChange} style={{ marginTop: 15 }}/>
      </Wrapper>
    );
  }
}

function convertDecayTimeToSliderStep(decayTime) {
  const validDecayTime = constants.DECAY_TIME_MIN < decayTime && decayTime <= constants.DECAY_TIME_MAX;
  if (!validDecayTime) { return 0; }

  const stepsPerLogRegion = (constants.DECAY_TIME_SLIDER_STEPS - 1) / 3;
  return Math.log10(decayTime) * stepsPerLogRegion + 1;
}

function convertSliderStepToDecayTime(sliderVal) {
  if (sliderVal === 0) { return 0; }
  const stepsPerLogRegion = (constants.DECAY_TIME_SLIDER_STEPS - 1) / 3;

  return Math.pow(10, (sliderVal - 1) / stepsPerLogRegion);
}

function mapStateToProps(
  state: object,
): {
  decayTime: number,
} {
  return {
    decayTime: getDecayTime(state),
  };
}

function mapDispatchToProps(
  dispatch: any,
): {
  setDecayTime(evt: any): void,
} {
  return {
    setDecayTime: decayTime => {
      dispatch(setDecayTime(decayTime));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DecayTime);
