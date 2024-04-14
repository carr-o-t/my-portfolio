import { contactSchema } from "@/lib/validations";
import { Main } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/Form";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";
import { Button } from "./ui/Button";
import { toast } from "sonner";

interface ContactFormProps {}

const ContactForm: FC<ContactFormProps> = ({}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<Main.ContactForm>({
    defaultValues: {
      full_name: "",
      email: "",
      message: "",
    },
    resolver: zodResolver(contactSchema),
    mode: "onChange",
  });

  async function handleFormSumission(data: Main.ContactForm) {
    setLoading(true);
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      toast.error("Failed to send email");
    } else {
      toast.success("Success: Email sent");
    }
    setLoading(false);
  }
  return (
    <Form {...form}>
      <form
        action=""
        method="post"
        onSubmit={form.handleSubmit(handleFormSumission)}
      >
        <FormField
          control={form.control}
          name="full_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="my-6">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="johndoe@gmail.com" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Let's connect!" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-8 flex w-full justify-end">
          <Button type="submit" isLoading={loading}>
            Send
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
