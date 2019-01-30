import * as React from 'react';
import { connect } from 'react-redux';
import { getHalflife } from '../selectors';
import { setHalflife } from '../actions';
import constants from '../constants';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 50%;
  float: left;
  text-align: center;
`;

interface Props {
  halflife: number;
  setHalflife(evt: any): void;
}

export class Halflife extends React.PureComponent<Props> {
  public render() {
    const { halflife, setHalflife } = this.props;

    return (
      <Wrapper>
        <label>
          <span>Halflife: </span>
          <input type={'number'} min={constants.HALFLIFE_MIN} max={constants.HALFLIFE_MAX} value={halflife} onChange={setHalflife} />
          <span>years</span>
        </label>
      </Wrapper>
    );
  }
}

function mapStateToProps(
  state: object,
): {
  halflife: number,
} {
  return {
    halflife: getHalflife(state),
  };
}

function mapDispatchToProps(
  dispatch: any,
): {
  setHalflife(evt: any): void,
} {
  return {
    setHalflife: evt => {
      dispatch(setHalflife(evt.target.value));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Halflife);
