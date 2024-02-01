import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
// import { emitter } from '../../utils/emitter'

class ModalUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            phoneNumber: '',
            gender: '0',
            roleID: '0'
        };
    }

    componentDidMount() {
    }

    handleOnChangeInput = (e, id) => {
        // cách viết code xấu, ảnh hưởng tới hiệu năng khi join vào một dự án lớn
        // không nên modify như cách dưới vì khi có những dữ liệu lớn và độc lập vs nhau
        // khi render sẽ dẫn đến có dữ liệu được render và không 
        // this.state[id] = e.target.value
        // this.setState({
        //     ...this.state
        // }, () => {
        //     console.log(this.state)
        // })


        //cách viết tốt là thông qua 1 var trung gian tránh modify trực tiếp
        let copyState = { ...this.state }
        copyState[id] = e.target.value

        this.setState({
            ...copyState
        })
    }

    checkValidInput = () => {
        let isValid = true
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address', 'phoneNumber']
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false
                alert('Missing parameter ' + arrInput[i])
                break
            }
        }

        return isValid
    }

    handleAddNewUser = () => {
        const isValid = this.checkValidInput()
        if (isValid) {
            this.props.handleAddNewUser(this.state)
            // emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            //     this.setState({
            //         email: '',
            //         password: '',
            //         firstName: '',
            //         lastName: '',
            //         address: '',
            //         phoneNumber: '',
            //         gender: '0',
            //         roleID: '0'
            //     })
            // })

            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: '',
                phoneNumber: '',
                gender: '0',
                roleID: '0'
            })
        }
        // this.props.toggleFromParent()
    }

    render() {
        return (
            <Modal isOpen={this.props.modal}>
                <ModalHeader>Create new user</ModalHeader>
                <ModalBody>
                    <div className="container">
                        <form>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="email">Email address</label>
                                        <input
                                            value={this.state.email}
                                            onChange={(e) => this.handleOnChangeInput(e, "email")} type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            value={this.state.password}
                                            onChange={(e) => this.handleOnChangeInput(e, "password")} type="password" name="password" className="form-control" id="password" />
                                    </div>
                                </div>
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
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="phoneNumber">Phone number</label>
                                        <input
                                            value={this.state.phoneNumber}
                                            onChange={(e) => this.handleOnChangeInput(e, "phoneNumber")} type="tel" className="form-control" name="phonenumber" id="phoneNumber" />
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="form-group">
                                        <label htmlFor="gender">Gender</label>
                                        <select value={this.state.gender} onChange={(e) => this.handleOnChangeInput(e, "gender")} name="gender" id="gender" className="form-control">
                                            <option value="0">Male</option>
                                            <option value="1">Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="form-group">
                                        <label htmlFor="roleID">Role</label>
                                        <select value={this.state.roleID} onChange={(e) => this.handleOnChangeInput(e, "roleID")} name="role" id="roleID" className="form-control">
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
                    <Button color="primary" onClick={() => this.handleAddNewUser()}>
                        Create new
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
