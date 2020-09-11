import React from 'react';
import { connect } from "react-redux";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
 class Tabs extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selected:this.props.selected || 0    
  }
}
    
    handleChange=(index)=>{
      this.props.tabChange(index);
    }
    render(){
      return (<div>
        <ul className="inline">
          {this.props.children.map((elem,index)=>{
            let style = index === this.props.selected ? 'selected': '';
           return <li className={style} key={index} onClick={this.handleChange.bind(this,index)}>{elem.props.title}</li>
          })}
        </ul>
        <div className="container">
        <div className="tab">{this.props.children[this.props.selected]}</div>
        </div>
        </div>
      )
    }
      
  }
  const mapStateToProps = state => {
    return{
  }
    
}

export default connect(mapStateToProps,{}) (Tabs)
