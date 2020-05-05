const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3000;
app.use(express.static('public'));

app.post('/api/item', (req, res) => {
    fs.appendFile(path.join("data", "demo.txt"), new Date().toJSON(), (err) => {
        if (err) {
            console.error(err);
            res.json({err: true, message: err.message});
        }
        console.log("success");
        res.json({err: false, message: "success"});
    });
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});