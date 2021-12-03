import { AiOutlineLoading } from 'react-icons/ai';

const Header = ({
    valueH6 = 'Inserte el título aquí',
    valueButton,
    valueButtonLoad,
    href,
    valueA,
    onClick,
    load,
    idFrom
}) => {
    return (
        <div className="text-center flex justify-between items-center">
            <h6 className="text-blueGray-700 text-xl font-bold">{valueH6}</h6>
            <div className='flex items-center sm:flex-row flex-col'>
                {
                    href && valueA &&
                    <a href={href} className='bg-blueGray-700 text-white text-xs px-4 py-2 rounded mr-2 uppercase shadow font-bold'>
                        {valueA}
                    </a>
                }
                {
                    valueButton &&
                        (load ?
                        <button disabled className="bg-blueGray-700 opacity-50 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow mr-1 sm:mt-0 mt-2 relative flex items-center"
                            onClick={onClick}>
                            {valueButtonLoad}
                            <AiOutlineLoading className="animate-spin h-4 w-4 ml-1" />
                        </button>
                        :
                        <button form={idFrom} className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 sm:mt-0 mt-2"
                            onClick={onClick}>
                            {valueButton}
                        </button>)
                }
            </div>
        </div>
    );
}

export default Header;