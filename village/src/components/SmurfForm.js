import React from "react";
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Card, CardTitle, CardText } from "reactstrap";

const SmurfForm = ({
  name,
  age,
  height,
  handleInputChange,
  submitConditional,
  isUpdating
}) => {
  return (
    <div
      className="SmurfForm"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh"
      }}
    >
      <Card
        body
        style={{
          minWidth: "600px",
          maxWidth: "600px"
        }}
      >
        <h2>Form</h2>
        <Form onSubmit={submitConditional}>
          <FormGroup>
            <Input
              onChange={handleInputChange}
              placeholder="name"
              value={name}
              name="name"
            />
          </FormGroup>
          <FormGroup>
            <Input
              onChange={handleInputChange}
              placeholder="age"
              value={age}
              name="age"
            />
          </FormGroup>
          <FormGroup>
            <Input
              onChange={handleInputChange}
              placeholder="height"
              value={height}
              name="height"
            />
          </FormGroup>
          <Button type="submit">
            {isUpdating ? "save" : "Add to the village"}
          </Button>
        </Form>
      </Card>
    </div>
  );
};

SmurfForm.propTypes = {
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

export default SmurfForm;
