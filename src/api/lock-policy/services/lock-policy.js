'use strict';

/**
 * lock-policy service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lock-policy.lock-policy');
