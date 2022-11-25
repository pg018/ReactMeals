import { Link } from "react-router-dom";

const Heading = (props:{classes?:string}) => {
    return (
        <Link to='/'><h1 className={props.classes?props.classes:""}>ReactMeals</h1></Link>
    )
}

export default Heading;