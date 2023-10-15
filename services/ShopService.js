const fs = require("fs");
const path = require("path");

const dataFilePath = path.join("data", "products.json");

const getShopList = (req, res, next) => {
  fs.readFile(dataFilePath, (err, data) => {
    if (err) {
      console.log(err);
      return res.redirect("/");
    } else {
      const products = JSON.parse(data);
      return res.render("shop/shop", {
        pageTitle: "Shop Page",
        shopName: "CoMit",
        products: products,
      });
    }
  });
};

// router.get("/:id", ShopService.getShopItem);
const getShopItem = (req, res, next) => {
  fs.readFile(dataFilePath, (err, data) => {
    if (err) {
      console.log(err);
      return res.redirect("/");
    } else {
      const products = JSON.parse(data);
      const product = products.find((p) => p.id === req.params.id);
      return res.render("shop/shop-detail", {
        pageTitle: product.title,
        product: product,
      });
    }
  });
};

module.exports = {
  getShopList,
  getShopItem,
};
