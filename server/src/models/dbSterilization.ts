import mysql from 'mysql2/promise';

export default class DbSterilization {
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

  async getNextCycleNumber(sterilizer_id: number): Promise<number> {
    const result = await this.executeQuery(
      `SELECT COALESCE(MAX(cycle_number), 0) + 1 AS nextCycleNumber
     FROM sterilization_cycles
     WHERE sterilizer_id = ? AND DATE(sterilization_date) = CURDATE()`,
      [sterilizer_id]
    );

    // result bus masyvas su vienu objektu [{ nextCycleNumber: 1 }]
    if (Array.isArray(result) && result.length > 0) {
      return result[0].nextCycleNumber;
    }
    // Turėtų niekada nenutikti, bet gera turėti atsarginį planą
    return 1;
  }
}
