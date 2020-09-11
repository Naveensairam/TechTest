import React from 'react';
import { connect } from "react-redux";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

 const Panel = (props) => {
      return <div>{props.children}</div>
  };
  const mapStateToProps = state => {
    return{
  }
    
}

export default connect(mapStateToProps,{}) (Panel)
