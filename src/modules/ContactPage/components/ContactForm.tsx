import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { TextAreaField, TextField } from '@/components/ui/FormField';
import { VStack } from '@/components/ui/Utilities';
import type { ContactSchema } from '@/lib/validations/contact';
import { contactSchema } from '@/lib/validations/contact';

const ContactForm = () => {
  const form = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const {
    handleSubmit,
    reset,
    control,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (data: ContactSchema) => {
    try {
      console.log('Form Data:', data);
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
      toast.success('Message sent successfully!');
      reset();
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="relative w-full rounded-[30px] bg-[#0f0f0f] p-8 md:p-10 overflow-hidden border border-white/5 shadow-active sm:mb-2 md:mb-0">
      {/* Absolute Icon Decoration */}
      <div className="absolute top-0 right-10 p-10 hidden md:block">
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-zinc-700/50"
        >
          <path
            d="M25 0L27.5 17.5L45 20L27.5 22.5L25 40L22.5 22.5L5 20L22.5 17.5L25 0Z"
            fill="currentColor"
            fillOpacity="0.4"
          />
          <path
            d="M38 30L39.5 40.5L50 42L39.5 43.5L38 54L36.5 43.5L26 42L36.5 40.5L38 30Z"
            fill="currentColor"
            fillOpacity="0.2"
          />
        </svg>
      </div>

      <VStack spacing={24} className="relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-white tracking-[-1px] leading-[1.1]">
          Let&apos;s work <span className="text-[#5b78f6]">together.</span>
        </h2>

        <FormProvider {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={20} className="mt-1">
              <TextField control={control} name="name" placeholder="Name *" variant="premium" />

              <TextField control={control} name="email" placeholder="Email *" type="email" variant="premium" />

              <TextField control={control} name="subject" placeholder="Your Subject *" variant="premium" />

              <TextAreaField control={control} name="message" placeholder="Your Message *" variant="premium" />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 bg-[#323232] text-white rounded-xl font-bold hover:bg-white hover:text-black transition-all duration-300 mt-2 uppercase text-[15px] tracking-[0.5px] focus-visible:ring-0"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </VStack>
          </form>
        </FormProvider>
      </VStack>
    </div>
  );
};

export default ContactForm;
