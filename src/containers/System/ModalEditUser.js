import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import _ from 'lodash'
// import { emitter } from '../../utils/emitter'

class ModalEditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            firstName: '',
            lastName: '',
            address: '',
            phoneNumber: '',
            gender: '0',
            roleID: '0'
        };
    }

    componentDidMount() {
        let user = this.props.userInfor
        if (user && !_.isEmpty(user)) {
            this.setState({
                id: this.props.userInfor.id,
                firstName: this.props.userInfor.firstName,
                lastName: this.props.userInfor.lastName,
                address: this.props.userInfor.address,
                gender: this.props.userInfor.gender,
                roleID: this.props.userInfor.roleID
            });
        }
    }

    handleOnChangeInput = (e, id) => {
        let copyState = { ...this.state }
        copyState[id] = e.target.value

        this.setState({
            ...copyState
        })
    }

    checkValidInput = () => {
        let isValid = true
        let arrInput = ['firstName', 'lastName', 'address']
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                console.log(this.state[arrInput[i]])
                isValid = false
                alert('Missing parameter ' + arrInput[i])
                break
            }
        }

        return isValid
    }

    handleEditUser = () => {
        const isValid = this.checkValidInput()
        if (isValid) {
            this.props.handleEditUser(this.state)
            this.setState({
                firstName: '',
                lastName: '',
                address: '',
                phoneNumber: '',
                gender: '0',
                roleID: '0'
            })
        }
        this.props.toggleFromParent()
    }


    render() {
        return (
            <Modal isOpen={this.props.modal}>
                <ModalHeader>Update user</ModalHeader>
                <ModalBody>
                    <div className="container">
                        <form>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="firstName">First name</label>
                                        <input
                                            value={this.state.firstName}
                                            onChange={(e) => this.handleOnChangeInput(e, "firstName")} name="firstName" type="text" className="form-control" id="firstName" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="lastName">Last name</label>
                                        <input
                                            value={this.state.lastName}
                                            onChange={(e) => this.handleOnChangeInput(e, "lastName")} name="lastName" type="text" className="form-control" id="lastName" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="address">Address</label>
                                        <input
                                            value={this.state.address}
                                            onChange={(e) => this.handleOnChangeInput(e, "address")} name="address" type="text" className="form-control" id="address" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="form-group">
                                        <label htmlFor="gender">Gender</label>
                                        <select
                                            value={this.state.gender}
                                            onChange={(e) => this.handleOnChangeInput(e, "gender")}
                                            name="gender" id="gender" className="form-control">
                                            <option value="0">Male</option>
                                            <option value="1">Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="form-group">
                                        <label htmlFor="roleID">Role</label>
                                        <select
                                            value={this.state.roleID}
                                            onChange={(e) => this.handleOnChangeInput(e, "roleID")}
                                            name="role" id="roleID" className="form-control">
                                            <option value="0">Admin</option>
                                            <option value="1">Doctor</option>
                                            <option value="2">Patient</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={() => this.props.toggleFromParent()}>
                        Cancel
                    </Button>
                    <Button color="primary" onClick={() => this.handleEditUser()}>
                        Save Change
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);

