export class SendEmailCommand {
    constructor(
        public readonly email: string,

    ) {
        console.log('run SendEmailCommand');
    }
}
