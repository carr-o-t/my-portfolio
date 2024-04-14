import { contactSchema } from "@/lib/validations";
import { z } from "zod";

declare namespace Main {
  interface IconProps extends Partial<React.SVGProps<SVGSVGElement>> {
    size?: string | number;
    absoluteStrokeWidth?: boolean;
  }

  type ContactForm = z.infer<typeof contactSchema>;
}
