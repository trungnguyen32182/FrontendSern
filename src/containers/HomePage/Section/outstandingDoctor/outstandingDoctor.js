import React, { Component } from 'react';
import { connect } from 'react-redux';
import "../sliderCarousel.scss"
import "./outstandingDoctor.scss"
import { FormattedMessage } from "react-intl";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class OutstandingDoctor extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
        };

        return (
            <div className='section-content section-outstandingDoctor'>
                <div className='section-container outstandingDoctor-container'>
                    <div className='section-header outstandingDoctor-header'>
                        <span className='title-section'><FormattedMessage id="outstandingDoctor.title-section" /></span>
                        <button className='btn-section'><FormattedMessage id="outstandingDoctor.btn-section" /></button>
                    </div>
                    <div className='section-body outstandingDoctor-body'>
                        <Slider {...settings}>
                            <div className='section-customize outstandingDoctor-customize'>
                                <div className='bg-img bg-img-outstandingDoctor'/>
                                <div className='outstandingDoctor-name'><FormattedMessage id="outstandingDoctor.name" /></div>
                                <div className='section-customize-title'><FormattedMessage id="outstandingDoctor.customize" /> 1</div>
                            </div>
                            <div className='section-customize outstandingDoctor-customize'>
                                <div className='bg-img bg-img-outstandingDoctor'/>
                                <div className='outstandingDoctor-name'><FormattedMessage id="outstandingDoctor.name" /></div>
                                <div className='section-customize-title'><FormattedMessage id="outstandingDoctor.customize" /> 2</div>
                            </div>
                            <div className='section-customize outstandingDoctor-customize'>
                                <div className='bg-img bg-img-outstandingDoctor'/>
                                <div className='outstandingDoctor-name'><FormattedMessage id="outstandingDoctor.name" /></div>
                                <div className='section-customize-title'><FormattedMessage id="outstandingDoctor.customize" /> 3</div>
                            </div>
                            <div className='section-customize outstandingDoctor-customize'>
                                <div className='bg-img bg-img-outstandingDoctor'/>
                                <div className='outstandingDoctor-name'><FormattedMessage id="outstandingDoctor.name" /></div>
                                <div className='section-customize-title'><FormattedMessage id="outstandingDoctor.customize" /> 4</div>
                            </div>
                            <div className='section-customize outstandingDoctor-customize'>
                                <div className='bg-img bg-img-outstandingDoctor'/>
                                <div className='outstandingDoctor-name'><FormattedMessage id="outstandingDoctor.name" /></div>
                                <div className='section-customize-title'><FormattedMessage id="outstandingDoctor.customize" /> 5</div>
                            </div>
                            <div className='section-customize outstandingDoctor-customize'>
                                <div className='bg-img bg-img-outstandingDoctor'/>
                                <div className='outstandingDoctor-name'><FormattedMessage id="outstandingDoctor.name" /></div>
                                <div className='section-customize-title'><FormattedMessage id="outstandingDoctor.customize" /> 6</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);
