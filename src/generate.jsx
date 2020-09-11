import React, { useState } from 'react';
import { connect } from "react-redux";
import { savePinsList } from "./Action/myAction";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const Generate = (props) => {
    const [generateCode, setCode] = useState([]);
    const onHandleChange = () => {

    }
    const result = () => {
        var result = '';
        var characters = '0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < 4; i++) {
            let res = characters.charAt(Math.floor(Math.random() * charactersLength));
            let find = result.substring(result.length - 1);
            debugger; 
            if (parseInt(find) === parseInt(res)) {
                result += ++res;
            } else {
                result += res;
            }

        }
        return result;
    }
    const buttonClick = () => {
        let names = ['James', 'Paul', 'John', 'George', 'Ringo'];
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
        var getCode = generateCode;
        getCode = Object.entries(generateCode);
        if (getCode.length > 0) {
            let getProps = props.pinCodes;
            let arr = [];
            for (var key in getProps) {
                arr.push(getProps[key]);
            }
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