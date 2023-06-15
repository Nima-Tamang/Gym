import {SelectedPage} from '@/shared/types'
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props={ //types declaration
    page:string,
    selectedPage:SelectedPage,
    setSelectedPage:(value:SelectedPage)=>void;
};


//Link components with props 
const Link=({page,selectedPage,setSelectedPage}:Props)=>{
    //converting into lowercase and removing space like contact us and type casting as
    //selecting
    const lowerCasePage=page.toLowerCase().replace(/ /g,"") as SelectedPage;

    return  (
        <AnchorLink
        //if selectedpage=lowercase change with tailwind effect otherwise text-black
        className={`${selectedPage===lowerCasePage ? "text-primary-500":""}
        transition duration-500 hover:text-primary-300
        `}

        href={`#${lowerCasePage}`}     //link for going to clicked page

        onClick={()=>setSelectedPage(lowerCasePage)}  //event to call lowercasepage
        >
            {page}
        </AnchorLink>
    );

};
export default Link;