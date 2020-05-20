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
    this.userService.createUser(username, password);
    res.send('');
  }

  login(req,res,next) {
    const { body } = req;
    const { username, password } = body;
    this.userService.login(username, password).then(succesfull => {
      if (succesfull) {
      res.status(200) // OK
    } else{
      res.status(401) // Unauthorized
    }
      res.send('');
    }).catch(e => {
      res.status(401);
      res.send('');
    });

  }
}

module.exports = UserController;
