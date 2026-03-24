export const validUser = {
  username: 'standard_user',
  password: 'secret_sauce',
};

export const invalidUser = {
  username: 'wrong_user',
  password: 'wrong_password',
};

export const invalidLoginScenarios = [
  {
    testName: 'wrong username and wrong password',
    username: 'wrong_user',
    password: 'wrong_password',
    errorMessage: 'Username and password do not match',
  },
  {
    testName: 'valid username and wrong password',
    username: 'standard_user',
    password: 'wrong_password',
    errorMessage: 'Username and password do not match',
  },
  {
    testName: 'locked out user',
    username: 'locked_out_user',
    password: 'secret_sauce',
    errorMessage: 'Sorry, this user has been locked out.',
  },
];