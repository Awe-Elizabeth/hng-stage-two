const mongoose = require('mongoose');
const slugify = require('slugify');

const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    slug: String,
    role: {
        type: String,
        default: 'user'
    },
    state: {
        type: String,
        required: [true, "Please add your state of origin"]
    },
    address: {
        type: String,
        required: [true, 'Please add your address']
    },
    occupation: {
        type: String,
        required: [true, "Please, add your occupation"]
    },
    annualSalary: {
        type: Number
    },
    monthlySalary: {
        type: Number
    }
});

PersonSchema.pre('save', function(next){
    this.slug = slugify(this.name, {lower: true})
    next();
});

module.exports = mongoose.model('Person', PersonSchema);