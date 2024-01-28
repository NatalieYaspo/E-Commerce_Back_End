const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags
router.get('/', (req, res) => {
  // be sure to include its associated Product data
  Tag.findAll().then((productData) => {
    res.json(productData);
  });
});

// Finds a single tag by its `id` //NEED TO TEST
router.get('/:id', async (req, res) => {
  // be sure to include its associated Product data
  try {
    const productData = await ProductTag.findByPk(req.params.tag_id);
    if (!productData) {
      res.status(404).json({ message: 'No tag with this id!' });
      return;
    }
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new tag //NEED TO TEST
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update a tag's name by its `id` value //NEED TO TEST
router.put('/:id', async (req, res) => {
  Tag.update(
    {
      tag_name: req.body.tag_name,
    },
    {
      // Gets the product tag based on the id given in the request parameters
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedTag) => {
      // Sends the updated product tag as a json response
      res.json(updatedTag);
    })
    .catch((err) => res.json(err));
});

// delete on tag by its `id` value //NEED TO TEST
router.delete('/:id', (req, res) => {
  ProductTag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedTag) => {
      res.json(deletedTag);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
