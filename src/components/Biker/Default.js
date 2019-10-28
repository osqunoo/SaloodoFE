import React from 'react';
import {Row, Col, Card, Table, Pagination,FormGroup, Button,Modal } from 'react-bootstrap';
import { connect } from 'react-redux'
import Aux from "../../hoc/_Aux";
import {  toggleOrderPopUp,getReservedOrders,updateOrderAction } from "../../actions/index";
import OrderPopUp from './OrderPopUp'
import Mytoast from '../shared/myToast'
import PropTypes from 'prop-types';
import { ShipmentsServices } from '../../services/Shipments';
import ORDER_STATUS from '../../constants/orderStatus';
class BikerDashboard extends React.Component {
    static contextTypes = {
        router: PropTypes.object
      }
    constructor(props) {
        super(props);
        this.state = { ...this.state};
        ShipmentsServices.getBikerOrders(this.props.BIKERID)
        .then((res) => 
        {
            this.props.getReservedOrders(res.data);
        });
    }
 
    componentWillMount() {
        if (!this.props.authenticated || this.props.role != '2') {
            this.context.router.history.push('/auth/login');
        }
      }
    explicitDelivered(shipmentId){  
        var EXPECTED_DELIVER_DATE= new Date().toUTCString();
        ShipmentsServices.updateOrder(shipmentId,this.props.BIKERID,ORDER_STATUS.DELIVERED,'',EXPECTED_DELIVER_DATE )
        .then((res) => 
        {
            this.props.updateOrderAction(res.data);
        });
    }
    render() {
        return (
            <Aux>
                <Mytoast />
                <Row>
                    <Col md={12} xl={12}>
                            <h3>Welcome, {this.props.userName}</h3>
                    </Col>
                     <Col md={4} xl={4}>
                         <Card>
                            <Card.Body className='border-bottom'>
                                <div className="row d-flex align-items-center">
                                    <div className="col-auto">
                                        <i className="feather icon-zap f-30 text-c-red"/>
                                    </div>
                                    <div className="col">
                                        <h3 className="f-w-300">{this.props.totalAssigned}</h3>
                                        <span className="d-block text-uppercase">current assigned orders</span>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} xl={4}>
                         <Card>
                            <Card.Body>
                                <div className="row d-flex align-items-center">
                                    <div className="col-auto">
                                        <i className="feather icon-map-pin f-30 text-c-blue"/>
                                    </div>
                                    <div className="col">
                                        <h3 className="f-w-300">{this.props.totalPickedUp}</h3>
                                        <span className="d-block text-uppercase">total picked-up orders</span>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} xl={4}>
                         <Card>
                            <Card.Body>
                                <div className="row d-flex align-items-center">
                                    <div className="col-auto">
                                        <i className="feather icon-check-square f-30 text-c-black"/>
                                    </div>
                                    <div className="col">
                                        <h3 className="f-w-300">{this.props.totalDelivered}</h3>
                                        <span className="d-block text-uppercase">total Delivered orders</span>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={12} xl={12}>
                        <Card className='Recent-Users'>
                            <Card.Header>
                                <Card.Title as='h2'>My Orders</Card.Title>
                            </Card.Header>
                            <Card.Body className='px-0 py-2'>
                                <Table  responsive hover pagination="true">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Shipment</th>
                                        <th>Status</th>
                                        <th>PickUp Date</th>
                                        <th>Expected Delivered Date</th>
                                        <th>Valid Date</th>
                                        <th>Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        this.props.shipmentReserved.map((val, index) => {
                                            return (
                                                <tr key={index} className="unread">
                                                    <td>{val.ID}</td>
                                                    <td>
                                                    <h6 className="mb-1">{val.MAIN_TITLE}</h6>
                                                         <p className="m-0">From:{val.ORIGIN} - To:{val.DESTINATION}</p>
                                                    </td>
                                                    <td>
                                            <h6 className="text-muted">
                                            {val.STATUS == 'WAITING' && <i className="fa fa-circle text-c-green f-10 m-r-15"/>} 
                                            {val.STATUS == 'ASSIGNED' && <i className="fa fa-circle text-c-red f-10 m-r-15"/>}
                                            {val.STATUS == 'PICKED_UP' && <i className="fa fa-circle text-c-blue f-10 m-r-15"/>} 
                                            {val.STATUS == 'DELIVERED' && <i className="fa fa-circle text-c-black f-10 m-r-15"/>}
                                            {val.STATUS}</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="text-muted">{val.PICKED_UP_DATE}</h6>
                                                    </td> 
                                                    <td>
                                                        <h6 className="text-muted">{val.EXPECTED_DELIVER_DATE}</h6>
                                                    </td> 
                                                    <td>
                                                        <h6 className="text-muted">{val.VALID_DATE}</h6>
                                                    </td> 
                                                    <td>
                                                    {val.STATUS == 'ASSIGNED' && 
                                                    <Button  onClick={() => this.props.toggleOrderPopUp(val.ID)} variant="primary">Picked Up</Button>}
                                                    {val.STATUS == 'PICKED_UP' && 
                                                    <Button onClick={() => this.explicitDelivered(val.ID)}   variant="danger">Explicit Delivered</Button>}
                                                    </td>
                                                </tr>
                                                 );
                                            })
                                    }
                                    </tbody>
                                </Table>
                               
                            </Card.Body>
                        </Card> 
                        
                    </Col>
                </Row>
                <OrderPopUp />
               
            </Aux>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return {
        toggleOrderPopUp: id => dispatch(toggleOrderPopUp(id)),
        getReservedOrders: obj => dispatch(getReservedOrders(obj)),
        updateOrderAction: obj => dispatch(updateOrderAction(obj))
    };
  }
function mapStateToProps(state) {
    return { 
        BIKERID: state.BIKERID,
        authenticated: state.authenticated,
        role: state.role,
        shipmentReserved: state.AssignedOrders,
        totalAssigned: state.totalAssigned,
        totalPickedUp: state.totalPickedUp,
        totalDelivered: state.totalDelivered,
        userName: state.userName
    };
  }  
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(BikerDashboard);