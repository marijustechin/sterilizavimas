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
};

export default config;
