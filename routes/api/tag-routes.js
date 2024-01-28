const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags
router.get('/', (req, res) => {
  Tag.findAll().then((productData) => {
    res.json(productData);
  });
  // be sure to include its associated Product data //NEED TO MAKE THIS WORK
});

// Finds a single tag by its `id` 
router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  Tag.findByPk(req.params.id).then((tagData) => {
    res.json(tagData);
  });
  // be sure to include its associated Product data //NEED TO MAKE THIS WORK
});

// create a new tag
router.post('/', async (req, res) => {
  Tag.create(req.body)
  .then((newTag) => {
    res.json(newTag);
  })
  .catch((err) => {
    res.json(err);
  });
});

// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  Tag.update(
    {
      tag_name: req.body.tag_name,
    },
    {
      // Gets the tag based on the id given in the request parameters
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedTag) => {
      // Sends the updated tag as a json response
      res.json(updatedTag);
    })
    .catch((err) => res.json(err));
});

// delete on tag by its `id` value
router.delete('/:id', (req, res) => {
  Tag.destroy({
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
