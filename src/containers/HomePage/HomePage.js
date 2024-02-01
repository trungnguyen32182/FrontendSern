import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './HomeHeader';
import Speciality from '../HomePage/Section/speciality/speciality';
import MedicalFacility from '../HomePage/Section/medicalFacility/medicalFacility';
import OutstangdingDoctor from '../HomePage/Section/outstandingDoctor/outstandingDoctor';
import Handbook from '../HomePage/Section/handbook/handbook'
class HomePage extends Component {

    render() {

        return (
            <div>
                <Header />
                <Speciality />
                <MedicalFacility />
                <OutstangdingDoctor />
                <Handbook />
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
