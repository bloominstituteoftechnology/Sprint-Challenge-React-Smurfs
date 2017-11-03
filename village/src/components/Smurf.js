import React from 'react';

const updateValue = (event) => {
  let element = event.target;
  let text = element.innerHTML;
  element.style.display = "none";
  let input = document.createElement("input");
  input.type = "text";
  input.value = text;
  input.size = Math.max(text.length / 4 * 3, 4);
  element.parentNode.insertBefore(input, element);
  input.select();
  
  input.addEventListener("blur", (event) => {
    event.target.parentNode.removeChild(event.target);
    element.innerHTML = input.value === "" ? "&nbsp;" : input.value;
    element.style.display = "";
  })
}

const updateSmf = (event, updateSmurf) => {
  const parent = event.target.parentNode;
  let id = Number(event.target.dataset.index);
  let name = parent.querySelector(".name").innerHTML;
  let age = parent.querySelector(".age").innerHTML.split(' ')[0];
  let height = parent.querySelector(".height").innerHTML.split(' ')[0];
  updateSmurf({id, name, age, height});
}

const deleteSmf = (event, deleteSmurf) => {
  let id = Number(event.target.dataset.index);
  console.log({ id });
  deleteSmurf({ id });
}

const Smurf = (props) => {
  return (
    <div className="Smurf">
      <h3 onClick={ updateValue } className="name">{props.name}</h3>
      <strong onClick={ updateValue } className="height">{props.height} tall</strong>
      <p onClick={ updateValue } className="age">{props.age} old</p>
      <input type="submit" data-index={props.index} value="Update" onClick={ (event) => updateSmf(event, props.updateSmurf) } />
      <input type="submit" data-index={props.index} value="Delete" onClick={ (event) => deleteSmf(event, props.deleteSmurf) } />
    </div>
  );
}

export default Smurf;