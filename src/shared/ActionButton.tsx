import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types"

//setSelectdPage is directing to the contact page
//this is children so we use the children with React.ReactNode 
type Props = {
    children:React.ReactNode;
    setSelectedPage:(value:SelectedPage)=>void;
}

const ActionButton=({children,setSelectedPage}:Props)=>{
    return(
    <AnchorLink 
    className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
    onClick={()=> setSelectedPage(SelectedPage.ContactUs)}

    href={`#${SelectedPage.ContactUs}`}
    >
        {children}
    </AnchorLink>

    );
};
export default ActionButton;