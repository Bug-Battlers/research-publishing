'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useState, useEffect } from 'react';

const ContactPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [institute, setInstitute] = useState('');
  const [message, setMessage] = useState('');
  const [captchaText, setCaptchaText] = useState('');
  const [userCaptcha, setUserCaptcha] = useState('');
  const [captchaError, setCaptchaError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Generate captcha on component mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  // Function to generate random captcha
  const generateCaptcha = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setCaptchaText(result);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Verify captcha
    if (userCaptcha !== captchaText) {
      setCaptchaError(true);
      return;
    }
    
    // Handle form submission logic here
    console.log('Form submitted', {
      fullName,
      email,
      phone,
      institute,
      message,
      captcha: userCaptcha,
    });
    
    // Show success message
    setSubmitted(true);
    
    // Reset form fields
    setFullName('');
    setEmail('');
    setPhone('');
    setInstitute('');
    setMessage('');
    setUserCaptcha('');
    setCaptchaError(false);
    generateCaptcha();
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto py-16 px-4 max-w-6xl">
        <header className="mb-16 text-center">
          <h1 className="text-3xl font-light tracking-tight text-black mb-4">Contact Us</h1>
          <div className="w-16 h-0.5 bg-gray-200 mx-auto mb-6"></div>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            We welcome your inquiries and feedback. Please use the form below or contact our editorial team directly.
          </p>
        </header>

        {submitted && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-md">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-800 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-normal text-gray-900 mb-3">
                  Message Sent
                </h2>
                <p className="text-sm text-gray-600 mb-6">
                  Thank you for contacting us. We'll get back to you shortly.
                </p>
                <button
                  type="button"
                  className="px-4 py-2 text-sm bg-black text-white border border-transparent rounded-none hover:bg-gray-800 focus:outline-none"
                  onClick={() => setSubmitted(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col-reverse lg:flex-row gap-16">
          {/* Contact Information Column */}
          <div className="lg:w-2/5">
            <div className="bg-gray-50 p-8 border border-gray-100">
              <h2 className="text-2xl font-light text-black mb-8">Contact Information</h2>
              
              {/* Editorial Team */}
              <div className="mb-8">
                <h3 className="text-base font-medium text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Editorial Team
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Dr. Amol R. Bute</h4>
                    <p className="text-sm text-gray-600">Editor in Chief</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Dr. Devendra Puri</h4>
                    <p className="text-sm text-gray-600">Editor in Chief</p>
                  </div>
                </div>
              </div>
              
              {/* Journal Office */}
              <div className="mb-8">
                <h3 className="text-base font-medium text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Journal Office
                </h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <p className="font-medium">Shuchitabodh: an International Research Journal of Humanities</p>
                  <p>Shramsafalya Housing Society,</p>
                  <p>Sham Nagar, Ambejogai Road,</p>
                  <p>Latur- 413512 Maharashtra</p>
                </div>
              </div>
              
              {/* Publication Office */}
              <div className="mb-8">
                <h3 className="text-base font-medium text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Publication Office
                </h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <p className="font-medium">Sarvadristi Publication</p>
                  <p>Abbaspura, Achalpur,</p>
                  <p>Dist. Amravati. Maharashtra Pin. 444806</p>
                </div>
              </div>
              
              {/* Connect */}
              <div>
                <h3 className="text-base font-medium text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  Connect With Us
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-900 font-medium">Phone</p>
                      <p className="text-sm text-gray-600">
                        <a href="tel:+919822573240" className="hover:underline">+91-9822573240</a>,{" "}
                        <a href="tel:+917709968675" className="hover:underline">7709968675</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-900 font-medium">Email</p>
                      <p className="text-sm text-gray-600">
                        <a href="mailto:shuchitabodh@gmail.com" className="hover:underline">shuchitabodh@gmail.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Form Column */}
          <div className="lg:w-3/5">
            <div className="bg-white p-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-light text-black mb-8">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName" className="text-sm font-normal text-gray-700 mb-1 block">Full Name *</Label>
                    <Input
                      type="text"
                      id="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className="border-gray-200 rounded-none focus:ring-0 focus:border-black w-full"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-sm font-normal text-gray-700 mb-1 block">Email *</Label>
                    <Input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="border-gray-200 rounded-none focus:ring-0 focus:border-black w-full"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="text-sm font-normal text-gray-700 mb-1 block">Phone/Mobile</Label>
                    <Input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="border-gray-200 rounded-none focus:ring-0 focus:border-black w-full"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="institute" className="text-sm font-normal text-gray-700 mb-1 block">Institute</Label>
                    <Input
                      type="text"
                      id="institute"
                      value={institute}
                      onChange={(e) => setInstitute(e.target.value)}
                      className="border-gray-200 rounded-none focus:ring-0 focus:border-black w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm font-normal text-gray-700 mb-1 block">Message *</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="border-gray-200 rounded-none focus:ring-0 focus:border-black min-h-32 w-full"
                  />
                </div>
                
                <div>
                  <Label htmlFor="captcha" className="text-sm font-normal text-gray-700 mb-1 block">Verification Code *</Label>
                  <div className="flex flex-col gap-3">
                    <div className="bg-gray-50 p-3 text-center font-mono text-base tracking-wider border border-gray-100">
                      {captchaText}
                    </div>
                    <div className="flex gap-2">
                      <Input
                        type="text"
                        id="captcha"
                        value={userCaptcha}
                        onChange={(e) => {
                          setUserCaptcha(e.target.value);
                          setCaptchaError(false);
                        }}
                        required
                        className={`border-gray-200 rounded-none focus:ring-0 focus:border-black ${captchaError ? "border-red-500" : ""}`}
                        placeholder="Enter code above"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={generateCaptcha}
                        className="whitespace-nowrap rounded-none border-gray-200 hover:bg-gray-50"
                      >
                        Refresh
                      </Button>
                    </div>
                    {captchaError && (
                      <p className="text-red-500 text-xs">
                        Incorrect verification code. Please try again.
                      </p>
                    )}
                  </div>
                </div>
                
                <Button 
                  type="submit"
                  className="w-full py-3 bg-black hover:bg-gray-800 text-white rounded-none"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;