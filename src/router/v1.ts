import { Router } from "express";
import prisma from "../db/prisma";

const v1 = Router();
v1.get("/", (req, res) => {
  res.status(200).send({
    msg: "Hello from v1 route",
  });
});

// POST TO CREATE A CATEGORY
v1.post("/category", async (req, res) => {
  const { name, imageurl, description, taxApplicablity, taxNumber, taxType } =
    req.body;

  let valid: boolean = true;
  if (taxApplicablity == 0) {
    valid = false;
  }
  try {
    const newCategory = await prisma.category.create({
      data: {
        name: name,
        image: imageurl,
        description: description,
        taxApplicability: valid,
        taxNumber: taxNumber,
        taxType: taxType,
      },
    });

    res.status(200).send({
      msg: "Category created sucessfully !!!",
      status: 1,
      data: newCategory,
    });
  } catch (err) {
    res.status(403).send({
      msg: "Error in saving data,Please try again !!",
      status: 0,
      err: err,
    });
  }
});
// GET ALL CATEGORY
v1.get("/category", async (req, res) => {
  try {
    const getAllCategory = await prisma.category.findMany({});

    res.status(200).send({
      msg: "Getting all category",
      status: 1,
      data: getAllCategory,
    });
  } catch (err) {
    res.status(403).send({
      msg: "error in getting categories !!",
      status: 0,
      err: err,
    });
  }
});
// GET ALL CATEGORY BY ID or NAME
v1.get("/category/search", async (req, res) => {
  const id: any = req.query.id;
  const name: any = req.query.name;

  if (id) {
    const finalId: number = parseInt(id);
    try {
      const categoryProfile = await prisma.category.findUnique({
        where: {
          id: finalId,
        },
      });

      res.status(200).send({
        msg: "Getting category",
        status: 1,
        data: categoryProfile,
      });
    } catch (err) {
      res.status(403).send({
        msg: "error in getting category !!",
        status: 0,
        err: err,
      });
    }
  } else if (name) {
    try {
      const categoryProfile = await prisma.category.findMany({
        where: {
          name: name,
        },
      });

      res.status(200).send({
        msg: "Getting category",
        status: 1,
        data: categoryProfile,
      });
    } catch (err) {
      res.status(403).send({
        msg: "error in getting category !!",
        status: 0,
        err: err,
      });
    }
  }
});
//UPDATE CATEGORY with category id
v1.patch("/category/:categoryId", async (req, res) => {
  const id = parseInt(req.params.categoryId);
  const { name, imageurl, description, taxApplicablity, taxNumber, taxType } =
    req.body;
  let valid: boolean = true;
  if (taxApplicablity == 0) {
    valid = false;
  }
  try {
    const updateProfile = await prisma.category.update({
      data: {
        name: name,
        image: imageurl,
        description: description,
        taxApplicability: valid,
        taxNumber: taxNumber,
        taxType: taxType,
      },
      where: {
        id: id,
      },
    });
    res.status(200).send({
      msg: "Getting category",
      status: 1,
      data: updateProfile,
    });
  } catch (err) {
    res.status(403).send({
      msg: "error in getting category !!",
      status: 0,
      err: err,
    });
  }
});
// POST Sub category of a  given category id
v1.post("/category/:categoryId/subcategory", async (req, res) => {
  const id = parseInt(req.params.categoryId);
  const { name, image, description, taxApplicability, taxNumber } = req.body;
  // console.log(req.body);
  let valid: boolean = true;
  if (taxApplicability == 0) {
    valid = false;
  }
  try {
    const createSubcategory = await prisma.subCategory.create({
      data: {
        name: name,
        image: image,
        description: description,
        taxApplicability: valid,
        taxNumber: taxNumber,
        categoryId: id,
      },
    });

    res.status(200).send({
      msg: "sucess create subcategory !!",
      data: createSubcategory,
      status: 1,
    });
  } catch (err) {
    res.status(403).send({
      msg: "error in saving subcategory !!",
      status: 0,
      err: err,
    });
  }
});

// GET ALL SUBCATEGORIES

v1.get("/category/subcategory", async (req, res) => {
  try {
    const getAllsubcat = await prisma.subCategory.findMany({});
    res.status(200).send({
      msg: "All subcategories fetched !!!",
      data: getAllsubcat,
      status: 1,
    });
  } catch (err) {
    res.status(403).send({
      msg: "error in getting all subcategory !!",
      status: 0,
      err: err,
    });
  }
});
// GET ALL SUBCATEGORY FO SPECIFIC CATEGORY

v1.get("/category/subcategory/:catgoryId", async (req, res) => {
  const id = parseInt(req.params.catgoryId);
  try {
    const getAllsubCategoryofCategory = await prisma.subCategory.findMany({
      where: {
        categoryId: id,
      },
    });
    res.status(200).send({
      data: getAllsubCategoryofCategory,
      status: 1,
      msg: "Getting all sub cats",
    });
  } catch (err) {
    res.status(403).send({
      msg: "error in getting subcategory !!",
      status: 0,
      err: err,
    });
  }
});
//GET SUBCATEGORY SEARCH BY NAME OR ID
v1.get("/subcategory/search", async (req, res) => {
  const id: any = req.query.id;
  const name: any = req.query.name;

  if (id) {
    const finalId: number = parseInt(id);
    try {
      const categoryProfile = await prisma.subCategory.findUnique({
        where: {
          id: finalId,
        },
      });

      res.status(200).send({
        msg: "Getting category",
        status: 1,
        data: categoryProfile,
      });
    } catch (err) {
      res.status(403).send({
        msg: "error in getting subcategory !!",
        status: 0,
        err: err,
      });
    }
  } else if (name) {
    try {
      const categoryProfile = await prisma.subCategory.findMany({
        where: {
          name: name,
        },
      });

      res.status(200).send({
        msg: "Getting category",
        status: 1,
        data: categoryProfile,
      });
    } catch (err) {
      res.status(403).send({
        msg: "error in getting subcategory !!",
        status: 0,
        err: err,
      });
    }
  }
});
//CREATE ITEM FOR AN SUBCATEGORY

v1.post("/subcategory/:subcategoryId/item", async (req, res) => {
  const id = parseInt(req.params.subcategoryId);
  const {
    name,
    image,
    description,
    taxNumber,
    baseAmount,
    discount,
    totalAmount,
    taxApplicablity,
  } = req.body;

  let valid: boolean = true;
  if (taxApplicablity == 0) {
    valid = false;
  }
  try {
    const itemdata = await prisma.items.create({
      data: {
        name: name,
        image: image,
        description: description,
        taxNumber: taxNumber,
        baseAmount: baseAmount,
        discount: discount,
        totalAmount: totalAmount,
        taxApplicability: valid,
        subcategoryId: id,
      },
    });
    res.status(200).send({
      msg: "Getting item",
      status: 1,
      data: itemdata,
    });
  } catch (err) {
    res.status(403).send({
      msg: "error in getting category !!",
      status: 0,
      err: err,
    });
  }
});

export default v1;
