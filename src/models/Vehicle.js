import mongoose from "mongoose";

const vehicleSchema = mongoose.Schema({
  imgUrl: String,
  year: String,
  make: String,
  model: String,
  price: String,
  km: String,
  miles: Number,
  fuel: String,
  city: String,
  vehicleIsNew: Boolean
});

export default mongoose.model("Vehicle", vehicleSchema);
