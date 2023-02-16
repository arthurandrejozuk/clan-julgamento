import { useState } from 'react';
import { GiHamburgerMenu} from 'react-icons/gi';
import './Modos.css';
import MenuLateral from '../menu-lateral';


const Modos = ()=>{

    const [menuLateral, setMenuLateral] = useState(false);

    const mostraMenuLateral = () => setMenuLateral(!menuLateral);

    return (
    <section>
        <header className='modos'>
        {menuLateral && <MenuLateral active={setMenuLateral}/>}
            <ul>
            <GiHamburgerMenu onClick={mostraMenuLateral} className='menu-hamburguer' size={30} />
                <li><a href='#crisol'>Crisol</a></li>
                <li><a href='#vanguarda'>Vanguarda</a></li>
                <li><a href='#gambit'>Gambit</a></li>
            </ul>
        </header>
    </section> 
    )
}

export default Modos; 