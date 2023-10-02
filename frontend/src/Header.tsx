import {Link} from "react-router-dom";


export default function Header() {

    return (

        <div className="header">
            <Link to={"/"}>Home</Link>
            <Link to={"/api/todo"}>Open</Link>
            In Progress
            Done
        </div>
    )
}