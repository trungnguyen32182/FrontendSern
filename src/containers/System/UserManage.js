import React, { Component, Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManager.scss'
import { getAllUsers } from '../../services/userService'
import ModalUser from './ModalUser';
import ModalEditUser from './ModalEditUser';
import { createNewUser, editUser, deleteUser } from '../../services/userService';
// import { emitter } from '../../utils/emitter'
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            showModalAddUser: false,
            showModalEditUser: false,
            userInfo: {}
        }
    }

    async componentDidMount() {
        let res = await getAllUsers('ALL')
        if (res && res.errCode === 0)
            this.setState({
                arrUsers: res.users
            })
    }

    toggleFromParent = () => {
        this.setState({
            showModalAddUser: false,
            showModalEditUser: false
        })
    }

    handleAddNewUser = async (data) => {
        try {
            let response = await createNewUser(data)
            if (response) {
                let res = await getAllUsers('ALL')
                if (res && res.errCode === 0)
                    this.setState({
                        arrUsers: res.users,
                        showModalAddUser: false
                    })

                // emitter.emit('EVENT_CLEAR_MODAL_DATA')
            }
        } catch (e) {
            console.log("UserManage ~ handleAddNewUser= ~ e:", e)
        }
    }

    handleEdit = (user) => {
        this.setState({
            showModalEditUser: true,
            userInfo: user
        })
    }

    handleEditUser = async (data) => {
        try {
            let response = await editUser(data)
            if (response) {
                let res = await getAllUsers('ALL')
                if (res && res.errCode === 0)
                    this.setState({
                        arrUsers: res.users,
                        showModalEditUser: false
                    })

                // emitter.emit('EVENT_CLEAR_MODAL_DATA')
            }
        } catch (e) {
            console.log("UserManage ~ handleAddNewUser= ~ e:", e)
        }
    }

    handleDeleteUser = async (id) => {
        try {
            let response = await deleteUser(id)
            if (response) {
                let res = await getAllUsers('ALL')
                if (res && res.errCode === 0)
                    this.setState({
                        arrUsers: res.users,
                        showModalAddUser: false
                    })
            }
        } catch (e) {
            console.log("UserManage ~ handleDeleteUser ~ e:", e)
        }
    }
    /** Life Cycle
     * Run component:
     * 1. Run construct -> init state
     * 2. Did mount (set state)
     * 3. Render
     * 
     */
    render() {
        return (
            <div className='wrapper-user-manager'>
                <div className="title text-center">Manage users with Chun</div>
                <div className='mx-3'>
                    <button
                        type="button"
                        className="btn btn-primary px-3"
                        onClick={() => this.setState({ showModalAddUser: true })}
                    ><i className="fa fa-plus"></i> Add new user</button>
                </div>
                {
                    this.state.showModalAddUser && <ModalUser
                        modal={this.state.showModalAddUser}
                        toggleFromParent={this.toggleFromParent}
                        handleAddNewUser={this.handleAddNewUser} />
                }
                {this.state.showModalEditUser && <ModalEditUser
                    modal={this.state.showModalEditUser}
                    toggleFromParent={this.toggleFromParent}
                    handleEditUser={this.handleEditUser}
                    userInfor={this.state.userInfo}
                />}
                <div className='mt-4 mx-3'>
                    <table id="users">
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.arrUsers.map(user => {
                                    return (
                                        <tr key={user.id}>
                                            <td>{user.email}</td>
                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td>{user.address}</td>
                                            <td className='text-center'>
                                                <div className='m-2'>
                                                    <button
                                                        onClick={() => this.handleEdit(user)}
                                                        className='button button1 mx-1'>Edit</button>
                                                    <button
                                                        onClick={() => this.handleDeleteUser(user.id)}
                                                        className='button button2 mx-1'>Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
