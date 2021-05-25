import Footer from "../utils/Footer"
import Main from "../utils/Main"
import { NavBar} from "../utils/NavBar"
import { NavBar2 } from "../utils/NavBar2"


const LandingPage = ({products, cartItems, onAdd}) => {
    return (
        <div>
            <NavBar cartItems={cartItems}/>
            <NavBar2 />
            <Main />
            <Footer />
        </div>
    )
}

export default LandingPage
