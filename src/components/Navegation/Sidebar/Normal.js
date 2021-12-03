const Normal = ({
    value = 'Nombre de la opción',
    children = 'Icono',
    mykey,
    href = '#href' }) => {
    return (
        <li key={mykey}>
            <a href={href} className="flex items-center py-2 px-5 space-x-2 hover:bg-gray-100 text-blueGray-800" >
                {children}
                <span className='overflow-ellipsis overflow-x-hidden'>{value}</span>
            </a>
        </li>
    );
}

export default Normal;