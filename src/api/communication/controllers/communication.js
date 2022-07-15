'use strict';

/**
 *  communication controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

//module.exports = createCoreController('api::communication.communication');

module.exports = createCoreController('api::communication.communication', ({ strapi }) => ({
    
    async find(ctx) {
        const { query } = ctx;

        const entity = await strapi.entityService.findMany('api::communication.communication', {
            ...query,
            populate: {
                banner: true,
                section_contact:true,
                Content:true
        }})

        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);

    }
}));
