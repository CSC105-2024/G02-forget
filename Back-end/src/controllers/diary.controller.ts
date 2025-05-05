import type { Context } from "hono";
import * as diaryModel from "../models/diary.model.ts";

// type createDiaryBody = {
//     day: number;
//     month: string;
//     topic: string;
//     content: string;
//     emoji: string;
//     userId: number;
// };

const createDairy = async (c: Context) => {
    try {
        const { day, month, topic, content, emoji, userId } = await c.req.json();
        // const user = c.get('user') as {user : {id : number}};
        const newDiary = await diaryModel.createDiary(day, month, topic, content, emoji, userId);
        return c.json({
            success: true,
            data: newDiary,
            msg: "Created new Diary!",
        });
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}

const deleteDiary = async (c: Context) => {
    try {
        const id = Number(c.req.param("id"));
        const diary = await diaryModel.deleteDiary(id);
        return c.json(diary);
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}

const editDiary = async (c: Context) => {
    try {
        const id = Number(c.req.param("id"));
        const { topic, content, emoji } = await c.req.json();
        const diary = await diaryModel.editDiary(id, topic, content, emoji);
        return c.json(diary);
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}

const lockDairy = async (c: Context) => {
    try {
        const id = Number(c.req.param("id"));
        const diary = await diaryModel.lockDairy(id);
        return c.json(diary);
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}

export { createDairy, deleteDiary , editDiary, lockDairy};