import { RouterState } from 'connected-react-router';

// Your root reducer type, which is your redux state types also
export interface ApplicationRootState {
  readonly router: RouterState;
  // for testing purposes
  readonly test: any;
}
