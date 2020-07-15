declare module "@capacitor/core" {
    interface PluginRegistry {
        Gdrive: GdrivePlugin;
    }
}
export interface GdrivePlugin {
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
