'use strict';

/**
 *  stage controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

//module.exports = createCoreController('api::stage.stage');

module.exports = createCoreController('api::stage.stage', ({ strapi }) => ({
    async find(ctx) {
        const { query } = ctx;

        const entity = await strapi.entityService.findMany('api::stage.stage', {
            ...query,
            populate: {
                banner: true,
                bannerImage:{
                    populate:{
                        image:true
                    }
                },
                section_contact:true,
                section:{
                    populate:{
                        image:true
                    }
                }
            }
        })
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);

    }
}));
