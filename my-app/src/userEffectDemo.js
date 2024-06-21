import React,{ useEffect,useState} from"react";

export default function UserEffectDemo()
{
    const [color, setColor] = useState("Green");
    useEffect(()=>{
        alert("i will render all time");
    });
    useEffect(()=>{
        alert("i will render only one time");
    },[]);
    useEffect(()=>{
        alert("i will render for change in blue");
    },[color]);
    return(
        <div>I am userEffectDemo
           The state current colour {color}
        <button onClick= {()=> setColor("blue")}>click me</button>
        </div>

    )
}
