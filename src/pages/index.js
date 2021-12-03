import React, { useState, useEffect, useContext } from 'react';
import { Label, Input, ButtonLogin, Logo } from 'components/login';
import UserDataContext from 'context/user/UserContext';
import { Toas } from 'components/Toas';

import Auth from "layouts/Auth";
import { theme } from 'core/theme';
import { Login } from 'services/http';
import { setCookie, getCookie } from 'core/Cookies';

export default function Home() {


  const [data, setData] = useState({});
  const { saveUSER } = useContext(UserDataContext);

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  useEffect(() => {
    getCookie() ? window.location.href = "./settings/profile" : null
  }, [])

  const onSubmit = async e => {
    e.preventDefault();

    const res = await Login(data.email, data.password);
    console.log(res);
    if (res === 404) {
      Toas('Correo o contraseña incorrecta!', '#DC143C')
    } else if (res === 500) {
      Toas('Hubo un error en el servidor.', '#DC143C')
    } else {
      setCookie(res);
      saveUSER(res);
      window.location.href = "./settings/profile"
    }
  }

  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-center h-full">
        <div className="w-full sm:w-96 sm:px-0 px-2">

          <div className={`${theme.containerbg} relative flex flex-col min-w-0 w-full mb-6 shadow-lg rounded-lg  border-0`}>
            <Logo />
            <div className="flex-auto px-4 lg:px-10 pt-5 pb-10">
              <form onSubmit={onSubmit} >
                <div className="relative w-full mb-3">
                  <Label value='Correo electrónico' />
                  <Input type='text' name='email' placeholder='Correo electrónico' value={data.email || ''} change={handleChange} pattern="[^@\s]+@[^@\s]+" />
                </div>

                <div className="relative w-full mb-3">
                  <Label value='Contraseña' />
                  <Input type='password' name='password' placeholder='Contraseña' value={data.password || ''} change={handleChange} />
                </div>

                {/* <div className='flex justify-between items-center'>
                  <RememberMe value='Recuérdame' />
                  <ResetPass />
                </div> */}

                <div className="text-center mt-6">
                  <ButtonLogin value='Iniciar sesión' />
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Home.layout = Auth;
