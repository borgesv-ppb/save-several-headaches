const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');
const app = express();
const port = 3000;

// Use the cors middleware
app.use(cors());

app.get('/run-script', (req, res) => {
  exec('./your-script.sh', (error, stdout, stderr) => {
    if (error) {
      res.status(500).send({ error });
      return;
    }
    res.send({ output: stdout });
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

