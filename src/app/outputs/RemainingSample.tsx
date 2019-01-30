import * as React from 'react';
import { connect } from 'react-redux';
import { getRemainingSample } from '../selectors';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 10px;
  border-top: 1px solid #dddddd;
  text-align: center;
`;

const BigText = styled.div`
  display: inline;
  font-size: 32px;
  line-height: 1;
`;

interface Props {
  remainingSample: number;
}

export class RemainingSample extends React.PureComponent<Props> {
  public render() {
    const { remainingSample } = this.props;

    return (
      <Wrapper>
        <span>Remaining Sample: </span>
        <BigText>{remainingSample.toFixed(2)}</BigText>
        <span>grams</span>
      </Wrapper>
    );
  }
}

function mapStateToProps(
  state: object,
): {
  remainingSample: number,
} {
  return {
    remainingSample: getRemainingSample(state),
  };
}

export default connect(
  mapStateToProps,
)(RemainingSample);
