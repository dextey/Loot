import mongoose from "mongoose";
import { Hash } from "../utils/hash";

// interface for User
interface UserAttrs {
  email: string;
  password: string;
}

// interface for UserModel
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

// interface for user Document
interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function (done) {
  if (this.isModified("password")) {
    const hashedPassword = await Hash.encrypt(this.get("password"));
    this.set("password", hashedPassword);
  }
});

userSchema.statics.build = (attrs: UserAttrs) => {
  return new UserModel(attrs);
};

const UserModel = mongoose.model<UserDoc, UserModel>("UserModel", userSchema);

export { UserModel };
