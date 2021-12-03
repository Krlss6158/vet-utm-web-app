import React, { useState } from 'react'
import Router from "next/router";
import sweet from 'components/Alerts/sweetalert2';
import Container from 'components/Navegation/container';
import GeneralHeader from 'components/General/Header.title.buttons';
import { getAllUsers, deleteUser } from 'services/http';
import Header from 'components/settings/users/header';
import { COLUMNS } from 'core/config';
import MaterialTable from 'material-table'
import tableIcons from 'components/MaterialTableIcons';
import { Toas } from 'components/Toas';

const Users = (props) => {
    const [data, setData] = useState(props.res.data.users);


    const deleted = async (data, email) => {
        const res = await sweet(data);
        if (res) {
            const resp = await deleteUser(data);
            if (resp === 500) {
                Toas('Hubo un error en el servidor.', '#DC143C')
            } else if (resp === 404) {
                Toas('Usuario no encontrado, recarga la página.', '#DC143C')
            } else {
                Toas('Usuario eliminado.', '#006400');
            }
        }
    }

    return (
        <Container NamePage='Gestión de usuarios'>
            <GeneralHeader>
                <>
                    <div className="rounded-t bg-white mb-0 px-6 py-6">

                        <Header
                            href='/settings/users/create'
                            valueA='Crear usuario'
                            valueH6='Lista de usuarios'
                        />

                    </div>
                    <MaterialTable
                        icons={tableIcons}
                        options={{ actionsColumnIndex: 5, headerStyle: { zIndex: 0 }, draggable: false }}
                        actions={[
                            {
                                icon: tableIcons.Edit,
                                tooltip: "Editar este usuario.",
                                onClick: (event, rowData) => {
                                    Router.push(`/settings/users/edit/[id]`, `/settings/users/edit/${rowData.id}`)
                                },
                            },
                            {
                                icon: tableIcons.Delete,
                                tooltip: "Eliminar este usuario.",
                                onClick: (event, rowData) =>
                                    deleted(rowData.id),
                            },
                        ]}
                        style={{ padding: 40 }}
                        columns={[
                            { title: 'Cedula / RUC', field: 'id', sorting: false },
                            { title: 'Nombres', field: 'first_name' },
                            { title: 'Apellidos', field: 'last_name' },
                            { title: 'Email', field: 'email' },
                        ]}
                        data={data}
                        title=""
                    />
                </>
            </GeneralHeader>
        </Container>
    );
}




Users.getInitialProps = async (ctx) => {
    const res = await getAllUsers();
    return { res }
}






export default Users;