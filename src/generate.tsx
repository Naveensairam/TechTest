import React from 'react';
import { connect } from "react-redux";
import { savePinsList } from "./Action/myAction";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
type Props = {
    pinCodes: any,
    savePinsList: any,
    saved: any,
}
type MyState = {
    generateCode: any; // like this
};
class Generate extends React.Component<Props, MyState> {
    constructor(props: any) {
        super(props)
        this.state = {
            generateCode: []
        }
    }
    onHandleChange = () => {

    }
    result = () => {
        var result = '';
        var characters = '0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < 4; i++) {
            let res: number = parseInt(characters.charAt(Math.floor(Math.random() * charactersLength)));
            let find: number;
            if (result.length > 1) {
                find = parseInt(result.substring(result.length - 1));
            }
            else {
                find = parseInt(result);
            }
            let incrementVal: number = find - 1;
            ++incrementVal;
            let decrementVal: number = find - 2;
            if (find === res) {//A PIN cannot have 2 consecutive digits be the same
                ++res;
                ++res;
                result += res.toString().length > 1 ? res.toString().substring(1) : res;
            }
            else if (res === decrementVal) { // descending
                ++res;
                ++res;
                ++res;
                result += res.toString().length > 1 ? res.toString().substring(1) : res;
            }
            else if (res === incrementVal) { // ascending
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
    buttonClick = () => {
        let names = ['Inputbox1', 'Inputbox2', 'Inputbox3', 'Inputbox4', 'Inputbox5'];
        const code: JSX.Element =
            <div className="inputDisplay">
                {
                    names.map((name) => (
                        <input type="text" className="inputBox"
                            value={this.result()}
                            onChange={this.onHandleChange} />

                    ))
                }
            </div>
        this.setState({ generateCode: code });
    }
    onSaveClick = () => {
        debugger;
        let getProps = this.props.pinCodes;
        let arr = [];
        var getCode = this.state.generateCode;
        getCode = Object.entries(this.state.generateCode);
        for (var key in getProps) {
            arr.push(getProps[key]);
        }
        let savedItem;
        if (getProps && getCode.length > 0) {
            for (var keyPlus in arr) {
                savedItem = arr[keyPlus].props.children.find((x: any) => x.props.value === this.state.generateCode.props.children[0].props.value && 
                x.props.value === this.state.generateCode.props.children[1].props.value
                && x.props.value === this.state.generateCode.props.children[2].props.value
                && x.props.value === this.state.generateCode.props.children[3].props.value
                && x.props.value === this.state.generateCode.props.children[4].props.value)
            }
        }
        if (savedItem) {
            alert("Any 5 PIN combination is not allowed to be saved more than once");
        }
        else {
            if (getCode.length > 0) {
                arr.push(this.state.generateCode);
                for (var keyArray in arr) {
                    let clone = Object.assign({}, arr[keyArray]);
                    clone.key = parseInt(keyArray);
                    arr[keyArray] = clone;
                }
                this.props.savePinsList(arr);
                this.props.saved();
            }
            else {
                alert("Please generate code before saving");
            }
        }
    }
    render() {
        return (
            <div className="container">
                <div className="col-lg-12">
                    <div>{this.state.generateCode}</div>
                    <div className="col-lg-12">
                        <div>
                            <button className="col-lg-3 generate" style={{ marginRight: "48px" }} onClick={this.buttonClick}>GENERATE</button>
                            <button className="col-lg-3 save" onClick={this.onSaveClick}>SAVE</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Generate)