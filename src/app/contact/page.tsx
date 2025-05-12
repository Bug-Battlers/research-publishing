"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";

const ContactPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [institute, setInstitute] = useState("");
  const [message, setMessage] = useState("");
  const [captchaText, setCaptchaText] = useState("");
  const [userCaptcha, setUserCaptcha] = useState("");
  const [captchaError, setCaptchaError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Generate captcha on component mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  // Function to generate random captcha
  const generateCaptcha = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setCaptchaText(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verify captcha
    if (userCaptcha !== captchaText) {
      setCaptchaError(true);
      return;
    }

    // Handle form submission logic here
    console.log("Form submitted", {
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
    setFullName("");
    setEmail("");
    setPhone("");
    setInstitute("");
    setMessage("");
    setUserCaptcha("");
    setCaptchaError(false);
    generateCaptcha();

    // Hide success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="bg-white min-h-screen">
      <header
        className="text-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/woman-booking-ticket-online_53876-51226.jpg?ga=GA1.1.1300420666.1732270462&semt=ais_hybrid&w=740')",
        }}
      >
        <div className="bg-black bg-opacity-60 py-20 px-4">
          <h1 className="text-4xl  text-white mb-6 py-5">Get In Touch</h1>
          <div className="w-16 h-0.5 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-white max-w-xl mx-auto py-4">
            Shuchitabodh: An International Journal of Humanities (SIRJH)
          </p>
        </div>
      </header>
      <div className="py-5 px-4 mx-auto max-w-6xl">
        {submitted && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded p-4 mx-4 shadow-lg max-w-md">
              <div className="text-center">
                <div className="inline-flex items-center justify-center rounded-full bg-gray-200 text-gray-800 mb-4 w-12 h-12">
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
                <h2 className="text-xl font-normal text-gray-800 mb-3">
                  Message Sent
                </h2>
                <p className="text-gray-600 mb-4">
                  Thank you for contacting us. We'll get back to you shortly.
                </p>
                <button
                  type="button"
                  className="bg-gray-800 text-white px-4 py-2 rounded"
                  onClick={() => setSubmitted(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-center w-full">
          <div className="flex flex-col-reverse lg:flex-row gap-4 w-full">
            {/* Contact Information Column */}
            <div className="col-6 p-0">
              <div className="bg-gray-100 p-4 border w-full">
                <h2 className="text-2xl font-light text-gray-800 mb-4">
                  Contact Information
                </h2>

                {/* Editorial Team */}
                <div className="mb-4">
                  <h3 className="text-base font-medium text-gray-800 mb-4 pb-2 border-b">
                    Editorial Team
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium text-gray-800">
                        Dr. Amol R. Bute
                      </h4>
                      <p className="text-sm text-gray-600">Editor in Chief</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-800">
                        Dr. Devendra Puri
                      </h4>
                      <p className="text-sm text-gray-600">Editor in Chief</p>
                    </div>
                  </div>
                </div>

                {/* Journal Office */}
                <div className="mb-4">
                  <h3 className="text-base font-medium text-gray-800 mb-4 pb-2 border-b">
                    Journal Office
                  </h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p className="font-medium">
                      Shuchitabodh: an International Research Journal of
                      Humanities
                    </p>
                    <p>Shramsafalya Housing Society,</p>
                    <p>Sham Nagar, Ambejogai Road,</p>
                    <p>Latur- 413512 Maharashtra</p>
                  </div>
                </div>

                {/* Publication Office */}
                <div className="mb-4">
                  <h3 className="text-base font-medium text-gray-800 mb-4 pb-2 border-b">
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
                  <h3 className="text-base font-medium text-gray-800 mb-4 pb-2 border-b">
                    Connect With Us
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-3 mt-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <div>
                        <p className="text-sm text-gray-800 font-medium">
                          Phone
                        </p>
                        <p className="text-sm text-gray-600">
                          <a href="tel:+919822573240" className="no-underline">
                            +91-9822573240
                          </a>
                          ,{" "}
                          <a href="tel:+917709968675" className="no-underline">
                            7709968675
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-3 mt-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <div>
                        <p className="text-sm text-gray-800 font-medium">
                          Email
                        </p>
                        <p className="text-sm text-gray-600">
                          <a
                            href="mailto:shuchitabodh@gmail.com"
                            className="no-underline"
                          >
                            shuchitabodh@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="col-6 p-0">
              <div className="bg-white p-4 border shadow-sm w-full">
                <h2 className="text-xl font-light text-gray-800 mb-4">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label
                        htmlFor="fullName"
                        className="text-sm font-normal text-gray-600 block mb-1"
                      >
                        Full Name *
                      </Label>
                      <Input
                        type="text"
                        id="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        className="w-full border-gray-200 rounded focus:ring-0 focus:border-black"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="email"
                        className="text-sm font-normal text-gray-600 block mb-1"
                      >
                        Email *
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full border-gray-200 rounded focus:ring-0 focus:border-black"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label
                        htmlFor="phone"
                        className="text-sm font-normal text-gray-600 block mb-1"
                      >
                        Phone/Mobile
                      </Label>
                      <Input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full border-gray-200 rounded focus:ring-0 focus:border-black"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="institute"
                        className="text-sm font-normal text-gray-600 block mb-1"
                      >
                        Institute
                      </Label>
                      <Input
                        type="text"
                        id="institute"
                        value={institute}
                        onChange={(e) => setInstitute(e.target.value)}
                        className="w-full border-gray-200 rounded focus:ring-0 focus:border-black"
                      />
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="message"
                      className="text-sm font-normal text-gray-600 block mb-1"
                    >
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="w-full border-gray-200 rounded focus:ring-0 focus:border-black min-h-32"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="captcha"
                      className="text-sm font-normal text-gray-600 block mb-1"
                    >
                      Verification Code *
                    </Label>
                    <div className="flex flex-col gap-3">
                      <div className="bg-gray-100 p-3 text-center font-mono text-base tracking-wider border">
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
                          className={`w-full border-gray-200 rounded focus:ring-0 focus:border-black ${
                            captchaError ? "border-red-500" : ""
                          }`}
                          placeholder="Enter code above"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={generateCaptcha}
                          className="border-gray-300 rounded"
                        >
                          Refresh
                        </Button>
                      </div>
                      {captchaError && (
                        <p className="text-red-500 text-sm">
                          Incorrect verification code. Please try again.
                        </p>
                      )}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gray-800 text-white py-2 rounded"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
