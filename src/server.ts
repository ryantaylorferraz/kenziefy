import { app, initApp } from "./app";

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log("API successfully");

    initApp();
})