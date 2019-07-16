import React, { Component } from 'react';
import { Container, Col, Row, TabPane, TabContent, Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import classnames from 'classnames';


class AddPane extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 'player'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    
    return (

      <Container className="add-pane">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === 'player' })}
              onClick={() => { this.toggle('player'); }}
            >
              Player
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === 'monster' })}
              onClick={() => { this.toggle('monster'); }}
            >
              Monster
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="player">
            <Row form="true">
              <input type="text" placeholder="Name"/>
            </Row>
            <Row form="true">
              <input type="text" placeholder="Initiative"/>
            </Row>
            <Row form="true">
              <button>Submit</button>
            </Row>
          </TabPane>
          <TabPane tabId="monster">
            <Row form="true">
              <input type="text" placeholder="Name"/>
            </Row>
            <Row form="true">
              <input type="text" placeholder="Initiative"/>
            </Row>
            <Row form="true">
              <button>Submit</button>
            </Row>
          </TabPane>
        </TabContent>
      </Container>
    );
  }
}

export default AddPane;
