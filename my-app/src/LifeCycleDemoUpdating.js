import React, { Component } from 'react';

class LifeCycleDemoUpdating extends Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: props.favcol};
        console.log("Constructor");
    }
    componentDidMount() {
        console.log("componentDidMount")
        setTimeout(() => {
            this.setState({favoritecolor: "yellow"})
        }, 5000)
    }
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate")
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate");
        document.getElementById("div1").innerHTML =
            "Before the update, the favorite was " + prevState.favoritecolor;
        return null;
    }
    componentDidUpdate() {
        console.log("componentDidUpdate");
        document.getElementById("div2").innerHTML =
            "The updated favorite is " + this.state.favoritecolor;
    }
    // static getDerivedStateFromProps(props, state) {
    //     return {favoritecolor: props.favcol };
    // }
render() {
        console.log("Render");
        return(
            <div>
               <h1>My Favorite Color is {this.state.favoritecolor}</h1>
               {/*<button type="button" onClick={() => this.setState({favoritecolor:"Yellow"})}>Change color</button>*/}
                <div id="div1"></div>
                <div id="div2"></div>
            </div>
        );
}
}

export default LifeCycleDemoUpdating;