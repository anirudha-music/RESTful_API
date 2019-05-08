System.register(["express"], function (exports_1, context_1) {
    "use strict";
    var express_1, router;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (express_1_1) {
                express_1 = express_1_1;
            }
        ],
        execute: function () {
            router = express_1.default.Router();
            // set default API response
            router.get('/', function (request, response) {
                response.send({
                    status: 'API Its Working',
                    message: 'Welcome to RESTHub crafted with love!'
                });
            });
            exports_1("default", router);
        }
    };
});
