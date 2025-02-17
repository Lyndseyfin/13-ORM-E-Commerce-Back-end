// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
// Product.belongsTo(Category, {
//   through: {
//     model: Tag,
//     foreignKey: 'category_id',
//   },
// })

// Products belongsTo Category
Product.belongsTo(Category, {
     foreignKey: 'category_id',
 })

// Categories have many Products
// Category.belongsToMany(Product, {
//   through: {
//     model: Tag,
//     foreignKey: 'category_id',
//   },
//   as: 'category_product'
// })
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});


// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    foreignKey: 'product_id',
  }
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
through: {
    model: ProductTag,
    foreignKey: 'tag_id'
  }
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
