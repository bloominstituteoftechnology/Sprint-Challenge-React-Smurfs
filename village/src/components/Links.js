import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SmurfForm from './SmurfForm';
import Smurfs from './Smurf';

const Links = () => (
  <Router>
    <div>
      <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Smurfs" />
      <OldSchoolMenuLink to="/smurf-form" label="Smurf Form" />
      <hr />
      <Route exact path="/" component={Smurfs} />
      <Route path="/smurf-form" component={SmurfForm} />
    </div>
  </Router>
);

const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => (
      <div className={match ? "active" : ""}>
        {match ? "> " : ""}
        <Link to={to}>{label}</Link>
      </div>
    )}
  />
);

const Home = () => (
  <div>
    <h2>Smurfs</h2>
  </div>
);

const Form = () => (
  <div>
    <h2>Smurf Form</h2>
  </div>
);

export default Links;