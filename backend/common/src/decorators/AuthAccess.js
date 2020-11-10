"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
exports.AuthAccess = () => common_1.SetMetadata('AuthAccess', true);
