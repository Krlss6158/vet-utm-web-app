import { useState } from 'react';
import { useRouter } from 'next/router'
import Header from './Header';
import Sidebar from './Sidebar';
import { AiOutlineHome } from 'react-icons/ai';

const Container = ({ children, NamePage }) => {
    const router = useRouter()
    const [openSidebar, setOpenSidebar] = useState(false);
    const isOpenSidebar = () => { setOpenSidebar(!openSidebar) }

    return (

        <div className="h-screen overflow-hidden flex items-center justify-center w-full">
            <div className="flex h-screen overflow-y-hidden w-full">

                {
                    openSidebar && <div className="fixed inset-0 z-10 bg-black bg-opacity-20 lg:hidden cursor-pointer" onClick={isOpenSidebar}></div>
                }

                {/* Sidebar */}
                <Sidebar isOpen={openSidebar} />

                <div className="flex flex-col flex-1 h-full overflow-hidden">

                    <Header onClick={isOpenSidebar} />

                    <main className="flex-1 max-h-full p-5 overflow-x-hidden overflow-y-auto bg-blueGray-100">
                        <div className="flex flex-col items-start justify-between pb-6 space-y-4 border-b border-gray-300 lg:items-center lg:space-y-0 lg:flex-row">

                            <h1 className="text-2xl font-semibold whitespace-nowrap">{NamePage}</h1>

                            <div className="space-y-6 md:space-x-2 md:space-y-0 flex justify-center items-center">
                                <a className='mr-1 text-lg' href='/dashboard'><AiOutlineHome /></a>
                                {/* {router.pathname.replaceAll('/', ' / ')} */}
                            </div>
                        </div>

                        <div className='w-full'>
                            {children}
                        </div>

                    </main >

                    <footer className="flex items-center justify-between flex-shrink-0 p-4 border-t max-h-14">
                        <div>Universidad técnica de manabí &copy; 2021</div>
                        <div className="text-sm">
                            Versión 1.0.0
                        </div>
                    </footer>

                </div >

            </div >
            <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.7.3/dist/alpine.min.js" defer></script>

        </div >

    )
}
export default Container;