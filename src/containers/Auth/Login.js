import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { handleLoginAPI } from '../../services/userService'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            showPassword: false,
            errMessage: ''
        }
    }
    handleLogin = async () => {
        this.setState({
            errMessage: ''
        })

        const { userLoginSuccess } = this.props;
        try {
            let data = await handleLoginAPI(this.state.username, this.state.password)


            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.message
                })
            }

            if (data && data.errCode === 0) {
                userLoginSuccess(data.user)
            }
        } catch (e) {
            if (e.response && e.response.data) {
                this.setState({
                    errMessage: e.response.data.message
                })
            }
        }
    }

    render() {
        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-login'>Login</div>
                        <div className='col-12 form-group login-input'>
                            <label htmlFor='username'>Username</label>
                            <input
                                id='username'
                                type='text'
                                className='form-control mt-2'
                                placeholder='Enter your username'
                                onChange={(e) => this.setState({ username: e.target.value })} />
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label htmlFor='password'>Password</label>
                            <input
                                id='password'
                                type={this.state.showPassword ? 'text' : 'password'}
                                className='form-control mt-2'
                                placeholder='Enter your password'
                                onChange={(e) => this.setState({ password: e.target.value })} />
                            <i className={this.state.showPassword ? 'fa fa-eye' : 'fa fa-eye-slash'}
                                onClick={() => this.setState({ showPassword: !this.state.showPassword })}></i>
                        </div>
                        <div className='col-12'>
                            <span className='errMessage'>{this.state.errMessage}</span>
                        </div>
                        <div className='col-12'>
                            <button className='btn-login' onClick={this.handleLogin}>Login</button>
                        </div>
                        <div className='col-12'>
                            <span className='forgot-password'>Forgot your password ?</span>
                        </div>
                        <div className='col-12 text-center mt-3'>
                            <span>Or login with</span>
                        </div>
                        <div className='col-12 social-login mt-3'>
                            <i className='fab fa-google-plus-g google m-3'></i>
                            <i className='fab fa-facebook-f facebook m-3'></i>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
