"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("../../modules/User/routes");
class Routes {
    constructor(app) {
        this.router = new routes_1.default();
        this.getRoutes(app);
    }
    getRoutes(app) {
        //teste de integração
        app.route('/').get((req, res) => res.send('Hello, world'));
        app.route('/ola/:nome').get((req, res) => res.send(`Hello, ${req.params.nome}`));
        app.route('/api/users/all').get(this.router.index);
        app.route('/api/users/create').post(this.router.create);
        app.route('/api/users/:id').get(this.router.findOne);
        app.route('/api/users/:id/update').put(this.router.update);
        app.route('/api/users/:id/destroy').delete(this.router.destroy);
    }
}
exports.default = Routes;
