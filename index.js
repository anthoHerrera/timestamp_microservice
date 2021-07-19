import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/views/index.html");
});

app.get("/api/:timestamp?", (request, response) => {
    const { timestamp } = request.params;
    let date;
    if (!timestamp) {
        date = new Date();
    } else {
        // check if unix time:
        // number string multiplied by 1 gives this number, data string gives NaN
        const checkUnix = timestamp * 1;
        date = isNaN(checkUnix) ? new Date(timestamp) : new Date(checkUnix);
    }

    //check if valid format
    if (date == "Invalid Date") {
        response.json({ error: "Invalid Date" });
    } else {
        const unix = date.getTime();
        const utc = date.toUTCString();
        response.json({ unix, utc });
    }
});

const listener = app.listen(PORT, function () {
    console.log("Your app is listening on port " + PORT);
});
