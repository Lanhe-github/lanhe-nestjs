import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  // 启用全局CORS
  app.enableCors();

  // 设置api访问前缀
  app.setGlobalPrefix(config.get<string>('app.apiPrefix'));

  // 启动服务监听端口
  await app.listen(config.get<number>('app.port'));
  console.log(`服务启动成功~`);
}
bootstrap();
