import fs from "fs";

export const getUser = function (req, res) {
  try {
    //* destructuring the userid which we will get dynamically from api URL
    const { userId } = req.params;
    const users = fs.readFileSync("mock/mock_users.json");
    const userJson = JSON.parse(users);
    res.send(userJson[userId]);
  } catch (error) {
    res.statusCode = 401;
    res.send(error.message);
  }
};
export const removeUser = function (req, res) {
  try {
    //* destructuring the userid which we will get dynamically from api URL
    const { userId } = req.params;
    const users = fs.readFileSync("mock/mock_users.json");
    const userJson = JSON.parse(users);
    //find the id and remove that object
    delete userJson[userId];
    // update the local db which is json file as of now
    fs.writeFileSync("mock/mock_users.json", JSON.stringify(userJson));
    res.send("User deleted");
  } catch (error) {
    res.statusCode = 401;
    res.send(error.message);
  }
};

export const addUser = function (req, res) {
  try {
    // get post body
    const bodyData = req.body;
    // get database
    const users = fs.readFileSync("mock/mock_users.json");
    const userJson = JSON.parse(users);
    // update database
    const uid = Math.floor(Math.random() * 3) + 5;
    userJson[uid] = bodyData;
    fs.writeFileSync("mock/mock_users.json", JSON.stringify(userJson));
    res.send({ ...bodyData, uid });
  } catch (error) {
    res.statusCode = 401;
    res.send(error.message);
  }
};
// TODO (@mrinaljain) : Add all the functions of CRUD
export const updateUser = function (req, res) {};
