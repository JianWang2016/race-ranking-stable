import { CallToAction } from "@/components/CallToAction";

function Contact() {
  return (
    <>
      <CallToAction
        field1="Don't be shy. Send us a message to say hi and share with us your thoughts."
        field2="We'd love to hear your ideas on how best to rank race performance."
      />

      <div className="text-green-600">Contact us form</div>
    </>
  );
}

export default Contact;
