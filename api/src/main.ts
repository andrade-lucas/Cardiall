import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from 'src/app.module';
import * as compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(compression());

  // Open API
  const options = new DocumentBuilder()
    .setTitle('Cardiall Presentation')
    .setDescription('API feita para apresentar ao Lucas Cardial')
    .setVersion('1.0.0')
    .addTag('cardiall')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
