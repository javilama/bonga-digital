"use client";

import { useState } from "react";

//  Definimos el tipo de datos que maneja el formulario
export type ContactFormData = {
  name: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
  newsletter: boolean;
};

//  Props que puede recibir el componente ContactForm
type ContactFormProps = {
  // Opcional: callback que se ejecuta después de un envío exitoso
  onSuccess?: (data: ContactFormData) => void;
};

//  Componente que renderiza y controla el formulario de contacto
//    - Es un "client component" (usa hooks y maneja estado/efectos)
//    - Incluye validaciones simples en el cliente y muestra mensajes de estado
export const ContactForm: React.FC<ContactFormProps> = ({ onSuccess }) => {
  // Estado local que guarda los valores del formulario
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
    newsletter: false,
  });

  // Estado para indicar si estamos enviando el formulario
  const [loading, setLoading] = useState(false);

  // Estado para mostrar mensajes de éxito o error
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  //  Maneja cambios en inputs y actualiza el estado del formulario
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;

    // Checkbox maneja su propio booleano
    if (type === "checkbox") {
      setForm((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  //  Validación básica de campos requeridos
  const validate = (): string | null => {
    if (!form.name.trim()) return "El nombre es obligatorio.";
    if (!form.email.trim()) return "El email es obligatorio.";
    // Validación simple de email (regex mínima)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email))
      return "El email no tiene un formato válido.";
    if (!form.message.trim()) return "El mensaje es obligatorio.";
    return null; // todo OK
  };

  //  Simulamos envío (aquí iría la llamada a tu API / servidor)
  const fakeSubmit = (data: ContactFormData) =>
    new Promise<void>((resolve, reject) => {
      console.log('Enviando datos del formulario:', data);
      setTimeout(() => {
        // Simulamos éxito la mayoría de las veces
        if (Math.random() > 0.08) resolve();
        else reject(new Error("Fallo simulado en el servidor"));
      }, 900);
    });

  //  Manejo del submit del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validamos en cliente
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      setSuccess(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Aquí harías: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })
      await fakeSubmit(form);
      setSuccess(true);
      setError(null);
      // limpiamos el formulario
      setForm({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
        newsletter: false,
      });
      // llamamos callback si existe
      onSuccess?.(form);
    } catch (err) {
      console.error("Error enviando el formulario:", err);
      setError(
        "Hubo un error al enviar el formulario. Por favor intenta más tarde."
      );
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Mensaje de error: mostrado cuando `error` tiene texto */}
      {error && (
        <div
          className="mt-6 p-4 bg-red-100 border border-red-300 rounded-lg text-red-700"
          data-testid="error-message"
        >
          {error}
        </div>
      )}

      {/* Mensaje de éxito: mostrado cuando `success` es true */}
      {success && (
        <div
          className="mt-6 p-4 bg-green-100 border border-green-300 rounded-lg text-green-700"
          data-testid="success-message"
        >
          ¡Gracias por contactarnos! Te responderemos pronto.
        </div>
      )}

      {/* Formulario real */}
      <form
        id="contact-form"
        className="space-y-6"
        data-testid="contact-form"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="grid md:grid-cols-2 gap-6">
          {/* Campo: Nombre (requerido) */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Nombre*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bonga-blue focus:border-transparent"
              placeholder="Tu nombre completo"
              data-testid="input-name"
            />
          </div>

          {/* Campo: Email (requerido) */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bonga-blue focus:border-transparent"
              placeholder="tu@email.com"
              data-testid="input-email"
            />
          </div>
        </div>

        {/* Campo: Empresa (opcional) */}
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Empresa
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={form.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bonga-blue focus:border-transparent"
            placeholder="Nombre de tu empresa"
            data-testid="input-company"
          />
        </div>

        {/* Select: Servicio de interés */}
        <div>
          <label
            htmlFor="service"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Servicio de Interés
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bonga-blue focus:border-transparent"
            data-testid="select-service"
          >
            <option value="">Selecciona un servicio</option>
            <option value="web">Desarrollo Web</option>
            <option value="mobile">Apps Móviles</option>
            <option value="consulting">Consultoría IT</option>
            <option value="other">Otro</option>
          </select>
        </div>

        {/* Textarea: Mensaje (requerido) */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Mensaje*
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bonga-blue focus:border-transparent"
            placeholder="Cuéntanos sobre tu proyecto..."
            data-testid="textarea-message"
          />
        </div>

        {/* Checkbox: Newsletter */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="newsletter"
            name="newsletter"
            checked={form.newsletter}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, newsletter: e.target.checked }))
            }
            className="w-4 h-4 text-bonga-blue border-gray-300 rounded focus:ring-bonga-blue"
            data-testid="checkbox-newsletter"
          />
          <label htmlFor="newsletter" className="ml-2 text-sm text-gray-700">
            Quiero recibir noticias y actualizaciones de Bonga Digital
          </label>
        </div>

        {/* Botón de envío */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-bonga-blue cursor-pointer text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            data-testid="submit-button"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar Mensaje"}
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
