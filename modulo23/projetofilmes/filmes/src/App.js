import { Fragment } from "react";
import RoutesApp from "./routes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App(){
    return(
        <Fragment>
            <ToastContainer autoClose={2000}/>
           <RoutesApp />
        </Fragment>
    );
}

export default App;