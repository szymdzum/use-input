interface AppErrorOptions {
  status?: number;
  code?: string;
  details?: Record<string, unknown>;
  validationErrors?: Record<string, string[]>;
}

export class AppError extends Error {
  public status: number;
  public code?: string;
  public details?: Record<string, unknown>;
  public validationErrors?: Record<string, string[]>;

  constructor(message: string, options: AppErrorOptions = {}) {
    super(message);
    this.name = 'AppError';
    this.status = options.status ?? 500;
    this.code = options.code;
    this.details = options.details;
    this.validationErrors = options.validationErrors;
  }
}