import 'dotenv/config';
import { Resend } from 'resend';
/**
 * 
 * @param {{ company:string; email:string; interest: string; name: string; phone: string}} params 
 */
async function sendEmail(params) {

  const resend = new Resend(process.env.RESEND_API_KEY);


  try {
    console.log('sending email')
    await resend.sendEmail({

      from: 'Fluma <contato@fluma.dev>',
      to: params.email,
      subject: 'Obrigado por entrar em contato',
      html: `<table
      width="100%"
      cellpadding="0"
      cellspacing="0"
      border="0"
      style="width:100%;max-width:700px"
      align="center"
    >
      <tbody>
        <tr>
          <td
            style="padding:0px 0px 0px 0px;color:#939598;text-align:left"
            bgcolor="#FFFFFF"
            width="100%"
            align="left"
            ><table
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="100%"
              style="display:none!important;opacity:0;color:transparent;height:0;width:0"
            />
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed">
              <tbody>
                <tr>
                  <td
                    style="font-size:6px;line-height:10px;padding:0px 0px 0px 0px"
                    valign="top"
                    align="center"
                  >
                    <img
                      style="display:block;color:#000000;text-decoration:none;font-family:Helvetica,arial,sans-serif;font-size:16px;max-width:100%!important;width:100%;height:auto!important"
                      width="700"
                      alt=""
                      src="https://ci5.googleusercontent.com/proxy/L5FEa3AOuAslfHDkXbD4YgWdAf0oH1LPqhQh4oCyu4pG-MBUg32-q-PZjpxIOeRgiRsgImCuLdmZyANm5cQxA7zTbPI1vc-0-7ExStTnrEPHy-u-SzoO9SiAjqWfJrQjEdotGdEIz5mw_z6TRFJdwQZtQ6qHE9B8aSvV3lAb82MgXbPeFeQ4=s0-d-e1-ft#http://cdn.mcauto-images-production.sendgrid.net/a9e231901e5509af/3d710446-1ff2-42aa-a323-d82884f024fd/1024x683.jfif"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed">
              <tbody>
                <tr>
                  <td style="padding:0px 0px 100px 0px" />
                </tr>
              </tbody>
            </table>
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              align="center"
              width="100%"
              style="padding:0px 20px 0px 20px"
              bgcolor="#FFFFFF"
            >
              <tbody>
                <tr>
                  <td height="100%" valign="top"
                    ><table
                      width="500"
                      style="width:500px;border-spacing:0;border-collapse:collapse;margin:0px 80px 0px 80px"
                      cellpadding="0"
                      cellspacing="0"
                      align="left"
                      border="0"
                    >
                      <tbody>
                        <tr>
                          <td style="padding:0px;margin:0px;border-spacing:0"
                            ><table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              style="table-layout:fixed"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style="padding:0px 0px 0px 0px;line-height:30px;text-align:inherit"
                                    height="100%"
                                    valign="top"
                                    ><div>
                                      <h1 style="text-align:inherit;font-family:inherit">
                                        <span
                                          style="font-family:&quot;arial black&quot;,helvetica,sans-serif;font-size:40px;color:#020617"
                                          >Obrigado, ${params.name.split(' ').slice(0, -1).join(' ')}</span
                                        >
                                      </h1>
                                      <div />
                                    </div></td
                                  >
                                </tr>
                              </tbody>
                            </table>
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              style="table-layout:fixed"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style="padding:0px 0px 0px 0px;line-height:20px;text-align:inherit"
                                    height="100%"
                                    valign="top"
                                    ><div>
                                      <div style="font-family:inherit;text-align:inherit">
                                        <span
                                          style="font-size:18px;font-family:arial,helvetica,sans-serif"
                                          >Obrigado por entrar em contato! Recebemos sua mensagem e
                                          nossa equipe irá responder o mais breve possível.</span
                                        >
                                      </div>
                                      <div />
                                    </div></td
                                  >
                                </tr>
                              </tbody>
                            </table>
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              style="table-layout:fixed"
                            >
                              <tbody>
                                <tr>
                                  <td style="padding:0px 0px 100px 0px" />
                                </tr>
                              </tbody>
                            </table>
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              style="table-layout:fixed"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style="padding:18px 0px 18px 0px;line-height:22px;text-align:inherit"
                                    height="100%"
                                    valign="top"
                                    ><div>
                                      <div style="font-family:inherit"><br /></div>
                                      <div style="font-family:inherit">
                                        Em caso de dúvidas, entre em contato conosco através do número<a
                                          href="https://wa.me/+5524993167352"
                                          target="_blank"
                                        >
                                          (24) 99316-7352</a
                                        >
                                      </div>
                                      <div />
                                    </div></td
                                  >
                                </tr>
                              </tbody>
                            </table></td
                          >
                        </tr>
                      </tbody>
                    </table></td
                  >
                </tr>
              </tbody>
            </table>
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed">
              <tbody>
                <tr>
                  <td
                    style="font-size:6px;line-height:10px;padding:0px 0px 0px 0px"
                    valign="top"
                    align="center"
                  >
                    <img
                      style="display:block;color:#000000;text-decoration:none;font-family:Helvetica,arial,sans-serif;font-size:16px;max-width:5%!important;width:5%;height:auto!important"
                      width="35"
                      alt=""
                      src="https://ci6.googleusercontent.com/proxy/6NcP4RMIos3PQMSrto-fqwBH_is0s2ovxEHGrxDJlWuQaHllZ0gfgEiUfAT8JFLt6cBGUL78Hns4TNxd_6-4lPFJErLMnPrQ7v5Kg2V5zK7hCXLC62poAzTCovSSssb-qMlPqaqn-bXPGTRXpHbaUGKwAGCbAGHgYvWDzjbr3d-iGGs=s0-d-e1-ft#http://cdn.mcauto-images-production.sendgrid.net/a9e231901e5509af/1ebf638b-6dc0-42e4-92be-d179387ee9c9/70x68.png"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed">
              <tbody>
                <tr>
                  <td
                    style="padding:10px 0px 0px 0px;line-height:12px;text-align:inherit;padding-bottom:100px"
                    height="100%"
                    valign="top"
                    ><div>
                      <div style="font-family:inherit;text-align:center">
                        <span style="font-family:arial,helvetica,sans-serif;font-size:12px"
                          ><strong>© </strong></span
                        ><span style="font-family:arial,helvetica,sans-serif;font-size:12px">Fluma</span
                        ><span style="font-family:arial,helvetica,sans-serif;font-size:12px"
                          ><strong> soluções digitais</strong></span
                        >
                      </div>
                      <div />
                    </div></td
                  >
                </tr>
              </tbody>
            </table></td
          >
        </tr>
      </tbody>
    </table>`,
    });
    console.log('sended email')

  } catch (error) {
    console.log(error);
  }


  try {
    await resend.sendEmail({
      from: 'controll@fluma.dev',
      subject: 'Contato Fluma - ' + params.name,
      to: 'flumadev@gmail.com',
      html: `<p>Nome: ${params.name}</p><p>Email: ${params.email}</p><p>Empresa: ${params.company}</p>  <p>Interesse: ${params.phone}</p> <p>Interesse: ${params.interest}</p>`
    })
  } catch (error) {
    console.log(error);
  }
}

export {
  sendEmail
}