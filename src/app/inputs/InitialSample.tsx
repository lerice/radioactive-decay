import * as React from 'react';
import { connect } from 'react-redux';
import { getInitialSample } from '../selectors';
import { setInitialSample } from '../actions';
import constants from '../constants';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 50%;
  float: left;
  text-align: center;
`;

interface Props {
  initialSample: number;
  setInitialSample(evt: any): void;
}

export class InitialSample extends React.PureComponent<Props> {
  public render() {
    const { initialSample, setInitialSample } = this.props;

    return (
      <Wrapper>
        <label>
          <span>Initial Sample: </span>
          <input type={'number'} min={constants.INIT_SAMPLE_MIN} max={constants.INIT_SAMPLE_MAX} value={initialSample} onChange={setInitialSample} />
          <span>grams</span>
        </label>
      </Wrapper>
    );
  }
}

function mapStateToProps(
  state: object,
): {
  initialSample: number,
} {
  return {
    initialSample: getInitialSample(state),
  };
}

function mapDispatchToProps(
  dispatch: any,
): {
  setInitialSample(evt: any): void,
} {
  return {
    setInitialSample: evt => {
      dispatch(setInitialSample(evt.target.value));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InitialSample);
