import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(ApplicationModule);
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(process.env.PORT || 3000).then(async () => {
        // tslint:disable-next-line:no-console
        console.log('MicroService External API is listening on port: ' + process.env.PORT || 3000);
    });
}

bootstrap();
