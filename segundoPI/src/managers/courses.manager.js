import { coursesModel } from "../db/models/courses.model.js";
import BasicManager from "./basic.manager.js";
class CoursesManager extends BasicManager {
  constructor() {
    super(coursesModel, ["teacher", "students"]);
  }
}

export const coursesManager = new CoursesManager();
