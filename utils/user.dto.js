class SingleUserDTO {
  constructor(user) {
    const userDtoSingleObject = {
      _id: user._id,
      name: user.name,
      address: user.address,
      n_id: user.n_id,
    };
    this.user = userDtoSingleObject;
  }
}

module.exports = SingleUserDTO;
