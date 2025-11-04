require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./models');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((err) => {
  console.log('Database connection failed:', err);
});

app.post('/kandangbinatang', async (req, res) => {
  const data = req.body;
  try {
    const kandangbinatang = await db.kebun_binatang.create(data);
    res.send(kandangbinatang);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.get('/kandangbinatang', async (req, res) => {
  try {
    const kandangbinatang = await db.kebun_binatang.findAll();
    res.send(kandangbinatang);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
