import React from "react";

import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

class Input extends React.Component {

    render() {
        return (
            <InputGroup className="mb-3">
                <Form.Control 
                    type={"text"}
                    onChange={this.props.handy}
                    value={this.props.vval}
                    ref={this.props.myref}>
                 </Form.Control>
            </InputGroup>
        )
    }
}
export default Input