import { Component } from "react";
import InputTreeSource from "./InputTreeSource";
import { connect } from "react-redux";
import { updateText, updateTextValid } from "../actions/textJsonActions";
import JsonAreaEditor from "./JsonAreaEditor";
import OutputArea from "./OutputArea";

// const entry = ["a", ["b"], ["c"]];

class Principal extends Component {
  render() {
    const {
      updateText = () => {},
      updateTextValid = () => {},
      text,
      text_valid
    } = this.props;
    return (
      <div className="container py-3">
        <header>
          <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 className="display-4 fw-normal">
              Process the input into a tree
            </h1>
          </div>
        </header>
        <InputTreeSource updateText={updateText} updateTextValid={updateTextValid}/>
        {text ? (
          <JsonAreaEditor text={text} updateTextValid={updateTextValid} />
        ) : null}
        {text_valid ? <OutputArea text={text_valid}/> : null}
      </div>
    );
  }
}

const mapDispatchToProps = {
  updateText,
  updateTextValid,
};

const mapStateToProps = (state) => {
  const { source: { text = null, text_valid = null } = {} } = state;
  return { text, text_valid };
};

export default connect(mapStateToProps, mapDispatchToProps)(Principal);
