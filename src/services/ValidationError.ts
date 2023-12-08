export class ValidationError extends Error {
  constructor(message = "", options?: ErrorOptions) {
    super(message, options);
  }
}
