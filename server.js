'use strict';

import app from './src/index';

const listener = app.listen(3000, function () {
    console.log("Your app is listening on port " + 3000);
});