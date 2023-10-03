import {Link} from "react-router-dom";


export default function Header() {

    return (

        <div className="header">
            <Link to={"/"}>Open</Link>
            <Link to={"/progress"}>In Progress</Link>
            <Link to={"/done"}>Done</Link>
        </div>
    )
}