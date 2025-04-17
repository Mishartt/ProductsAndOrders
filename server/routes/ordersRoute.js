const express = require('express')
const path = require('path')
const fs = require('fs').promises

const ordersRoute = express.Router();

ordersRoute.get('/getAll', async (req, res) => {
    try {
        const filePath = path.join(__dirname, '../data/orders.json');
        const fileData = await fs.readFile(filePath, 'utf-8'); 
        const orders = JSON.parse(fileData);
        res.json({ orders });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to read orders' });
    }
})


ordersRoute.post('/deleteProductFromOrder',express.json(), async (req, res) => {
    console.log('Request body:', req.body);
    try {
      const { orderId, productId } = req.body;
      if (orderId === undefined || productId === undefined) {
        return res.status(400).json({ error: 'orderId и productId обязательны' });
      }
  
      const filePath = path.join(__dirname, '../data/orders.json');
      console.log('File path:', filePath);
  
      const fileData = await fs.readFile(filePath, 'utf-8');
      const orders = JSON.parse(fileData);
  
      const updatedOrders = orders.map(order => {
        if (order.id === Number(orderId)) {
          return {
            ...order,
            products: order.products.filter(id => id !== Number(productId))
          };
        }
        return order;
      });
  
      await fs.writeFile(filePath, JSON.stringify(updatedOrders, null, 2));
  
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (err) {
      console.error('Error deleting product:', err);
      res.status(500).json({ error: 'Failed to delete product' });
    }
  });


ordersRoute.delete('/deleteOrder/:id', async (req, res) => {
    console.log('delete order')
    try {
        const { id } = req.params;
        console.log({id})
        if (!id) return res.status(400).json({ error: 'Product ID is required' });
    
        const filePath = path.join(__dirname, '../data/orders.json');
        console.log(filePath)
        const fileData = await fs.readFile(filePath, 'utf-8');
        const orders = JSON.parse(fileData);
    
        console.log(orders.length)
        const updatedOrders = orders.filter(order => order.id !== Number(id));
        console.log(updatedOrders.length)
        
        await fs.writeFile(filePath, JSON.stringify(updatedOrders, null, 2));
    
        res.status(200).json({ message: 'Product deleted successfully' });
      } catch (err) {
        console.error('Error deleting product:', err);
        res.status(500).json({ error: 'Failed to delete product' });
      }
  });

  ordersRoute.get('/resetAll', async (req, res) => {
    console.log('reset all')
    try {
      const ordersPath = path.join(__dirname, '../data/orders.json');
      const productsPath = path.join(__dirname, '../data/products.json');
  
      const ordersBackupPath = path.join(__dirname, '../data/ordersBackup.json');
      const productsBackupPath = path.join(__dirname, '../data/productsBackup.json');
  
      const ordersBackupData = await fs.readFile(ordersBackupPath, 'utf-8');
      const ordersBackup = JSON.parse(ordersBackupData);
  
      const productsBackupData = await fs.readFile(productsBackupPath, 'utf-8');
      const productsBackup = JSON.parse(productsBackupData);
  
      await fs.writeFile(ordersPath, JSON.stringify(ordersBackup, null, 2));
      await fs.writeFile(productsPath, JSON.stringify(productsBackup, null, 2));
  
      res.status(200).json({ message: 'Reset all orders and products successfully' });
    } catch (err) {
      console.error('Error resetting data:', err);
      res.status(500).json({ error: 'Failed to reset data' });
    }
  });
    

module.exports = ordersRoute