import {WebPlugin} from '@capacitor/core';
import {GdrivePlugin} from './definitions';

const GOOGLE_ACCOUNT = {
    "client_id": "88259965068-79s3viahfqe8v5ndg34v4pku3gbv979k.apps.googleusercontent.com",
    "immediate": false,
    "scope": "https://www.googleapis.com/auth/drive"
}

export class GdriveWeb extends WebPlugin implements GdrivePlugin {
    constructor() {
        super({
            name: 'Gdrive',
            platforms: ['web']
        });
    }

    googleToken: any = undefined;
    renew: any = undefined;

    async echo(options: { value: string }): Promise<{ value: string }> {
        console.log('ECHO', options);
        return options;
    }

    async login(options: { value: string }): Promise<{ value: string }> {
        if (this.googleToken != undefined && this.renew != undefined && new Date().getTime() / 1000 < parseFloat(this.renew)) {
           return this.googleToken;
        } else {
            // gapi.auth.authorize(GOOGLE_ACCOUNT, function (data: any) {
            //     if (gapi.auth.getToken()) {
            //         console.log("found token");
            //         this.googleToken = data.access_token;
            //         this.renew = parseFloat(new Date().getTime() / 1000) + parseFloat(data.expires_in);
            //         return this.
            //     } else {
            //         // console.log("error_authorize");  //Cookies are not enabled in current environment.
            //         // alert('error_authorize' + data.error); ///idpiframe_initialization_failed
            //         // data.details
            //         // fail();
            //     }
            // }, function (resp: any) {
            //     // console.log("error_on_token" + angular.toJson(resp.data));
            //     // alert("error_on_token" + reason);
            //     // fail();
            // });
        }
        return options;
    }

    async renameFile(options: { value: string }): Promise<{ value: string }> {
        console.log('ECHO', options);
        return options;
    }

    async createFile(options: { value: string }): Promise<{ value: string }> {
        console.log('ECHO', options);
        return options;
    }

    async downloadFile(options: { value: string }): Promise<{ value: string }> {
        console.log('ECHO', options);
        return options;
    }
}

const Gdrive = new GdriveWeb();

export {Gdrive};

import {registerWebPlugin} from '@capacitor/core';

registerWebPlugin(Gdrive);
