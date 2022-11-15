const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String
  },
  description: {
    type: String
  },
  stack: {
    type: Array
  },
  links: Object,
  hidden: Boolean,
  app_photo: String
})

module.exports = mongoose.model('project', projectSchema);