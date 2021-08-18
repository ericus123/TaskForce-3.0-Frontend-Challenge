/* eslint-disable react/prop-types */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Col } from "react-bootstrap";
import { formatNumber } from "../../helpers";
// import {ArrowRightShort, ArrowLeftShort} from "react-bootstrap-icons";
import "../styles.scss";


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2.6,
        slidesToSlide: 1.7 
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 
    }

};
const CarouselSlider = ({data}) => {

    // const CustomRightArrow = ({ onClick}) => {
    //     return <ArrowRightShort className="react-multiple-carousel__arrow" style={{  fontWeight:"200 !important", fontSize:"50px", background:"#1E776E", color:"white", padding:"5px"}} onClick={() => onClick()}/>;
    // };
    
    // const CustomLeftArrow = ({ onClick}) => {
    //     return <ArrowLeftShort className="react-multiple-carousel__arrow" style={{ marginLeft:"40px",fontWeight:"200 !important", fontSize:"50px", background:"#1E776E", color:"white", padding:"5px"}} onClick={() => onClick()}/>;
    // };


    return  <Carousel
        // CustomLeftArrow ={< CustomLeftArrow />}
        // customRightArrow={<CustomRightArrow />} 
      
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000} 
        keyBoardControl={true}
        customTransition="all 1"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
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