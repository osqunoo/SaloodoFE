import React from 'react';
import { Row, Col, Button, Modal, Form } from 'react-bootstrap';
import { connect } from 'react-redux'
import DatePicker from 'react-datepicker';
import Aux from '../../hoc/_Aux';
import { updateOrderAction, toggleOrderPopUp } from '../../actions/index';
import ORDER_STATUS from '../../constants/orderStatus';
import { ShipmentsServices } from '../../services/Shipments';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class OrderPopUp extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePickDateChange = this.handlePickDateChange.bind(this);
    this.handleDeliveredChange = this.handleDeliveredChange.bind(this);
    this.state = { ...this.state }
  }

  handlePickDateChange(date) {
    this.setState({ PICKED_UP_DATE: date });
  } 
  
  handleDeliveredChange(date) {
    this.setState({ EXPECTED_DELIVER_DATE: date });
  }
  handleSubmit(event) {
    event.preventDefault();
    var PICKED_UP_DATE= this.state.PICKED_UP_DATE != '' ? this.state.PICKED_UP_DATE.toUTCString() : '';
    var EXPECTED_DELIVER_DATE= this.state.EXPECTED_DELIVER_DATE != '' ? this.state.EXPECTED_DELIVER_DATE.toUTCString() : '';
    var shipmentSelected= this.props.shipmentSelected;
    ShipmentsServices.updateOrder(shipmentSelected,this.props.BIKERID,ORDER_STATUS.PICKED_UP,PICKED_UP_DATE,EXPECTED_DELIVER_DATE )
      .then((res) => 
      {
        this.props.updateOrderAction(res.data);
        this.props.toggleOrderPopUp();
      });
  }
       
  render() {
    return (
            <Aux>
                <Row>
                    <Col md={12} xl={12}>
                      <Modal show={this.props.OrderOpen} onHide={this.props.toggleOrderPopUp}>
                        <Modal.Header closeButton>
                          <Modal.Title>PickUp Order Timestamp</Modal.Title>
                        </Modal.Header>
                        <Form  onSubmit={this.handleSubmit}  >
                        <Modal.Body>
                          <h4>Pick Up</h4>
                          <p>If you pickup this order, Please select the pickup & expected Timestamp</p>
                          <Form.Group as={Row} controlId="PickUpTimestamp">
                              <Form.Label column sm="6" md="6" xl="6">PickUp Timestamp </Form.Label>
                              <DatePicker sm="6" md="6" xl="6"
                                selected={ this.state.PICKED_UP_DATE }
                                onChange={ this.handlePickDateChange }
                                name="PICKED_UP_DATE" 
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={15}
                                timeCaption="time"
                                dateFormat="MMMM d, yyyy h:mm aa"
                                required
                              />
                          </Form.Group> 
                          <Form.Group as={Row} controlId="DeliveredTimestamp">
                              <Form.Label column sm="6">Delivered Timestamp </Form.Label>
                              <DatePicker sm="6"
                                selected={ this.state.EXPECTED_DELIVER_DATE }
                                onChange={ this.handleDeliveredChange }
                                name="EXPECTED_DELIVER_DATE"
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={15}
                                timeCaption="time"
                                dateFormat="MMMM d, yyyy h:mm aa"
                                required
                              />
                          </Form.Group> 
                        </Modal.Body>
                        <Modal.Footer>
                          <Button type="submit" variant='success'>PickUp Order </Button>
                          <Button variant='danger' onClick={this.props.toggleOrderPopUp}>Close</Button>
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
    updateOrderAction: (obj) => dispatch(updateOrderAction(obj)),
    toggleOrderPopUp: (order) => dispatch(toggleOrderPopUp(order)),
  };
}
function mapStateToProps(state) {
  return { 
    BIKERID: state.BIKERID,
    BIKERS: state.AllBikers,
    shipments: state.AllOrders,
    shipmentSelected: state.shipmentSelected,
    OrderOpen: state.OrderOpen,
    BikesSelected:state.BikesSelected
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderPopUp);