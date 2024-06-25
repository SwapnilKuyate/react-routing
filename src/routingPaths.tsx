import { Route, Routes } from "react-router-dom";
import Home from "./home";
import About from "./about";

const RoutingPaths =()=>{
    return(
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </>
    )
}
export default RoutingPaths