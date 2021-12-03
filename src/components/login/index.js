import { theme } from 'core/theme';
import { config } from 'core/config';
import Image from 'next/image';
const logo = require('public/img/logo.svg');

export const Label = (props) => {
    return (
        <label
            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
            htmlFor={props.for}> {props.value} </label>
    );
}

export const Logo = () => {
    return (
        <div className='my-5 flex flex-col items-center justify-center'>
            <Image src={logo} width={100} height={100} />
            {/* <label className='text-blueGray-600 font-bold text-2xl text-center px-10'>
                {config.appNameL}
            </label> */}
        </div>
    );
}

export const Input = (props) => {
    return (
        <input
            type={props.type}
            name={props.name}
            id={props.name}
            required='required'
            pattern={props.pattern ? props.pattern : null}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.change}
            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow outline-none w-full ease-linear transition-all duration-150"
        />
    );
}

export const RememberMe = (props) => {
    return (
        <label className="inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                className="form-checkbox border-0 focus:ring-0 rounded ml-1 w-5 h-5 ease-linear transition-all duration-150"
            />
            <span className="ml-2 text-sm font-semibold text-blueGray-600">
                {props.value}
            </span>
        </label>
    );
}

export const ButtonLogin = (props) => {
    return (
        <button
            className={`${theme.buttonbg} ${theme.buttonText} text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150`}
        >
            {props.value}
        </button>
    );
}

export const ResetPass = () => {
    return (
        <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="text-blueGray-600"
        >
            <small>¿Olvidaste tu contraseña?</small>
        </a>
    );
}

