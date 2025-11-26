import config from '../config/config.js';
import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: config.intranet.db_host,
  user: config.intranet.db_user,
  password: config.intranet.db_pass,
  database: config.intranet.db_name,
  charset: config.intranet.db_chrset,
});

export default class RawDbService {
  static async getDataByDocId(docId: number) {
    const query = `SELECT dom_code, dom_value 
                 FROM fs_document_metadata 
                 WHERE dom_doc_id = ?`;

    const [rows] = await db.query(query, [docId]);

    const result: Record<string, string> = {};
    for (const row of rows as any[]) {
      result[row.dom_code] = row.dom_value;
    }

    return result;
  }
}
