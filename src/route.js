import React from 'react';

 
const Login = React.lazy(() => import('./components/Authentication/SignIn/Login'));

const route = [
    { path: '/auth/login', exact: true, name: 'Saloodo Tool Login', component: Login } 
];

export default route;