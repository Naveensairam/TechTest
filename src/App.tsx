import React, { useState } from 'react';
import './App.css';
import Panel from './panel';
import Tabs from './tabs';
import Generate from './generate';
import { connect } from "react-redux";
import Saved from './saved';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
type Props = {
  
}
type MyState = {
  selectedTab: any; // like this
};
class App extends React.Component<Props, MyState> {
  constructor(props: any) {
    super(props)
    this.state = {
      selectedTab: 0
    }
  }
  
  onSave = () => {
    this.setState({ selectedTab: 1 });
  }
  onTabChange = (index: any) => {
    this.setState({ selectedTab: index });
  }
  render() {
    return (
      <div className="App">
        <Tabs selected={this.state.selectedTab} tabChange={this.onTabChange}>
          <Panel title="Generate">
            <Generate saved={this.onSave} />
          </Panel>
          <Panel title="Saved">
            <Saved saved={this.onSave} />
          </Panel>
        </Tabs>
      </div>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
  }
}

export default connect(mapStateToProps, {})(App)
