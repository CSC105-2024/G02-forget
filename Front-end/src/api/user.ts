import { data } from "react-router-dom";
import { Axios } from "../axiosInstance";

const createUser = async (username: string, email: string, password: string ) => {
    try {
        await Axios.post("/users", {username: username, email: email, password: password});
    } catch (e) {
        console.log(e);
        return {
            success: false,
            data: null
        }
    }
}

const getInfoUser = async (id: number) => {
    try {
        const response = await Axios.get(`/users/${id}`);
        return {
            success: true,
            data: response.data
        }
    } catch (e) {
        console.log(e);
        return {
            success: false,
            data: null
        }
    }
}

const signinUser = async (name: string, password: string) => {
    try {
        const response = await Axios.post("/users/signin", {name: name, password: password},{withCredentials:true});
        return {
            success: true,
            data: response.data
        }
    } catch (e) {
        console.log(e);
        return {
            success: false,
            data: null
        }
    }
}

const getDiaryFromUser = async (month: string, year: string, userId: number) => {
    try {
        const response = await Axios.get(`/users/diaries/${userId}/${month}/${year}`);
        return {
            success: true,
            data: response.data
        }
    } catch (e) {
        console.log(e);
        return {
            success: false,
            data: null
        }
    }
}

const changeTemplate = async (id: number, template: string) => {
    try {
        const response = await Axios.patch(`/users/template/${id}`, {template: template});
        return {
            success: true,
            data: response.data
        }

    } catch (e) {
        console.log(e);
        return {
            success: false,
            data: null
        }
    }
}

const getTemplate = async (id: number) => {
    try {
        const response = await Axios.get(`/users/template/${id}`);
        return {
            success: true,
            data: response.data
        }

    } catch (e) {
        console.log(e);
        return {
            success: false,
            data: null
        }
    }
}

export { createUser, signinUser, getDiaryFromUser, changeTemplate, getTemplate, getInfoUser};