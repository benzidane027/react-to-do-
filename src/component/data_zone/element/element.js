import React from "react";

import "./style.css"

class Element extends React.Component {
    constructor() {
        super()
        this.state = {
            data: ""
        }
        //     this.print_value=this.print_value.bind(this)
        //     this.get_value=this.get_value.bind(this)
    }
    ftimeSince(timeStamp) {
        var now = new Date(),
          secondsPast = (now.getTime() - timeStamp) / 1000;
        if (secondsPast < 60) {
          return parseInt(secondsPast) + 's';
        }
        if (secondsPast < 3600) {
          return parseInt(secondsPast / 60) + 'm';
        }
        if (secondsPast <= 86400) {
          return parseInt(secondsPast / 3600) + 'h';
        }
        if (secondsPast > 86400) {
        let  day = timeStamp.getDate();
         let month = timeStamp.toDateString().match(/ [a-zA-Z]*/)[0].replace(" ", "");
         let year = timeStamp.getFullYear() === now.getFullYear() ? "" : " " + timeStamp.getFullYear();
          return day + " " + month + year;
        }
      }
    render() {
        return (

            <div id="main">
            
               
                <button id="update_button" onClick={this.props.on_update}>
                    
                </button>
                <span id="sub_main">
                    <span id="number">
                        {this.props.number}
                    </span>
                    <span id="content">
                        {" "+this.props.content+" "}
                    </span>
                    <span id="date">
                        {this.ftimeSince(Number(this.props.date))+"  ago"}
                    </span>
                </span>
                <button id="remove_button" onClick={this.props.on_remove}>
                    
                </button>

            </div>

        )
    }
}
export default Element