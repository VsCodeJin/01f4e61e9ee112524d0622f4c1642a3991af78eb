import React, { Component, Fragment, useState } from 'react';
import './App.css';
import Tab from './components/Tab';
import TabNav from './components/TabNav';
import Card from './components/Cards';
import DatePicker from 'react-horizontal-datepicker';
import arrow from './assets/arrow.png';
import downarrow from './assets/down arrow.png';
import Modal from 'react-bootstrap/Modal';
import { MDBCol, MDBIcon } from 'mdbreact';
import Placelist from './components/Placelist';

//Home
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 'ActiveTab',
      show: false,
    };
  }

  setSelected = (tab) => {
    this.setState({ selected: tab });
  };

  handleModal() {
    this.setState({ show: true });
  }

  closeModal() {
    this.setState({ show: false });
  }

  render() {
    const selectedDay = (val) => {
      console.log(val);
    };

    return (
      <div className="App mt-4" id="app">
        <div className="Topbar">
          <img src={arrow} alt="pic" className="arrow" />
          <div className="Maps">
            <p className="address">ALAMAT PENGANTARAN</p>
            <div className="flexrow">
              <p
                className="mapClick"
                onClick={() => {
                  this.handleModal();
                }}
              >
                Tokopedia Tower
              </p>
              <img src={downarrow} alt="down" className="arrowdown" />
            </div>
            {/*Modal here*/}
            <Modal className="modal" show={this.state.show}>
              <Modal.Header
                onClick={() => {
                  this.closeModal();
                }}
              >
                Cek makanan yang tersedia di lokasi kamu!
              </Modal.Header>
              <Modal.Body className="modalBody">
                {/*Search*/}
                <MDBCol md="6">
                  <form className="form-inline mt-4 mb-4">
                    <MDBIcon icon="search" />
                    <input
                      className="form-control form-control-sm ml-3"
                      type="text"
                      placeholder="Search"
                      aria-label="Search"
                      width="360px"
                    />
                  </form>
                </MDBCol>
                {/*Search*/}
                <Placelist />
              </Modal.Body>
            </Modal>
            {/*Modal End*/}
          </div>
        </div>
        <div className="Datepicker ">
          <DatePicker
            getSelectedDay={selectedDay}
            endDate={100}
            selectDate={new Date('2021-04-22')}
            labelFormat={'MMMM'}
            color={'#424749'}
          />
        </div>
        <div className="Tabs center" id="scroll-container">
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
