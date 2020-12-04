import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Draggable, Droppable } from "react-drag-and-drop";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentPosition: "cyril",
      dropped: ""
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
                  <Draggable type="form" data="Heading">
                    <li>
                      <div className="icon">A</div>
                      <div className="contentHeading">Heading</div>
                    </li>
                  </Draggable>
                  <Draggable type="form" data="Paragraph">
                    <li>
                      <div className="icon">P</div>
                      <div className="contentHeading">Paragraph</div>
                    </li>
                  </Draggable>
                  <Draggable type="form" data="Button">
                    <li>
                      <div className="icon">B</div>
                      <div className="contentHeading">Button</div>
                    </li>
                  </Draggable>
                </ul>
                <ul />
              </div>
            </div>

            <div className="col-12 col-sm-9 fields-head">
              <Droppable types={["form"]} onDrop={this.onDrop.bind(this)}>
                <div className="fields">
                  <ul className="Smoothie">
                    <li>
                      <div style={{ textAlign: "center" }}>
                        {this.state.dropped}
                      </div>
                    </li>
                  </ul>
                </div>
              </Droppable>
            </div>
          </div>
        </div>
      </>
    );
  }
  onDrop(data) {
    console.log(data);
    this.setState({ dropped: data.form });
  }
}
