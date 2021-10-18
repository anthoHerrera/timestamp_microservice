const express = require("express");
const app = express();
const cors = require("cors");
const timestampRouter = require("./routes/timeStamp");
const port = process.env.PORT || 3000;
app.set("trust proxy", 1);

app.use(express.json());
app.use(cors());

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.use("/api/v1", timestampRouter);

const start = () => {
    try {
        app.listen(port, () =>
            console.log(`Server is listen on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();
