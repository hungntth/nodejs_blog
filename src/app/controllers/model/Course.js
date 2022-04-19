const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);




const Course = new Schema({
    name: { type: String, maxLenght: 255 },
    description: { type: String, maxLenght: 600 },
    image: { type: String, maxLenght: 255 },
    videoID: { type: String },
    slug: { type: String, slug: "name", unique: true }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Course', Course);
