export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fa5be0f459788d6f8c98dc64245fb5ec'),
  },
});
