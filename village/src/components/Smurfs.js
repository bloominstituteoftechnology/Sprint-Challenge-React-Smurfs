import React from "react";
import Smurf from "./Smurf";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CarouselSmurf from "./Carousel";
const SmurfSyle = styled.div`
  margin-top: 30px;
  ul {
    margin: 0 auto;
  }
`;

const Smurfs = ({ smurfs, resetForm }) => {
  return (
    <React.Fragment>
      <CarouselSmurf />
      <SmurfSyle>
        <ul>
          {smurfs.map(smurf => {
            return (
              <Link
                style={{ textDecoration: "none" }}
                to={`/smurf/${smurf.id}`}
                onClick={() => resetForm(smurf.id)}
                key={smurf.id}
              >
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  resetForm={resetForm}
                />
              </Link>
            );
          })}
        </ul>
      </SmurfSyle>
    </React.Fragment>
  );
};

Smurfs.propTypes = {
  smurfs: PropTypes.arrayOf(
    PropTypes.shape({
      // age: PropTypes.string,
      height: PropTypes.string,
      id: PropTypes.String,
      name: PropTypes.string
    })
  ),
  isOpen: PropTypes.bool,
  name: PropTypes.string,
  // age: PropTypes.string,
  height: PropTypes.string
};

export default Smurfs;
