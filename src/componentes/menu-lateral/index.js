import "./menu-lateral.css";
import {CiCircleRemove} from "react-icons/ci"

const MenuLateral = ({active}) =>{

    const fechaMenulateral = () =>{
        return active(false);
    }
    return (
        <container MenuLateral={active}>
        <aside className="menu-lateral">
            <div className="menu-lateral__titulo">
                <CiCircleRemove onClick={fechaMenulateral} className="remove-menu" size={30}/>
                <h2>Menu</h2>
            </div>
                <a>Times para raid</a>
                <a>Times para Osiris</a>
                <a>Times para Gambit</a>
                <a>Sem ideia</a>
                <a>Contato</a>
        </aside>
        </container>
    )
}

export default MenuLateral;