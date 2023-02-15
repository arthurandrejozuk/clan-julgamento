import { GiHamburgerMenu} from 'react-icons/gi';
import './Modos.css';


const Modos = ()=>{
    return (
    <section>
        <header className='modos'>
            <ul>
            <GiHamburgerMenu id='menuHamburguer' size={30} />
                <li><a href='#crisol'>Crisol</a></li>
                <li><a href='#vanguarda'>Vanguarda</a></li>
                <li><a href='#gambit'>Gambit</a></li>
            </ul>
        </header>
    </section> 
    )
}

export default Modos; 