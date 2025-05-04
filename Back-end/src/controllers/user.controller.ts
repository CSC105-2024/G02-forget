import type { Context } from "hono";
import * as userModel from "../models/user.model.ts";

type createUserBody = {
	username: string;
	email: string;
    password: string;
};
const createUser = async (c: Context) => {
	try {
		const body = await c.req.json<createUserBody>();
		if (!body.username || !body.email || !body.password)
			return c.json(
				{
					success: false,
					data: null,
					msg: "Missing required fields",
				},
				400
			);
		if (await userModel.isDuplicate(body.username, body.email)) {
			return c.json({
				success: false,
				data: null,
				msg: "Username or Email is duplicated",
			});
		}
		const newUser = await userModel.createUser(
			body.username,
			body.email,
            body.password,
		);
		return c.json({
			success: true,
			data: newUser,
			msg: "Created new User!",
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
};

const getAllUser = async (c: Context) => {
    try {
		const user = await userModel.getAllUser();
        return c.json(user);
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
export { createUser, getAllUser };