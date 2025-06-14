import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";
import { useLanguage } from "../constants/languageContext";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { language } = useLanguage();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title={
            language === "pt"
              ? "Entre em contato – Vamos nos conectar"
              : "Contact Me – Let's Connect"
          }
          sub={
            language === "pt"
              ? "💬Tem dúvidas ou ideias? Vamos conversar 🚀"
              : "💬Got questions or ideas? Let's talk 🚀"
          }
        />

        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">
                    {language === "pt" ? "Seu Nome" : "Your Name"}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={
                      language === "pt"
                        ? "Qual o seu nome?"
                        : "What's your name?"
                    }
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">
                    {language === "pt" ? "Seu Email" : "Your Email"}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={
                      language === "pt"
                        ? "Qual é o seu e-mail?"
                        : "What's your email?"
                    }
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">
                    {language === "pt" ? "Sua Mensagem" : "Your Message"}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={
                      language === "pt"
                        ? "Como posso te ajudar?"
                        : "How can I help you?"
                    }
                    rows="5"
                    required
                  />
                </div>

                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading
                        ? language === "pt"
                          ? "Enviando..."
                          : "Sending..."
                        : language === "pt"
                        ? "Enviar"
                        : "Send"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>

          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;