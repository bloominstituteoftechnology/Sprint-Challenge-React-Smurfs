import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  margin: 0 auto;
  box-shadow: 0 3px 6px -3px rgba(0, 0, 0, 0.5);
  padding: 2rem;
  background: #fff;

  input {
    width: 100%;
    border: 1px solid #efefef;
    border-radius: 5px;
    margin: 2rem 0;
    background: #fafafa;
    padding: 1rem 1.5rem;
    font-size: inherit;
  }

  button {
    margin-top: 3rem;
    border: 1px solid #efefef;
    background: #75aff5;
    color: #fafafa;
    padding: 1rem 2rem;
    font-size: 1.4rem;
    font-family: inherit;
    border-radius: 5px;
  }
`;

const SmurfForm = props => {
  const {
    editMode,
    addSmurf,
    updateSmurf,
    handleInputChange,
    name,
    age,
    height,
    activeId
  } = props;

  const handleFormSubmit = e => {
    e.preventDefault();
    return !editMode ? addSmurf() : updateSmurf(activeId);
  };

  return (
    <div className="SmurfForm">
      <Form onSubmit={handleFormSubmit}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={name}
          name="name"
        />
        <input
          onChange={handleInputChange}
          placeholder="age"
          value={age}
          name="age"
        />
        <input
          onChange={handleInputChange}
          placeholder="height"
          value={height}
          name="height"
        />
        <button type="submit">Add to the village</button>
      </Form>
    </div>
  );
};

export default SmurfForm;
