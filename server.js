const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json())
app.post('/users', function(req,res) {
    res.status(200).json({
        result: "sucess",
        status: 200
    });
});

app.listen(3000, () => {
    console.log('server corriendo en puerto 3000');
});