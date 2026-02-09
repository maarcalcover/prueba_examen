const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("OK - AUTO deployed (Runner + Ansible)\n  "));

app.listen(3000, "0.0.0.0", () => {
  console.log("App listening on port 3000");
});
