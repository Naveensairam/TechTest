import React from 'react';
import { connect } from "react-redux";
import { savePinsList } from "./Action/myAction";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const Saved = (props) => {
    let arr = [];
    const onHandleChange = () => {

    }
    const onNameHandleChange = (event) => {
        var find = arr.find(x => x.key === parseInt(event.target.id));
        var getData = find;
        const getIndex = arr.indexOf(find);
        if (getIndex > -1) {
            arr.splice(getIndex, 1);
        }
        getData.name = event.target.value;
        arr.splice(getIndex, 0, getData);
        props.savePinsList(arr);
    }
    const onDeleteClick = (index) => {
        var find = arr.find(x => x.key === index);
        const getIndex = arr.indexOf(find);
        if (getIndex > -1) {
            arr.splice(getIndex, 1);
        }
        props.savePinsList(arr);
    }
    for (var key in props.pinCodes) {
        arr.push(props.pinCodes[key]);
    }
    return (
        <div className="container">
            {
                arr.length > 0 ? arr.map((name, index) => (
                    <div key={index} className="inputDisplay">
                        <input className="nameButton" id={index} placeholder="Name" type="text" value={name.name ? name.name : ""} onChange={onNameHandleChange}></input>
                        {
                            name.props.children.map((name, index) => (
                                <input type="text" className="inputBox"
                                    value={name.props.value} onChange={onHandleChange} />

                            ))
                        }
                        <button className="deleteButton" onClick={() => onDeleteClick(index)}>Delete</button>
                    </div>
                )) : "No Data Available"}
        </div>
    )
}
const mapStateToProps = state => {
    return {
        pinCodes: state
    }

}
const mapDispatchToProps = dispatch => {
    return {
        savePinsList: (params) => dispatch(savePinsList(params))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Saved)