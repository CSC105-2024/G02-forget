import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient()
 const createUser = async (username: string, email: string, password: string) => {
  return await prisma.user.create({
    data: {
      username,
      email,
      password,
    },
  });
};

 const isDuplicate = async (username: string, email: string) => {
   const existing = await prisma.user.findFirst({
     where: {
       OR: [{ username }, { email }],
     },
   });
   return !!existing;
};

const getAllUser = async () => {
  return await prisma.user.findMany({
    select: {
      id: true,
      username: true,
      email: true,
      template: true,
    },
  });
};

const getInfoUser = async (id: number) => {
  return await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      username: true,
      email: true,
      template: true,
    },
  });
};

const findByUsernameOrEmail = async (name: string) => {
  return await prisma.user.findFirst({
    where: {
      OR: [{ username: name }, { email: name }],
    },
  });
};

const getDiaryFromUser = async (month: string, year: string, userId: number) => {
  return await prisma.diary.findMany({
    where: {
      userId,
      month,
      year,
    },
  });
};

 const changeTemplate = async (id: number, template: string) => {
  return await prisma.user.update({
    where: { id },
    data: { template },
  });
};

 const getTemplate = async (id: number) => {
  return await prisma.user.findUnique({
    where: { id },
    select: { id: true, template: true },
  });

};
export {createUser,isDuplicate,getAllUser,getInfoUser,findByUsernameOrEmail,getDiaryFromUser,changeTemplate,getTemplate}