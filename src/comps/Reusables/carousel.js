/* eslint-disable react/prop-types */
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Col } from "react-bootstrap";
import { formatNumber } from "../../helpers";
// import {ArrowRightShort, ArrowLeftShort} from "react-bootstrap-icons";
import "../styles.scss";


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1026 },
        items: 2.6,
        slidesToSlide: 1.7 
    },
    tablet: {
        breakpoint: { max: 1025, min: 740 },
        items: 1.5,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 740, min: 0 },
        items: 0.9,
        slidesToSlide: 1
    }

};
const CarouselSlider = ({data}) => {

    return  <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000} 
        keyBoardControl={true}
        customTransition="all 1"
        transitionDuration={1000}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
    >
        {
            data?.map((value,key) => <Col key={key} className="col-continent"  >
                <Col className="col-1-continent"><h5 className="text-center cont-name mt-5 b">{value.continent.toUpperCase()}</h5>
                    <h2 className="text-center mt-4 cont-num">{formatNumber(value.todayCases)}</h2>
                    <h6 className="text-center mt-1" style={{color:"black"}}>New Cases</h6>
                    <p className="text-center cases-total mt-5">All cases: {formatNumber(value.cases)}</p>
                </Col>
                <Col className="col-2-continent">
                    <div className="col-2-div">
                        <h2 className="text-center mt-1 col-2-count">{formatNumber(value.todayDeaths)}</h2>
                        <h6 className="text-center mt-1 new-tit">New deaths</h6>
                        <p className="text-center deaths-total ">Total deaths: {formatNumber(value.deaths)}</p>
                    </div>
                    <hr/>
                    <div className="col-2-div">
                        <h2 className="text-center mt-1 col-2-count">{formatNumber(value.recovered)}</h2>
                        <h6 className="text-center mt-1 new-tit">Newly recovered</h6>
                        <p className="text-center deaths-total ">Total recovered:{formatNumber(value.todayRecovered)}</p>
                    </div>
                    <hr/>
                    <div className="col-2-div">
                        <h2 className="text-center mt-1 col-2-count">-</h2>
                        <h6 className="text-center mt-1 new-tit">New vaccinated</h6>
                        <p className="text-center deaths-total ">-</p>
                    </div>
                </Col>
            </Col>
            )
        }
    </Carousel>;
};

export default CarouselSlider;