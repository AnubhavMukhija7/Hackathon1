export const config = {
    server: '172.17.1.101',
    database: 'ExpenseTracker',
    authentication: {
        type: 'default',
        options: {
            userName: 'ExpenseTracker',
            password: 'tracker@123',
        },
    },
    options: {
        encrypt: false,
        enableArithAbort: true,
    },
};
