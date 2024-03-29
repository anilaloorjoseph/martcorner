import mongoose from "mongoose";

const countrySchema = mongoose.Schema(
  {
    country: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Country = mongoose.model("Country", countrySchema);

export default Country;
