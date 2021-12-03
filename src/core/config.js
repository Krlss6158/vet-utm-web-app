
import { format } from 'date-fns'

export const config = {
    appNameL: 'Sistema de identificación de mascotas'
}

export const COLUMNS = [
    {
        Header: 'ID',
        Footer: 'ID',
        accessor: 'ID',
        disableFilters: true,
        sticky: 'left'
    },
    {
        Header: 'Nombres',
        Footer: 'Nombres',
        accessor: 'Nombres',
        sticky: 'left'
    },
    {
        Header: 'Apellidos',
        Footer: 'Apellidos',
        accessor: 'Apellidos',
        sticky: 'left'
    },
    {
        Header: 'Email',
        Footer: 'Email',
        accessor: 'Email'
    },
    {
        Header: 'Telefono',
        Footer: 'Telefono',
        accessor: 'Telefono'
    },
    {
        Header: 'Updated At',
        Footer: 'Updated At',
        accessor: 'Updated At',
        Cell: ({ value }) => {
            return format(new Date(value), 'dd/MM/yyyy')
        }
    },
]