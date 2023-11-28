'use strict';

/**
 * lock-policy router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::lock-policy.lock-policy');
