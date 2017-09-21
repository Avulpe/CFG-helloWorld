/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */

exports.autodeployerDemo = function autodeployerDemo (req, res) {
  res.send(`Hello ${req.body.name || 'everyone'}! Welcome to the auto-deployer demo! :-) \n`);
};

