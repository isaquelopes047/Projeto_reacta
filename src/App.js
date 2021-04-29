import React, {Component} from 'react';
import './App.css';
import Myheader from './Components/Headers.jsx';
import BodyApp from './Components/Body.jsx';
import FooterPage from './Components/Footer.jsx';
import Banner from './Components/BannerFooter.jsx';
import Infodiaria from './Components/infoheader.jsx';


class App extends Component {
  render(){
    return(
      <div className="App">
        <Infodiaria />
        <Myheader />
        <BodyApp />
        <Banner />
        <FooterPage />
      </div>
    )
  }
}
export default App;
