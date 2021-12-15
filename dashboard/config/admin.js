module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1d3d4e1f0c502d785d042e6f28b891c1'),
  },
});
