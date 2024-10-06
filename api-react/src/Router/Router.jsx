import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import ErrorPage from "../pages/ErrorPage";
import AddCharacter from "../pages/AddCharacter";
import UpdateCharacter from "../pages/UpdateCharacter";

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
{
    path:"/updatecharacter/:id",
    element:<UpdateCharacter/>,
    errorElement:<ErrorPage/>
},

]);

export default Router