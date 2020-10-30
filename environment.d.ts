declare global {
  namespace NodeJS {
    interface ProcessEnv {
      HOST: string;
      PORT_REDIS: number;
      PORT: number;
      PASSWORD: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}
