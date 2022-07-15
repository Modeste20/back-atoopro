'use strict';

/**
 * hebergement service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hebergement.hebergement');
