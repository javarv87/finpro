import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface faq {
  id: number
  question: string
  answer: string
}

const faqs: faq[] = [
  {
    id: 1,
    question: "¿Cómo puedo solicitar un préstamo personal con FinPro?",
    answer:
      "Solicitar un préstamo con FinPro es muy sencillo. Solo necesitas llenar el formulario en línea con tus datos personales y financieros. Nuestro equipo revisará tu solicitud y te contactará en poco tiempo para informarte sobre la aprobación y los próximos pasos.",
  },
  {
    id: 2,
    question: "¿Qué tipo de tarjetas de crédito ofrecen?",
    answer:
      "Ofrecemos varias tarjetas de crédito que se ajustan a diferentes perfiles y necesidades. Desde tarjetas con recompensas por cada compra hasta opciones con tasas de interés reducidas. Puedes ver las opciones en nuestra sección de Tarjetas de Crédito y solicitar la que mejor se adapte a ti.",
  },
  {
    id: 3,
    question: "¿Cuáles son los requisitos para abrir una cuenta de ahorro?",
    answer:
      "Abrir una cuenta de ahorro en FinPro es rápido y fácil. Solo necesitas ser mayor de 18 años, tener una identificación válida y un comprobante de domicilio. Puedes completar el proceso en línea en minutos.",
  },
  {
    id: 4,
    question:
      "¿FinPro realiza verificaciones de crédito para aprobar un préstamo?",
    answer:
      "Sí, realizamos una verificación de crédito como parte del proceso de evaluación para aprobar un préstamo. Sin embargo, ofrecemos soluciones para personas con diferentes perfiles crediticios, así que incluso si tu puntaje no es perfecto, aún podrías calificar para un préstamo.",
  },
  {
    id: 5,
    question: "¿Qué medidas de seguridad tiene FinPro para proteger mis datos?",
    answer:
      "En FinPro tomamos la seguridad muy en serio. Utilizamos tecnología de encriptación de última generación y cumplimos con los más altos estándares de seguridad financiera para proteger tus datos personales y transacciones.",
  },
  {
    id: 6,
    question: "¿Cómo puedo contactar con el servicio al cliente?",
    answer:
      "Puedes contactarnos a través de nuestra sección de Contacto, donde encontrarás un formulario para enviar tus preguntas. También puedes llamarnos o enviarnos un correo electrónico, y nuestro equipo de atención al cliente te ayudará con cualquier inquietud.",
  },
  {
    id: 7,
    question:
      "¿Cuánto tiempo tarda la aprobación de un préstamo o tarjeta de crédito?",
    answer:
      "El tiempo de aprobación varía según el producto. Para los préstamos personales, solemos dar una respuesta en menos de 24 horas. Las tarjetas de crédito pueden tardar un poco más dependiendo de la evaluación, pero generalmente recibirás una respuesta en 1 a 3 días hábiles.",
  },
]

export default function Faq() {
  return (
    <section id="faq" className="max-w-7xl w-full mx-auto px-8 py-12">
      <div className="heading-section text-center">
        <h2 className="tracking-tight text-5xl leading-tight font-exo mb-8 font-medium text-transparent bg-clip-text bg-[linear-gradient(270deg,_#d0a786,_theme('colors.zinc.600'))] dark:bg-[linear-gradient(270deg,_theme('colors.orange.50'_/_60%)_45%,_theme('colors.gray.500'))]">
          Preguntas Frecuentes
        </h2>
        <Accordion className="max-w-xl m-auto" type="single" collapsible>
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.question}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}