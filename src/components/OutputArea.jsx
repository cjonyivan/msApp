import { Component } from "react";
import WrapperRectangle from './WrapperRectangle';

class OutputArea extends Component {
  render() {
    const {text} = this.props;    
    return (      
      <>        
        <div className="alert alert-light px-0" role="alert">
          <span className="badge bg-primary">Output</span>
        </div>
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <WrapperRectangle data={text}/>
          </div>
        </div>
      </>
    );
  }
}

export default OutputArea;
