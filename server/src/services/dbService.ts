import mysql from 'mysql2/promise';

type TUserData = {
  userId: string;
  username: string;
  displayName: string;
  division: string;
  role: string;
};

export default class DbService {
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

  async insertRefreshToken(userData: TUserData, refreshToken: string) {
    await this.executeQuery(`DELETE from jwt WHERE user_id=?`, [
      userData.userId,
    ]);
    await this.executeQuery(
      `INSERT INTO jwt (user_id, username, display_name, division, role, refresh_token) VALUES(?,?,?,?,?,?)`,
      [
        userData.userId,
        userData.username,
        userData.displayName,
        userData.division,
        userData.role,
        refreshToken,
      ]
    );
  }

  async deleteRefreshToken(userId: string) {
    await this.executeQuery(`DELETE FROM jwt WHERE user_id=?`, [userId]);
  }

  async deleteRefreshTokenByToken(refreshToken: string) {
    await this.executeQuery(`DELETE FROM jwt WHERE refresh_token=?`, [
      refreshToken,
    ]);
  }

  async findTokenByToken(refreshToken: string) {
    const refreshTokenFromDb = await this.executeQuery(
      'SELECT refresh_token FROM jwt WHERE refresh_token=?',
      [refreshToken]
    );

    return refreshTokenFromDb;
  }
}
