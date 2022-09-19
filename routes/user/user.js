const express = require("express");
const router = express.Router();

const students = [
    {
        id: 55668899,
        name: "Anouar Jabri",
        phone: 25296778,
    },
    {
        id: 55668800,
        name: "Ala lamouchi",
        phone: 89756778,
    },
    {
        id: 55668811,
        name: "Ghada Bousselmi",
        phone: 222712128,
    },
    {
        id: 55668844,
        name: "Khouloud Mekni",
        phone: 452656718,
    },
];

router.get("/students", (req, res) => {
    res.status(200).json({
        status: true,
        message: "Students list",
        data: students,
    });
});
router.post("/create", (req, res) => {
    console.log(req.body);
    let { name, phone } = req.body;

    let newStudents = [...students, { id: 11511555, name, phone }];
    res.status(200).json({
        status: true,
        message: "Students list",
        data: newStudents,
    });
});
router.put("/update/:id", (req, res) => {
    let { name } = req.body;
    let { id } = req.params;
    let updatedStudents = students.map((student) => {
        return student.id == id ? { ...student, name } : student;
    });
    res.status(200).json({
        status: true,
        message: "Student updated successfully",
        data: updatedStudents,
    });
});
router.delete("/delete/:id", (req, res) => {
    let { id } = req.params;
    let newStudents = students.filter((student) => {
        return student.id != id;
    });
    res.status(200).json({
        status: true,
        message: "Student deleted successfully",
        data: newStudents,
    });
});

module.exports = router;
