const app = require('./server');
const PORT = 3000;
const {green} = require('chalk')

app.listen(PORT, () => console.log(green(`Connected to port: ${PORT}`)))


