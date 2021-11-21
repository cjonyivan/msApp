import { Component } from "react";
import InputTreeSource from "./InputTreeSource";
import { connect } from "react-redux";
import { updateText } from "../actions/textJsonActions";
import JsonAreaEditor from './JsonAreaEditor';

// const entry = ["a", ["b"], ["c"]];

class Principal extends Component {
  componentDidMount = () => {};

  render() {
    const { updateText = () => {}, text } = this.props;
    return (
      <div className="container py-3">
        <header>
          <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 className="display-4 fw-normal">
              Process the input into a tree
            </h1>
          </div>
        </header>
        <InputTreeSource updateText={updateText}/>
        <JsonAreaEditor text={text}/>
      </div>
    );
  }
}

const mapDispatchToProps = {
  updateText,
};

const mapStateToProps = state => {
  const  {source: {text =  null} = {}} = state;
  return {text};
}

export default connect(mapStateToProps, mapDispatchToProps)(Principal);
