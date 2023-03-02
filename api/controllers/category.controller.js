import Category from "../models/category.model.js";

import createError from "../utils/createError.js";

export const getCategory = async (req, res, next) => {
  try {
    const category = await Category.find();
    res.status(200).send(category);
  } catch (err) {
    next(err);
  }
};

export const addCategory = async (req, res, next) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(201).send("Category has been created.");
  } catch (err) {
    // わからん？
    next(err);
  }
};

export const deleteCategory = async (req, res, next) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.status(200).send("This category has been deleted!");
  } catch (err) {
    next(err);
  }
};
