import { fromJS } from 'immutable';
import { setInitialSampleAction, setHalflifeAction, setDecayTimeAction } from './actions';

const initialState = fromJS({
  initialSample: 100,
  halflife: 70,
  decayTime: 100,
  remainingSample: calculateRemainingSample(100, 70, 100),
});

export default function(state = initialState, action) {
  switch (action.type) {
    case setInitialSampleAction:
      state = state.set('initialSample', action.initialSample);
      state = state.set('remainingSample', calculateRemainingSampleFromState(state));
      return state;
    case setHalflifeAction:
      state = state.set('halflife', action.halflife);
      state = state.set('remainingSample', calculateRemainingSampleFromState(state));
      return state;
    case setDecayTimeAction:
      state = state.set('decayTime', toPrecision(action.decayTime, 2));
      state = state.set('remainingSample', calculateRemainingSampleFromState(state));
      return state;
    default:
      return state;
  }
}

function toPrecision(val: number, places: number = 0) {
  const power = Math.pow(10, places);
  return Math.round(val * power) / power;
}

function calculateRemainingSampleFromState(state) {
  const initialSample = state.get('initialSample');
  const halflife = state.get('halflife');
  const decayTime = state.get('decayTime');

  return calculateRemainingSample(initialSample, halflife, decayTime);
}

function calculateRemainingSample(initialSample: number, halflife: number, decayTime: number) {
  return initialSample * Math.exp(- Math.LN2 * decayTime / halflife);
}
