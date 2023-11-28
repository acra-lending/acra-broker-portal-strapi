'use strict';

/**
 * lock-policy controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::lock-policy.lock-policy');
