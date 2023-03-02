import mongoose from "mongoose";
const { Schema } = mongoose;

const WasemeshiSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: true,
    },
    themeColor: {
      type: String,
      required: true,
    },
    openTime1: {
      type: Number,
      required: false,
    },
    closeTime1: {
      type: Number,
      required: false,
    },
    openTime2: {
      type: Number,
      required: false,
    },
    closeTime2: {
      type: Number,
      required: false,
    },
    regularDayOff: {
      type: [Number],
      required: false,
    },
    price: {
      type: String,
      required: true,
    },
    timesToVisit: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Wasemeshi", WasemeshiSchema);
