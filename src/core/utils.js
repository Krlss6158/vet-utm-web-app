export const onlyNumber = (string = '') => {
    return string.replace(/[^0-9]/g, '');
}

export const Required = (string) => {
    if (!string || string.length <= 0) return true;
    return false;
};