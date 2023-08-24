import { GenericRequest, InterceptedAPIHandler } from '../types/base.type';

export const getLimits = async ({ data, ws }: InterceptedAPIHandler) => {
    const { req_id } = data as GenericRequest;

    const response = {
        get_limits: {
            daily_transfers: {
                ctrader: {
                    allowed: '50000.00',
                    available: '49500.00',
                    minimum: '0.01',
                },
                derivez: {
                    allowed: '10000.00',
                    available: '9900.00',
                    limit_type: 'amount',
                    minimum: '0.01',
                },
            },
            unverified_transfers: {
                crypto_to_crypto: {
                    allowed: '200.00',
                    available: '100:00',
                },
                crypto_to_fiat: {
                    allowed: '500.00',
                    available: '500:00',
                },
                fiat_to_crypto: {
                    allowed: '1000.00',
                    available: '950.00',
                },
            },
        },
        echo_req: {
            get_limits: '<not shown>',
            req_id,
        },
        msg_type: 'authorize',
        req_id,
    };

    ws.send(JSON.stringify(response));
};
