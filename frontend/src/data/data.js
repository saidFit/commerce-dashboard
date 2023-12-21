
import {CiFacebook} from 'react-icons/ci'
import {BsGithub} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'
import { Checkout } from '../pages/pOrder/Checkout'
import { POrder } from '../pages/pOrder/POrder/POrder'
import { Paid } from '../pages/pOrder/Paid'
export const social = [
    {
        icon:<CiFacebook size={20}/>,
        Link: 'https://web.facebook.com/?_rdc=1&_rdr',

    },
    {
        icon:<BsGithub size={20}/>,
        Link: 'https://web.facebook.com/?_rdc=1&_rdr',

    },
    {
        icon:<AiFillLinkedin size={20}/>,
        Link: 'https://web.facebook.com/?_rdc=1&_rdr',

    },
]

export const Gridhome = [
    {
        image:`${process.env.PUBLIC_URL}/image/backpack.jpg`,
        grid_column:'md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-1',
        name:'backpack'
    },
    {
        image:`${process.env.PUBLIC_URL}/image/headphone.jpg`,
        grid_column:'col-1 row-1 md:col-start-1 md:col-end-2 md:row-start-2 row-end-3',
        name:'headphones'
    },
    {
        image:`${process.env.PUBLIC_URL}/image/hoodie.jpg`,
        grid_column:'col-1 row-1 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3',
        name:'hoodie'
    },
    {
        image:`${process.env.PUBLIC_URL}/image/jacket.jpg`,
        grid_column:'col-1 row-1 md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-2',
        name:'jacket'
    },
    {
        image:`${process.env.PUBLIC_URL}/image/bathrobe.jpg`,
        grid_column:'col-1 row-1 md:col-start-4 md:col-end-5 md:row-start-1 md:row-end-1',
        name:'bathrobe'
    },
    {
        image:`${process.env.PUBLIC_URL}/image/coffee-machine.jpg`,
        grid_column:'col-1 row-1 md:col-start-3 md:col-end-5 md:row-start-2 md:row-end-3',
        name:'coffee-machine'
    },
]


export const pages = [
    
      <Checkout/>,
    
    
        
        <POrder/>,
    

        
        <Paid/>,
    
]