import React from "react";
import './index.css';
import {Link} from "react-router-dom";

const SeriesListItem = ({ series }) => (
    <li>
        <Link to={'/series/${series.show.id}'} />
        {series.show.name}
    </li>
);
const SeriesList = (props) => {
    return(
        <ul className="series-list">
            {props.list.map(series => (
               <SeriesListItem series={series} key={series.show.id} />
            ))}
        </ul>
    )
};

export default SeriesList;
