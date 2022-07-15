'use strict';

/**
 *  home controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::home.home');


module.exports = createCoreController('api::home.home', ({ strapi }) => ({
    async find(ctx) {
        const { query } = ctx;

        const entity = await strapi.entityService.findMany('api::home.home', {
            ...query,
            populate: {
                banner:true,
                Modal:true,
                Content:{
                    populate:{
                        stats:true,
                        open_icon:true,
                        close_icon:true,
                        card_service:{
                            populate:{
                                image:true
                            }
                        },
                        Images:{
                            populate:{
                                image:true
                            }
                        },
                        questions:true
                    }
                }
            },
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);

    }
}));

