import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./handbook.scss"
import "../sliderCarousel.scss"
import { FormattedMessage } from "react-intl";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Handbook extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
        };

        return (
            <div className='section-content section-handbook'>
                <div className='section-container handbook-container'>
                    <div className='section-header handbook-header'>
                        <span className='title-section'><FormattedMessage id="handbook.title-section" /></span>
                        <button className='btn-section'><FormattedMessage id="handbook.btn-section" /></button>
                    </div>
                    <div className='section-body handbook-body'>
                        <Slider {...settings}>
                            <div className='section-customize handbook-customize'>
                                <div className='bg-img bg-img-handbook'/>
                                <div className='section-customize-title'><FormattedMessage id="handbook.customize" /> 1</div>
                            </div>
                            <div className='section-customize handbook-customize'>
                                <div className='bg-img bg-img-handbook'/>
                                <div className='section-customize-title'><FormattedMessage id="handbook.customize" /> 2</div>
                            </div>
                            <div className='section-customize handbook-customize'>
                                <div className='bg-img bg-img-handbook'/>
                                <div className='section-customize-title'><FormattedMessage id="handbook.customize" /> 3</div>
                            </div>
                            <div className='section-customize handbook-customize'>
                                <div className='bg-img bg-img-handbook'/>
                                <div className='section-customize-title'><FormattedMessage id="handbook.customize" /> 4</div>
                            </div>
                            <div className='section-customize handbook-customize'>
                                <div className='bg-img bg-img-handbook'/>
                                <div className='section-customize-title'><FormattedMessage id="handbook.customize" /> 5</div>
                            </div>
                            <div className='section-customize handbook-customize'>
                                <div className='bg-img bg-img-handbook'/>
                                <div className='section-customize-title'><FormattedMessage id="handbook.customize" /> 6</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Handbook);
