import { app, initApp } from "./app";

const port = 3000

app.listen(port, () => {
    console.log("API successfully");

    initApp();
})