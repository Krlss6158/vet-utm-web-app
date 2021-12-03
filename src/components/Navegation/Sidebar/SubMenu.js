const SubMenu = ({
    arr = [],
    open = false }) => {
    return (
        open && arr.map((e, key) => {
            return (
                <li key={key}>
                    <a href={e.path} className="flex items-center text-sm pl-8 p-2 space-x-2 hover:bg-gray-100" >
                        {e.icon}
                        <span className='overflow-ellipsis overflow-x-hidden w-40 text-blueGray-800'>{e.name}</span>
                    </a>
                </li>
            );
        })
    );
}
export default SubMenu;