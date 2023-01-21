import React, {ReactNode, ErrorInfo} from 'react';
import {FallBackUI} from './components/FallBackUI';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

/**
 * Based on: https://codepen.io/gaearon/pen/wqvxGa?editors=0010
 */
export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {error: null, errorInfo: null};
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.error) {
      return this.props.fallback || <FallBackUI />;
    }

    return this.props.children;
  }
}
