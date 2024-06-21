
import React from "react";
import PropTypes from "prop-types";

export default function ContactUs({age= 100 })
{
    return(
        <div>This is ContactUs Component
         I am {age} Years Old</div>
    );
}
ContactUs.propTypes={
    age:PropTypes.number,
};