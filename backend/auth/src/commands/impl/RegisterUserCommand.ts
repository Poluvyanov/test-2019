export class RegisterUserCommand {
    constructor(
        public readonly email: string,
        public readonly password: string,
        public readonly roleId: number,

    ) {
        console.log('run RegisterUserCommand');
    }
}
