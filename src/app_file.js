import React from "react";

import Back from "./background/background";
import Input from "./component/input_folder/input"
import DataZone from "./component/data_zone/data_zone"

import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            data: "",
            err: "",
            onadd: true
        }
        this.add_element = this.add_element.bind(this)
        this.get_value = this.get_value.bind(this)
        this.remove_element = this.remove_element.bind(this)
        this.update_element = this.update_element.bind(this)
        this.apply_update = this.apply_update.bind(this)
        this.myRef = React.createRef();
    }
    input_value = ""
    el = null
    get_value(params) {
        this.input_value = params.target.value
        this.e = params.target;
    }

    add_element() {
        if (this.input_value === "") {
            this.setState({ data: this.state.data, err: "empty field" })
            return
        }
        let temp = this.state.data === "" ? [] : JSON.parse(this.state.data)
        temp.unshift({
            content: this.input_value, date: Date.now()
        })
        this.e.value = ""
        this.input_value = ""
        this.setState({
            data: JSON.stringify(temp),
            err: "",
        })
    }
    remove_element(element) {
        let temp = this.state.data === "" ? [] : JSON.parse(this.state.data)
        temp.splice(Number(element), 1)
        this.setState({
            data: JSON.stringify(temp),
            err: "",
        })
    }
    update_element(element) {
        let temp = this.state.data === "" ? [] : JSON.parse(this.state.data)
        let v = temp[Number(element)]
        this.myRef.current.value = v.content
        this.setState({
            data: JSON.stringify(temp),
            erAppr: "",
            onadd: false
        })
        this.el = element;

    }
    apply_update() {

        let temp = this.state.data === "" ? [] : JSON.parse(this.state.data)
        if (this.myRef.current.value === "") {
            this.setState({
                data: JSON.stringify(temp),
                err: "empty field",
                onadd: false
            })
            return
        }
        temp[Number(this.el)].content = this.myRef.current.value
        this.myRef.current.value = ""
        this.setState({
            data: JSON.stringify(temp),
            err: "done",
            onadd: true
        })
    }
    render() {
        return (
            <div >
                <Back></Back>
                <Container style={{marginTop:"30px"}}>
                    <Row>
                        <Col xs={{ order: 'first' }} md={{ span: 4, offset: 4 }}>
                            <Input handy={this.get_value} id="inputname" myref={this.myRef}></Input>
                        </Col>
                        <Col xs={{ order: 'last' }} md={{ span: 1, offset: 0 }}>
                            {this.state.onadd ?
                                <Button variant="outline-secondary" onClick={this.add_element}>add</Button> :
                                <Button onClick={this.apply_update}>update</Button>}
                        </Col>
                    </Row>
                </Container>
                <div>
                    <DataZone
                        data={this.state.data}
                        rm_element={this.remove_element}
                        up_element={this.update_element}>
                    </DataZone></div>
                <div> {this.state.err}</div>
            </div>
        )
    }
}
export default App