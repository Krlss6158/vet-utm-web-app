const Section = ({
    value = 'Sección',
    mykey }) => {
    return (
        <li key={mykey} className='cursor-default text-sm text-blueGray-500 pt-4 pb-2 font-semibold overflow-ellipsis overflow-x-hidden px-4'>
            {value}
        </li>
    );
}

export default Section;