"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  interest: z.string().min(1, "Please select an option"),
  message: z.string().min(10, "Please add a few details about what you're looking for"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormValues) => {
    void data;
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-10 text-center shadow-md ring-1 ring-slate-100">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-50 text-sky-600">
          <CheckCircle2 size={28} />
        </span>
        <h3 className="mt-4 font-display text-xl font-semibold text-navy-900">Thank you!</h3>
        <p className="mt-2 text-sm text-slate-500">
          We received your request and a member of our sales team will contact you shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-5 text-sm font-semibold text-navy-900 underline decoration-slate-300 underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-2xl bg-white p-7 shadow-md ring-1 ring-slate-100 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-navy-900">Full Name</label>
          <input
            {...register("name")}
            className="mt-1.5 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
            placeholder="Jane Smith"
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <label className="text-sm font-semibold text-navy-900">Phone</label>
          <input
            {...register("phone")}
            className="mt-1.5 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
            placeholder="(863) 555-0123"
          />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label className="text-sm font-semibold text-navy-900">Email</label>
        <input
          {...register("email")}
          className="mt-1.5 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
          placeholder="jane@email.com"
        />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <label className="text-sm font-semibold text-navy-900">I&apos;m interested in</label>
        <select
          {...register("interest")}
          defaultValue=""
          className="mt-1.5 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="schedule-tour">Scheduling a Tour</option>
          <option value="floor-plans">Floor Plan Information</option>
          <option value="financing">Financing</option>
          <option value="general">General Inquiry</option>
        </select>
        {errors.interest && <p className="mt-1 text-xs text-red-500">{errors.interest.message}</p>}
      </div>

      <div>
        <label className="text-sm font-semibold text-navy-900">Message</label>
        <textarea
          {...register("message")}
          rows={4}
          className="mt-1.5 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
          placeholder="Tell us about the home or community you're interested in..."
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white disabled:opacity-60"
      >
        {isSubmitting && <Loader2 size={16} className="animate-spin" />}
        Request Information
      </button>
    </form>
  );
}
