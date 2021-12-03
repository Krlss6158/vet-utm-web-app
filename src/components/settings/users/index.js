import { useState } from 'react';
./header
import Header from "./header";
import Section from './section';
import Input from './input';
import Selected from "./selected";
import GeneralHeader from 'components/General/Header.title.buttons';
import { url } from 'api_config';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


export default function CreateUser() {

    const [data, setData] = useState({});
    const [selectOption, setSelectOption] = useState(['user']);
    const [load, setLoad] = useState(false);

    const option = ['Usuario', 'Administrador'];


    const handleChange = (e) => {
        document.getElementsByName(e.target.name)[0].classList.contains('border-red-400') && document.getElementsByName(e.target.name)[0].classList.remove('border-red-400')
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }

    const handleSelected = (e) => {
        let SELECT = e.target.options.selectedIndex;
        setSelectOption(
            SELECT === 0 && ['user'] ||
            SELECT === 1 && ['admin']
        );
    }


    const handleSubmit = (e) => {        
        e.preventDefault();
        setLoad(true);
        axios
            .post(url + "/panel/users", {
                first_name: data.first_name,
                last_name: data.last_name,
                email: data.email,
                password: data.password,
                address: data.address,
                country: data.country,
                city: data.city,
                postal_code: data.postal_code,
                description: data.description,
                rol: selectOption,
            },
                {
                    headers: {
                        'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGxvY2FsaG9zdCIsImlhdCI6MTYzNDUzODgzM30.51Unu5OMvLbgApIVJQYPkdCRkCSyysR2nQcJEMuqBqs'
                    }
                }
            ).then((res) => {
                if (res.data.status === 500) {
                    toast.error('' + res.data.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                }
                if (res.data.status === 401 || res.data.status === 400) {
                    toast.warn('' + res.data.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined
                    })
                    Validate(data);                    
                }

                if (res.status === 201) {
                    toast.success('Usuario creado', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setData({});
                    setSelectOption(['user']);
                    document.getElementsByName('select')[0].childNodes[0].setAttribute("selected", "selected")
                }
                setLoad(false);
            }).catch(function (res) {
                //handle error
                toast.error('Error de conección en el servidor', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
                setLoad(false);
            });

    }


    return (
        <GeneralHeader>
            <>
                <div className="rounded-t bg-white mb-0 px-6 py-6">

                    <Header
                        valueH6='Crear usuario'
                        valueButton='Crear'
                        valueButtonLoad='Creando'
                        load={load}
                        idFrom='form'
                        href='/settings/users' valueA='Lista de usuarios'
                    />

                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-5">
                    <form id='form' autoComplete='off' onSubmit={handleSubmit} >

                        <Section valueH6='Información del usuario obligatoria' separate={true}>
                            <Input
                                name='first_name'
                                type='text'
                                placeholder='Nombres'
                                dimension='6'
                                required='required'
                                value={data.first_name || ''}
                                onChange={handleChange}
                            />
                            <Input
                                name='last_name'
                                type='text'
                                placeholder='Apellidos'
                                dimension='6'
                                required='required'
                                value={data.last_name || ''}
                                onChange={handleChange}
                            />
                            <Input
                                name='email'
                                type='email'
                                placeholder='Correo electrónico'
                                dimension='4'
                                required='required'
                                value={data.email || ''}
                                onChange={handleChange}
                                pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                            />
                            <Input
                                name='password'
                                type='text'
                                placeholder='Contraseña'
                                dimension='4'
                                required='required'
                                value={data.password || ''}
                                onChange={handleChange}
                            />

                            <Selected
                                name='select'
                                placeholder='Rol'
                                options={option}
                                onChange={handleSelected}
                            />
                        </Section>

                        <Section valueH6='Información de contacto' separate={true}>
                            <Input
                                name='address'
                                type='text'
                                placeholder='Dirección'
                                dimension='12'
                                value={data.address || ''}
                                onChange={handleChange}
                            />
                            <Input
                                name='country'
                                type='text'
                                placeholder='País'
                                dimension='4'
                                value={data.country || ''}
                                onChange={handleChange}
                            />
                            <Input
                                name='city'
                                type='text'
                                placeholder='Ciudad'
                                dimension='4'
                                value={data.city || ''}
                                onChange={handleChange}
                            />
                            <Input
                                name='postal_code'
                                type='text'
                                placeholder='Código Postal'
                                dimension='4'
                                value={data.postal_code || ''}
                                onChange={handleChange}
                            />
                        </Section>

                        <Section valueH6='Acerca de'>
                            <Input
                                valueH6='Acerca de la persona'
                                placeholder='Descripción'
                                name='description'
                                textArea={true}
                                value={data.description || ''}
                                onChange={handleChange}
                            />
                        </Section>

                    </form>
                </div>
            </>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='dark'
            />
        </GeneralHeader>
    );
}

const Validate = (data) => {
    (!data.first_name || data.first_name === '') && document.getElementsByName('first_name')[0].classList.add('border-red-400') ||
        (!data.last_name || data.last_name === '') && document.getElementsByName('last_name')[0].classList.add('border-red-400') ||
        (!data.email || data.email === '') && document.getElementsByName('email')[0].classList.add('border-red-400') ||
        (!data.password || data.password === '') && document.getElementsByName('password')[0].classList.add('border-red-400')
}