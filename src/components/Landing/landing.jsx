import * as React from 'react';

class Landing extends React.Component{
  state = {
    isOnline: window.navigator.onLine,
    errorMessage: ''
  }

  componentDidMount = () => {
    window.addEventListener('offline', () => {
      this.setState({
        errorMessage: 'No Internet Connection'
      })
    })
  }

  componentDidUpdate = () => {
    window.addEventListener('online', () => {
      this.setState({
        errorMessage: ''
      })
    })
  }

  render() {
    return(
      <div className="landing">
        <p className="title">Handle Internet Connection</p>
        <p>{this.state.errorMessage}</p>
      </div>
    )
  }
 }

export default Landing;