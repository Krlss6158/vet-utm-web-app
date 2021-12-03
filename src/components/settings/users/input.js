
const defaultClass = 'w-full px-4';
const defaultClassInput = 'border px-3 py-3 bg-white rounded text-sm shadow focus:outline-none focus:ring-1 focus:ring-gray-500 w-full resize-none';

export function Input({
    dimension = '12',
    name = 'input',
    placeholder = 'Placehoder',
    type = 'text',
    textArea = false,
    value,
    onChange,
    required,
    pattern
}) {
    return (
        !textArea &&
        <div className={
            dimension === '4' && `${defaultClass} lg:w-4/12` ||
            dimension === '6' && `${defaultClass} lg:w-6/12` ||
            dimension === '12' && `${defaultClass} lg:w-12/12`

        }>
            <div className="relative w-full mb-3">
                <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                >
                    {placeholder}
                </label>
                <input
                    type={type}
                    name={name}
                    id={name}
                    required={required && required}
                    className={`${defaultClassInput}`}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    pattern={pattern && pattern}
                />
            </div>
        </div>
        ||
        textArea &&
        <div className={
            dimension === '4' && `${defaultClass} lg:w-4/12` ||
            dimension === '6' && `${defaultClass} lg:w-6/12` ||
            dimension === '12' && `${defaultClass} lg:w-12/12`

        }>
            <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                    {placeholder}
                </label>
                <textarea
                    name={name}
                    id={name}
                    className={`${defaultClassInput}`}
                    rows="4"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                ></textarea>
            </div>
        </div>
    );
}

export default Input;