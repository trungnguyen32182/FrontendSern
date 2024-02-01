import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./speciality.scss"
import "../sliderCarousel.scss"
import { FormattedMessage } from "react-intl";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Speciality extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
        };

        return (
            <div className='section-content section-speciality'>
                <div className='section-container speciality-container'>
                    <div className='section-header speciality-header'>
                        <span className='title-section'><FormattedMessage id="speciality.title-section" /></span>
                        <button className='btn-section'><FormattedMessage id="speciality.btn-section" /></button>
                    </div>
                    <div className='section-body speciality-body'>
                        <Slider {...settings}>
                            <div className='section-customize speciality-customize'>
                                <div className='bg-img bg-img-speciality'/>
                                <div className='section-customize-title'><FormattedMessage id="speciality.customize" /> 1</div>
                            </div>
                            <div className='section-customize speciality-customize'>
                                <div className='bg-img bg-img-speciality'/>
                                <div className='section-customize-title'><FormattedMessage id="speciality.customize" /> 2</div>
                            </div>
                            <div className='section-customize speciality-customize'>
                                <div className='bg-img bg-img-speciality'/>
                                <div className='section-customize-title'><FormattedMessage id="speciality.customize" /> 3</div>
                            </div>
                            <div className='section-customize speciality-customize'>
                                <div className='bg-img bg-img-speciality'/>
                                <div className='section-customize-title'><FormattedMessage id="speciality.customize" /> 4</div>
                            </div>
                            <div className='section-customize speciality-customize'>
                                <div className='bg-img bg-img-speciality'/>
                                <div className='section-customize-title'><FormattedMessage id="speciality.customize" /> 5</div>
                            </div>
                            <div className='section-customize speciality-customize'>
                                <div className='bg-img bg-img-speciality'/>
                                <div className='section-customize-title'><FormattedMessage id="speciality.customize" /> 6</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Speciality);
