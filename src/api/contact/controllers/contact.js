'use strict';

/**
 *  contact controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

//module.exports = createCoreController('api::contact.contact');


module.exports = createCoreController('api::contact.contact', ({ strapi }) => ({
    async find(ctx) {
        const { query } = ctx;

        const entity = await strapi.entityService.findMany('api::contact.contact', {
            ...query,
            populate: {
                banner: true,
                Content:{
                    populate:{
                        radio:true,
                        recrutement:true,
                        placeholder:true,
                        required:true,
                        other_errors:true,
                        selection:true
                    }
                }
            },
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);

    }
}));
