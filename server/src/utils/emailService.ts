import nodemailer from "nodemailer";

class EmailService {
  private transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'gokalpmustafa49@gmail.com', 
      pass: 'Şifre' 
    }
  });

  async sendProductPurchaseEmail(productName: string) {
    const mailOptions = {
      from: 'nzzrgyqdxtooiwkkql@nbmbb.com',
      to: 'gokalpmustafa49@gmail.com',
      subject: 'Yeni Ürün Satın Alma Talebi',
      text: `Bir kullanıcı ${productName} adlı ürünü satın almak istiyor.`
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }
}

export default new EmailService();
