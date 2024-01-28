const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags
router.get('/', async (req, res) => {
  // Includes its associated Product data
  try {
    const tagData = await Tag.findAll({
      // JOIN with Product
      include: [{ model: Product, ProductTag}]
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tags found!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Finds a single tag by its `id` 
router.get('/:id', async (req, res) => {
  // Includes its associated Product data
  try {
    const tagData = await Tag.findByPk((req.params.id), {
      // JOIN with Product
      include: [{ model: Product, ProductTag}]
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
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
