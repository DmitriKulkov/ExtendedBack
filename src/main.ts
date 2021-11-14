import { ValidationPipe } from "@nestjs/common"
import { NestFactory } from "@nestjs/core"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import { appendFile } from "fs"
import { AppModule } from "./app.module"

async function start() {
  const PORT = process.env.PORT || 3000
  const app  = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('Extended backend course')
    .setDescription('Documentation Rest API')
    .setVersion('1.0.0')
    .addTag('Nest')
    .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document)

  app.useGlobalPipes(new ValidationPipe())
  
  await app.listen(PORT, () => console.log(`Server sarted on port =  ${PORT}`))
  
}

start()