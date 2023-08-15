import { GenericRequest, InterceptedAPIHandler } from '../types/base.type';

export const getLimits = async ({ data, ws }: InterceptedAPIHandler) => {
    const { req_id } = data as GenericRequest;

    const response = {
        get_limits: {
            daily_cumulative_amount_transfers: {
                enabled: 1,
            },
            daily_transfers: {
                ctrader: {
                    allowed: 10,
                    available: 9,
                    limit_type: 'count',
                },
                derivez: {
                    allowed: '10000.00',
                    available: '9900.00',
                    limit_type: 'amount',
                },
                /*                 "dtrade": {...},
                "dxtrade": {...},
                "internal": {... },
                "mt5": {...},
                "wallets": {...},
                "virtual": {...} */
            },
            per_transfer: {
                ctrader: {
                    mimimum: '0.01',
                    maximum: '1000.00',
                },
                /*                 "derivez": {...},
                "dtrade": {...},
                "dxtrade": {...},
                "internal": {... },
                "mt5": {...},
                "wallets": {...},
                "virtual": {...} */
            },
            unauthenticated_transfers: {
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
            echo_req: {
                get_limits: '<not shown>',
                req_id,
            },
            msg_type: 'authorize',
            req_id,
        },
    };

    ws.send(JSON.stringify(response));
};
