'use strict';

/**
 *  assistance controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

//module.exports = createCoreController('api::assistance.assistance');


module.exports = createCoreController('api::assistance.assistance', ({ strapi }) => ({
    async find(ctx) {
        const { query } = ctx;

        const entity = await strapi.entityService.findMany('api::assistance.assistance', {
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