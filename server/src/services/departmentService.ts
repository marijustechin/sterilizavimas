import dbAutoclave from '../config/db';
import DbDepartments from './dbDepartments';

const dbDepartments = new DbDepartments(dbAutoclave);

export default class DepartmentService {
  static async getAll() {
    return await dbDepartments.getAllDepartments();
  }
}
