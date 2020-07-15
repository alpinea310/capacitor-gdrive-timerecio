import { WebPlugin } from '@capacitor/core';
import { GdrivePlugin } from './definitions';
export declare class GdriveWeb extends WebPlugin implements GdrivePlugin {
    constructor();
    
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    login(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    renameFile(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    createFile(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    downloadFile(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
declare const Gdrive: GdriveWeb;
export { Gdrive };
