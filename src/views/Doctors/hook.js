import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useRouteMatch } from "react-router";
import { getDoctorsAction } from "../../store/actions/doctorsActions";
import { doctorsSelector } from "../../store/selectors";
import "./style.css";

export default () => {
    const { doctors } = useSelector(doctorsSelector);
    const match = useRouteMatch()
    const dispatch = useDispatch();
    useEffect(() => {
        if (!doctors) {
            console.log("", getDoctorsAction());
            dispatch(getDoctorsAction());
        }
    }, [doctors])

    return { doctors, match }
};