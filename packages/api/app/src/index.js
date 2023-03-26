"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const app = (0, app_1.buildApp)(true);
app
    .listen({
    port: 4000,
})
    .then((serverUrl) => {
    app.log.info(`GraphQL API located at ${serverUrl}/graphql`);
})
    .catch((err) => {
    app.log.error(err);
    process.exit(1);
});
//# sourceMappingURL=index.js.map