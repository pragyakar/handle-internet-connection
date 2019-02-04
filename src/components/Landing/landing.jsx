import * as React from 'react';
import Alert from '../Alert';

class Landing extends React.Component{
  state = {
    errorMessage: '',
  }

  componentDidMount = () => {
    window.addEventListener('offline', () => {
      this.setState({
        errorMessage: 'No Internet Connection Detected... ',
      })
    })
  }

  componentDidUpdate = () => {
    window.addEventListener('online', () => {
      this.setState({
        errorMessage: '',
      })
    })
  }

  render() {
    return(
      <div className="landing">
        <p className="title">Handle Internet Connection</p>
        { this.state.errorMessage && <Alert message={this.state.errorMessage} />}
      </div>
    )
  }
 }

export default Landing;