import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { IoMdNotifications } from 'react-icons/io';
import { BsThreeDots } from 'react-icons/bs';
import { BiFoodMenu } from 'react-icons/bi';

const Notification = () => {
    return (
        <Menu as="div" className="ml-3 relative">

            <div>
                <Menu.Button className="rounded-full border relative">
                    <div className="absolute right-0 p-1 bg-red-400 rounded-full animate-ping z-50"></div>
                    <div className="absolute right-0 p-1 bg-red-400 border rounded-full z-50"></div>
                    <div className="p-2 bg-white border rounded-full hover:bg-gray-50" >
                        <IoMdNotifications className="w-6 h-6 text-gray-500" />
                    </div>
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="max-w-xs lg:max-w-md lg:min-w-max z-50 origin-top-right absolute right-0 mt-2 rounded-md shadow-lg py-1 bg-white text-blueGray-600">
                    <div className="p-4 font-medium border-b flex justify-between items-center">

                        <span className="text-gray-800 text-xl font-bold">Notificaciones</span>

                        <MenuNotification />

                    </div>

                    <Menu.Item>
                        <div className='break-words w-96 max-h-96 overflow-auto'>
                            <Notifications />
                            <Notifications />
                            <Notifications />
                            <Notifications />
                        </div>
                    </Menu.Item>

                </Menu.Items>
            </Transition>
        </Menu>
    );
}

const Notifications = () => {
    return (
        <a href="#" className="p-2 hover:bg-gray-100 flex justify-start items-center space-x-2 relative">
            <img src='https://picsum.photos/200' alt='' className='w-16 h-16 rounded-full' />
            <div className='break-words w-60 text-blueGray-600'>
                <div className='font-semibold'>Carlos Alfredo Pico Catagua</div>
                <span>Ha hecho un reporte</span>
            </div>
            <div className="absolute right-10 p-2 bg-red-400 rounded-full animate-ping z-50"></div>
            <div className="absolute right-10 p-2 bg-red-400 border rounded-full z-50"></div>
        </a>
    );
}

const MenuNotification = () => {
    return (
        <>
            <Menu as="div" className="relative">

                <div>
                    <Menu.Button>
                        <BsThreeDots className='text-black text-xl' />
                    </Menu.Button>
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="max-w-xs lg:max-w-md lg:min-w-max z-50 origin-top-right absolute -right-4 mt-2 rounded-md shadow-lg bg-white text-blueGray-600">
                        <Menu.Item>
                            <div className='w-96'>
                                <OptionsMenuNotification value='Ver notificaciones'>
                                    <BiFoodMenu className='mr-2' />
                                </OptionsMenuNotification>
                            </div>
                        </Menu.Item>

                    </Menu.Items>
                </Transition>
            </Menu>
        </>
    );
}

const OptionsMenuNotification = (props) => {
    return (
        <a href={props.href} className="px-3 py-1 text-blueGray-800 hover:text-blueGray-500 flex items-center justify-start cursor-pointer border-t">
            {props.children}
            {props.value}
        </a>
    );
}


export default Notification;