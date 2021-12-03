const Header = ({
    children,
    bg = 'bg-blueGray-100'
}) => {

    const classname = 'relative flex flex-col w-full mb-6 shadow-lg rounded-lg border-0';

    return (
        <div className={` ${classname} ${bg} `}>
            {children}
        </div>
    );
}

export default Header;