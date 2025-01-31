import Header from "./Component/header";
import Footer from "./Component/footer";
import { Outlet } from "react-router-dom";
import TopMenu from "./Component/TopMenu";

const Layout = () => {
    return (
        <>
        <div id="topHeader">
            <Header />
            <TopMenu/>
            </div>
            <Outlet />  
            <Footer />
        </>         
    )
}

export default Layout