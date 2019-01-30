import * as React from 'react';
import constants from '../constants';
import styled from 'styled-components';

// @ts-ignore
import atomSprite from './assets/atom-sprite.png';

const AtomWrapper = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  float: left;
  margin: 5px;
  overflow: hidden;
`;

const AtomInnerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
`;


interface AtomDivStyles {
  dead?: boolean;
}

const AtomDiv = styled.div<AtomDivStyles>`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: url(${atomSprite});
  background-position: ${(props: AtomDivStyles) => props.dead ? `bottom` : 'top'} right;
`;

interface Props {
  substanceAmount: number;
  atomAmount: number;
}

export class Atom extends React.PureComponent<Props> {
  public render() {
    const { atomAmount, substanceAmount } = this.props;
    const width = substanceAmount / constants.ATOM_GRAPHIC_SUBSTANCE * 50;

    let Atom;

    if (atomAmount === 0) {
      Atom = (
        <AtomInnerWrapper>
          <AtomDiv />
          <AtomDiv dead />
        </AtomInnerWrapper>
      );
    } else if (atomAmount === constants.ATOM_GRAPHIC_SUBSTANCE) {
      Atom = (
        <AtomInnerWrapper>
          <AtomDiv />
        </AtomInnerWrapper>
      );
    } else {
      Atom = (
        <AtomInnerWrapper>
          <AtomDiv />
          <AtomDiv style={{width: `${100 * (1 - (atomAmount / constants.ATOM_GRAPHIC_SUBSTANCE))}%`}} dead/>
        </AtomInnerWrapper>
      );
    }

    return (
      <AtomWrapper style={{ width }}>
        {Atom}
      </AtomWrapper>
    );
  }
}

export default Atom;
