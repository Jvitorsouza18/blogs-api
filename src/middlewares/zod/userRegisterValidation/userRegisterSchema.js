const { z } = require('zod');

const userRegisterSchema = z.object({
  displayName: z
    .string({
      requiredError: 'Name is required',
      invalidTypeError: 'Name must be a string',
    })
    .min(8, { message: '"displayName" length must be at least 8 characters long' }),
  
  email: z
    .string().email({ 
      message: '"email" must be a valid email',
    }),

  password: z
    .string()
    .min(
      6, { message: '"password" length must be at least 6 characters long' },
    ),
});

module.exports = { userRegisterSchema };