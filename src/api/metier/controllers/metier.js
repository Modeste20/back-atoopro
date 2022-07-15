'use strict';

/**
 *  metier controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

//module.exports = createCoreController('api::metier.metier');


module.exports = createCoreController('api::metier.metier', ({ strapi }) => ({
    async find(ctx) {
        const { query } = ctx;

        const entity = await strapi.entityService.findMany('api::metier.metier', {
            ...query,
            populate: {
                offres:true,
                banner: true,
                joinUs:{
                    populate:{
                        card_join:{
                            populate:{
                                icon:true,
                                icon_dark:true
                            }
                        }
                    }
                }
        }})
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);

    }
}));

