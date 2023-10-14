import {mergeWith} from "lodash"

// параметры в программе
const configDefault = {
    logging: {
        isConsoleLogs: true,
        isAdminPanel: true,
        isWsAutoReconnect: true
    },
    urls: {
        backURL: 'localhost',
        backPort: '1111',
        wsURL: 'localhost',
        wsPort: '1111',
    }
}

// параметры в перемнной окружения
const getBoolEnv = (data: string | undefined): boolean | null => {
    if (typeof data === "string")
        return JSON.parse(data.toLowerCase())
    else
        return null
}

const configEnv = {
    logging: {
        isConsoleLogs: getBoolEnv(import.meta.env.VITE_BACK_HOST_CONSOLE_LOG),
    },
    urls: {
        backURL: import.meta.env.VITE_BACK_HOST ?? null,
        backPort: import.meta.env.VITE_BACK_PORT ?? null,
    }
}

const config = mergeWith({}, configDefault, configEnv,
    (a: any, b: any) => b === null ? a : undefined
)

console.log("use config", config)

export default config
