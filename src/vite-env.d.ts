/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    // Add your custom env variables here
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
