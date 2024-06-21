import React, {Component, useState} from "react";

export default function ConditionalDemo()
{
    const [show, setShow] = useState(true);
    return(<div>
        This is Conditional Demo
        <br/>
        <button onClick={() => setShow(false)}>Change Button</button>
        {show?"hello user":""}
    </div>);
}