import React from "react";
import Element from "./element/element";
class DataZone extends React.Component {
  
    
    render() {
        return (
            <div /*style={{ border: "1px solid black", padding: "10px", display: "inline-block" }}*/>
                {
                    this.props.data!==""?
                    JSON.parse(this.props.data).map((item, index) =>
                    <Element 
                        key={index} 
                        number={index}
                        content={item.content} 
                        date={item.date}
                        on_remove={()=>this.props.rm_element(index)}
                        on_update={()=>this.props.up_element(index)}
                        >    
                    </Element>):null
                }

            </div>
        )
    }
}
export default DataZone