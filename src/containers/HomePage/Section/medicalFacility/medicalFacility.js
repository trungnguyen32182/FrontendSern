import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./medicalFacility.scss"
import "../sliderCarousel.scss"
import { FormattedMessage } from "react-intl";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class MedicalFacility extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
        };

        return (
            <div className='section-content section-medicalFacility'>
                <div className='section-container medicalFacility-container'>
                    <div className='section-header medicalFacility-header'>
                        <span className='title-section'><FormattedMessage id="medicalFacility.title-section" /></span>
                        <button className='btn-section'><FormattedMessage id="medicalFacility.btn-section" /></button>
                    </div>
                    <div className='section-body medicalFacility-body'>
                        <Slider {...settings}>
                            <div className='section-customize medicalFacility-customize'>
                                <div className='bg-img bg-img-medicalFacility'/>
                                <div className='section-customize-title'><FormattedMessage id="medicalFacility.customize" /> 1</div>
                            </div>
                            <div className='section-customize medicalFacility-customize'>
                                <div className='bg-img bg-img-medicalFacility'/>
                                <div className='section-customize-title'><FormattedMessage id="medicalFacility.customize" /> 2</div>
                            </div>
                            <div className='section-customize medicalFacility-customize'>
                                <div className='bg-img bg-img-medicalFacility'/>
                                <div className='section-customize-title'><FormattedMessage id="medicalFacility.customize" /> 3</div>
                            </div>
                            <div className='section-customize medicalFacility-customize'>
                                <div className='bg-img bg-img-medicalFacility'/>
                                <div className='section-customize-title'><FormattedMessage id="medicalFacility.customize" /> 4</div>
                            </div>
                            <div className='section-customize medicalFacility-customize'>
                                <div className='bg-img bg-img-medicalFacility'/>
                                <div className='section-customize-title'><FormattedMessage id="medicalFacility.customize" /> 5</div>
                            </div>
                            <div className='section-customize medicalFacility-customize'>
                                <div className='bg-img bg-img-medicalFacility'/>
                                <div className='section-customize-title'><FormattedMessage id="medicalFacility.customize" /> 6</div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    }
}

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
