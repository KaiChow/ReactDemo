import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import './App.css';
import Department from '../departmentList/DepartmentList';
import Doctor from '../docterlist/DoctorList'
// import Register from '../register/Register'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <Route exact path="/" component={Register}></Route> */}
          <Route exact path="/" component={Department}></Route>
          <Route exact path="/doctor" component={Doctor}></Route>
        </div>
      </Router>
    );
  }
}
export default App;
