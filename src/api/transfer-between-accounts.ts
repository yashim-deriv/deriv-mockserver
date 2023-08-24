import { GenericRequest, InterceptedAPIHandler } from '../types/base.type';

export const transferBetweenAccounts = async ({ data, ws }: InterceptedAPIHandler) => {
    const { req_id } = data as GenericRequest;

    const response = {
        accounts: [
            {
                account_type: 'wallet',
                balance: '10422.12',
                currency: 'USD',
                demo_account: 0,
                loginid: 'CRW1122',
            },
            {
                account_type: 'trading',
                balance: '100',
                currency: 'USD',
                demo_account: 0,
                loginid: 'CR1122',
            },
        ],
        echo_req: {
            transfer_between_accounts: '0',
            req_id,
        },
        msg_type: 'transfer_between_accounts',
        req_id,
    };

    ws.send(JSON.stringify(response));
};
