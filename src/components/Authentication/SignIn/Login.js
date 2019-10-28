import React from 'react';
import { connect } from 'react-redux'
import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import {loginAuth} from '../../../actions/index';
import { Auth } from '../../../services/Auth';
import PropTypes from 'prop-types';
class LoginForm extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { ...this.state }
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    
    event.preventDefault();
    Auth.login(this.state)
     .then((res) => 
     {
       if(res.role == '0'){
         this.setState({ error: res.data });
       }else{
          var obj={};
          obj.role = res.role;
          obj.userName = res.userName;
            if(res.role == '1'){
              obj.MANAGERID = res.userId;
            }else{
              obj.BIKERID = res.userId;
            }
            this.props.loginAuth(obj);
            this.goToIndex(res)
       }
     });
   }
   goToIndex(res) {
    if(res != undefined){
      if(res.role=='1'){
        this.context.router.history.push('/dashboard/manager');
      }else{
        this.context.router.history.push('/dashboard/biker');
      }
    }
  }
    renderAlert() {
        if (this.state.error) {
          return (
            <div className="alert alert-danger">
              <strong>Oops!</strong> {this.state.error}
            </div>
          );
        }
      }
    render () {
      const { username,password } = this.props;
        return(
            <Aux>
                <Breadcrumb/>
                <div className="auth-wrapper">
                    <div className="auth-content">
                        <div className="auth-bg">
                            <span className="r"/>
                            <span className="r s"/>
                            <span className="r s"/>
                            <span className="r"/>
                        </div>
                        <div className="card">
                            <div className="card-body text-center">
                             <form onSubmit={this.handleSubmit}>
                                <div className="mb-4">
                                    <i className="feather icon-unlock auth-icon"/>
                                </div>
                                <h3 className="mb-4">Login</h3>
                                <div className="input-group mb-3">
                                     <input id="username" value={username} onChange={this.handleChange}   type="text" placeholder="Username..." className="form-control" />
                                </div>
                                <div className="input-group mb-4">
                                     <input id="password" value={password} onChange={this.handleChange}  type="password" placeholder="Password..." className="form-control" />
                                </div>
                               
                                {this.renderAlert()}
                                <button type="submit" className="btn btn-primary shadow-2 mb-4">Login</button>
                               </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}
function mapDispatchToProps(dispatch) {
  return {
    loginAuth: obj => dispatch(loginAuth(obj))
  };
}
function mapStateToProps(state) {
    return { 
      errorMessage: state.error,
      username: state.username,
      password: state.password 
    };
  }
export default connect(
  mapStateToProps,
  mapDispatchToProps)(LoginForm);