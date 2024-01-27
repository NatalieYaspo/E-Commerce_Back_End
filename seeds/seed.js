const sequelize = require('../config/connection');
const {
  Product,
  Category,
  Tag,
  ProductTag,
} = require('../models');

const categorySeedData = require('./category-seeds.json');
const productSeedData = require('./product-seeds.json');
const productTagSeedData = require('./product-tag-seeds.json');
const tagSeedData = require('./tag-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const categories = await Category.bulkCreate(categorySeedData);

  const products = await Product.bulkCreate(productSeedData);

  const productTags = await ProductTag.bulkCreate(productTagSeedData);

  const tags = await Tag.bulkCreate(tagSeedData);

  

  process.exit(0);
};

seedDatabase();
