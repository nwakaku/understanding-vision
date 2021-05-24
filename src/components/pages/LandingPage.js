import Main from "../utils/Main"
import { NavBar} from "../utils/NavBar"
import { NavBar2 } from "../utils/NavBar2"


const LandingPage = ({products, cartItems, onAdd}) => {
    return (
        <div>
            <NavBar cartItems={cartItems}/>
            <NavBar2 />
            <Main products={products, onAdd}/>
            you are welcome
        </div>
    )
}

export default LandingPage
