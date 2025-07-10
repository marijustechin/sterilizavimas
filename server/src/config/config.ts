interface IConfig {
  port: number;
  nodeEnv: string;
  db: {
    db_host: string;
    db_user: string;
    db_name: string;
    db_pass: string;
  };
}

function validateEnvVar(name: string): string {
  const value = process.env[name];

  if (typeof value !== 'string' || value === '') {
    console.error(
      `ERROR: Environment variable ${name} is not defined or is empty.`
    );
    process.exit(1);
  }

  return value;
}

const config: IConfig = {
  port: Number(process.env.PORT) || 3004,
  nodeEnv: process.env.NODE_ENV ?? 'development',
  db: {
    db_host: validateEnvVar('DB_HOST'),
    db_user: validateEnvVar('DB_USER'),
    db_pass: validateEnvVar('DB_PASS'),
    db_name: validateEnvVar('DB_NAME'),
  },
};

export default config;
