import Swal from 'sweetalert2'

const sweet = (name) => {
    return (
        Swal.fire({
            title: '¿Estás seguro que deseas eliminar?',
            text: `${`Vas a eliminar a ${name}`}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar.'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Eliminado!',
                    name + ' acaba de ser eliminado',
                    'success'
                )
                return true;
            } else {
                return false;
            }
        })
    );
}

export default sweet;
