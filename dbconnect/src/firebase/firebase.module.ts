import { Module } from '@nestjs/common';
import { FirebaseAdminModule } from '@tfarras/nestjs-firebase-admin';
import admin from 'firebase-admin';
import * as firebaseAccountCredentials from './servicekey.json';

@Module({
  imports: [
    FirebaseAdminModule.forRootAsync({
      useFactory: () => {
        const serviceAccount =
          firebaseAccountCredentials as admin.ServiceAccount;
        return {
          credential: admin.credential.cert(serviceAccount),
        };
      },
    }),
  ],
})
export class FirebaseModule {}
