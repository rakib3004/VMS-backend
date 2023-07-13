const { User } = require("../models/index.model");

exports.createUser = async (name, address, n_id, password) => {
  try {
    const singleUser = new User({
      name: name,
      address: address,
      n_id: n_id,
      password: password,
    });

    const newUser = await singleUser.save();
    return newUser;
  } catch (error) {
    console.log(error);
    // throw new Error("Database Error when creating user");
  }
};

exports.getUserByNID = async (n_id) => {
  const user = await User.findOne({ n_id: n_id });
  return user;
};

exports.updateUserByNID = async (name, address, n_id, password) => {
  const user = await User.findOneAndUpdate(
    { n_id: n_id },
    {
      name: name,
      address: address,
      password: password,
    },
    { new: true }
  );
  return user;
};
