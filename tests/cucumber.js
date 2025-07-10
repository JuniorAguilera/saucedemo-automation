module.exports = {
  default: {
    require: ['features/step_definitions/*.ts'],
    requireModule: ['ts-node/register'],
    format: ['progress'],
    timeout: 60000
  }
};