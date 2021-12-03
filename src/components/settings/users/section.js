const Section = ({
    valueH6 = 'Texto de la sección',
    children,
    separate = false
}) => {
    return (
        <div>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                {valueH6}
            </h6>
            <div className="flex flex-wrap">
                {children}
            </div>

            {
                separate && <hr className="mt-6 border-b-1 border-blueGray-300" />
            }

        </div>
    );
}

export default Section;