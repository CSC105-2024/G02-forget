import { db } from "../index.ts";

const createDiary = async (day: number, month: string, topic: string, content: string, emoji: string, userId: number) => {
    const diary = await db.diary.create({
        data: {
            day: day,
            month: month,
            topic: topic,
            content: content,
            emoji: emoji,
            userId: userId
        },
    });
    return diary;
}
export { createDiary };