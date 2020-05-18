class UserService {
  constructor(mongoService) {
    this.mongoService = mongoService;
  }

  login() {


  }

  createUser(username, password) {
    // hier ook validatie etc.

    this.mongoService.createUser(username, password);
  }
}


module.exports = UserService;
