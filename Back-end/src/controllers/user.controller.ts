import type { Context } from "hono";
import * as userModel from "../models/user.model.ts";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

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

    const hashedPassword = await bcrypt.hash(body.password, 10); 
    const newUser = await userModel.createUser(
      body.username,
      body.email,
      hashedPassword
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


const getInfoUser = async (c: Context) => {
	try {
		const id = Number(c.req.param("id"));
		const user = await userModel.getInfoUser(id);
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
const signinUser = async (c: Context) => {
  try {
    const { name, password } = await c.req.json();
    const user = await userModel.findByUsernameOrEmail(name);
    if (!user) {
      return c.json({ success: false, data: null, msg: "No this account" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return c.json({ success: false, data: null, msg: "Invalid credentials" }, 401);
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
      expiresIn: "2h",
    });
    c.header("Set-Cookie", `token=${token}; HttpOnly; Path=/; Max-Age=604800`);
    c.set("user", user);

    return c.json({
      success: true,
      data: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
      msg: "Signed in",
    });
  } catch (e) {
    return c.json({ success: false, data: null, msg: `${e}` }, 500);
  }
};

const getDiaryFromUser = async (c: Context) => {
	try {
		const userId = Number(c.req.param("id"));
		const month = String(c.req.param("month"));
		const year = String(c.req.param("year"));
		const diary = await userModel.getDiaryFromUser(month, year, userId);
		return c.json({
			success: true,
			data: diary
		});
	} catch (e) {
		return c.json({
			success: false,
			data: null,
			msg: `${e}`,
		});
	}
};


const changeTemplate = async (c: Context) => {
	try {
		const id = Number(c.req.param("id"));
		const { template } = await c.req.json();
		const user = await userModel.changeTemplate(id, template);
		return c.json({
			success: true,
			data: user
		});
	} catch (e) {
		return c.json({
			success: false,
			data: null,
			msg: `${e}`,
		})
	}
}

const getTemplate = async (c: Context) => {
	try {
		const id = Number(c.req.param("id"));
		const user = await userModel.getTemplate(id);
		return c.json({
			success: true,
			data: {
				id: user?.id,
				template: user?.template,
			}
		});
	} catch (e) {
		return c.json({
			success: false,
			data: null,
			msg: `${e}`,
		})
	}
}
const logoutUser = async (c: Context) => {
  c.header("Set-Cookie", "token=; HttpOnly; Path=/; Max-Age=0");
  return c.json({ success: true, msg: "Logged out" });
};
const getProfile = async (c: Context) => {
  const user = c.get("user");
  const info = await userModel.getInfoUser(user.id);
  return c.json({ success: true, data: info });
};

export { createUser, getAllUser, getInfoUser, signinUser, getDiaryFromUser, changeTemplate, getTemplate, logoutUser,getProfile };