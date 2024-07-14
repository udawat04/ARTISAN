const express = require("express");

const multer = require("multer");
const path = require("path");
const { adminController, categoryController, productController, subcategoryController, cartController, wishlistController } = require("../Admin/controller");
const { registerController, loginController, userController, paymentController } = require("../User/controller");
const auth = require("../middleware/auth");

const router = express.Router();

const categoryImage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload/category/image");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});
const uploadcategory = multer({ storage: categoryImage });

const subcategoryImage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload/subcategory/image");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});
const uploadsubcategory = multer({ storage: subcategoryImage });

const productImage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload/product/image");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});
const uploadproduct = multer({ storage: productImage });

router.post("/admin", adminController.store);
router.get("/admin", adminController.show);





router.post(
  "/category",
  uploadcategory.single("image"),
  categoryController.store
);
router.get("/category", categoryController.show);
router.delete("/category/:id", categoryController.delete);
router.put("/category/update/:id", categoryController.update);
router.get("/category/sub", categoryController.getCatWithSubCats);



router.post(
  "/products/add",
  uploadproduct.single("prodimage"),
  productController.store
);
router.get("/products", productController.index);
router.delete("/products/delete/:id", productController.delete);
router.get("/products/:id", productController.findbycategory);


router.post(
  "/sub/add",
  uploadsubcategory.single("subimage"),
  subcategoryController.store
);
router.get("/sub", auth, subcategoryController.show);
router.get("/sub/:id", subcategoryController.findbycategory);
router.get("/subcat", subcategoryController.getSubCatsWithProducts);

// find subcategory by its id 
router.get("/subcategory/:id", subcategoryController.findbysubcategory);

// Login Controller
router.post("/login", loginController.login);
router.post("/register", registerController.store);

router.get("/user/profile", auth, userController.getUserProfile)

router.post("/addToCart", cartController.addToCart);
router.get("/getCartItems/:userId", cartController.getCartItems);
router.put("/updateCartItem", cartController.updateCartItem);
router.delete("/removeCartItem", cartController.removeCartItem);



router.post("/addToWishlist", wishlistController.addToWishlist);
router.post("/removeFromWishlist", wishlistController.removeFromWishlist);
router.get("/getWishlist/:userId", wishlistController.getWishlist);

router.post("/create-order", paymentController.creatOrder);
router.post("/verify-order", paymentController.verifyOrder);

module.exports = router;
