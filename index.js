/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */

exports.helloHttp = function helloHttp (req, res) {
  res.send(`Hello ${req.body.name || 'everyone'}! We are testing now the auto-deployer function! \n`);
};

