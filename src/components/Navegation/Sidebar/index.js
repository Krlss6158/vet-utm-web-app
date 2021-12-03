import Header from './Header';
import Navegation from './Navegation';

const classname = 'fixed inset-y-0 z-10 flex flex-col flex-shrink-0 max-h-screen overflow-hidden transition-all duration-500 bg-gray-50 border-r shadow-lg lg:z-auto lg:static lg:shadow-none';

const Sidebar = ({
    isOpen = false
}) => {

    return (
        <aside className={isOpen ? `w-64 ${classname} ` : `transition-all duration-500 -ml-70 overflow-hidden`}>

            <Header/>
            <Navegation />


        </aside >
    );
}

export default Sidebar;