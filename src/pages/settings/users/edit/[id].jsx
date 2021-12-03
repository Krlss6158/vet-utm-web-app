import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Container from "components/Navegation/container";
import Header from "components/settings/users/header";
import Section from 'components/settings/users/section';
import Input from 'components/settings/users/input';
import Selected from 'components/settings/users/selected'
import GeneralHeader from 'components/General/Header.title.buttons';
import { updateUser, getOneUser, getProvinces, getCantons } from 'services/http';
import { Toas } from 'components/Toas';
import { getCookie } from 'core/Cookies';
import { Required, onlyNumber } from 'core/utils';

const Edit = ({ user }) => {

    const router = useRouter();
    const { id } = router.query;

    const [user_id, setUser_id] = useState(id);
    const [avatar, setAvatar] = useState(user.avatar);
    const [first_name, setFirst_name] = useState(user.first_name);
    const [last_name, setLast_name] = useState(user.last_name);
    const [id_canton, setId_canton] = useState(user.id_canton);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);
    const [address, setAddress] = useState(user.address);

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
        if (user.canton) {
            setId_province(user.canton.id_province);
            const res = await getCantons(user.canton.id_province);
            res && setCantons(res.cantons);
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Required(user_id) || Required(email) || Required(first_name) || Required(last_name)) {
            return Toas('Algunos datos son requeridos.', '#DC143C')
        }
        setLoad(true);
        const res = await updateUser(user_id, {
            id: user_id,
            avatar,
            first_name,
            last_name,
            id_canton,
            email,
            phone,
            address,
        });
        if (res === 404) {
            Toas('Usuario no encontrado.', '#DC143C')
        } else if (res === 500) {
            Toas('Hubo un error en el servidor.', '#DC143C')
        } else if (res === 401) {
            Toas('La contraseña actual no es correcta.', '#DC143C')
        } else {
            Toas('Datos actualizados.', '#006400')
        }
        setLoad(false);
    }

    return (
        <Container NamePage='Perfil de usuario'>
            <GeneralHeader>
                <>
                    <div className="rounded-t bg-white mb-0 px-6 py-6">

                        <Header
                            valueH6='Editar perfil'
                            valueButton='Guardar'
                            valueButtonLoad='Guardando'
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

export default Edit;

const Validate = (data) => {
    (!data.first_name || data.first_name === '') && document.getElementsByName('first_name')[0].classList.add('border-red-400') ||
        (!data.last_name || data.last_name === '') && document.getElementsByName('last_name')[0].classList.add('border-red-400') ||
        (!data.email || data.email === '') && document.getElementsByName('email')[0].classList.add('border-red-400') ||
        (!data.password || data.password === '') && document.getElementsByName('password')[0].classList.add('border-red-400')
}

Edit.getInitialProps = async (context) => {
    const user = await getOneUser(context.query.id);
    return { user }
}