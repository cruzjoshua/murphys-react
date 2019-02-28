import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Dropdown, Grid, Icon, Image, List, Menu, GridColumn } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Image src='http://murphyshawaii.com/media/2014/04/murphyshawaii.png'/>
            <Menu.Item position="right">Home</Menu.Item>
            <Dropdown item text="About us">
              <Dropdown.Menu>
                <Dropdown.Item>Test</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>St. Patrick's Day</Menu.Item>
            <Dropdown item text="Menus">
              <Dropdown.Menu>
                <Dropdown.Item>Test</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>Bar</Menu.Item>
            <Menu.Item><Icon name="search"/></Menu.Item>
          </Container>
        </Menu>
    )
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <div className='middle'>
          <Container>
            <Grid centered columns="2">
              <GridColumn>
                <Image src="http://murphyshawaii.com/media/2014/04/murphyshawaiilogo.png" size='centered'/>
              </GridColumn>
              <GridColumn>
                <div className="midtext">
                  A traditional downtown saloon and eatery located in the Honolulu Financial District, just one block off the waterfront, Murphy’s has been a haven for mariners, businessmen and locals since 1891.
                </div>
              </GridColumn>
            </Grid>
          </Container>
        </div>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <div className="footer">
          <Grid container columns={3}>
            <Grid.Column>
              Lunch
              <hr/>
              <List>
                <List.Item>Monday - Friday: 11:00am - 2:30pm</List.Item>
                <List.Item>Saturday - Sunday: Not open for lunch</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              Bar
              <hr/>
              <List>
                <List.Item>Monday - Friday from 11:00am</List.Item>
                <List.Item>Saturday - Sunday from 4:00pm</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              Dinner
              <hr/>
              <List>
                <List.Item>Monday - Sunday: 5:30pm - 10:00pm</List.Item>
                <List.Item>Sunday: 5:00pm - 9:00pm</List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </div>
    )
  }
}

class Murphys extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <MiddleMenu/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<Murphys/>, document.getElementById('root'));
