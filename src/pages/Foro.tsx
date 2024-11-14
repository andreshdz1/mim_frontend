import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/navigation/tab";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/layout/card";
import { Input } from "../components/forms/input";
import { Textarea } from "../components/forms/textarea";
import { Button } from "../components/navigation/button";
import {
  MdOutlineCastForEducation,
  MdConnectWithoutContact,
  MdOutlineMoveToInbox,
  MdOutlineSportsVolleyball,
} from "react-icons/md";
import { FaNewspaper, FaUniversity } from "react-icons/fa";
import { TiNews } from "react-icons/ti";
import { FaCircleQuestion } from "react-icons/fa6";
import { SiGoogleforms } from "react-icons/si";
import { RiAdminFill } from "react-icons/ri";
import { BiSolidHappyBeaming } from "react-icons/bi";
import { FcAnswers } from "react-icons/fc";

export default function ForoPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", { email, message });
    setEmail("");
    setMessage("");
  };
  const returnMainPage = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-arial-narrow text-5xl text-center mb-6 flex items-center justify-center text-blue-900">
        <span className="mr-2">Foro Universitario</span>
        <MdOutlineCastForEducation className="ml-2 text-5xl" />
      </h1>
      <div className="absolute top-5 left-20 bottom-0 flex items-center ">
        <button
          onClick={returnMainPage}
          className="inline-block bg-blue-500 text-white p-2 rounded-full text-xl hover:bg-blue-600 transition"
        >
          <IoIosArrowBack className="text-xl" />
        </button>
      </div>

      <Tabs defaultValue="notices" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 flex">
          <TabsTrigger
            value="notices"
            className="text-md text-gray-900 hover:text-blue-600 hover:bg-blue-100 active:bg-blue-300 active:text-blue-900 transition-colors p-4 
        rounded-lg text-center w-full data-[state=active]:bg-blue-100 mb-3"
          >
            <span> Novedades</span>
            <TiNews className="ml-4 text-2xl" />
          </TabsTrigger>

          <TabsTrigger
            value="faq"
            className="text-md text-gray-900 hover:text-blue-600 hover:bg-blue-100 active:bg-gray-300 active:text-blue-600 transition-colors p-4 
        rounded-lg text-center w-full data-[state=active]:bg-blue-100 mb-3"
          >
            <span>Preguntas Frecuentes </span>
            <FaCircleQuestion className="ml-4 text2xl" />
          </TabsTrigger>

          <TabsTrigger
            value="contact"
            className="text-md text-gray-900 hover:text-blue-600 hover:bg-blue-100 active:bg-gray-300 active:text-blue-600 transition-colors p-4 
        rounded-lg text-center w-full data-[state=active]:bg-blue-100 mb-3"
          >
            <span>Contáctanos</span>
            <MdConnectWithoutContact className="ml-4 text-2xl" />
          </TabsTrigger>

          <TabsTrigger
            value="forms"
            className="text-md text-gray-900 hover:text-blue-600 hover:bg-blue-100 active:bg-gray-300 active:text-blue-600 transition-colors p-4 
        rounded-lg text-center w-full data-[state=active]:bg-blue-100 mb-3"
          >
            <span> Formularios </span>
            <SiGoogleforms className="ml-4 text-2xl" />
          </TabsTrigger>
          <TabsTrigger
            value="mural"
            className="text-gray-900 hover:text-blue-600 hover:bg-blue-100 active:bg-gray-300 active:text-blue-600 transition-colors p-4 
        rounded-lg text-center w-full data-[state=active]:bg-blue-100 mb-3"
          >
            <span> Mural Marista </span>
            <FaNewspaper className="ml-4 text-2xl" />
          </TabsTrigger>
        </TabsList>
        <TabsContent value="notices">
          <div className="grid gap-4 md:grid-cols-2 m">
            <Card>
              <CardHeader>
                <RiAdminFill className="ml-4 text-2xl" />
                <CardTitle className="font-arial-narrow">
                  Avisos a Coordinadores
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-italic font-arial-narrow  text-gray-900 mb-4">
                  Mes: Noviembre 2024
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Reunión de coordinación el próximo lunes</li>
                  <li>Entrega de informes mensuales</li>
                  <li>Actualización de syllabus para el próximo semestre</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <FaUniversity className="ml-4 text-2xl" />
                <CardTitle className="font-arial-narrow">
                  Avisos de la Universidad
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h4 className="text-lg font-italic font-arial-narrow  text-gray-900 mb-4">
                  Mes: Noviembre 2024
                </h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Ceremonia de graduación el 15 de julio</li>
                  <li>Mantenimiento de la biblioteca este fin de semana</li>
                  <li>Nuevos cursos de verano disponibles</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center mt-6">
            <img src="/public/maristas_3.jpg" className="w-50 h-80" />
          </div>
        </TabsContent>

        <TabsContent value="faq">
          <Card>
            <CardHeader>
              <CardTitle className="font-arial-narrow">
                Preguntas Frecuentes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <BiSolidHappyBeaming className="ml-4 text-2xl" />
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="font-arial-narrow text-gray-900 hover:text-blue-600 focus:text-blue-600 active:text-blue-800 focus:underline">
                    ¿Cómo puedo obtener mi horario?
                  </AccordionTrigger>
                  <AccordionContent className="font-arial-narrow">
                    Puedes obtener tu horario accediendo a la sección "Horarios"
                    en el menú principal. Allí podrás seleccionar tu carrera y
                    ver el horario correspondiente.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="font-arial-narrow text-gray-900 hover:text-blue-600 focus:text-blue-600 active:text-blue-800 focus:underline">
                    ¿Dónde puedo ver mis calificaciones?
                  </AccordionTrigger>
                  <AccordionContent className="font-arial-narrow">
                    Las calificaciones se publican en el portal del estudiante.
                    Accede con tu usuario y contraseña, y en la sección
                    "Académico" encontrarás tus notas.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="font-arial-narrow text-gray-900 hover:text-blue-600 focus:text-blue-600 active:text-blue-800 focus:underline">
                    ¿Cómo solicito una constancia de estudios?
                  </AccordionTrigger>
                  <AccordionContent className="font-arial-narrow">
                    Para solicitar una constancia de estudios, debes acudir a la
                    Oficina de Registros Académicos con tu carnet de estudiante.
                    El trámite toma aproximadamente 3 días hábiles.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact">
          <Card>
            <CardHeader>
              <CardTitle className="font-arial-narrow">Contáctanos</CardTitle>
              <CardDescription className="font-arial-narrow">
                Envíanos tus dudas o comentarios
              </CardDescription>
              <MdOutlineMoveToInbox className="ml-4 text-2xl" />
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="font-arial-narrow block text-sm font-medium text-gray-700"
                  >
                    Correo Electrónico
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="font-arial-narrow block text-sm font-medium text-gray-700"
                  >
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                <Button type="submit" className="font-arial-narrow">
                  Enviar
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="forms">
          <Card>
            <CardHeader></CardHeader>
            <CardContent>
              <FcAnswers className="ml-4 text-8xl" />
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="font-arial-narrow text-gray-900 hover:text-blue-600 focus:text-blue-600 active:text-blue-800 focus:underline">
                    ¿Dónde puedo completar la solicitud para registrar mi
                    vehículo y poder hacer uso del estacionamiento?
                  </AccordionTrigger>
                  <AccordionContent className="font-arial-narrow">
                    Puedes llenar la solicitud para registrar tu vehículo y
                    hacer uso del estacionamiento accediendo a este
                    <a
                      href="https://www.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#007BFF", fontWeight: "bold" }}
                    >
                      {" "}
                      *enlace*
                    </a>
                    .
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="font-arial-narrow text-gray-900 hover:text-blue-600 focus:text-blue-600 active:text-blue-800 focus:underline">
                    ¿Dónde puedo ver los programas de Servicio Social
                    disponibles? ¿Dónde o con quien me puedo inscribir?
                  </AccordionTrigger>
                  <AccordionContent className="font-arial-narrow">
                    <p>
                      * Para obtener más información sobre las plazas
                      disponibles para el Servicio Social, puedes consultar el
                      siguiente documento:
                      <a
                        href="https://www.example.com/servicio-social.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#007BFF", fontWeight: "bold" }}
                      >
                        {" "}
                        Ver plazas disponibles (PDF){" "}
                      </a>
                    </p>
                    <p>
                      * Si deseas inscribirte al Servicio Social, puedes hacerlo
                      a través de este{" "}
                      <a
                        href="https://www.example.com/inscripcion-servicio-social"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#007BFF", fontWeight: "bold" }}
                      >
                        {" "}
                        enlace de inscripción
                      </a>
                      .
                    </p>
                    <p>
                      * Si necesitas ayuda personal, puedes acudir con Sergio
                      Chimal en Servicios Escolares.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
