import { coursesDao } from "../daos/courses.dao.js";
import { NotFoundError } from "./errors/not-found.error.js";

export const createOne = async (courseInfo) => {
  return coursesDao.createOne(courseInfo);
};

export const getAll = async () => {
  return coursesDao.getAll();
};

export const getById = async (id) => {
  const course = await coursesDao.getById(id);
  if (!course) {
    throw new NotFoundError("Course");
  }
  return course;
};
