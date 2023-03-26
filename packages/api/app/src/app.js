"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildApp = void 0;
const graphql_yoga_1 = require("graphql-yoga");
const fastify_1 = require("fastify");
function buildApp(logging = true) {
    const app = (0, fastify_1.default)({
        logger: logging && {
            transport: {
                target: 'pino-pretty',
            },
            level: 'debug',
        },
    });
    const graphQLServer = (0, graphql_yoga_1.createYoga)({
        schema: (0, graphql_yoga_1.createSchema)({
            typeDefs: /* GraphQL */ `
        scalar File

        type Query {
          hello: String
          isFastify: Boolean
        }
        type Mutation {
          hello: String
          getFileName(file: File!): String
        }
        type Subscription {
          countdown(from: Int!, interval: Int!): Int!
        }
      `,
            resolvers: {
                Query: {
                    hello: () => 'world',
                    isFastify: (_, __, context) => !!context.req && !!context.reply,
                },
                Mutation: {
                    hello: () => 'world',
                    getFileName: (root, { file }) => file.name,
                },
                Subscription: {
                    countdown: {
                        async *subscribe(_, { from, interval }) {
                            for (let i = from; i >= 0; i--) {
                                await new Promise((resolve) => setTimeout(resolve, interval ?? 1000));
                                yield { countdown: i };
                            }
                        },
                    },
                },
            },
        }),
        // Integrate Fastify Logger to Yoga
        logging: {
            debug: (...args) => args.forEach((arg) => app.log.debug(arg)),
            info: (...args) => args.forEach((arg) => app.log.info(arg)),
            warn: (...args) => args.forEach((arg) => app.log.warn(arg)),
            error: (...args) => args.forEach((arg) => app.log.error(arg)),
        },
    });
    app.addContentTypeParser('multipart/form-data', {}, (req, payload, done) => done(null));
    app.route({
        url: '/graphql',
        method: ['GET', 'POST', 'OPTIONS'],
        handler: async (req, reply) => {
            const response = await graphQLServer.handleNodeRequest(req, {
                req,
                reply,
            });
            for (const [name, value] of response.headers) {
                reply.header(name, value);
            }
            reply.status(response.status);
            reply.send(response.body);
            return reply;
        },
    });
    return app;
}
exports.buildApp = buildApp;
//# sourceMappingURL=app.js.map