// import React from 'react';
// import SmurfIcon from './SmurfIcon';
//
// class Smurf extends React.Component {
//
//   handleDelete = props => {
//     this.props.deleteSmurf(this.props.smurf.id);
//   }
//
//   render(){
//     return (
//       <div className='smurf-container'>
//       <div className="Smurf">
//         <div className='buttons'>
//           <div className='button delete' onClick={this.handleDelete}>
//             <i className="fas fa-trash"/>
//           </div>
//
//           <div className='button edit' onClick={event => {
//             this.props.setUpForm(event, this.props.smurf);
//             this.props.history.push('/smurf-form');
//           }} >
//             <i className="fas fa-pencil-alt"/>
//           </div>
//         </div>
//         <div className='icon'>
//           <SmurfIcon />
//         </div>
//         <h3>{this.props.smurf.name}</h3>
//         <strong>{this.props.smurf.height} tall</strong>
//         <p>{this.props.smurf.age} smurf years old</p>
//       </div>
//     </div>
//     );
//   }
// };
//
// Smurf.defaultProps = {
//   name: '',
//   height: '',
//   age: ''
// };
//
// export default Smurf;
//
import React from 'react';
import SmurfIcon from './SmurfIcon';


class Smurf extends React.Component {

  handleDelete = props => {
    this.props.deleteSmurf(this.props.smurf.id);
  }

  render(){
    return (
      <div className="Smurf" onClick={this.props.chooseSmurf}>
        <div className='buttons'>
          <div className='button delete' onClick={this.handleDelete}>
            <i className="fas fa-trash"/>
          </div>

          <div className='button edit' onClick={event => {
            this.props.setUpForm(event, this.props.smurf);
            this.props.history.push('/smurf-form');
          }} >
            <i className="fas fa-pencil-alt"/>
          </div>
        </div>
        <div className='icon'>
          <SmurfIcon />
        </div>
        <h3>{this.props.smurf.name}</h3>
        <p>{this.props.smurf.height} tall</p>
        <p>{this.props.smurf.age} smurf years old</p>

    </div>
    );
  }
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
