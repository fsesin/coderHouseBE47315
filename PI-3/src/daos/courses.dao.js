import { coursesModel } from "../models/courses.model.js";
import BasicDao from "./basic.dao.js";
class CoursesDao extends BasicDao {
  constructor() {
    super(coursesModel, ["teacher", "students"]);
  }
}

export const coursesDao = new CoursesDao();
