import React, {useState} from 'react';

export default function Room1 (props)
{
    let a=10;
    const [car, setCarprice] = useState(3000);
    const [bike, setBikeprice] = useState(7000);
    const changeCar = (newCar) => {
        a=87;
        console.log(a);
        setCarprice(newCar);
    };

    const changeBike = (newBike) => {
        setBikeprice(newBike);
    };

    return(
        <div>
            the value of a {a}
            this is Room1<br/>
            car name is-{props.car}
            bike name is-{props.bike}
            <button onClick={() => changeCar(5000)}>Change Car Price</button>
            THE CAR PRICE IS {car}
            <button onClick={() => changeBike(1000)}>Change Bike Price</button>
            The Bike price is {bike}
            <button onClick={() => setCarprice(9000)}>Change Car Price</button>
            THE newCAR PRICE IS {car}
        </div>
    )
}