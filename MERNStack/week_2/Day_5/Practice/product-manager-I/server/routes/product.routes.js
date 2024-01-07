const { createProduct, viewAll, findOneProduct, updateProduct, deleteProduct } = require("../controllers/product.controller");

module.exports = (app) => {
  app.post("/api/products/new", createProduct);
  app.get("/api/products", viewAll);
  app.get("/api/products/:id", findOneProduct);
  app.put("/:id/edit", updateProduct);
  app.delete("/:id/delete", deleteProduct);
};
