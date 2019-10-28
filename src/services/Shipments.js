import axios from 'axios';
import config from '../config';

export const ShipmentsServices = {
  getAllShipments() {
    const token = localStorage.getItem('token');
    const options = {
      headers: {'authorization':  `Bearer ${token}`}
    };
    return axios.get(`${config.apiUrl}shipments/getAllShipments`,
    options)
      .then((res) => {
        return {data: res.data}
      });
  },
  getAllBikers() {
    const token = localStorage.getItem('token');
    const options = {
      headers: {'authorization':  `Bearer ${token}`}
    };
    return axios.get(`${config.apiUrl}shipments/getAllBikers`,
    options)
      .then((res) => {
        return {data: res.data}
      });
  },
  getBikerOrders(BikerId) {
    const token = localStorage.getItem('token');
    const options = {
      headers: {'authorization':  `Bearer ${token}`}
    };
    return axios.post(`${config.apiUrl}shipments/getBikerOrders`,
    {BikerId},options)
      .then((res) => {
        return {data: res.data}
      });
  },
  assignOrder(BikerId,ShipmentId) {
    const token = localStorage.getItem('token');
    const options = {
      headers: {'authorization':  `Bearer ${token}`}
    };
    return axios.post(`${config.apiUrl}shipments/assignOrder`,
    {BikerId,ShipmentId},options)
      .then((res) => {
        return {data: res.data}
      });
  },
  updateOrder(ShipmentId, BikerId, Status, PickUpDate, DeliveredDate) {
    const token = localStorage.getItem('token');
    const options = {
      headers: {'authorization':  `Bearer ${token}`}
    };
    return axios.post(`${config.apiUrl}shipments/updateOrder`,
    {ShipmentId, BikerId, Status, PickUpDate, DeliveredDate },options)
      .then((res) => {
        return {data: res.data}
      });
  }
 
};
