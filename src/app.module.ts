import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from './modules/user/user.module';
import { ProductModule } from './modules/product/product.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: '',
            port: 8889,
            username: 'root',
            password: 'root',
            database: '',
            entities: [],
            synchronize: false,
            autoLoadEntities: true,
        }),
        UserModule,
        ProductModule,
        AuthModule;
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
