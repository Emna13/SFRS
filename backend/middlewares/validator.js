const { check, validationResult } = require("express-validator");

exports.registerRules = () => [
  check(`name`, "this field is required").notEmpty(),
  check(`address`, "this field is required").notEmpty(),
  check(`phone`, "this field is required").isLength({ min: 8, max: 8 }),
  check(`email`, "this field is required").isEmail(),
  check(`password`, "this field is required").isLength({ min: 4 }),
];

exports.loginRules = () => [
  check(`email`, "this field is required").isEmail(),
  check(`password`, "this field is required").isLength({ min: 4 }),
];

exports.addRules = () => [
  check(`title`, "this field is required").notEmpty(),
  check(`description`, "this field is required").notEmpty(),
  check(`category`, "this field is required").notEmpty(),
  check(`price`, "this field is required").notEmpty(),
];

exports.validator = (req, res, next) => {
  const errors = validationResult(req);
  errors.isEmpty() ? next() : res.status(400).json({ errors: errors.array() });
};
