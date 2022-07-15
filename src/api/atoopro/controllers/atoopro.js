'use strict';

/**
 *  atoopro controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

//module.exports = createCoreController('api::atoopro.atoopro');


module.exports = createCoreController('api::atoopro.atoopro', ({ strapi }) => ({
    async find(ctx) {
        const { query } = ctx;

        const entity = await strapi.entityService.findMany('api::atoopro.atoopro', {
            ...query,
            populate: {
                banner: {
                    populate: {
                        image: true
                    }
                },
                Section: {
                    populate: {
                        image: true,
                    }
                },
                banner_image:{
                    populate:{
                        image:true,
                    }
                },
                Content:{
                    populate:{
                        card_engagement:{
                            populate:{
                                svg:true
                            }
                        },
                        step:true
                    }
                }
            },
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);

    }
}));
