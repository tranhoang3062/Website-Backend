import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
            validationSchema: Joi.object({
                POSTGRES_HOST: Joi.string(),
                POSTGRES_PORT: Joi.number(),
                POSTGRES_USER: Joi.string(),
                POSTGRES_PASSWORD: Joi.string(),
                POSTGRES_DB: Joi.string(),
                PORT: Joi.number(),
            }),
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
