import React, { useState } from "react";
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
import { MdOutlineCastForEducation } from "react-icons/md";

export default function ForoPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email and message to your backend
    console.log("Submitted:", { email, message });
    // Reset form
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-arial-narrow text-5xl text-center mb-6">
        <MdOutlineCastForEducation className="mr-2" />
        Foro Universitario
      </h1>

      <Tabs defaultValue="notices" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="notices">Avisos</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
          <TabsTrigger value="contact">Contacto</TabsTrigger>
        </TabsList>

        <TabsContent value="notices">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Avisos de Coordinadores</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Reunión de coordinación el próximo lunes</li>
                  <li>Entrega de informes mensuales</li>
                  <li>Actualización de syllabus para el próximo semestre</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Avisos de la Universidad</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Ceremonia de graduación el 15 de julio</li>
                  <li>Mantenimiento de la biblioteca este fin de semana</li>
                  <li>Nuevos cursos de verano disponibles</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="faq">
          <Card>
            <CardHeader>
              <CardTitle>Preguntas Frecuentes</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    ¿Cómo puedo obtener mi horario?
                  </AccordionTrigger>
                  <AccordionContent>
                    Puedes obtener tu horario accediendo a la sección "Horarios"
                    en el menú principal. Allí podrás seleccionar tu carrera y
                    ver el horario correspondiente.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    ¿Dónde puedo ver mis calificaciones?
                  </AccordionTrigger>
                  <AccordionContent>
                    Las calificaciones se publican en el portal del estudiante.
                    Accede con tu usuario y contraseña, y en la sección
                    "Académico" encontrarás tus notas.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    ¿Cómo solicito una constancia de estudios?
                  </AccordionTrigger>
                  <AccordionContent>
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
              <CardTitle>Contáctanos</CardTitle>
              <CardDescription>
                Envíanos tus dudas o comentarios
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
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
                    className="block text-sm font-medium text-gray-700"
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
                <Button type="submit">Enviar</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
