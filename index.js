const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/interactions', (req, res) => {
    const { type, data } = req.body;
    
    // Handle the interaction types here
    switch (type) {
        case 1: // Ping
            return res.json({ type: 1 });
        case 2: // Command interaction
            // Handle command interaction
            break;
        default:
            return res.sendStatus(400);
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
