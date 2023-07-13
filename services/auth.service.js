const authUtil = require("../utils/auth.util");
const userService = require("../services/user.service");
const { AppError } = require("../utils/error.handler.util");
const UserDTO = require("../utils/user.dto");

exports.registerUser = async (body) => {
  const newUserResponse = await userService.createUser(body);

  const n_id = newUserResponse.user.n_id;
  const token = await authUtil.generateJwtToken(n_id);
  return { data: newUserResponse.user, token: token };
};

exports.loginUser = async (body) => {
  const n_id = body.n_id;
  const userResponse = await userService.getUserLoginInfo(n_id);

  const password = body.password;
  const user = userResponse;

  const storedHashPassword = user.password;
  const isValidPassword = await authUtil.comparePassword(
    password,
    storedHashPassword
  );
  const dtoUser = new UserDTO(user);

  const loggedInUser = dtoUser.user;

  if (isValidPassword) {
    const n_id = userResponse.n_id;
    const token = await authUtil.generateJwtToken(n_id);
    return { data: loggedInUser, token: token };
  }
  throw new AppError("Authentication Failed", 401);
};
