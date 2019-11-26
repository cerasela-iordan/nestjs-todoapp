import * as mongoose from 'mongoose';
export const ToDoSchema = new mongoose.Schema({
    checked: {
        type: Boolean,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
});
