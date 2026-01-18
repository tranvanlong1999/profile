import type { ErrorInfo, ReactNode } from 'react';
import React, { Component } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // eslint-disable-next-line class-methods-use-this
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="bg-[#0f0f0f] flex h-screen w-screen flex-col items-center justify-center text-center">
          <div className="mb-8 text-2xl md:text-3xl font-bold text-white">Oops, something went wrong.</div>
          <p className="text-zinc-400 mb-8 max-w-md">
            We apologize for the inconvenience. Please try refreshing the page.
          </p>
          <button
            className="bg-[#323232] text-white px-8 py-3 rounded-[16px] hover:bg-white hover:text-black transition-colors duration-300 font-medium"
            onClick={() => window.location.reload()}
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
