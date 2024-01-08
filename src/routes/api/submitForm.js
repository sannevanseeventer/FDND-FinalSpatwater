// submitForm.js
import nodemailer from 'nodemailer';

// Configure nodemailer
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465, // Use 587 for TLS
    secure: true, // For SSL, set this to true. For TLS, set it to false.
    auth: {
        user: 'tjb.scheepers@gmail.com',
        pass: ''
    }
});

export async function post(request) {
    const { name, email, subject, message } = JSON.parse(request.body);

    // Construct email message
    const mailOptions = {
        from: 'your_email@example.com',
        to: 'tjb.scheepers@gmail.com',
        subject: subject || 'No Subject',
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`
    };

    try {
        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);

        return {
            status: 200,
            body: { message: 'Form data received and email sent successfully!' }
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            status: 500,
            body: { error: 'Error sending email' }
        };
    }
}
