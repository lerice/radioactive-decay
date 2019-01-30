import * as React from 'react';
import { connect } from 'react-redux';
import { getInitialSample, getRemainingSample } from '../selectors';
import Atom from './Atom';
import constants from '../constants';
import styled from 'styled-components';

const AtomsWrapper = styled.div`
  padding: 10px 0;
  border-top: 1px solid #dddddd;

  &::after {
    content: '';
    display: table;
    clear: both;
  }
`;

interface Props {
  initialSample: number;
  remainingSample: number;
}

export class Atoms extends React.PureComponent<Props> {
  public render() {
    const { initialSample, remainingSample } = this.props;

    const atoms: any[] = [];

    for (let i = constants.INIT_SAMPLE_MIN; i < initialSample; i = i + constants.ATOM_GRAPHIC_SUBSTANCE) {
      const delta = remainingSample - i;
      const substanceAmount = Math.min(constants.ATOM_GRAPHIC_SUBSTANCE, initialSample - i);

      if (delta >= constants.ATOM_GRAPHIC_SUBSTANCE) {
        atoms.push((
          <Atom key={atoms.length} atomAmount={constants.ATOM_GRAPHIC_SUBSTANCE} substanceAmount={substanceAmount} />
        ));
      } else if (delta > 0) {
        atoms.push((
          <Atom key={atoms.length} atomAmount={delta} substanceAmount={substanceAmount} />
        ));
      } else {
        atoms.push((
          <Atom key={atoms.length} atomAmount={0} substanceAmount={substanceAmount} />
        ));
      }
    }
    // const remainderInitialSubstance = initialSample % constants.ATOM_GRAPHIC_SUBSTANCE;

    return (
      <AtomsWrapper>
        {atoms}
      </AtomsWrapper>
    );
  }
}

function mapStateToProps(
  state: object,
): {
  initialSample: number,
  remainingSample: number,
} {
  return {
    initialSample: getInitialSample(state),
    remainingSample: getRemainingSample(state),
  };
}

export default connect(
  mapStateToProps,
)(Atoms);
