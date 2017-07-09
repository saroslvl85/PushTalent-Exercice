import * as React from 'react';

// This fonction make the color change on the button on the first click
function ChangeStyle() {
       var elem = document.getElementById("Button1");
       if (elem == null)
         return;
       elem.style.background = '#ff4848';
       
}

//Main Class
export class Button extends React.Component {
    render() {

        //Style sheet of the Button
        var buttonStyle = {
            fontSize: 50,
            background: "#ffb516",
            color : "#FFFFFF",
            width: 500,
            heigth: 500,
            border: "none",
            textAlign: "center",
            display: "block",
            margin: "auto"  
        }
  
        //Set the Background color
        document.body.style.backgroundColor =  "#25353f";
        document.body.style.position = "relative";
        

        //Try to make the button in center
        /*var centerDiv = {
            position: "absolute" as "absolute",
            top: "50%",
            left: "30%",  
            margin: "auto"      
        }*/


        //Test on linearGradient
      /*  function degraded() {
            <svg width="15" height="71" fill="url(#Gradient-1)">
                <defs>
                    <linearGradient id="Gradient-1" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#25353f"/> 
                    <stop offset="100%" stop-color="#5b6c72"/>    
                    </linearGradient>
                </defs>
            </svg>
        }*/

        //Create the button
        return (   
            <div /*style={centerDiv}*/>           
                     <button id="Button1" style={buttonStyle}
                                onClick={() => ChangeStyle()}>
                        Pushtalents</button>
            </div>
        )


    }
}

export default Button;