import * as React from 'react';


function ChangeStyle() {
       var elem = document.getElementById("Button1");
       if (elem == null)
         return;
       elem.style.background = '#ff4848';
       
}

export class Button extends React.Component {
    render() {

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
  
        document.body.style.backgroundColor = "#25353f";
        document.body.style.position = "relative";
        
        var centerDiv = {

            position: "absolute" as "absolute",
            top: "0%",
            left: "0%",

            
        }
        
        return (       
                <div style={centerDiv}>
                    <button id="Button1" style={buttonStyle}
                            onClick={() => ChangeStyle()}>
                    Pushtalents</button>
                </div>
        )


    }
}

export default Button;