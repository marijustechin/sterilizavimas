import config from '../config/config.js';
import mysql, { RowDataPacket } from 'mysql2/promise';

const db = mysql.createPool({
  host: config.intranet.db_host,
  user: config.intranet.db_user,
  password: config.intranet.db_pass,
  database: config.intranet.db_name,
  charset: config.intranet.db_chrset,
});

interface Row extends RowDataPacket {
  doc_status: string;
  dom_code: string;
  dom_value: string;
}

export default class RawDbService {
  static async getDataByDocId(docId: number) {
    const query = `
    SELECT fs_documents.doc_status, fs_document_metadata.dom_code, fs_document_metadata.dom_value
    FROM fs_document_metadata
    INNER JOIN fs_documents ON fs_document_metadata.dom_doc_id=fs_documents.doc_id
    WHERE fs_document_metadata.dom_doc_id = ?
    `;

    const [rows] = await db.query<Row[]>(query, [docId]);

    if (rows.length === 0) {
      return { result: null, doc_status: null };
    }

    const result: Record<string, string> = {};
    for (const row of rows) {
      result[row.dom_code] = row.dom_value;
    }

    return {
      result,
      doc_status: rows[0].doc_status,
    };
  }
}
