import mysql from 'mysql2/promise';

export default class DbDepartments {
  private readonly pool: mysql.Pool;

  constructor(pool: mysql.Pool) {
    this.pool = pool;
  }

  // Pagalbinis metodas užklausų vykdymui
  private async executeQuery(sql: string, params?: any[]): Promise<any> {
    let connection: mysql.PoolConnection | undefined; // Tipizuojame jungtį
    try {
      connection = await this.pool.getConnection(); // Gauname jungtį
      const [rows] = await connection.execute(sql, params); // Vykdome užklausą su parametrais
      return rows;
    } catch (error) {
      // Svarbu: klaidas reikia MESTI (throw), kad jos būtų apdorotos aukštesniame lygmenyje
      console.error('[DB] užklausos vykdymo klaida: ', error);
      throw error;
    } finally {
      if (connection) {
        connection.release(); // Grąžiname jungtį atgal į pool'ą
      }
    }
  }

  async getAllDepartments() {
    return await this.executeQuery(`SELECT * FROM departments`);
  }
}
