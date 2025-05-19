import { db } from "../index.ts";

const createDiary = async (day: number, month: string, year: string, topic: string, content: string, emoji: string, userId: number) => {
    const diary = await db.diary.create({
        data: {
            day: day,
            month: month,
            year: year,
            topic: topic,
            content: content,
            emoji: emoji,
            userId: userId
        },
    });
    return diary;
}

const deleteDiary = async (id: number) => {
    const diary = await db.diary.delete({
        where: {
            id: id
        }
    })
    return diary;
}

const editDiary = async (id?: number, topic?: string, content?: string, emoji?: string) => {
    const diary = await db.diary.update({
        where: {
            id: id
        },
        data: {
            topic: topic,
            content: content,
            emoji: emoji
        }
    })
    return diary;
}

const lockDairy = async (id: number) => {
    const currentDiary = await db.diary.findUnique({
        where: { id },
        select: { lock: true },
      });
    const diary = await db.diary.update({
        where: {
            id: id
        },
        data: {
            lock: !currentDiary?.lock 
        }
    })
    return diary;
}

export { createDiary, deleteDiary, editDiary, lockDairy };