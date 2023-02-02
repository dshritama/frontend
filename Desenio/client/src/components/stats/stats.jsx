import React from "react";

const Stats = (props) => {
    return (
        <div className="row column">
            <ul className="vertical medium-horizontal menu expanded text-center">
                <li><a href="#">
                    <div className="stat">114</div><span>Artists</span>
                </a></li>
                <li><a href="#">
                    <div className="stat">43</div><span>Genres</span>
                </a></li>
                <li><a href="#">
                    <div className="stat">10,000+</div><span>Prints</span>
                </a></li>
                <li><a href="#">
                    <div className="stat">59</div><span>Art Styles</span>
                </a></li>
                <li><a href="#">
                    <div className="stat">18</div><span>Logos</span>
                </a></li>
            </ul>
        </div>
    )
}
export default Stats