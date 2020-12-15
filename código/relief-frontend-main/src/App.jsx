import React, { Component } from 'react'
import Navigation from './pages/navigation';
import Header from './pages/header';
import Info from './pages/info';
import Services from './pages/services';
import Map from './pages/map';
import Team from './pages/Team';
import Contact from './pages/contact';
import JsonData from './data/data.json';

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();


  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <Info data={this.state.landingPageData.Info} />
        <Services data={this.state.landingPageData.Services} />
        <Map data={this.state.landingPageData.Map} />
        <Contact data={this.state.landingPageData.Contact} />
        <Team data={this.state.landingPageData.Team} />
      </div>
    )
  }
}

export default App;
