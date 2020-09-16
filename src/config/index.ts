export interface Config {
    environment: string;
    swagger: {
        path: string;
        swaggerDefinition: {
            description: string;
            title: string;
            version: string;
        };

    };
}

export const config = (): Config => {
    return {
        environment: process.env.ENVIRONMENT,
        swagger: {
            path: process.env.SWAGGER_PATH,
            swaggerDefinition: {
                description: process.env.SWAGGER_SWAGGERDEFINITION_DESCRIPTION,
                title: process.env.SWAGGER_SWAGGERDEFINITION_TITLE,
                version: process.env.SWAGGER_SWAGGERDEFINITION_VERSION,
            }
        }
    }
};
