import React, { useState } from 'react';
import { connect } from "react-redux";
import { savePinsList } from "./Action/myAction";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const Generate = (props) => {
    debugger;
    const [generateCode, setCode] = useState([]);
    const onHandleChange = () => {

    }
    const result = () => {
        var result = '';
        var characters = '0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < 4; i++) {
            let res = characters.charAt(Math.floor(Math.random() * charactersLength));
            let find;
            if (result.length > 1) {
                find = result.substring(result.length - 1);
            }
            else {
                find = result;
            }
            let incrementVal = find;
            ++incrementVal;
            let decrementVal = find - 1;
            if (parseInt(find) === parseInt(res)) {//A PIN cannot have 2 consecutive digits be the same
                ++res;
                ++res;
                result += res.toString().length > 1 ? res.toString().substring(1) : res;
            }
            else if (parseInt(res) === parseInt(decrementVal)) { // descending
                ++res;
                ++res;
                ++res;
                result += res.toString().length > 1 ? res.toString().substring(1) : res;
            }
            else if (parseInt(res) === parseInt(incrementVal)) { // ascending
                ++res;
                ++res;
                result += res.toString().length > 1 ? res.toString().substring(1) : res;
            }

            else {
                result += res.toString().length > 1 ? res.toString().substring(1) : res;
            }

        }
        return result;
    }
    const buttonClick = () => {
        let names = ['Inputbox1', 'Inputbox2', 'Inputbox3', 'Inputbox4', 'Inputbox5'];
        const code =
            <div className="inputDisplay">
                {
                    names.map((name, index) => (
                        <input type="text" className="inputBox"
                            value={result()}
                            onChange={onHandleChange} />

                    ))
                }
            </div>

        setCode(code);
    }
    const onSaveClick = () => {
        debugger;
        let getProps = props.pinCodes;
        let arr = [];
        var getCode = generateCode;
        getCode = Object.entries(generateCode);
        for (var key in getProps) {
            arr.push(getProps[key]);
        }
        let savedItem;
        debugger;
        if (getProps && getCode.length > 0) {
            for (var key in arr) {
                savedItem = arr[key].props.children.find(x => x.props.value === generateCode.props.children[0].props.value)
            }
        }
        if (savedItem) {
            alert("Any 5 PIN combination is not allowed to be saved more than once");
        }
        else {
            if (getCode.length > 0) {
                arr.push(generateCode);
                for (var keyArray in arr) {
                    let clone = Object.assign({}, arr[keyArray]);
                    clone.key = parseInt(keyArray);
                    arr[keyArray] = clone;
                }
                props.savePinsList(arr);
                props.saved();
            }
            else {
                alert("Please generate code before saving");
            }
        }
    }
    return (
        <div className="container">
            <div className="col-lg-12">
                <div>{generateCode}</div>
                <div className="col-lg-12">
                    <div>
                        <button className="col-lg-3 generate" style={{ marginRight: "48px" }} onClick={buttonClick}>GENERATE</button>
                        <button className="col-lg-3 save" onClick={onSaveClick}>SAVE</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Generate)