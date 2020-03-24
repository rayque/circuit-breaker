const CircuitBreaker = require('./CircuitBreaker')

const circuitBreaker = CircuitBreaker();

const wait = time => {
    return new Promise(resolve => {
        setTimeout(() => {
            return resolve();
        }, time);
    });
};

(async () => {
    while (true) {
        await circuitBreaker.healthcheck();
        await wait(1000);
    }
})();