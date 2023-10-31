const express = require("express");
const app = express();

const rooms = ["tech", "finance", "crypto"];
const cors = require("cors");

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors);

app.get("/", (req, res) => {
    res.send({ message: "Hello World!" });
})

const port = 3003;
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})