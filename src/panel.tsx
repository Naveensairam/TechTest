import React from 'react';
import { connect } from "react-redux";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
type Props = {
  title: any,
  children: any,
}
const Panel: React.FC<Props> = ({ children, title }) => {
  return <div>{children}</div>
};
const mapStateToProps = (state: any) => {
  return {
  }

}

export default connect(mapStateToProps, {})(Panel)
