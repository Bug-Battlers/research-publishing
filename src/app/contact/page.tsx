'use client';

import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Textarea} from '@/components/ui/textarea';
import {useState} from 'react';

const ContactPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [institute, setInstitute] = useState('');
  const [message, setMessage] = useState('');
  const [captcha, setCaptcha] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted', {
      fullName,
      email,
      phone,
      institute,
      message,
      captcha,
    });
    // Reset form fields
    setFullName('');
    setEmail('');
    setPhone('');
    setInstitute('');
    setMessage('');
    setCaptcha('');
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-primary mb-6">Contact Us</h1>
      <p className="text-muted-foreground mb-4">
        We would love to hear from you! Please fill out the form below to get in
        touch.
      </p>

      <form onSubmit={handleSubmit} className="grid gap-4">
        <div>
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone/Mobile</Label>
          <Input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="institute">Institute</Label>
          <Input
            type="text"
            id="institute"
            value={institute}
            onChange={(e) => setInstitute(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="message">Message/Comment *</Label>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="captcha">Captcha *</Label>
          <Input
            type="text"
            id="captcha"
            value={captcha}
            onChange={(e) => setCaptcha(e.target.value)}
            required
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-primary mb-4">
          Head Office
        </h2>
        <p className="text-muted-foreground">Infogain Publication</p>
        <p className="text-muted-foreground">
          Mexico City, Federal District 04512
        </p>
        <p className="text-muted-foreground">Mexico</p>
        <p className="text-muted-foreground">
          Contact No: 0091 9166093655 (Whatsapp)
        </p>
        <p className="text-muted-foreground">
          Email id: editor@ijels.com | infogain.ijels@gmail.com |
          infogainijels@163.com
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
