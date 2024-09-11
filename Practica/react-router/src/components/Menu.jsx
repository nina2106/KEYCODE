import { NavLink } from "react-router-dom"

const Menu = () => {
    return(
        <nav>
            <NavLink {({isActive} => isActive ? "active-link" : null )} 
            to={"/"}
            >
                Home
            </NavLink>
            <NavLink {({isActive} => isActive ? "active-link" : null )}  
            to={"/acerca"}
            >
                Acerca
            </NavLink>
            <NavLink {({isActive} => isActive ? "active-link" : null )} 
            to={"/producto"}
            >
                Productos
            </NavLink>
            <NavLink {({isActive} => isActive ? "active-link" : null )}  
            to={"/servicios"}
            >
                Servicios
            </NavLink>
        </nav>

    );
};
export default Menu;