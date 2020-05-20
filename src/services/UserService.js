class UserService {
  constructor(mongoService) {
    this.mongoService = mongoService;
  }

  async login(username, password) {
    return this.mongoService.login(username, password);

  }

  createUser(username, password) {
    // hier ook validatie etc.

    this.mongoService.createUser(username, password);
  }
}


module.exports = UserService;
