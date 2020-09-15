import React from 'react';
import { connect } from "react-redux";
import { savePinsList } from "./Action/myAction";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

type Props = {
    pinCodes: any,
    savePinsList: any,
    // generateCode: any,
    // setCode: any,
    saved:any,
}
const Saved: React.FC<Props> = ({ savePinsList, pinCodes, saved }) => {
    // const Saved = (props) => {
    let arr = new Array();
    const onHandleChange = () => {

    }
    const onNameHandleChange = (event: any) => {
        var find = arr.find(x => x.key === parseInt(event.target.id));
        var getData = find;
        const getIndex = arr.indexOf(find);
        if (getIndex > -1) {
            arr.splice(getIndex, 1);
        }
        getData.name = event.target.value;
        arr.splice(getIndex, 0, getData);
        savePinsList(arr);
    }
    const onDeleteClick = (index: any) => {
        var find = arr.find(x => x.key === index);
        const getIndex = arr.indexOf(find);
        if (getIndex > -1) {
            arr.splice(getIndex, 1);
        }
        savePinsList(arr);
    }
    for (var key in pinCodes) {
        arr.push(pinCodes[key]);
    }
    return (
        <div className="container">
            {
                arr.length > 0 ? arr.map((name: any, index: any) => (
                    <div key={index} className="inputDisplay">
                        <input className="nameButton" id={index} placeholder="Name" type="text" value={name.name ? name.name : ""} onChange={onNameHandleChange}></input>
                        {
                            name.props.children.map((name: any, index: any) => (
                                <input type="text" key={index} className="inputBox"
                                    value={name.props.value} onChange={onHandleChange} />

                            ))
                        }
                        <button className="deleteButton" onClick={() => onDeleteClick(index)}>Delete</button>
                    </div>
                )) : "No Data Available"}
        </div>
    )
}
const mapStateToProps = (state: any) => {
    return {
        pinCodes: state
    }

}
const mapDispatchToProps = (dispatch: any) => {
    return {
        savePinsList: (params: any) => dispatch(savePinsList(params))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Saved)