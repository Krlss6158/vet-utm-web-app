import Toastify from 'toastify-js'

export const Toas = (text, bg) => {
    return (
        Toastify({
            text: text,
            duration: 2000,
            newWindow: true,
            gravity: "bottom",
            position: "left",
            stopOnFocus: true, 
            style: {
                background: bg,
            }
        }).showToast()
    );
}