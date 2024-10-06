import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import ErrorPage from "../pages/ErrorPage";
import AddCharacter from "../pages/AddCharacter";

const Router = createBrowserRouter([

{
    path:"/",
    element:<App/>,
    errorElement:<ErrorPage/>
},
{
    path:"/addcharacter",
    element:<AddCharacter/>,
    errorElement:<ErrorPage/>
},

]);

export default Router