const express = require("express");
const app = express();
app.use(express.json());
let port = 5000;

const students = [
    {
        id: Math.floor(Math.random() * 10000),
        name: "Anouar Jabri",
        phone: 25296778,
    },
    {
        id: Math.floor(Math.random() * 10000),
        name: "Imen Jabri",
        phone: 89756778,
    },
    {
        id: Math.floor(Math.random() * 10000),
        name: "Amal Jabri",
        phone: 222756718,
    },
];

//READ = GET
app.get("/", (req, res) => {
    res.status(200);
    res.send({ message: "students", students });
});
app.get("/students/:phone", (req, res) => {
    res.status(200);
    res.json(
        students.filter((elt) => elt.phone === parseInt(req.params.phone))
    );
});

//CREATE = POST
app.post("/add", (req, res) => {
    const newSt = req.body;
    console.log(newSt);
    res.send([
        ...students,
        { id: Math.floor(Math.random() * 10000), ...newSt },
    ]);
});

//UPDATE = PUT
app.put("/edit/:id", (req, res) => {
    const newSt = req.body;
    console.log(newSt);
    res.send(
        students.map((elt, index) =>
            index.toString() === req.params.id ? { ...elt, ...newSt } : elt
        )
    );
});

//DELETE = DELETE
app.delete("/delete/:phone", (req, res) => {
    res.send(
        students.filter((elt, index) =>
            elt.phone.toString() !== req.params.phone ? elt : null
        )
    );
});

app.listen(port, (err) => {
    if (err) throw err;
    console.log(`visit http://localhost:${port}`);
});
