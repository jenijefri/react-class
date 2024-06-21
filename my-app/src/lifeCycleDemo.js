import React, { Component } from 'react';
import {Outlet} from "react-router-dom";

class LifeCycleDemo extends Component {
    // constructor() {
    //     console.log("1.constructor");
    //     super();
    // }

    constructor(props) {
        console.log("1.constructor");
        super(props);
        this.state = {favoritecolor: "red"};
    }

    static getDerivedStateFromProps(props, state) {
        console.log("2.getDerivedStateFromProps")
        return {favoritecolor: props.favourcolur };
    }

    componentDidMount() {
        console.log("4.compoenet did mount");
        alert("i am render successfully");
    }

    render()
  {
      console.log("3.render");
      return(

      <div>
          <h1>My Favorite Color is {this.state.favoritecolor}</h1>
          <br/>
          {this.props.favourcolur} i am from lifecycledemo component
          <Outlet/>
      </div>
      );

  }
}

export default LifeCycleDemo;
