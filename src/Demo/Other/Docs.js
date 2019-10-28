import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";

class Docs extends Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card title='Quick Installation' isOption>
                             
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Docs;