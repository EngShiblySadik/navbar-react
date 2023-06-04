import About from "../about";
import Contact from "../contact";
import Home from "../home";

function Route({component}) {
    console.log(component);

    const Condition =()=>{
        if (component ===  'Home'){
            return <Home/>
        }
        else if(component === 'About'){
            return <About/>
        }
        else if(component === 'Contact'){
            return <Contact/>
        }
    }
    return(
        <>
        <Condition/>
        </>
    )
}
export  default Route