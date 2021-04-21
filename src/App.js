import React, { Component } from 'react';
import './App.css';
import Tab from './components/Tab';
import TabNav from './components/TabNav';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 'ActiveTab'
    }
  }

  setSelected = (tab) => {
    this.setState({ selected: tab });
  }

  render() {
    return (
      <div className="App mt-4">
        <TabNav className="tab-item-list" tabs={['Lunch','Dinner']} selected={ this.state.selected } setSelected={ this.setSelected }>
          <Tab isSelected={ this.state.selected === 'Lunch'}>
              <p>This is lunch</p>
          </Tab>
          <Tab isSelected={ this.state.selected === 'Dinner'}>
              <h1>This is dinner</h1>
          </Tab>
        </TabNav>
      </div>
    );
  }
}


export default App;
