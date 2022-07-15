'use strict';

/**
 *  hebergement controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

//module.exports = createCoreController('api::hebergement.hebergement');

module.exports = createCoreController('api::hebergement.hebergement', ({ strapi }) => ({
    async find(ctx) {
        const { query } = ctx;

        const entity = await strapi.entityService.findMany('api::hebergement.hebergement', {
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
