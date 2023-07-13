class SingleUserDTO {
  constructor(user) {
    const userDtoSingleObject = {
      name: user.name,
      address: user.address,
      n_id: user.n_id,
    };
    this.user = userDtoSingleObject;
  }
}

module.exports = SingleUserDTO;
