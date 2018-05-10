/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom'

class SmurfFormModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>Add a Smurf</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        <div className="smurf-form container-fluid">
                            <form>
                                <input
                                    onChange={this.props.onChange}
                                    className="form-control"
                                    placeholder="name"
                                    value={this.props.name}
                                    name="name"
                                    type="name"
                                />
                                <input
                                    onChange={this.props.onChange}
                                    className="form-control"
                                    placeholder="age"
                                    value={this.props.age}
                                    name="age"
                                    type="age"
                                />
                                <input
                                    onChange={this.props.onChange}
                                    className="form-control"
                                    placeholder="height"
                                    value={this.props.height}
                                    name="height"
                                    type="number"
                                />
                                <Link to="/" className="btn btn-secondary modal-button" onClick={this.props.onSubmit} type="submit">Add to the village</Link>
                            </form>
                        </div>
                    </ModalBody>
                </Modal>
            </div >
        );
    }
}

export default SmurfFormModal;