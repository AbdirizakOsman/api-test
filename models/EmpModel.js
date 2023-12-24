import mongoose from "mongoose";

const EmpSchema = mongoose.Schema(
  {
    empname: { type: String, require: true },
    mothername: { type: String, require: true },
    Tell: { type: Number, require: true },
    Address: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const shaqo = mongoose.model("shaqo", EmpSchema);
export default shaqo;
