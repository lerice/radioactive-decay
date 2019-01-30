export const setInitialSampleAction = 'SET_INTIIAL_SAMPLE';
export const setInitialSample = (initialSample) => {
  return {
    type: setInitialSampleAction,
    initialSample,
  };
};

export const setHalflifeAction = 'SET_HALFLIFE';
export const setHalflife = (halflife) => {
  return {
    type: setHalflifeAction,
    halflife,
  };
};

export const setDecayTimeAction = 'SET_DECAY_TIME';
export const setDecayTime = (decayTime) => {
  return {
    type: setDecayTimeAction,
    decayTime,
  };
};
