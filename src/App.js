import React, { Component, Fragment } from 'react';
import './App.css';
import Tab from './components/Tab';
import TabNav from './components/TabNav';
import Card from './components/Cards';
import DatePicker from 'react-horizontal-datepicker';

//Home
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 'ActiveTab',
    };
  }

  setSelected = (tab) => {
    this.setState({ selected: tab });
  };

  render() {
    const selectedDay = (val) => {
      console.log(val);
    };
    return (
      <div className="App mt-4">
        <div className="Datepicker ">
          <DatePicker
            getSelectedDay={selectedDay}
            endDate={100}
            selectDate={new Date('2021-04-22')}
            labelFormat={'MMMM'}
            color={'#424749'}
          />
        </div>
        <div className="Tabs center">
          <TabNav
            className="tab-item-list"
            tabs={['Lunch', 'Dinner']}
            selected={this.state.selected}
            setSelected={this.setSelected}
          >
            <Tab isSelected={this.state.selected === 'Lunch'}>
              <h3 className="Date">Kamis 22 April 2021</h3>
              <Card />
            </Tab>
            <Tab isSelected={this.state.selected === 'Dinner'}>
              <h3 className="Date2">Kamis 22 April 2021</h3>
              <Card />
            </Tab>
          </TabNav>
        </div>
      </div>
    );
  }
}

export default App;
