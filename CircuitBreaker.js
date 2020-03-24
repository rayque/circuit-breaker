const fetch = require('node-fetch')
const EventTracking = require('./EventTracking')
const config = require('./config')

const event = EventTracking();

const CircuitBreaker = () => {
    let lastFailedCall = 0; // timestamp
    let failedCalls = 0;

    return {
        healthcheck: async () => {
            const now = Date.now();

            /* Se ocorrer erro, aguarda 10s até a  fazer requisição novamente */
            if (lastFailedCall && now - lastFailedCall <= 10000) {
                console.log("Skipping call");
                console.log("-------------------------");
                return;
            }

            try {
                const port = config.port;
                const response = await fetch(`http://localhost:${port}/healthcheck`);
                const json = await response.json();

                event.healthcheckStatus(json.status)
                failedCalls = 0;
            } catch (e) {

                /*
                * Quando há erro na requisição, quarda o timestamp de
                * quando ocorreu o erro e conta a quantidade de erros
                * */
                lastFailedCall = Date.now();
                failedCalls++;
                event.healthcheckFailed(e.message);

                /* Se a quantidade de erros for maior que 3 mostra uma mensagem diferente */
                if (failedCalls >= 3) {
                    event.healthcheckFailed("FIX THIS NOW!")
                }

            }

        }
    }
}


module.exports = CircuitBreaker