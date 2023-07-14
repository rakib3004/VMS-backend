const userRepository = require("../repositories/user.repository");
const UserDTO = require("../utils/user.dto");
const userValidationUtil = require("../utils/user.validation.util");
const userNotFoundMessage = "User not found";
const { AppError } = require("../utils/error.handler.util");

exports.createUser = async (body) => {
  const name = body.name;
  const address = body.address;
  const n_id = body.n_id;
  const password = await userValidationUtil.generateHashPassword(body.password);

  const newUser = await userRepository.createUser(
    name,
    address,
    n_id,
    password
  );

  const dtoUser = new UserDTO(newUser);
  return dtoUser;
};

exports.getUserByNID = async (n_id) => {
  const userResponse = await userRepository.getUserByNID(n_id);
  console.log("My NID", n_id);

  const dtoUser = new UserDTO(userResponse);
  return dtoUser;
};

exports.getUserLoginInfo = async (n_id) => {
  const user = await userRepository.getUserByNID(n_id);
  if (!user) {
    throw new AppError(userNotFoundMessage, 404);
  }
  return user;
};
