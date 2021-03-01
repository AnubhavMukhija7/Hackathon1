export const config = {
  server: 'EXIDB01',
  database: 'ExpenseTracker',
  authentication: {
    type: 'default',
    options: {
      userName: 'ExpenseTracker',
      password: 'tracker@123',
    },
  },
  options: { encrypt: false },
};
