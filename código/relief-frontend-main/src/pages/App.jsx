import React, { Component } from 'react'
import Navigation from './navigation';
import Header from './header';
import Features from './info';
import Services from './services';
import Map from './map';
import Team from './Team';
import Contact from './contact';
import $ from 'jquery';

export class App extends Component {
  state = {
    resumeData: {},
  }
  getResumeData() {
    $.ajax({
      url: '/data.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.resumeData.Header} />
        <Services data={this.state.resumeData.Services} />
        <Features data={this.state.resumeData.Features} />
        <Map data={this.state.resumeData.map} />
        <Contact data={this.state.resumeData.Contact} />
        <Team data={this.state.resumeData.Team} />

      </div>
    )
  }
}

export default App
