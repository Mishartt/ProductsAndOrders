const express = require('express');
const products = require('../data/products.json')
const path = require('path')
const fs = require('fs').promises;
const productsRoute = express.Router();

productsRoute.get('/getAll', async (req, res) => {
  try {
    const filePath = path.join(__dirname, '../data/products.json');
    const fileData = await fs.readFile(filePath, 'utf-8');
    const products = JSON.parse(fileData);

    const { type, specification } = req.query;

    let filteredProducts = products;

    if (type) {
      filteredProducts = filteredProducts.filter(
        product => product.type === type
      );
    }

    if (specification) {
      filteredProducts = filteredProducts.filter(
        product => product.specification === specification
      );
    }

    res.json({ products: filteredProducts });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to read products' });
  }
});
  

productsRoute.delete('/deleteProduct/:id', async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id)
        if (!id) return res.status(400).json({ error: 'Product ID is required' });
    
        const filePath = path.join(__dirname, '../data/products.json');
        console.log(filePath)
        const fileData = await fs.readFile(filePath, 'utf-8');
        const products = JSON.parse(fileData);
    
        console.log(products.length)
        const updatedProducts = products.filter(product => product.id !== Number(id));
        console.log(updatedProducts.length)
        
        await fs.writeFile(filePath, JSON.stringify(updatedProducts, null, 2));
    
        res.status(200).json({ message: 'Product deleted successfully' });
      } catch (err) {
        console.error('Error deleting product:', err);
        res.status(500).json({ error: 'Failed to delete product' });
      }
  });
  

module.exports = productsRoute