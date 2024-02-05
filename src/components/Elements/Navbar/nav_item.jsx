import { Link } from "react-router-dom";

const NavItem = (props) => {
    const {to,children, size="text-sm"} = props
    return (
        <div>
            <Link to={to} className={`text-white ${size} font-bold`}>{children}</Link>
        </div>
    )
}

export default NavItem;