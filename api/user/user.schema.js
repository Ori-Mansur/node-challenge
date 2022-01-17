import mongoose from 'mongoose';
var Schema = mongoose.Schema;


var userSchema = new Schema({
    name: {
        type: String
    },
    role: {
        type: String,
        enum:['student','academic','administrator']
    },
    emailAddress: {
        type: String
    },
    password: {
        type: String
    },
    institution: {
        type: Schema.Types.ObjectId,
        ref: 'institution'
    }
},{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});

export default mongoose.model('user', userSchema);