import React from 'react';
import { Row, Col, Button, Modal, Form } from 'react-bootstrap';
import { connect } from 'react-redux'
import Aux from '../../hoc/_Aux';
import { ShipmentsServices } from '../../services/Shipments';
import { assignOrder, toggleAssign } from '../../actions/index';
class Assign extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDropChange = this.handleDropChange.bind(this);
    debugger;
    this.state = { ...this.state,AllBikers: [], BikesSelected: 1 }
  }

  handleDropChange(event) {
    this.setState({ [event.target.id]: event.target.selectedIndex+1 });
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let BikeId= this.state.BikesSelected;
    let shipmentSelected= this.props.shipmentSelected;
    ShipmentsServices.assignOrder(BikeId,shipmentSelected)
      .then((res) =>
      {
        this.props.assignOrder(res.data);
        this.props.toggleAssign();
      });
  }
  render() {
    return (
            <Aux>
                <Row>
                    <Col md={12} xl={12}>
                      <Modal show={this.props.AssignOpen} onHide={this.props.toggleAssign}>
                        <Modal.Header closeButton>
                          <Modal.Title>Assign Shipment</Modal.Title>
                        </Modal.Header>
                        <Form  onSubmit={this.handleSubmit}  >
                        <Modal.Body>
                          <h4>Assign shipment {this.props.shipmentTitle} to a biker</h4>
                          <p>You can select one of the bikers below</p>
                          <h4>Bikers</h4>    
                          <Form.Group controlId="BikesSelected">
                              <Form.Label>Select Biker </Form.Label>
                                  <Form.Control as="select" value={this.state.BikesSelected} onChange={this.handleDropChange}>
                                  {
                                   
                                      this.props.BIKERS.map((val,index) => {
                                        return (
                                          <option key={index} id={val.ID}>{val.BIKER_NAME}</option>
                                        );
                                      })
                                      
                                  } 
                                  </Form.Control>
                          </Form.Group> 
                        </Modal.Body>
                        <Modal.Footer>
                          <Button type="submit" variant="success">Assign </Button>
                          <Button variant="danger" onClick={this.props.toggleAssign}>Close</Button>
                        </Modal.Footer>
                        </Form>
                      </Modal>
                    </Col>
                </Row>
            </Aux>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    assignOrder: (obj) => dispatch(assignOrder(obj)),
    toggleAssign: () => dispatch(toggleAssign()),
  };
}
function mapStateToProps(state) {
  debugger;
  return { 
    
    BIKERS: state.AllBikers,
    shipments: state.AllOrders,
    shipmentSelected: state.shipmentSelected,
    AssignOpen: state.AssignOpen,
    shipmentTitle: state.AllOrders.filter((obj) => obj.ID === state.shipmentSelected)[0] !== undefined ? state.AllOrders.filter((obj) => obj.ID === state.shipmentSelected)[0].MAIN_TITLE : '' ,
    BikesSelected: state.BikesSelected
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Assign);