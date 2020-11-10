"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_intl_1 = require("react-intl");
exports.namespace = '@aunited/users';
exports.default = react_intl_1.defineMessages({
    users: {
        id: `${exports.namespace}.users`,
        defaultMessage: 'Пользователи',
    },
    at: {
        id: `${exports.namespace}.at`,
        defaultMessage: 'в',
    },
    name: {
        id: `${exports.namespace}.name`,
        defaultMessage: 'имя',
    },
    email: {
        id: `${exports.namespace}.email`,
        defaultMessage: 'email',
    },
    registered: {
        id: `${exports.namespace}.registered`,
        defaultMessage: 'зарегестрирован',
    },
    lastLogin: {
        id: `${exports.namespace}.lastLogin`,
        defaultMessage: 'последний вход',
    },
});
