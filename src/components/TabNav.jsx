import React, { Component } from 'react';

//Tabs
class TabNav extends Component {
  render() {
    const tabStyle = {
      width: '50%',
      backgroundColor: '#424749',
      color: '#f1f1f2',
      alignItems: 'center',
      borderRadius: '5px',
      borderColor: '#fff',
    };
    return (
      <div style={{ width: 'flex' }}>
        <ul className="nav nav-tabs">
          {this.props.tabs.map((tab) => {
            const active = tab === this.props.selected ? 'active ' : '';

            return (
              <li className="nav-item" style={tabStyle} key={tab}>
                <a
                  className={'nav-link ' + active}
                  onClick={() => this.props.setSelected(tab)}
                >
                  {tab}
                </a>
              </li>
            );
          })}
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default TabNav;
