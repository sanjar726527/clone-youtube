import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  // static getDerivedStateFromError() {
  //   return { hasError: true };
  // }

  // // componentDidCatch(error, errorInfo) {
  // //   this.setState({
  // //     hasError: true,
  // //     error,
  // //     errorInfo,
  // //   });
  // // }

  render() {
    if (!this.state.hasError) {
      return (
        <div>
          <h1 style={{ color: "red" }}>Something went wrong. Error 404</h1>
          <p>{this.state.error && this.state.error.toString()}</p>
          <pre>
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
