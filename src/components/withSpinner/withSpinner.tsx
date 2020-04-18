import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './withSpinner.styles';

interface WithLoadingProps {
  isLoading: boolean;
}

// https://medium.com/@jrwebdev/react-higher-order-component-patterns-in-typescript-42278f7590fb
const withSpinner = <P extends object>(Component: React.ComponentType<P>) =>
  class WithLoading extends React.Component<P & WithLoadingProps> {
    render() {
      const { isLoading, ...props } = this.props;
      return isLoading ? (
        <SpinnerOverlay>
          <SpinnerContainer />
        </SpinnerOverlay>
      ) : (
        <Component {...(props as P)} />
      );
    }
  };
export default withSpinner;
