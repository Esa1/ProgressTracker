import React from "react"
import styled from "styled-components"

const StyledIcon = styled.div`
    background-color: ${ ({primary}) => primary ? 'red' : 'blue' };
`

/*const StyledIcon = styled.i`
    <i className="far fa-clock" style={props.primary ? {color:red} : {color:green}}>
`*/
export default function Icon({primary}) {
    return (
        <StyledIcon primary={primary}>💅🏻</StyledIcon>
    )
    /*        <i className="far fa-clock" style={props.primary ? "color:red" : "color:green"}></i>
*/
}

 /*style={"font-size:48px;color:red;"}

 const StyledButton = styled.button`
    background-color: ${({primary}) => primary? 'red' : 'blue'};
    display: flex;
    justify-content: center;
    padding: 5px;
    margin: 5px;
    border-radius: 15px;
`


const Button = ({text, primary}) => {
    return (
        <StyledButton primary={primary}>{text}</StyledButton>
    )
}*/