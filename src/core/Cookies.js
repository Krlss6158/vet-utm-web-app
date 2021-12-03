import Cookies from "universal-cookie";
const cookies = new Cookies();

export const setCookie = (data) => {
    cookies.set("vet_utm_user", data, { path: "/" });
}

export const getCookie = () => {
    return cookies.get("vet_utm_user");
}

export const deleteCookie = () => {
    return cookies.remove("vet_utm_user", { path: '/' });
}
