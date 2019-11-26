import * as mongoose from 'mongoose';
export const ToDoSchema = new mongoose.Schema({
    checked: Boolean,
    text: String,
});

