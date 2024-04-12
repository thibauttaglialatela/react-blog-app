import {NavLink} from "react-router-dom";

const checkIsActive = ({isActive}) => {
    return isActive ? {
        color: 'blue'
    } : {}
}
const Navbar = () => {
    return (
        <nav style={{display: "flex", gap: '15px'}}>
            <NavLink style={checkIsActive} to={'/'}>Accueil</NavLink>
            <NavLink style={checkIsActive} to={'/add-post'}>Ajouter un post</NavLink>
        </nav>
    );
};

export default Navbar;