import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle } from 'lucide-react';
import { sendEmail } from '@/lib/emailService';
import { consultationFormSchema, type ConsultationFormValues } from '@/lib/validationSchemas';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

const ConsultationForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ConsultationFormValues>({
    resolver: zodResolver(consultationFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      program: '',
      message: ''
    },
  });

  // Initialize EmailJS when the component mounts
  useEffect(() => {
    // Import emailjs dynamically to ensure it's only loaded in the browser
    import('emailjs-com').then(emailjs => {
      emailjs.init("tNZpbj1I0UbJyXfkK"); // Replace with your actual user ID
    });
  }, []);

  const programOptions = [
    'Medical',
    'Engineering',
    'BBA',
    'BCA',
    'B. Pharmacy',
    'Agricultural',
    'Other'
  ];

  const resetForm = () => {
    form.reset({
      name: '',
      email: '',
      phone: '',
      program: '',
      message: ''
    });
  };

  const onSubmit = async (data: ConsultationFormValues) => {
    setLoading(true);
    
    try {
      console.log(`Form submission started at ${new Date().toISOString()}`, data);
      
      // You can change this email to your client's email address
      const clientEmail = 'dm2002maharana@gmail.com';
      
      const result = await sendEmail({
        to: clientEmail,
        subject: `New Consultation Request: ${data.name} - ${data.program}`,
        formData: {
          name: data.name,
          email: data.email,
          phone: data.phone,
          program: data.program,
          message: data.message || ''
        }
      });
      
      if (result) {
        console.log('Email sent successfully, updating UI');
        
        toast({
          title: "Success!",
          description: "Your consultation request has been sent. We'll contact you soon.",
          variant: "default",
        });
        
        setSubmitted(true);
        resetForm();
      }
    } catch (error) {
      console.error('Form submission failed:', error);
      toast({
        title: "Something went wrong",
        description: "Unable to send your request. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center p-8 space-y-4">
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">Request Submitted!</h3>
        <p className="text-gray-600">
          Thank you for your interest! We've received your consultation request and will get back to you within 24-48 hours.
        </p>
        <Button 
          onClick={() => setSubmitted(false)} 
          className="mt-4 bg-consulting-blue hover:bg-consulting-darkBlue text-white"
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full max-w-md mx-auto">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  placeholder="Enter Your Full Name" 
                  className="h-12 rounded-md" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  type="email" 
                  placeholder="you@gmail.com" 
                  className="h-12 rounded-md" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  type="tel" 
                  placeholder="43456-78909" 
                  className="h-12 rounded-md" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="program"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Interested Program</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger className="h-12 rounded-md">
                    <SelectValue placeholder="Select a program" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {programOptions.map((program) => (
                    <SelectItem key={program} value={program}>
                      {program}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Information</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Tell us a bit about your educational background and goals towards future..."
                  rows={4}
                  className="rounded-md resize-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          disabled={loading} 
          className="w-full bg-consulting-blue hover:bg-consulting-darkBlue text-white h-12 rounded-md"
        >
          {loading ? "Sending..." : "Submit Request"}
        </Button>
        
        <p className="text-center text-sm text-muted-foreground">
          By submitting this form, you agree to our privacy policy and terms of service.
        </p>
      </form>
    </Form>
  );
};

export default ConsultationForm;