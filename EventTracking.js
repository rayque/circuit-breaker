const CircuitBreaker = require('./CircuitBreaker')

const EventTracking = () => {
    return {
        healthcheckStatus: status => {
            console.log(`Healthcheck status ${status}`);
            console.log("------------------------------");
        },
        healthcheckFailed: message => {
            console.log(`call failed ${message}`);
            console.log("------------------------------");
        }
    };
};

module.exports = EventTracking;