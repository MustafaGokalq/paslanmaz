import { IAdmin } from './types/adminType'; // IUser türünüzü doğru yoldan içe aktarın

declare module 'express-serve-static-core' {
  interface Request {
    user?: IAdmin; // user'ı isteğe bağlı olarak ekleyin
  }
}