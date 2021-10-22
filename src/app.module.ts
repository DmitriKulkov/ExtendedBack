import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

// sdfsdfhlshdk

@Module({
    controllers: [AppController],
    providers: [AppService],
    imports: [
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: '/localhost',
            port: 6000,
            username: 'postgres',
            password: 'Lbvfy_048',
            database: 'nest-course',
            models: [],
            autoLoadModels: true
        })
    ]
})
export class AppModule {}