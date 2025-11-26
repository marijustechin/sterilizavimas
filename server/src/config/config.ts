import dotenv from 'dotenv';
dotenv.config();

interface IConfig {
  port: number;
  nodeEnv: string;

  ldap: {
    ldap_server: string;
    ldap_port: string;
    ldap_domain: string;
    ldap_user: string;
    ldap_password: string;
  };

  intranet: {
    db_name: string;
    db_pass: string;
    db_host: string;
    db_user: string;
    db_chrset: string;
  };

  mainDb: {
    dbHost: string;
    dbName: string;
    dbPass: string;
    dbUser: string;
  };
}

function validateEnvVar(name: string): string {
  const value = process.env[name];

  if (typeof value !== 'string' || value === '') {
    console.error(`KLAIDA: aplinkos kitamasis ${name} neapibrėžtas.`);
    process.exit(1);
  }

  return value;
}

const config: IConfig = {
  port: Number(process.env.PORT) || 3003,
  nodeEnv: process.env.NODE_ENV ?? 'development',

  ldap: {
    ldap_server: validateEnvVar('LDAP_SERVER'),
    ldap_port: validateEnvVar('LDAP_PORT'),
    ldap_domain: validateEnvVar('LDAP_DOMAIN'),
    ldap_user: validateEnvVar('LDAP_USER'),
    ldap_password: validateEnvVar('LDAP_PASSWORD'),
  },

  intranet: {
    db_chrset: validateEnvVar('DB_CHRSET_INTRANET'),
    db_host: validateEnvVar('DB_HOST_INTRANET'),
    db_name: validateEnvVar('DB_NAME_INTRANET'),
    db_pass: validateEnvVar('DB_PASS_INTRANET'),
    db_user: validateEnvVar('DB_USER_INTRANET'),
  },

  mainDb: {
    dbHost: validateEnvVar('DB_HOST_MAIN'),
    dbName: validateEnvVar('DB_NAME_MAIN'),
    dbPass: validateEnvVar('DB_PASS_MAIN'),
    dbUser: validateEnvVar('DB_USER_MAIN'),
  },
};

export default config;
