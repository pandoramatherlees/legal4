'use client';
import { useState, useRef } from 'react';
import { CheckCircle2, Send, AlertCircle } from 'lucide-react';
import { BtnGold } from './atoms';

const FORMSPREE_ID = '{form_id}'; // Replace with your Formspree form ID

function validateField(name, value) {
  switch (name) {
    case 'name':
      return value.trim() ? '' : 'Please enter your full name.';
    case 'email':
      if (!value.trim()) return 'Please enter your email address.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        return 'Please enter a valid email address.';
      return '';
    case 'consent':
      return value ? '' : 'You must consent to data processing before submitting.';
    default:
      return '';
  }
}

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    visa: '',
    message: '',
    consent: false,
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const formRef = useRef(null);

  const inputCls = (field) =>
    `w-full px-4 py-3 bg-cream border rounded-sm text-[0.88rem] text-body placeholder:text-secondary/50 focus:outline-none focus:border-gold/50 focus:ring-[2px] focus:ring-gold/10 transition-all duration-200 ${
      errors[field]
        ? 'border-red-400 focus:border-red-400 focus:ring-red-100'
        : 'border-navy/[0.08]'
    }`;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setForm((p) => ({ ...p, [name]: val }));
    // Clear error on change
    if (errors[name]) {
      setErrors((p) => ({ ...p, [name]: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    const err = validateField(name, val);
    if (err) {
      setErrors((p) => ({ ...p, [name]: err }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all required fields
    const newErrors = {};
    newErrors.name = validateField('name', form.name);
    newErrors.email = validateField('email', form.email);
    newErrors.consent = validateField('consent', form.consent);

    // Remove empty strings
    const activeErrors = Object.fromEntries(
      Object.entries(newErrors).filter(([, v]) => v)
    );
    setErrors(activeErrors);

    if (Object.keys(activeErrors).length > 0) {
      // Focus the first errored field
      const firstErrorField = Object.keys(activeErrors)[0];
      const el = formRef.current?.querySelector(`[name="${firstErrorField}"]`);
      el?.focus();
      return;
    }

    setStatus('submitting');

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          visa: form.visa,
          message: form.message,
          _gotcha: '', // honeypot
        }),
      });

      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-teal/[0.06] border border-teal/15 rounded-sm p-10 text-center" role="status">
        <CheckCircle2 size={36} className="text-teal mx-auto mb-4" />
        <h3 className="font-serif text-lg font-bold text-navy mb-2">Thank You</h3>
        <p className="text-secondary text-[0.88rem]">
          Thank you for your enquiry. We will respond within one working day.
        </p>
      </div>
    );
  }

  const errorKeys = Object.keys(errors).filter((k) => errors[k]);

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-5"
      noValidate
      aria-label="Send an enquiry to Taylor Hampton Solicitors"
    >
      {/* Error summary */}
      {errorKeys.length > 0 && (
        <div
          className="bg-red-50 border border-red-200 rounded-sm p-4"
          role="alert"
          aria-live="assertive"
        >
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle size={16} className="text-red-500" />
            <p className="text-red-700 text-[0.82rem] font-semibold">
              Please correct the following errors:
            </p>
          </div>
          <ul className="list-disc list-inside text-red-600 text-[0.82rem] space-y-1">
            {errorKeys.map((k) => (
              <li key={k}>
                <a href={`#field-${k}`} className="underline hover:text-red-800">
                  {errors[k]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Honeypot */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="field-name" className="block text-[0.82rem] font-semibold text-navy mb-1.5">
            Full Name <span className="text-gold" aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            type="text"
            id="field-name"
            name="name"
            required
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'error-name' : undefined}
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputCls('name')}
            autoComplete="name"
          />
          {errors.name && (
            <p id="error-name" className="text-red-500 text-[0.78rem] mt-1" role="alert">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="field-email" className="block text-[0.82rem] font-semibold text-navy mb-1.5">
            Email Address <span className="text-gold" aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            type="email"
            id="field-email"
            name="email"
            required
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'error-email' : undefined}
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputCls('email')}
            autoComplete="email"
          />
          {errors.email && (
            <p id="error-email" className="text-red-500 text-[0.78rem] mt-1" role="alert">
              {errors.email}
            </p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="field-phone" className="block text-[0.82rem] font-semibold text-navy mb-1.5">
            Telephone Number
          </label>
          <input
            type="tel"
            id="field-phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className={inputCls('phone')}
            autoComplete="tel"
          />
        </div>
        <div>
          <label htmlFor="field-visa" className="block text-[0.82rem] font-semibold text-navy mb-1.5">
            Visa Type of Interest
          </label>
          <select
            id="field-visa"
            name="visa"
            value={form.visa}
            onChange={handleChange}
            className={`${inputCls('visa')} appearance-none`}
          >
            <option value="">Please select...</option>
            <option value="global-talent">Global Talent Visa</option>
            <option value="spouse">Spouse &amp; Partner Visa</option>
            <option value="skilled-worker">Skilled Worker Visa</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="field-message" className="block text-[0.82rem] font-semibold text-navy mb-1.5">
          Brief Description of Your Enquiry
        </label>
        <textarea
          id="field-message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          className={`${inputCls('message')} resize-none`}
        />
      </div>
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="consent"
            required
            aria-required="true"
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? 'error-consent' : undefined}
            checked={form.consent}
            onChange={handleChange}
            onBlur={handleBlur}
            className="mt-1 accent-gold"
          />
          <span className="text-[0.78rem] text-secondary leading-relaxed">
            I consent to Taylor Hampton Solicitors processing my personal data for the purpose
            of responding to this enquiry. See our{' '}
            <a href="/privacy" className="text-gold underline hover:text-gold-light">
              Privacy Policy
            </a>
            .
          </span>
        </label>
        {errors.consent && (
          <p id="error-consent" className="text-red-500 text-[0.78rem] mt-1" role="alert">
            {errors.consent}
          </p>
        )}
      </div>

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-sm p-4" role="alert">
          <p className="text-red-700 text-[0.85rem]">
            There was a problem submitting your enquiry. Please try again or contact us directly
            on{' '}
            <a href="tel:+442031430322" className="underline font-semibold">
              +44 203 143 0322
            </a>
            .
          </p>
        </div>
      )}

      <BtnGold
        type="submit"
        className="!w-full md:!w-auto !justify-center"
      >
        {status === 'submitting' ? (
          <>
            <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={15} /> Send Enquiry
          </>
        )}
      </BtnGold>
    </form>
  );
}
