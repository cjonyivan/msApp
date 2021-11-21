import { Component } from "react";
import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";

class JsonAreaEditor extends Component {

  onChange = (params) => {
    const { error, jsObject } = params;
    if (!error) {
      this.updateJSONValid(jsObject);
    }
  };

  updateJSONValid = (text) => {
    const { updateTextValid = () => {} } = this.props;
    updateTextValid(text);
  };

  render() {
    const { text = null } = this.props;
    return text ? (
      <>
        <div className="alert alert-light px-0" role="alert">
          <span className="badge bg-primary">Tree text</span>
        </div>
        <JSONInput
          id="a_unique_id"
          placeholder={text}
          width="100%"
          height="100%"
          locale={locale}
          onChange={this.onChange}
        />
      </>
    ) : null;
  }
}

export default JsonAreaEditor;
