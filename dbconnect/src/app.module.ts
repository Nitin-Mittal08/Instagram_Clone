import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { FirebaseModule } from './firebase/firebase.module';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { ImagesModule } from './images/images.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'Nitindb',
      password: 'mittal',
      database: 'dbname',
      entities: [User],
      synchronize: true,
    }),
    MongooseModule.forRoot('mongodb+srv://Nitin_Mittal:mittal@cluster0.wr2hn.mongodb.net/instaclone1?retryWrites=true&w=majority'),
    UsersModule,
    FirebaseModule,
    AuthModule,
    ImagesModule,
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
