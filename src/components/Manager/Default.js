import React from 'react';
import {Row, Col, Card, Table, Pagination,FormGroup, Button,Modal } from 'react-bootstrap';
import { connect } from 'react-redux'
import Aux from "../../hoc/_Aux";
import {  toggleAssign, getAllBikers,getAllShipments} from "../../actions/index";
import Assign from './AssignPopUp'
import PropTypes from 'prop-types';
import { ShipmentsServices } from '../../services/Shipments';
import Mytoast from '../shared/myToast'
import { createBrowserHistory } from 'history';
export const browserHistory = createBrowserHistory();

class Dashboard extends React.Component {
    static contextTypes = {
        router: PropTypes.object
      }
    constructor(props) {
        super(props);
        this.state = { ...this.state, ShipmentId: 0 };
        
        ShipmentsServices.getAllBikers()
        .then((res) => 
        {
            debugger;
            this.props.getAllBikers(res.data);
        });
        ShipmentsServices.getAllShipments()
        .then((res) => 
        {
            this.props.getAllShipments(res.data);
        });
        this.GetBikerName = this.GetBikerName.bind(this);
    }
    componentWillMount() {
          
        if (!this.props.authenticated || this.props.role != '1') {
            this.context.router.history.push('/auth/login');
        }
    }
    GetBikerName(BikerId) {
        if(BikerId != undefined && BikerId != ''){
            var bikers = this.props.BIKERS;
            var BikerName='';
            
            if(BikerId != ''){
                BikerName = bikers.filter(obj => 
                    obj.ID == BikerId
                ) != undefined ? bikers.filter(obj => 
                   obj.ID == BikerId
               )[0].BIKER_NAME : '';
            }
            return BikerName;
        }
        return '';
    }
    
    render() {
        return (
            <Aux>
                <Mytoast />
                
                <Row>
                    <Col md={12} xl={12}>
                        <h3>Welcome, {this.props.userName}</h3>
                    </Col>
                    <Col md={12} xl={12}>
                        <Card className='Recent-Users'>
                            <Card.Header>
                                <Card.Title as='h2'>All Shipments</Card.Title>
                            </Card.Header>
                            <Card.Body className='px-0 py-2'>
                                <Table  responsive hover pagination="true">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Shipment</th>
                                        <th>Status</th>
                                        <th>Valid Date</th>
                                        <th>Biker</th>
                                        <th>Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        this.props.AllOrders.map((val, index) => {
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
                                                        <h6 className="text-muted">{val.VALID_DATE}</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="text-muted">{this.GetBikerName(val.BIKERID)}</h6>
                                                    </td>  
                                                    <td> {val.STATUS == 'WAITING' && <Button  onClick={() => this.props.toggleAssign(val.ID)} variant="primary">Assign</Button>}
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
                <Assign />
            </Aux>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return {
      toggleAssign: id => dispatch(toggleAssign(id)),
      getAllBikers: obj => dispatch(getAllBikers(obj)),
      getAllShipments: obj => dispatch(getAllShipments(obj))
        };
  }
function mapStateToProps(state) {
    return { 
        AllOrders: state.AllOrders,
        BIKERS: state.AllBikers,
        authenticated: state.authenticated,
        role: state.role,
        userName: state.userName
    };
  }
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Dashboard);