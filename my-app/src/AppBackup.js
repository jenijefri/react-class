import React from 'react';
// import FuncDemo from "./funDemo";
// import ClassDemo from "./classDemo";
import Room1 from "./Room1";
import Room2 from "./Room2";
import LifeCycleDemo from "./lifeCycleDemo";
// import LifeCycleDemoUpdating from "./LifeCycleDemoUpdating";
import UserEffectDemo from "./userEffectDemo";
import Component1 from "./useContextDemo";
import UseMemoDemo from "./useMemoDemo";
import AboutOverAll from "./aboutbout";
import Login from "./login";
import Dashboard from "./dashboard";
import Axios from "./dashboardDemo";
import FormDemo from "./formdemo";
import LifeCycleDemoUpdating from "./LifeCycleDemoUpdating";
// import {Route} from "react-router-dom";
const App = () => {
    return(
        <div>
            <div className="App">
                {/*<Login/>*/}
                {/*<Dashboard/>*/}
                {/*<userNavigate/>*/}
                <Axios/>
                <FormDemo/>
                {/*<LifeCycleDemoUpdating favcol="Green"/>*/}
                {/*<LifeCycleDemo favourcolur="Yellow"/>*/}
                {/*<UseMemoDemo/>*/}
                {/*<Route/>*/}
                {/*<College/>*/}


                {/*<LifeCycleDemoUpdating favcol="Green"/>*/}
                {/*/!*<UserEffectDemo/>*!/*/}
                {/*<Component1/>*/}
                {/*<div className="container">*/}
                {/*    <div className="compBox">*/}
                {/*        <FuncDemo age="20"/>*/}
                {/*        <Room1 car="bmw" bike="scooty"/>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="compBox">*/}
                {/*        <ClassDemo state="up"/>*/}
                {/*              <Room2 car="swift" bike="fz"/>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default App;