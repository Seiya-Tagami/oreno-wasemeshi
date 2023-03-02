import Wasemeshi from "../models/wasemeshies.model.js";

import createError from "../utils/createError.js";

export const getWasemeshies = async (req, res, next) => {
  try {
    const wasemeshies = await Wasemeshi.find();
    res.status(200).send(wasemeshies);
  } catch (err) {
    next(err);
  }
};

export const createWasemeshi = async (req, res, next) => {
  try {
    const newWasemeshi = new Wasemeshi(req.body);
    await newWasemeshi.save();
    res.status(201).send("Wasemeshi has been created.");
  } catch (err) {
    // わからん？
    next(err);
  }
};

export const deleteWasemeshi = async (req, res, next) => {
  try {
    await Wasemeshi.findByIdAndDelete(req.params.id);
    res.status(200).send("Wasemeshi has been deleted!");
  } catch (err) {
    next(err);
  }
};
