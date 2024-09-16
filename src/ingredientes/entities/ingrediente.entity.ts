const mongoose = require('mongoose');

export const IngrediteSchema = new mongoose.Schema({
    nome: { type: String, required: true },    
});
