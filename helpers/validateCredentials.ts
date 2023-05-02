const validateCredentials = (email: string, password: string) => {
    if (
        email !== undefined &&
        !/^[\w-.]+@([\w-]+\.)+[\w-]{2,5}$/i.test(email)
    ) {
        return false;
    }
    if (email === "" || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,5}$/i.test(email)) {
        return false;
    } else if (password !== undefined && password.length < 6) {
        return false;
    } else {
        return true;
    }
};

export default validateCredentials;