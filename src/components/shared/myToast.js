import React  from 'react';
import { Row, Col, Button, Modal, Form, Toast } from 'react-bootstrap';
import { connect } from 'react-redux'
import { setShow  } from '../../actions/index';
class Mytoast extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...this.state }
  }

  render() {
    
    return (
        <Row style={{ paddingBottom: 20 }}>
        <Col xs={12}    >
          <Toast onClose={this.props.setShow}  show={this.props.ToastOpen} delay={3000} autohide>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">Notifications</strong>
              <small>now</small>
            </Toast.Header>
            <Toast.Body>Operation Successed</Toast.Body>
          </Toast>
        </Col>
      </Row>
    );
  }
}
function mapDispatchToProps(dispatch) {
    return {
        setShow: (obj) => dispatch(setShow(obj)),
      
    };
  }
function mapStateToProps(state) {
    
    return { 
      ToastOpen: state.ToastOpen
    };
  }
 
export default  connect(mapStateToProps,mapDispatchToProps
)(Mytoast) ;