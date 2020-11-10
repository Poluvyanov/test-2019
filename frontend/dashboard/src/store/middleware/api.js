"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_client_1 = require("apollo-client");
const apollo_link_1 = require("apollo-link");
const apollo_link_context_1 = require("apollo-link-context");
const apollo_upload_client_1 = require("apollo-upload-client");
const apollo_cache_inmemory_1 = require("apollo-cache-inmemory");
exports.default = history => ({ dispatch, getState }) => {
    const httpLink = apollo_upload_client_1.createUploadLink({
        uri: getState().config.apiUrl,
    });
    const middlewareLink = apollo_link_context_1.setContext(() => {
        if (getState().security.token) {
            return {
                headers: {
                    authorization: getState().security.token || null,
                },
            };
        }
        return {
            headers: {},
        };
    });
    const link = apollo_link_1.ApolloLink.from([middlewareLink, httpLink]);
    const client = new apollo_client_1.ApolloClient({
        cache: new apollo_cache_inmemory_1.InMemoryCache({ addTypename: false }),
        link,
    });
    return next => action => {
        if (typeof action === 'function') {
            action(dispatch, getState, client, history);
        }
        else {
            next(action);
        }
    };
};
