const Joi = require('joi').extend(require('@joi/date'))

const { ValidationError } = require('../helpers/errors')

const validationAddEatenProduct = (req, res, next) => {
  const schema = Joi.object({
    productName: Joi.string().required(),
    productWeight: Joi.number().required(),
    date: Joi.date().format('YYYY-MM-DD').required(),
  })
  const validationResult = schema.validate(req.body)
  if (validationResult.error) {
    next(new ValidationError(validationResult.error.message))
  }
  next()
}

const validationDeleteEatenProduct = (req, res, next) => {
  const schema = Joi.object({
    productName: Joi.string().required(),
    date: Joi.date().format('YYYY-MM-DD').required(),
  })
  const validationResult = schema.validate(req.body)
  if (validationResult.error) {
    next(new ValidationError(validationResult.error.message))
  }
  next()
}

const validationGetEatenProducts = (req, res, next) => {
  const schema = Joi.object({
    date: Joi.date().format('YYYY-MM-DD').required(),
  })
  const validationResult = schema.validate(req.params)
  if (validationResult.error) {
    next(new ValidationError(validationResult.error.message))
  }
  next()
}

module.exports = {
  validationAddEatenProduct,
  validationDeleteEatenProduct,
  validationGetEatenProducts,
}
