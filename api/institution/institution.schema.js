import mongoose from 'mongoose';
var Schema = mongoose.Schema;


var institutionSchema = new Schema({
    name: {
        type: String
    },
    URL: {
        type: String
    },
    emailDomain: {
        type: String
    }

},{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});

export default mongoose.model('institution', institutionSchema);