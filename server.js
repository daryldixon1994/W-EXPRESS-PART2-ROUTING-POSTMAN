const express = require("express");
const app = express();
app.use(express.json());
let port = 5000;

//READ = GET

//CREATE = POST

//UPDATE = PUT

//DELETE = DELETE

app.use("/api/user", require("./routes/user/user"));

app.listen(port, (err) => {
    if (err) throw err;
    console.log(`visit http://localhost:${port}`);
});
