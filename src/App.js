import React, {Component} from 'react';
import './App.css';
import Header from './components/header';
import Menu from './components/menu';
import Main from './components/main';
import Footer from './components/footer';

class App extends Component {
  
  state = {
    menuOpen: false,
  };
  
  interactMenu = () => {
    this.setState({menuOpen: !this.state.menuOpen});
  };
  
  setMenu = (open) => {
    this.setState({menuOpen: open});
  };
  
  render() {
    return (
      <div className="App">
        <Header
          interactMenu={this.interactMenu}
        />
        <Menu
          visible={this.state.menuOpen}
          setMenu={this.setMenu}
        />
        <Main/>
        <Footer />
      </div>
    );
  }
}

export default App;
