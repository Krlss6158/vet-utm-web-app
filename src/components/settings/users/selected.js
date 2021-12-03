const Selected = ({
    placeholder,
    onChange,
    name,
    defaultValue,
    children
}) => {

    return (
        <div className="w-full lg:w-4/12 px-4">
            <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password" 
            >
                {placeholder}
            </label>
            <select
                name={name}
                onChange={onChange}
                className="block w-full h-11 bg-white hover:border-gray-500 px-2 rounded shadow focus:outline-none focus:shadow-outline text-sm"
                defaultValue={defaultValue}
            >

                {children}
            </select>
        </div>
    );
}

export default Selected;