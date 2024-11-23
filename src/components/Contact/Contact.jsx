import React, { useState, useRef, useContext } from "react";
import emailjs from "emailjs-com";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { LanguageContext } from "../../context/LanguageContext";

const SocialIcon = ({ path, viewBox = "0 0 24 24", ariaLabel }) => (
  <svg
    className="w-8 h-8 fill-current"
    viewBox={viewBox}
    aria-label={ariaLabel}
  >
    <path d={path} className="group-hover:text-blue-500" />
  </svg>
);

export const Contact = () => {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const { language } = useContext(LanguageContext);

  const sectionRef = useRef(null);
  const { isIntersecting } = useIntersectionObserver(sectionRef);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    try {
      emailjs.init(import.meta.env.VITE_API_KEY);

      const result = await emailjs.send("service_atcxppx", "template_fk8dfg8", {
        from_name: name,
        from_email: email,
        message: message,
      });

      setStatus("success");
      setMessage(
        language == "EN"
          ? "Your message has been sent successfully!"
          : "Tu mensaje ha sido enviado correctamente!"
      );
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        language == "EN"
          ? "There was an error sending your message. Please try again."
          : "Hubo un error enviando tu mensaje. Por favor intenta de nuevo."
      );
    }
  };

  const socialLinks = [
    {
      name: "YouTube",
      url: "https://www.youtube.com/@DotDager",
      icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
    },
    {
      name: "GitHub",
      url: "https://github.com/MarianoVilla",
      icon: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/dager.32",
      icon: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z",
    },
    {
      name: "Email",
      url: "mailto:dotdager@gmail.com",
      icon: "M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z",
      viewBox: "0 0 24 24",
    },
    {
      name: "Twitch",
      url: "https://twitch.tv/dagerxiv",
      icon: "M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z",
    },
    {
      name: "Discord",
      url: "https://discord.gg/4NFk6TamAB",
      icon: "M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-gray-800 py-[5.5rem] overflow-hidden"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <h2
          className={`text-4xl md:text-5xl font-bold text-white mb-12 text-center ${
            isIntersecting ? "animate__animated animate__fadeInUp" : "opacity-0"
          } `}
        >
          {language == "EN" ? "Get In Touch" : "Contactate"}
        </h2>
        <div
          className={`flex flex-wrap justify-center gap-8 ${
            isIntersecting ? "animate__animated animate__fadeInUp" : "opacity-0"
          }`}
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-red transition-colors duration-300 group"
              aria-label={link.name}
            >
              <SocialIcon
                path={link.icon}
                viewBox={link.viewBox}
                ariaLabel={link.name}
              />
            </a>
          ))}
        </div>
        <p
          className={`mt-12 text-center text-gray-300 ${
            isIntersecting ? "animate__animated animate__fadeInUp" : "opacity-0"
          }`}
        >
          {language == "EN"
            ? `Feel free to reach out through any of these platforms. I'm always
          excited to connect, collaborate, or just chat!`
            : `No dudes en comunicarte a través de cualquiera de estas plataformas. ¡Siempre estoy
          entusiasmado por conectarme, colaborar o simplemente charlar!`}
        </p>
        <div
          className={`max-w-4xl mx-auto mt-12 ${
            isIntersecting ? "animate__animated animate__fadeInUp" : "opacity-0"
          } animate__delay-1s`}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                {language == "EN" ? "Name" : "Nombre"}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300"
              >
                {language == "EN" ? "Message" : "Mensaje"}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 resize-none block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300 disabled:opacity-50"
              >
                {language == "EN"
                  ? status === "sending"
                    ? "Sending..."
                    : "Send Message"
                  : status === "sending"
                  ? "Enviando..."
                  : "Enviar Mensaje"}
              </button>
            </div>
          </form>
          {status !== "idle" && status !== "sending" && (
            <div
              className={`mt-4 p-4 rounded-md ${
                status === "success"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {message}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
