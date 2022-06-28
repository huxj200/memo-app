const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'please add a title'],
        unique: true,
        trim: true,
        maxlength: [40, "Title cannot be more than 40 characters"]
    },
    description: {
        type: String,
        required: true,
        maxlength: [200, 'Description cannot be more than 200 characters'],
    }
})

module.exports = mongoose.models.Note || mongoose.MongooseError.model("Note",
    NoteSchema);