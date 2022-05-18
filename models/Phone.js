import { Schema, models, model } from "mongoose";
import moment from "moment";

const PhoneSchema = new Schema({
  number: {
    type: String,
    require: true,
    index: { unique: true },
  },
  content: { type: String, default: "" },
  userId: { type: String, default: "" },
  ip: { type: String, default: "" },
  viewCount: { type: Number, default: 0 },
  spamCount: { type: Number, default: 0 },
  safeCount: { type: Number, default: 0 },
  isDelete: { type: Boolean, default: false },
  created: { type: String, default: moment().format("YYYY-MM-DD HH:mm:ss") },
  updated: { type: String, default: moment().format("YYYY-MM-DD HH:mm:ss") },
});

const Phone = models.Phone || model("Phone", PhoneSchema);
export default Phone;
