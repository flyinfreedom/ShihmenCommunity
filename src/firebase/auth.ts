import {App} from './app';
import 'firebase/auth';

export const Auth = App.auth();
export const Admin = { isAdmin: false, adminAccount: 'shihmencommunity@gmail.com' };