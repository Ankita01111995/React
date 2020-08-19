import React from "react";
import ReactDOM from "react-dom";
let currTime=new Date().getHours();

if(currTime>=1 && currTime<12)
{
    ReactDOM.render(
        <>
        <h1>hello Sir,good morning</h1>
        </>,
        document.getElementById('root')
        );
}else if(currTime>=12 && currTime<19)
{
    ReactDOM.render(
        <>
        <h1>hello Sir,good afternoon</h1>
        </>,
        document.getElementById('root')
        );
}
else
{

ReactDOM.render(
    <>
    <h1>hello Sir,good night</h1>
    </>,
    document.getElementById('root')
    );
}