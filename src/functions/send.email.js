import 'dotenv/config';
import sgMail from '@sendgrid/mail'
/**
 * 
 * @param {{ company:string; email:string; interest: string; name: string}} params 
 */
async function sendEmail(params) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const msg = {
    from: {
      email: 'contato@fluma.dev',
      name: 'Fluma'
    },
    template_id: 'd-979243ef9ffb4e2fb046be670000002a',
    personalizations: [
      {
        "to": [
          {
            email: params.email,
            name: params.name
          }
        ],
        "dynamic_template_data": {
          "contact_name": params.name,
        }
      }
    ]

  }

  const controllEmail = {
    from: 'contato@fluma.dev',
    subject: 'Contato Fluma - ' + params.name,
    to: 'flumadev@gmail.com',
    content: [
      {
        type: 'text/html',
        value: `<p>Nome: ${params.name}</p><p>Email: ${params.email}</p><p>Empresa: ${params.company}</p>  <p>Interesse: ${params.interest}</p>`
      }
    ],
  }

  try {
    await sgMail.send(controllEmail)
  } catch (error) {
    console.error(error)
    console.error(error?.response?.body)
  }

  try {
    await sgMail.send(msg)
  } catch (error) {
    console.error(error)

    console.error(error?.response?.body)
  }

}

export {
  sendEmail
}