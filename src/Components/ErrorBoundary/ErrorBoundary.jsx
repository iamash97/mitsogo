import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.error('Error caught in ErrorBoundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI when an error occurs
      return (
        <div style={{ padding: '20px', backgroundColor: '#f8d7da', color: '#721c24', borderRadius: '8px' }}>
          <h2>Something went wrong.</h2>
          <p>Please try again later.</p>
        </div>
      );
    }

    return this.props.children; // Render the children components if no error
  }
}

export default ErrorBoundary;
