import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { config } from './config';
import * as dotenv from 'dotenv'
import { HttpExceptionFilter } from './common/http-exception.filter';

function setSwagger(app) {
  const { description, title, version } = config().swagger.swaggerDefinition;
  console.log(description)
  const options = new DocumentBuilder()
    .setTitle(title)
    .setDescription(description)
    .setVersion(version)

    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/', app, document);
}

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.useGlobalFilters(new HttpExceptionFilter());
  setSwagger(app)
  await app.listen(3000);
}
bootstrap();
