class UserService {
  constructor(mongoService) {
    this.mongoService = mongoService;
  }

  login(username, password) {
    this.mongoService.login(username, password);
  }

  createUser(username, password) {
    // hier ook validatie etc.

    this.mongoService.createUser(username, password);
  }
}


module.exports = UserService;
