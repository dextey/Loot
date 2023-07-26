import { CustomError } from "./customError";

export class GeneralError extends CustomError {
  statusCode = 400;

  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, GeneralError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
