
import emailjs from 'emailjs-com';

interface EmailPayload {
  to: string;
  subject: string;
  formData: {
    name: string;
    email: string;
    phone: string;
    program: string;
    message: string;
  };
}

/**
 * Sends an email with the consultation form data using EmailJS service
 */
export const sendEmail = async (payload: EmailPayload): Promise<boolean> => {
  console.log('Sending email with payload:', payload);
  
  try {
    // Format the email content for better readability
    const emailContent = `
      New Consultation Request Details:
      ------------------------------
      Name: ${payload.formData.name}
      Email: ${payload.formData.email}
      Phone: ${payload.formData.phone}
      Program of Interest: ${payload.formData.program}
      Message: ${payload.formData.message}
      ------------------------------
      This is an automated message.
    `;
    
    console.log('Formatted email content:', emailContent);

    // Prepare the template parameters for EmailJS
    const templateParams = {
      to_email: payload.to,
      from_name: 'Consultation Form',
      subject: payload.subject,
      to_name: 'Admin',
      name: payload.formData.name,
      email: payload.formData.email,
      phone: payload.formData.phone,
      program: payload.formData.program,
      message: payload.formData.message,
      formatted_content: emailContent
    };

    // Send the email using EmailJS
    // You'll need to sign up on EmailJS.com and get your service ID, template ID, and user ID
    const response = await emailjs.send(
      'service_e9t76hj', // Replace with your EmailJS service ID
      'template_2c7g1ih', // Replace with your EmailJS template ID
      templateParams,
      'fumNBtn3d6V4JSfR_' // Replace with your EmailJS user ID
    );

    console.log('Email sent successfully:', response);
    console.log('Email sent successfully to:', payload.to);
    
    // Return true to indicate successful sending
    return true;
    
  } catch (error) {
    console.error('Email sending failed with error:', error);
    // Re-throw the error so it can be handled by the component
    throw error;
  }
};
