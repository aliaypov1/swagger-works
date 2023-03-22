import { Link } from "react-router-dom";
import Chikalox from "../components/Chikalox/Chikalox";

const Header=()=>{
    return(
        <header class="header">
        <div class="header__logo">My BD</div>
        <nav>
            <Link to='/' class="header__link">Зарегистрироваться</Link>
            <a href="./reg.html" class="header__link"></a>
            <a href="#" class="header__link">Contact</a>
            
            
        
        </nav>
    </header>
    )
}
export default Header;