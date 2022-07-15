'use strict';

/**
 * communication service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::communication.communication');
