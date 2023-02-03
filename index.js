const express = require('express'); 
const app = express();             
const port = 5000;                  


app.get('/', (req, res) => {       
    res.sendFile('index.html', {root: __dirname});    
                                                      
});

app.get('/action', (req, res) => {       
    res.send("Action");                                          
});

app.listen(port, () => {          
    console.log(`Now listening on port ${port}`); 
});