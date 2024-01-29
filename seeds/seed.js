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

  const categories = await Category.bulkCreate(categorySeedData, {
    individualHooks: true,
    returning: true,
  });

  const products = await Product.bulkCreate(productSeedData, {
    individualHooks: true,
    returning: true,
  });

  const productTags = await ProductTag.bulkCreate(productTagSeedData, {
    individualHooks: true,
    returning: true,
  });

  const tags = await Tag.bulkCreate(tagSeedData, {
    individualHooks: true,
    returning: true,
  });

  

  process.exit(0);
};

seedDatabase();
