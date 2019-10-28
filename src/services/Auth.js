import axios from 'axios';
import config from '../config';
axios.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (error.status == 401) {
    Auth.logout();
  }
});

export const Auth = {
  authenticated() {
    return !!localStorage.getItem('token');
  },
  login({username, password}) {
    return axios.post(`${config.apiUrl}users/signin`, {username, password})
      .then((res) => {
        let {data,role, token,userId,userName} = res.data;
        debugger;
        localStorage.setItem('token', token);
        localStorage.setItem('role', role);
        localStorage.setItem('userId', userId);
        localStorage.setItem('userName', userName);
      
        if(role == '0'){
          return {data: data, role:role, userId: userId  }
        }else{
          return {role:role, userId: userId,userName:userName}
        }
        
      });
  },
  logout() {
    localStorage.removeItem('role');
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    axios.interceptors.request.use((config) => {
      delete config.headers['authorization'];
      return config;
    });
    window.location = '/auth/login';
  }
};
