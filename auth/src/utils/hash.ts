import { promisify } from "util";
import { scrypt, randomBytes } from "crypto";

const hasher = promisify(scrypt);
export class Hash {
  static async encrypt(password: string) {
    const salt = randomBytes(8).toString("hex");
    const buf = (await hasher(password, salt, 64)) as Buffer;

    return `${buf.toString("hex")}.${salt}`;
  }

  static async compare(hashedPassword: string, password: string) {
    const [hash, salt] = hashedPassword.split(".");
    const buf = (await hasher(password, salt, 64)) as Buffer;

    return buf.toString("hex") === hash;
  }
}
