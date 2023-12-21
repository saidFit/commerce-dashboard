import { AiFillDashboard, AiTwotoneShopping } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import {MdAddShoppingCart} from 'react-icons/md'
import {CgReorder} from 'react-icons/cg'
import {FaSellsy, FaUsers} from 'react-icons/fa'
export const SidebarD =[
    {
      name:'Dashboard',
      icon:<AiFillDashboard size={20}/>  
    },
    {
      name:'Products',
      icon:<AiTwotoneShopping size={20}/>  
    },
    {
      name:'Add Product',
      icon:<MdAddShoppingCart size={20}/>  
    },
    {
      name:'Products out',
      icon:<BiCategory size={20}/>  
    },
    {
      name:'Orders',
      icon:<CgReorder size={20}/>  
    },
    {
      name:'Users',
      icon:<FaUsers size={20}/>  
    },
    {
        name:'Sellers',
        icon:<FaSellsy size={20}/>  
      },
]