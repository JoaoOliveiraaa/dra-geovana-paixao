import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Brain,
  Heart,
  Leaf,
  MessageCircle,
  User,
  Instagram,
  Phone,
  Stethoscope,
  Home,
  Globe,
  GraduationCap,
  Users,
  Award,
} from "lucide-react"
// Import the BackgroundPattern component
import { BackgroundPattern } from "@/components/background-pattern"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[url('/subtle-pattern.png')] bg-repeat">
      <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        {/* Top Bar with Social Media */}
        <div className="border-b border-muted/20 bg-teal-600 text-white">
          <div className="container flex h-10 items-center justify-end">
            <div className="flex items-center gap-4">
              <Link
                href="https://wa.me/5551XXXXXXXXX"
                target="_blank"
                className="flex items-center gap-1 text-xs hover:text-teal-200 transition-colors"
              >
                <Phone className="h-3 w-3" />
                WhatsApp
              </Link>
              <Link
                href="https://instagram.com/saudecompaixao"
                target="_blank"
                className="flex items-center gap-1 text-xs hover:text-teal-200 transition-colors"
              >
                <Instagram className="h-3 w-3" />
                @saudecompaixao
              </Link>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-teal-600" />
            <span className="text-lg font-semibold">Dra. Geovana Paixão Tegon</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#home" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Home
            </Link>
            <Link href="#tratamentos" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Tratamentos
            </Link>
            <Link href="#diferenciais" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Diferenciais
            </Link>
            <Link href="#sobre" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Sobre
            </Link>
            <Link href="#depoimentos" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Depoimentos
            </Link>
          </nav>
          <Button asChild className="hidden md:flex bg-teal-600 hover:bg-teal-700">
            <Link href="https://wa.me/5551XXXXXXXXX" target="_blank">
              <MessageCircle className="mr-2 h-4 w-4" />
              Agende sua consulta
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative py-20 md:py-28 bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50">
          <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#0d9488_0.5px,transparent_0.5px)] [background-size:20px_20px] opacity-20"></div>
          <BackgroundPattern className="opacity-40" />
          <div className="container grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Dra. Geovana Paixão Tegon
                <span className="block text-lg md:text-xl font-medium text-muted-foreground mt-2">
                  CRM-RS 60715 | RQE 24411
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-medium text-teal-700">
                Médica de Família com foco em <span className="text-teal-700 font-bold">Saúde Mental</span> e <span className="text-teal-700 font-bold">Cuidado Integral</span>
              </p>
              <p className="text-muted-foreground">
                Atendimento presencial em Taquara e Parobé – RS | Online para todo o Brasil
              </p>
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
                <Link href="https://wa.me/5551XXXXXXXXX" target="_blank" className="uppercase font-bold">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Agende sua consulta pelo WhatsApp
                </Link>
              </Button>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Dra. Geovana Paixão Tegon em seu consultório"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Treatments Section */}
        <section id="tratamentos" className="py-16 md:py-24 relative">
          <BackgroundPattern className="opacity-30" />
          <div className="container space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold">Saúde Mental e Cuidado Integral</h2>
              <p className="text-muted-foreground">
                A saúde mental é parte essencial do cuidado integral. Como médica de família e comunidade, a Dra.
                Geovana acolhe cada pessoa em sua totalidade — corpo, mente, histórico e contexto. Além de tratar
                condições como ansiedade e depressão, ela acompanha exames, doenças crônicas e oferece atendimento para
                todas as fases da vida, desde crianças até idosos.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  title: "Ansiedade",
                  icon: <Brain className="h-10 w-10 text-white mx-auto" />,
                  gradient: "from-blue-500 to-blue-600",
                },
                {
                  title: "Depressão",
                  icon: <Heart className="h-10 w-10 text-white mx-auto" />,
                  gradient: "from-purple-500 to-purple-600",
                },
                {
                  title: "Insônia",
                  icon: <Leaf className="h-10 w-10 text-white mx-auto" />,
                  gradient: "from-indigo-500 to-indigo-600",
                },
                {
                  title: "Tabagismo",
                  icon: <Leaf className="h-10 w-10 text-white mx-auto" />,
                  gradient: "from-emerald-500 to-emerald-600",
                },
                {
                  title: "TOC",
                  icon: <Brain className="h-10 w-10 text-white mx-auto" />,
                  gradient: "from-teal-500 to-teal-600",
                },
                {
                  title: "Transtorno Afetivo Bipolar",
                  icon: <Heart className="h-10 w-10 text-white mx-auto" />,
                  gradient: "from-cyan-500 to-cyan-600",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
                >
                  <CardContent
                    className={`flex flex-col items-center justify-center p-6 text-center h-full bg-gradient-to-br ${item.gradient} text-white relative`}
                  >
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      {item.icon}
                      <h3 className="mt-4 font-semibold text-sm md:text-base">{item.title}</h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-6 max-w-3xl mx-auto mt-12 p-8 bg-gradient-to-r from-white/90 to-teal-50/90 backdrop-blur-sm rounded-lg shadow-lg border border-teal-100">
              <h3 className="text-2xl font-bold text-center">Atendimento Clínico Geral</h3>
              <p className="text-muted-foreground">Dra. Geovana também atua como médica de família, oferecendo:</p>
              <ul className="space-y-2 list-disc pl-6">
                <li>Acompanhamento de doenças crônicas (diabetes, hipertensão, obesidade, tireoide).</li>
                <li>Consultas de rotina para crianças (puericultura), adultos e idosos.</li>
                <li>Solicitação de exames e orientações preventivas.</li>
                <li>Atenção integral à saúde da mulher e do homem.</li>
              </ul>
              <div className="flex justify-center mt-8">
                <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
                  <Link href="https://wa.me/5551XXXXXXXXX" target="_blank" className="uppercase font-bold">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Agende sua consulta pelo WhatsApp
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Differentials Section */}
        <section id="diferenciais" className="py-16 md:py-24 bg-teal-50/70 relative">
          <div className="absolute inset-0 -z-10 h-full w-full bg-teal-50 bg-[radial-gradient(#0d9488_0.5px,transparent_0.5px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#0d9488_30%,transparent_100%)] opacity-20"></div>
          <div className="container space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold">Por que escolher a Dra. Geovana?</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Visão Integral",
                  description:
                    "Avalio não apenas a saúde mental, mas todo o contexto do paciente — exames, histórico clínico e hábitos de vida.",
                  icon: <Stethoscope className="h-8 w-8 text-teal-600" />,
                },
                {
                  title: "Médica de Família",
                  description:
                    "Atendimento completo para todas as idades, desde consultas pediátricas até acompanhamento geriátrico.",
                  icon: <Users className="h-8 w-8 text-teal-600" />,
                },
                {
                  title: "Consultas online",
                  description: "Atendimento para todo o Brasil",
                  icon: <Globe className="h-8 w-8 text-teal-600" />,
                },
                {
                  title: "Atendimento domiciliar",
                  description: "Para pacientes com mobilidade reduzida",
                  icon: <Home className="h-8 w-8 text-teal-600" />,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-teal-50 rounded-full mb-4 group-hover:bg-teal-100 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-medium text-teal-700 mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {[
                {
                  title: "Formação especializada",
                  description: "Medicina de Família e Comunidade",
                  icon: <GraduationCap className="h-8 w-8 text-teal-600" />,
                },
                {
                  title: "Ambiente acolhedor",
                  description: "Atendimento humanizado e personalizado",
                  icon: <Heart className="h-8 w-8 text-teal-600" />,
                },
                {
                  title: "Atualização constante",
                  description: "Em psiquiatria e saúde mental",
                  icon: <Award className="h-8 w-8 text-teal-600" />,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-teal-50 rounded-full mb-4 group-hover:bg-teal-100 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-medium text-teal-700 mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
                <Link href="https://wa.me/5551XXXXXXXXX" target="_blank" className="uppercase font-bold">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Converse comigo no WhatsApp
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-16 md:py-24 relative">
          <BackgroundPattern className="opacity-30" />
          <div className="container">
            <div className="max-w-8xl mx-auto space-y-8">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="relative w-full md:w-1/2 aspect-square rounded-2xl overflow-hidden bg-teal-50 flex items-center justify-center p-4">
                  <div className="text-center">
                    <User className="h-16 w-16 text-teal-200 mx-auto mb-4" />
                    <p className="text-sm text-teal-600">Imagem da Dra. Geovana em breve</p>
                  </div>
                </div>

                <div className="space-y-6 md:w-1/2">
                  <div className="space-y-4 mb-6">
                    <div className="inline-flex items-center justify-center px-4 py-2 bg-teal-100 rounded-full">
                      <User className="h-5 w-5 text-teal-600 mr-2" />
                      <span className="text-teal-600 font-medium">Sobre Mim</span>
                    </div>
                    <h2 className="text-3xl font-bold">Conheça a <span className="text-teal-600">Dra. Geovana Paixão Tegon</span></h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Médica formada pela <span className="text-teal-200 font-bold">Universidade Federal Fluminense</span>, com residência em Medicina de Família e
                    Comunidade e pós-graduação em <span className="text-teal-200 font-bold">Psiquiatria</span> pelo Hospital Israelita Albert Einstein. Com 11 anos de
                    experiência, atuou em comunidades ribeirinhas, áreas rurais e grandes centros, integrando práticas
                    como acupuntura e meditação ao cuidado tradicional.
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    Minha formação em <span className="text-teal-200 font-bold">Medicina de Família e Comunidade</span> me permite cuidar de você e sua família em todas as fases da vida — seja para saúde
                    mental, prevenção ou tratamento de doenças físicas. Sempre com um olhar amplo, que integra exames,
                    sintomas e contexto emocional.
                  </p>

                  <blockquote className="border-l-4 border-teal-600 pl-4 italic bg-teal-50/50 p-4 rounded-r-lg">
                    "Minha missão é cuidar do ser humano por inteiro: corpo, mente e história de vida."
                  </blockquote>

                  <div className="pt-4">
                    <Button asChild className="bg-teal-600 hover:bg-teal-700">
                      <Link href="https://wa.me/5551XXXXXXXXX" target="_blank" className="uppercase font-bold">
                        Agende sua consulta
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="depoimentos" className="py-16 md:py-24 bg-teal-50/70 relative">
          <div className="absolute inset-0 -z-10 h-full w-full bg-teal-50 bg-[radial-gradient(#0d9488_0.5px,transparent_0.5px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#0d9488_30%,transparent_100%)] opacity-20"></div>
          <div className="container space-y-12">
            <h2 className="text-3xl font-bold text-center">O que dizem meus pacientes</h2>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                { text: "A Dra. Geovana é incrível, me senti acolhida desde a primeira consulta.", author: "Maria S." },
                { text: "Abordagem humanizada que me ajudou a entender minhas emoções.", author: "João P." },
                { text: "Médica da família que acompanha todas as fases da vida.", author: "Ana C." },
              ].map((testimonial, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="p-6 space-y-4">
                    <p className="italic">{testimonial.text}</p>
                    <p className="font-medium text-teal-700">{testimonial.author}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
                <Link href="https://wa.me/5551XXXXXXXXX" target="_blank" className="uppercase font-bold">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Quero agendar minha consulta
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 md:py-24 relative">
          <BackgroundPattern className="opacity-30" />
          <div className="container">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl font-bold text-center">Dúvidas Comuns</h2>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Como funciona o atendimento online?</AccordionTrigger>
                  <AccordionContent>
                    As consultas são realizadas por plataformas seguras, com a mesma qualidade do presencial.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Quais os valores das consultas?</AccordionTrigger>
                  <AccordionContent>Presencial: R$ 290 | Online: R$ 230 | Domiciliar: R$ 350.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Atende por convênios?</AccordionTrigger>
                  <AccordionContent>Atendimento apenas particular no momento.</AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="flex justify-center pt-6">
                <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
                  <Link href="https://wa.me/5551XXXXXXXXX" target="_blank" className="uppercase font-bold">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Fale comigo pelo WhatsApp
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted/40 relative">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
        <div className="container py-8 md:py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-6 w-6 text-teal-600" />
                <span className="text-lg font-semibold">Dra. Geovana Paixão Tegon</span>
              </div>
              <p className="text-sm text-muted-foreground">CRM-RS 60715 | RQE 24411</p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Contato</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-teal-600" />
                  <Link
                    href="https://wa.me/5551XXXXXXXXX"
                    target="_blank"
                    className="text-sm hover:text-teal-600 transition-colors"
                  >
                    WhatsApp
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-teal-600" />
                  <Link
                    href="https://instagram.com/saudecompaixao"
                    target="_blank"
                    className="text-sm hover:text-teal-600 transition-colors"
                  >
                    @saudecompaixao
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Links Rápidos</h3>
              <div className="grid grid-cols-2 gap-2">
                <Link href="#home" className="text-sm hover:text-teal-600 transition-colors">
                  Home
                </Link>
                <Link href="#tratamentos" className="text-sm hover:text-teal-600 transition-colors">
                  Tratamentos
                </Link>
                <Link href="#sobre" className="text-sm hover:text-teal-600 transition-colors">
                  Sobre
                </Link>
                <Link href="#depoimentos" className="text-sm hover:text-teal-600 transition-colors">
                  Depoimentos
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Dra. Geovana Paixão Tegon. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
