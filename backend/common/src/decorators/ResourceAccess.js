"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const roles_1 = require("@backend/roles");
exports.ResourceAccess = (resource, action, possession = roles_1.PossessionType.own) => common_1.SetMetadata('ResourceAccess', { resource, action, possession });
