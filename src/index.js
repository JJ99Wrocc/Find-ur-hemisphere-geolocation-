import React from 'react';
import ReactDOM from 'react-dom/client';
import HemispreheGlobal from './hemisphereGlobal'



class App extends React.Component {

  state = {latitude: null, errorMessage: ''}
componentDidMount (){

  window.navigator.geolocation.getCurrentPosition(
    (position) => {
      this.setState({latitude: position.coords.latitude})
    },
    (error) => this.setState({errorMessage: ErrorEvent.message})
  );
}



  render() {
    if(this.state.errorMessage && !this.state.latitude){
      return <div> {this.state.errorMessage}</div>
    }
    if(!this.state.errorMessage && this.state.latitude){
      return <div>  <HemispreheGlobal latitude={this.state.latitude} /></div>
    }
    else {
      return  <div>Loading...</div>
    }


}
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
