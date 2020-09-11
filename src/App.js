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

const App = () => {
  const [selectedTab, setSelected] = useState(0);
  const onSave = () => {
    setSelected(1);
  }
  const onTabChange = (index) =>{
    setSelected(index);
  }
  return (
    <div className="App">
      <Tabs selected={selectedTab} tabChange={onTabChange}>
        <Panel title="Generate">
          <Generate saved={onSave} />
        </Panel>
        <Panel title="Saved">
          <Saved />
        </Panel>
      </Tabs>
    </div>
  );
}
const mapStateToProps = state => {
  return {
  }
}

export default connect(mapStateToProps, {})(App)
