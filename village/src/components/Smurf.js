import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <EditableField
        placeholder="Enter new name"
        onEdit={value => props.onEdit(props.id, { name: value })}
        render={editProps => <h3 {...editProps}>{props.name}</h3>}
      />
      <EditableField
        placeholder="Enter new height"
        onEdit={value => props.onEdit(props.id, { height: value })}
        render={editProps => (
          <strong {...editProps}>{props.height} tall</strong>
        )}
      />
      <EditableField
        placeholder="Enter new age"
        onEdit={value => props.onEdit(props.id, { age: value })}
        render={editProps => <p {...editProps}>{props.age} smurf years old</p>}
      />
      <button onClick={() => props.onDelete(props.id)}>Kill smurf</button>
    </div>
  );
};

class EditableField extends React.Component {
  state = {
    showInput: false
  };

  toggleShow = () => this.setState({ showInput: true });

  render() {
    return (
      <div>
        {this.state.showInput ? (
          <input
            type="text"
            onKeyDown={e => {
              if (e.key === 'Enter') {
                this.props.onEdit(e.target.value);
                e.target.value = '';
                this.setState({ showInput: false });
              }
            }}
            placeholder={this.props.placeholder}
          />
        ) : (
          this.props.render({ onDoubleClick: this.toggleShow })
        )}
      </div>
    );
  }
}

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
