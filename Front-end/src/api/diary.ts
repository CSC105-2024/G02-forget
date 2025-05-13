import { Axios } from "../axiosInstance";

const createDairy = async (day: number, month: string, year: string, topic: string, content: string, emoji: string, userId: number) => {
    try {
        await Axios.post("/diaries", {day: day, month: month, year: year, topic: topic, content: content, emoji: emoji, userId: userId});
    } catch (e) {
        console.log(e);
        return {
            success: false,
            data: null
        }
    }
}

const deleteDiary = async (id: number) => {
    try {
        await Axios.delete(`/diaries/${id}`);
    } catch (e) {
        console.log(e);
        return {
            success: false,
            data: null
        }
    }
}

const editDiary = async (id: number, topic: string, content: string, emoji: string) => {
    try {
        await Axios.patch(`/diaries/${id}`, {id: id, topic: topic, content: content, emoji: emoji});
    } catch (e) {
        console.log(e);
        return {
            success: false,
            data: null
        }
    }
}

const lockDiary = async (id: number) => {
    try {
        await Axios.patch(`/diaries/lock/${id}`, {id: id});
    } catch (e) {
        console.log(e);
        return {
            success: false,
            data: null
        }
    }
}

export { createDairy, deleteDiary ,editDiary, lockDiary};