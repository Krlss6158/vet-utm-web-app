import { AiOutlineMenuUnfold } from 'react-icons/ai';

import Profile from './Profile';
import Notification from './Notification';

const Header = (props) => {

    return (
        <header className="flex-shrink-0 border-b bg-gray-50 text-blueGray-800">
            <div className="flex items-center justify-between p-2">

                {/* Left options */}
                <div className="flex items-center space-x-3">
                    <span className="p-2 text-xl font-semibold tracking-wider uppercase lg:hidden">Dino</span>
                    <button onClick={props.onClick}>
                        <AiOutlineMenuUnfold className="w-5 h-5" />
                    </button>
                </div>


                {/* Right options. */}
                <div className="flex items-center">
                    {/* <Notification /> */}
                    <Profile />
                </div >

            </div >
        </header >
    );

}

export default Header;