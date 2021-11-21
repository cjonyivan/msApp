import { Component } from "react";
import { parser } from "../Utils";
import JSONInput from "react-json-editor-ajrm";

class JsonAreaEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.text,
    };
  }

  render() {
    const { text = null } = this.props;
    const data = text && parser(text);
    return <JSONInput id="a_unique_id" placeholder={data} width="100%" height="100%"/>;
  }
}

export default JsonAreaEditor;
