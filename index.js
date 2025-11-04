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

app.put('/kandangbinatang/:id', async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const kandangbinatang = await db.kebun_binatang.findByPk(id);
    if (!kandangbinatang) {
      return res.status(404).send({ message: 'Kandang not found' });
    }
    await kandangbinatang.update(data);
    res.send({ message: "Kandang berhasil diupdate", kandangbinatang });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.delete('/kandangbinatang/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const kandangbinatang = await db.kebun_binatang.findByPk(id);
    if (!kandangbinatang) {
      return res.status(404).send({ message: 'Kandang not found' });
    }
    await kandangbinatang.destroy();
    res.send({ message: "Kandang berhasil dihapus" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
