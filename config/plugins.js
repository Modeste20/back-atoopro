module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: "strapi-provider-email-mailjet",
        providerOptions: {
          publicApiKey: env("MAILJET_PUBLIC_KEY"),
          secretApiKey: env("MAILJET_SECRET_KEY"),
        },
        settings: {
          defaultFrom: env('EMAIL'),
          defaultFromName: "Atoopro",
          defaultTo: "jojomodeste52@gmail.com",
          defaultToName: "Atoopro",
        },
      },
      // ...
    }
  // ...
});
