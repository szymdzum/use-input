import { createRequestHandler } from '@react-router/express';
import express from 'express';
import type { Express } from 'express';
import 'react-router';

declare module 'react-router' {
  export interface AppLoadContext {
    SERVER_VALUE: string;
  }
}

const app: Express = express();

// Disable X-Powered-By header for security
app.disable('x-powered-by');

// Basic JSON middleware
app.use(express.json());

app.use(
  createRequestHandler({
    // @ts-expect-error - virtual module provided by React Router at build time
    build: () => import('virtual:react-router/server-build'),
    getLoadContext() {
      return {
        SERVER_VALUE: 'hello from server/app.ts',
      };
    },
  }),
);

export default app;
