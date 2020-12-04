import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentPosition: "cyril"
    };
    
    localStorage.setItem("rememberMe", this.state.componentPosition);
  }
  render() {
    return (
      <>
        <div>
          <div className="text-center heading">
            <h2>GUI builder in React - Task</h2>
          </div>
          <div className="row">
            <div className="col-12 col-sm-3 uicomponent-head">
              <div className="uicomponent">
                <ul>
                  <li>
                    <div className="icon">A</div>
                    <div className="contentHeading">Heading</div>
                  </li>
                  <li>
                    <div className="icon">P</div>
                    <div className="contentHeading">Paragraph</div>
                  </li>
                  <li>
                    <div className="icon">B</div>
                    <div className="contentHeading">Button</div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-9 fields-head">
              <div className="fields" />
            </div>
          </div>
        </div>
      </>
    );
  }
  save(form) {
    // you will receive form
    console.log(form);
  }

  // updateForm(callback){
  //     // fetch form and set it to callback
  //     let form = axios.......
  //     callback(form)
  // }
}
