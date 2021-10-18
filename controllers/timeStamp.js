const getTimeStamp = (req, res) => {
    const { timestamp } = req.params;
    let date;
    if (!timestamp) {
        date = new Date();
    }
    const checkUnix = timestamp * 1;
    date = isNaN(checkUnix) ? new Date(timestamp) : new Date(checkUnix);

    if (!date == "Invalid Date") {
        res.json({ error: "Invalid Date" });
        return;
    }
    const unix = date.getTime();
    const utc = date.toUTCString();
    res.json({ unix, utc });
};

module.exports = {
    getTimeStamp,
};
