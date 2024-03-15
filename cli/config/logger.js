const { createLogger, transports, format } = require('winston');

const getLogger = () => {
    return createLogger({
        format: format.combine(
            format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
            format.json()
        ),
        transports: [
            new transports.File({ filename: 'logfile.log' })
        ]
    });
};

module.exports =  getLogger;
