import type { Context } from "hono";
import * as diaryModel from "../models/diary.model.ts";

type createDiaryBody = {
    day: number;
    month: string;
    topic: string;
    content: string;
    emoji: string;
    userId: number;
};

const createDairy = async (c: Context) => {
    try {
        const body = await c.req.json<createDiaryBody>();
        if (!body.userId)
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );
        const newDiary = await diaryModel.createDiary(body.day, body.month, body.topic, body.content, body.emoji, body.userId);
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
export { createDairy };