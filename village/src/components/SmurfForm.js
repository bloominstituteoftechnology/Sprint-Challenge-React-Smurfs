import React from 'react';

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
    // !editMode ? this.addSmurf() : this.updateSmurf();
    if (!editMode) {
      addSmurf();
    } else {
      updateSmurf(activeId);
    }
  };

  return (
    <div className="SmurfForm">
      <form onSubmit={handleFormSubmit}>
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
      </form>
    </div>
  );
};

export default SmurfForm;
