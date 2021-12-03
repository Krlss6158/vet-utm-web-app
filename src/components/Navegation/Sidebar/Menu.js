import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { useState } from 'react';
import SubMenu from './SubMenu';

const classname = 'transition-all duration-150';
const classnameActive = 'flex text-left items-center space-x-2 py-2 px-5 w-full hover:bg-gray-100'

const Menu = ({
    value = 'Nombre del Menú',
    children = 'Icono',
    arr = [],
    mykey}) => {

    const [open, setOpen] = useState(false);
    const isOpen = () => { setOpen(!open) }

    return (
        <li key={mykey}>
            <button className={open ? `${classnameActive} bg-gray-100` : `${classnameActive}`} onClick={isOpen}>
                {children}
                <span className='w-44 overflow-ellipsis overflow-x-hidden whitespace-nowrap text-blueGray-800'>{value}</span>
                <MdOutlineKeyboardArrowLeft className={!open ? `${classname} transform rotate-0` : `${classname} transform -rotate-90`} />
            </button>

            <ul>
                <SubMenu arr={arr} open={open} />
            </ul>
        </li>
    );
}

export default Menu;