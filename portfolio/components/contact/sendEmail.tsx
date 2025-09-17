// Client-side email sending using EmailJS
export async function sendEmail(name: string, email: string, message: string) {
  // For static export compatibility, we'll use a client-side email service
  // You can integrate with EmailJS or similar service here
  
  // Temporary implementation - replace with your preferred email service
  throw new Error("Email sending not implemented. Please integrate with an email service like EmailJS.");
  console.log('Email would be sent:', { name, email, message });
  
  // Simulate API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // For demo purposes, always resolve successfully
      // Replace this with actual EmailJS integration
      resolve('Email sent successfully');
    }, 1000);
  });
}
