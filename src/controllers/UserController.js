const Controller = require('./controller');
const ContentType = 'content-type';
const PlainText = 'text/plain';
const ApplicationJson = 'application/json';

class UserController extends Controller {
  constructor(userService, routePath, app) {
    super(routePath, app);

    this.userService = userService;
  }

  get services() {
    return {
      'POST /user': 'createUser',
      'POST /login': 'login',
    }
  }

  createUser(req, res, next) {
    const { body } = req;
    const { username, password } = body;
    console.log(body);
    this.userService.createUser(username, password);
    res.send('');
  }

  login(req,res,next) {
    this.userService.login();
    res.send('');
  }
}

module.exports = UserController;
