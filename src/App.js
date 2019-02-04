import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Alert from './components/Alert';

import './App.css';

class App extends Component {
  state = {
    errorMessage: '',
  }

  componentDidMount = () => {
    window.addEventListener('offline', () => {
      this.setState({
        errorMessage: 'No Internet Connection Detected...',
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
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Landing} />
        </Router>
        { this.state.errorMessage && <Alert message={this.state.errorMessage} type={'success'} />}
      </div>
    );
  }
}

export default App;
