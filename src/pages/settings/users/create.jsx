import { useState, useEffect } from "react";
import Container from "components/Navegation/container";
import Header from "components/settings/users/header";
import Section from 'components/settings/users/section';
import Input from 'components/settings/users/input';
import Selected from 'components/settings/users/selected'
import GeneralHeader from 'components/General/Header.title.buttons';
import { getProvinces, getCantons, createUser } from 'services/http';
import { Toas } from 'components/Toas';
import { getCookie } from 'core/Cookies';
import { onlyNumber, Required } from 'core/utils';

const Create = ({ user }) => {

    const [user_id, setUser_id] = useState();
    const [avatar, setAvatar] = useState();
    const [first_name, setFirst_name] = useState();
    const [last_name, setLast_name] = useState();
    const [id_canton, setId_canton] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState();

    //for select data
    const [provinces, setProvinces] = useState();
    const [cantons, setCantons] = useState();

    const [id_province, setId_province] = useState();

    const [load, setLoad] = useState(false);

    const handleSelectedProvince = async (e) => {
        let SELECT = e.target.value;
        //get all cantons of province id
        if (SELECT) {
            const res = await getCantons(SELECT);
            setId_province(SELECT);
            res && setCantons(res.cantons);
            res && setId_canton()
        }

        !SELECT && setCantons();
    }

    useEffect(async () => {
        const cookie = getCookie();
        if (!cookie) {
            return window.location.href = "/"
        }
        const pro = await getProvinces();
        //ALL PROVINCES
        setProvinces(pro.data);
        //PROVINCE 
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (Required(user_id) || Required(email) || Required(first_name) || Required(last_name)) {
            return Toas('Algunos datos son requeridos.', '#DC143C')
        }
        setLoad(true);

        const res = await createUser({
            id: user_id,
            avatar,
            first_name,
            last_name,
            id_canton,
            email,
            phone,
            address,
        });
        if (res === 500) {
            Toas('Hubo un error en el servidor.', '#DC143C')
        } else if (res) {
            Toas('Usuario creado.', '#006400')

            setUser_id(null);
            setAvatar(null);
            setFirst_name(null);
            setLast_name(null);
            setId_canton(null);
            setEmail(null);
            setPhone(null)
            setAddress(null);
            setId_province(null);
        }
        setLoad(false);
    }

    return (
        <Container NamePage='Creación de usuario'>
            <GeneralHeader>
                <>
                    <div className="rounded-t bg-white mb-0 px-6 py-6">

                        <Header
                            valueH6='Editar perfil'
                            valueButton='Crear'
                            valueButtonLoad='Creando'
                            load={load}
                            idFrom='form'
                            href='/settings/users/'
                            valueA='Lista de usuarios'
                        />

                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-5">
                        <form id='form' autoComplete='off' onSubmit={handleSubmit} >

                            <Section valueH6='Información del usuario obligatoria' separate={true}>
                                <Input
                                    name='user_id'
                                    type='text'
                                    placeholder='Cedula o RUC'
                                    dimension='6'
                                    required='required'
                                    value={user_id || ''}
                                    onChange={(e) => { setUser_id(onlyNumber(e.target.value)) }}
                                />
                                <Input
                                    name='email'
                                    type='email'
                                    placeholder='Correo electrónico'
                                    dimension='6'
                                    required='required'
                                    value={email || ''}
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                                />
                                <Input
                                    name='first_name'
                                    type='text'
                                    placeholder='Nombres'
                                    dimension='6'
                                    required='required'
                                    value={first_name || ''}
                                    onChange={(e) => { setFirst_name(e.target.value) }}
                                />
                                <Input
                                    name='last_name'
                                    type='text'
                                    placeholder='Apellidos'
                                    dimension='6'
                                    required='required'
                                    value={last_name || ''}
                                    onChange={(e) => { setLast_name(e.target.value) }}
                                />

                            </Section>

                            <Section valueH6='Información de contacto' separate={true}>
                                <Input
                                    name='address'
                                    type='text'
                                    placeholder='Dirección'
                                    dimension='6'
                                    value={address || ''}
                                    onChange={(e) => { setAddress(e.target.value) }}
                                />
                                <Input
                                    name='phone'
                                    type='text'
                                    placeholder='Teléfono móvil'
                                    dimension='6'
                                    value={phone || ''}
                                    onChange={(e) => { setPhone(onlyNumber(e.target.value)) }}
                                />

                                <Selected
                                    name='select'
                                    label='Seleccione una provincia'
                                    placeholder='Provincia'
                                    options={provinces}
                                    onChange={handleSelectedProvince}
                                    defaultValue={id_province}
                                >
                                    <option value={null}>Seleccione una provincia</option>
                                    {
                                        provinces && provinces.map((e, key) => {
                                            return (
                                                <option style={{ background: e.id === id_province ? 'yellow' : 'transparent' }} key={key} value={e.id}>{e.name}</option>
                                            );
                                        })
                                    }
                                </Selected>

                                <Selected
                                    name='select'
                                    options={cantons}
                                    placeholder='Canton'
                                    label='Seleccione un Canton'
                                    defaultValue={id_canton}
                                    onChange={(e) => setId_canton(e.target.value)}
                                >
                                    <option value={null}>Selecciona un cantón</option>
                                    {
                                        cantons && cantons.map((e, key) => {
                                            return (
                                                <option style={{ background: e.id === id_canton ? 'yellow' : 'transparent' }} key={key} value={e.id}>{e.name}</option>
                                            );
                                        })
                                    }
                                </Selected>
                            </Section>

                        </form>
                    </div>
                </>
            </GeneralHeader>
        </Container>
    );
}

export default Create;

const Validate = (data) => {
    (!data.first_name || data.first_name === '') && document.getElementsByName('first_name')[0].classList.add('border-red-400') ||
        (!data.last_name || data.last_name === '') && document.getElementsByName('last_name')[0].classList.add('border-red-400') ||
        (!data.email || data.email === '') && document.getElementsByName('email')[0].classList.add('border-red-400') ||
        (!data.password || data.password === '') && document.getElementsByName('password')[0].classList.add('border-red-400')
}