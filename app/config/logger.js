import { createLogger, transports, format } from 'winston';

const getLogger = () => {
    return createLogger({
        format: format.combine(
            format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
            format.json()
        ),
        transports: [
            new transports.Console(),
            new transports.File({ filename: 'logfile.log' })
        ]
    });
};

export default getLogger;
