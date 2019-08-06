import React from 'react';
import { Container, Row, TabPane, TabContent, Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import classnames from 'classnames';

class AddPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'player',
      name:"",
      init:""
    };
    this.toggle = this.toggle.bind(this);
    this.handleSubmitPlayer = this.handleSubmitPlayer.bind(this);
    this.handleSubmitMonster = this.handleSubmitMonster.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleInitChange = this.handleInitChange.bind(this);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  handleSubmitPlayer(event) {
    let user = {
      name: this.state.name,
      key: this.props.length,
      type: "player",
      init: this.state.init
    }

    this.props.add(user);
    this.props.toggle();
  }

  handleSubmitMonster(event) {
    let user = {
      name: this.state.name,
      key: "",
      type: "monster",
      init: this.state.init
    }
    
    this.props.add(user);
    this.props.toggle();
  }

  handleNameChange = event => {
    this.setState({name: event.target.value});
  }

  handleInitChange = event => {
    this.setState({init: event.target.value});
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
            <Row form={true}>
              <input type="text" placeholder="Name" onChange={this.handleNameChange}/>
            </Row>
            <Row form={true}>
              <input type="text" placeholder="Initiative" onChange={this.handleInitChange}/>
            </Row>
            <Row form={true}>
              <button onClick={this.handleSubmitPlayer}>Submit</button>
              <button onClick={this.props.toggle}>Cancel</button>
            </Row>
          </TabPane>
          <TabPane tabId="monster">
            <Row form={true}>
              <input type="text" placeholder="Name" onChange={this.handleNameChange} />
            </Row>
            <Row form={true}>
              <input type="text" placeholder="Initiative" onChange={this.handleInitChange} />
            </Row>
            <Row form={true}>
              <button onClick={this.handleSubmitMonster}>Submit</button>
              <button onClick={this.props.toggle}>Cancel</button>
            </Row>
          </TabPane>
        </TabContent>
      </Container>
    );
  }
}

export default AddPane;
