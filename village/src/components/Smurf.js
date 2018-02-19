import React from 'react';


class Smurf extends React.Component {
    state = {
        showUpdateFormObl: this.props.showUpdateFormObl,
    };

    handleOnClick = (smurf) => {
        this.props.showUpdateFormObl(true, smurf);
    };

    render() {
        return (
            <div className="Smurf">
                <h3><a onClick={() => {this.handleOnClick(this.props)}}>{this.props.name}</a></h3>
                <strong>{this.props.height} tall</strong>
                <p>{this.props.age} old</p>
            </div>
        );
    }

}

export default Smurf;