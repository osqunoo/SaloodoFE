import React, { Component, Suspense } from 'react';
import { Switch, Route,Redirect  } from 'react-router-dom';
import Loadable from 'react-loadable';
import '../../node_modules/font-awesome/scss/font-awesome.scss';
import '../style.css';
//import 'font-awesome/scss/font-awesome.scss';
import Loader from './layout/Loader'
import Aux from "../hoc/_Aux";
import ScrollToTop from './layout/ScrollToTop';
import routes from "../route";
import cookie from 'react-cookies';
 import ManagerDashboard from '../components/Manager/Default';
 //const ManagerDashboard = React.lazy(() => import('../components/Manager/Default'));
const BikerDashboard = React.lazy(() => import('../components/Biker/Default'));
const Login = React.lazy(() => import('../components/Authentication/SignIn/Login')); 

const AdminLayout = Loadable({
    loader: () => import('./layout/AdminLayout'),
    loading: Loader
});


class App extends Component {
  render() {
    const menu = routes.map((route, index) => {
      return (route.component) ? (
          <Route
              key={index}
              path={route.path}
              exact={route.exact}
              name={route.name}
              render={props => (
                  <route.component {...props} />
              )} />
      ) : (null);
    });

    return (
        <Aux>
            <ScrollToTop>
                <Suspense fallback={<Loader/>}>
                    <Switch>
                        {menu}
                        <Route path="/" component={AdminLayout} />
                    </Switch>
                </Suspense>
            </ScrollToTop>
        </Aux>
    );
}
}

export default App;
