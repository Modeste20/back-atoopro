'use strict';

/**
 *  developpement controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

//module.exports = createCoreController('api::developpement.developpement');

module.exports = createCoreController('api::developpement.developpement', ({ strapi }) => ({
    async find(ctx) {
        const { query } = ctx;

        const entity = await strapi.entityService.findMany('api::developpement.developpement', {
            ...query,
            populate: {
                section_contact:true,
                banner: true,
                Content:true
        }})
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);

    }
}));