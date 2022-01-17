import mongoose from 'mongoose';
var Schema = mongoose.Schema;


var bookSchema = new Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    ISBN: {
        type: String
    },
    institution: {
        type: Schema.Types.ObjectId,
        ref: 'institution'
    }
},{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});

export default  mongoose.model('book', bookSchema);