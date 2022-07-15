module.exports = () => ({
  /**
   * Sends an email to the recipient in the body of the request
   */
  send: async (ctx) => {
    const body = ctx.request.body
    strapi.log.debug(body)
    ctx.send(body)

    /*try {
      const html = `
      <h1>Vous avez été contacté</h1>`
      const emailOptions = {
        to: 'codeurcodeur52@gmail.com',
        subject: 'This is a test',
        html: `<h1>Welcome!</h1><p>This is a test HTML email.</p>`
      }
      await strapi.plugins['email'].services.email.send(emailOptions)
      strapi.log.debug(`Email sent to ${sendTo}`)
      ctx.send({ message: 'Email sent' })
    } catch (err) {
      strapi.log.error(`Error sending email to ${sendTo}`, err)
      ctx.send({ error: 'Error sending email' })
    }*/
  },
})
