import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import CarouselSlider from "./Reusables/carousel";
import { GetContinentData } from "../redux/actions";
import "./styles.scss";
const DataContinent = () => {

    const dispatch = useDispatch();
    const  continentsData = useSelector((state) => state.CovidDataReducer. continentsData);
    useEffect(() => {
        dispatch(GetContinentData());
    }, []);
    return (
        <div className="per-continent">
            <h3 className="m-5 text-center fw-bold">PER CONTINENTS</h3>
            <CarouselSlider data={continentsData} />
        </div>
        
    );
};
export default DataContinent;