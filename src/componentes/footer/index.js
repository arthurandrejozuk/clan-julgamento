import './footer.css';
import {FiAward} from "react-icons/fi"
const Footer = () =>{
    return (
        <footer className='rodape'>
            <h1>Produzido por Arthur</h1>
            <p>AKA fonix</p> 
            <FiAward size={40} color={"white"}></FiAward>
        </footer>
    )
}

export default Footer;