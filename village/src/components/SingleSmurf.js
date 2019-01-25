import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import styled from "styled-components";
import { Card, Button, CardTitle, CardText, CardImg } from "reactstrap";

const SingleSmurfStyle = styled.div`
  margin-top: 100px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  .fas {
    font-size: 25px;
    color: #314544;
    &:hover {
      color: #c3ecf1;
    }
  }
  span {
    font-size: 12px;
    margin-left: 10px;
  }
`;

class SingleSmurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: null
    };
  }
  componentDidMount() {
    this.fetchSingleSmurf();
  }
  componentWillReceiveProps(nextProp) {
    if (this.props.match.params.id !== nextProp.match.params.id) {
      this.fetchSingleSmurf(nextProp.match.params.id);
    }
  }
  fetchSingleSmurf = e => {
    axios
      .get(`/smurfs/${this.props.match.params.id}`)
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err));
  };
  render() {
    const smurf = this.state.smurfs;
    const { deleteSmurf, updateSmurf } = this.props;
    if (!this.state.smurfs) {
      return <h1>Item is not available.</h1>;
    }
    return (
      <div>
        <Card
          body
          style={{
            maxWidth: "500px",
            minWidth: "500px",
            margin: "0 auto",
            marginTop: "100px"
          }}
        >
          <CardImg top width="100%" src={smurf.image} alt="Card image cap" />
          <CardTitle>{smurf.name}</CardTitle>
          <CardText>
            <strong>{smurf.height} tall</strong>
            <br />
            <span>{smurf.age} smurf years old</span>
          </CardText>
          <Button
            color="danger"
            onClick={() => {
              if (window.confirm("Are you sure you wish to delete this Smurf?"))
                if (window.confirm("Are you positive ? 😂 ✌️")) {
                  deleteSmurf(smurf.id);
                }
            }}
          >
            delete
          </Button>
          <Button
            color="info"
            style={{ marginTop: "10px" }}
            onClick={() => {
              if (window.confirm("Are you sure you wish to update this Smurf?"))
                updateSmurf(smurf);
            }}
          >
            update
          </Button>
          <SingleSmurfStyle onClick={() => this.props.history.goBack()}>
            <i className="fas fa-angle-double-left" />
            <i className="fas fa-angle-double-left" />
            <i className="fas fa-angle-double-left" />
            <span>go back</span>
          </SingleSmurfStyle>
        </Card>
      </div>
    );
  }
}

SingleSmurf.propTypes = {};
SingleSmurf.propTypes = {
  smurfs: PropTypes.arrayOf(
    PropTypes.shape({
      height: PropTypes.string,
      id: PropTypes.String,
      name: PropTypes.string
    })
  ),
  isOpen: PropTypes.bool,
  name: PropTypes.string,
  height: PropTypes.string
};

export default SingleSmurf;
