const app = require('./app');

app.listen(app.get('port'), () => {
    console.log('The server is running on port:', 'http://localhost:');
});
