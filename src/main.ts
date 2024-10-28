import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('User Management API')
    .setDescription(
      'A User management API that handles the process of defining, managing, and controlling user accounts within a system. It includes handling authentication (who a user is) and authorization (what a user can do).',
    )
    .setVersion('1.0')
    .addTag('user-management')
    .addBearerAuth()
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, documentFactory);

  await app.listen(3000);
}
bootstrap();
