import React from 'react';
import { shallow } from 'enzyme';
import App from './App/index';
import Dashboard from './components/Manager/Default';
import Assign from './components/Manager/AssignPopUp';
import BikerDashboard from './components/Biker/Default';
import OrderPopUp from './components/Biker/OrderPopUp';
import { createMemoryHistory } from "history";

describe('App', () => {
     let wrapper;
     beforeEach(() => wrapper = shallow(<App />));
   it('should base path is /', () => {
     const history = createMemoryHistory();
     expect(history.location.pathname).toBe("/");
   });
 
 });
describe('Dashboard', () => {

  it("Manager Dashboard Component should render correctly", () => {
    const component = shallow(<Dashboard />);
  });
  it("Manager Dashboard Component should render initial layout", () => {
    const component = shallow(<Dashboard />);
    expect(component.getElements()).toMatchSnapshot();
  });
 
});
describe('Assign', () => {
    it("Assign Order Component should render correctly", () => {
        const component = shallow(<Assign />);
    });
    it("Assign Order Component should render initial layout", () => {
        const component = shallow(<Assign />);
        expect(component.getElements()).toMatchSnapshot();
    });
});

describe('BikerDashboard', () => {
    it("Biker Dashboard Component should render correctly", () => {
      const component = shallow(<BikerDashboard />);
    });
    it("Biker Dashboard Component should render initial layout", () => {
      const component = shallow(<BikerDashboard />);
      expect(component.getElements()).toMatchSnapshot();
    });
});

describe('OrderPopUp', () => {
    it("Update Order Component should render correctly", () => {
      const component = shallow(<OrderPopUp />);
    });
    it("Update Order Component should render initial layout", () => {
      const component = shallow(<OrderPopUp />);
      expect(component.getElements()).toMatchSnapshot();
    });
});