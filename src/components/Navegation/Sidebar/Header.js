import Logo from 'public/img/logo.png';

const Header = ({
}) => {
    return (
        <div className="flex items-center justify-center relative pt-3">
            <img src={Logo.src} alt='' className='w-16 h-16' />
        </div >
    );
}

export default Header;