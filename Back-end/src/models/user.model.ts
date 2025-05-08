import { db } from "../index.ts";

const isDuplicate = async( username: string, email: string ) => {
    const user = await db.user.findFirst({
        where: {
            username: username,
            email: email,
        },
    });
    return user;
}

const signinUser = async ( name: string, password: string) => {
    const user = await db.user.findFirst({
        where: {
            OR : [ {username : name },{ email : name } ],
            password: password
            }
    })
    return user;   
}

const createUser = async( username: string, email: string, password: string ) => {
    const user = await db.user.create({
        data: {
            username: username,
            email: email,
            password: password,
        },
    });
    return user;
}

const getAllUser = async () => {
    const user = await db.user.findMany();
    return user;
}

const getInfoUser = async (id: number) => {
    const user = await db.user.findFirst({
        where: {
            id: id
        }
    })
    return user;
}

const getDiaryFromUser = async (month: string, userId: number) => {
    const diary = await db.diary.findMany({
        where: {
            month: month,
            userId: userId
        }
    })
    return diary;
}

const changeTemplate = async (id: number, template: string) => {
    const user = await db.user.update({
        where: {
            id: id
        },
        data: {
            template: template
        }
    })
    return user;
}

const getTemplate = async (id: number) => {
    const user = await db.user.findFirst({
        where: {
            id: id
        }
    })
    return user;
}


export { isDuplicate, createUser, getAllUser, getInfoUser, signinUser, getDiaryFromUser, changeTemplate, getTemplate}