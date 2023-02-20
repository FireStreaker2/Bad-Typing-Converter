const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.post("/endpoint", function(req, res) {
    console.log(req.body.value);
    res.json({ recieved: true });
})

app.listen(port, () => {
  console.log(`App is now available at localhost:${port}`)
})