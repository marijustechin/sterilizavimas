interface IConfig {
  port: number;
  nodeEnv: string;
  printer: {
    printer_host: string;
    printer_port: string;
    print_transport: 'raw' | 'ipp' | 'mock';
  };
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
  port: Number(process.env.PORT) || 3004,
  nodeEnv: process.env.NODE_ENV ?? 'development',
  printer: {
    printer_host: validateEnvVar('PRINTER_HOST'),
    printer_port: validateEnvVar('PRINTER_PORT'),
    print_transport: validateEnvVar(
      'PRINT_TRANSPORT'
    ) as IConfig['printer']['print_transport'],
  },
  ldap: {
    ldap_server: validateEnvVar('LDAP_SERVER'),
    ldap_port: validateEnvVar('LDAP_PORT'),
    ldap_domain: validateEnvVar('LDAP_DOMAIN'),
    ldap_user: validateEnvVar('LDAP_USER'),
    ldap_password: validateEnvVar('LDAP_PASSWORD'),
  },
};

export default config;
