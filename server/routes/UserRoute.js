const app = require("express").Router();
const jwt = require("jsonwebtoken");
const userOperation = require("../Db/helpers/userCRUD");
app.post("/login", (req, res) => {
  console.log(req.body);
  userOperation.login(req.body, res);
});

app.post("/signup", (req, res) => {
  console.log(req.body);
  userOperation.AddUser(req.body, res);
});

app.post("/getData", async (req, res) => {
  var result = await userOperation.Find(req.body.username);

  // result.then((data)=>console.log("hmmmm",data));
  if (result) {
    res.json({ user: result });
  } else {
    console.log("not possible");
  }
});

app.get("/getUser", (req, res) => {
  const bearerHeader = req.headers["authorization"];
  //bearer Header or token= ="bearer <token>"
  if (typeof bearerHeader !== "undefined") {
    //split at the space so that we get two array one containing bearer and another token
    const bearer = bearerHeader.split(" ");
    //get token from the array
    const bearerToken = bearer[1];
    jwt.verify(bearerToken, "secretkey", (err, authData) => {
      if (err) {
        console.log(err);
        res.status(403);
      } else {
        res.json({ userdata: authData });
      }
    });
  } else {
    res.sendStatus(403);
  }
});

app.post("/AddFriend", (req, res) => {
  console.log("Hello data", req.body);
  userOperation.AddFriend(req.body, res);
});
