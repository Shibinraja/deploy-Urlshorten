import React, { Component } from 'react';
import './App.css';
import Header from './Component/Header';
import Body from './Component/Body';
import Content from './Component/Content';
import Footer from './Component/Footer';
import axios from 'axios';



class App extends Component {

  state = {
    shorturl: ""
  }

  handlesubmit = (url) => {
    console.log(url);
    axios.post('/api', { url })
      .then(res => {
        let data = res.data.shortUrl
        this.setState({ shorturl: data })
        console.log(this.state.shorturl)
      })

  }
  render() {
    return (
      <div className="App">
        <div className="container-fluid px-0">
          <div className="row">
            <div className=" col-xs-12 col-md-12 col-lg-12 col-xl-12">
              <Header />
              <Body OriginalUrl={this.handlesubmit} shorturl={this.state.shorturl} />
              <Content />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
