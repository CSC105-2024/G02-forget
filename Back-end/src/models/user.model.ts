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

export { isDuplicate, createUser, getAllUser}