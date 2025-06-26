import React, { useState } from 'react';
import { Menu, X, ChevronRight, Phone, Mail, Users, BarChart3, Lightbulb, Target, TrendingUp, Settings, Vote, GraduationCap } from 'lucide-react';

const EATechWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const services = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Finanzas",
      description: "Modelado predictivo de mercado, optimización financiera basada en datos y análisis automatizado con agentes inteligentes para maximizar la rentabilidad."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Marketing",
      description: "Desarrollo de identidad de marca basada en datos, estrategia digital con métricas y monetización de marcas personales y corporativas."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Gestión Operativa",
      description: "Optimización de procesos, gestión inteligente de inventarios, control de costos en tiempo real y monitoreo de calidad mediante IA."
    },
    {
      icon: <Vote className="w-8 h-8" />,
      title: "Servicios Electorales",
      description: "Análisis de datos electorales, estrategias de comunicación política y modelado predictivo para campañas políticas efectivas."
    }
  ];

  const courses = [
    { name: "Excel Avanzado", description: "Domina las herramientas avanzadas de análisis" },
    { name: "Python para Datos", description: "Programación aplicada a ciencia de datos" },
    { name: "Power BI", description: "Visualización y business intelligence" },
    { name: "SQL", description: "Gestión y consulta de bases de datos" },
    { name: "Liderazgo Político", description: "Estrategias de comunicación y liderazgo" }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo placeholder */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-black to-gray-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">EA</span>
              </div>
              <span className="font-bold text-xl">EA TECH COMPANY</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['inicio', 'servicios', 'cursos'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize font-medium transition-colors hover:text-gray-600 ${
                    activeSection === item ? 'text-black border-b-2 border-black' : 'text-gray-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-2 space-y-2">
              {['inicio', 'servicios', 'cursos'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 px-3 capitalize font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
              FINANZAS - MARKETING - OPERACIONES
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transformamos datos en conocimiento estratégico para potenciar el éxito empresarial
            </p>
          </div>

          {/* Company Overview */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-4">Quiénes Somos</h2>
              <p className="text-gray-700 leading-relaxed">
                EA Tech Company es una firma especializada en análisis de datos, estrategia financiera y crecimiento digital. 
                Nuestra misión consiste en transformar información compleja en estrategias accionables que optimicen la rentabilidad, 
                anticipen tendencias económicas y fortalezcan la presencia digital de nuestros clientes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Implementamos soluciones con seguimiento basado en métricas y resultados tangibles, convirtiéndonos en el socio 
                estratégico de referencia en toma de decisiones basadas en datos.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Nuestra Visión</h3>
              <p className="leading-relaxed">
                Convertirnos en el socio estratégico de referencia en toma de decisiones basadas en datos, 
                impulsando la innovación y el crecimiento sostenible de organizaciones en diversos sectores.
              </p>
            </div>
          </div>

          {/* Solutions Overview */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Nuestras Soluciones</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <BarChart3 className="w-8 h-8 text-gray-700 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Business Intelligence</h4>
                  <p className="text-gray-600">
                    Creación de sistemas personalizados para control flexible de datos, análisis y dashboards interactivos.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Lightbulb className="w-8 h-8 text-gray-700 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Consultoría Integral</h4>
                  <p className="text-gray-600">
                    Soluciones personalizadas en finanzas, marketing y operaciones con acompañamiento continuo.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">Nuestro Equipo</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Placeholder para fotos de socios */}
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-8 min-h-[300px] flex flex-col justify-center items-center">
                <Users className="w-16 h-16 text-gray-500 mb-4" />
                <h4 className="font-semibold text-lg mb-2">Socio 1</h4>
                <p className="text-gray-600 text-center">
                  [Espacio para foto y descripción de experiencia del primer socio]
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-8 min-h-[300px] flex flex-col justify-center items-center">
                <Users className="w-16 h-16 text-gray-500 mb-4" />
                <h4 className="font-semibold text-lg mb-2">Socio 2</h4>
                <p className="text-gray-600 text-center">
                  [Espacio para foto y descripción de experiencia del segundo socio]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones integrales para optimizar cada aspecto de tu negocio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-gray-700 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Detailed Features */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-12">Características Destacadas</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-br from-black to-gray-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Visualización Avanzada</h4>
                <p className="text-gray-600">Dashboards interactivos para decisiones estratégicas basadas en datos</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-black to-gray-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Análisis Predictivo</h4>
                <p className="text-gray-600">Modelado predictivo para anticipar tendencias y oportunidades</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-black to-gray-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Automatización</h4>
                <p className="text-gray-600">Procesos automatizados con agentes inteligentes y monitoreo en tiempo real</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="cursos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Cursos de Capacitación</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desarrolla las habilidades técnicas y de liderazgo que necesitas para destacar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:border-gray-300">
                <div className="flex items-center justify-between mb-4">
                  <GraduationCap className="w-8 h-8 text-gray-600" />
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </div>
                <h3 className="text-lg font-bold mb-2">{course.name}</h3>
                <p className="text-gray-600">{course.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Contáctanos</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ofrecemos todo tipo de soluciones personalizadas para tu comodidad y la de tu equipo. 
              ¡Ponte en contacto con nosotros para potencializar tu empresa!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Logo Section */}
            <div>
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-white to-gray-300 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-2xl">EA</span>
                </div>
                <p className="text-gray-300">
                  [Espacio para logo en PNG - versión blanca]
                </p>
              </div>
            </div>

            {/* Phone Contact */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Teléfonos WhatsApp</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <span>[Tu número de WhatsApp]</span>
                </div>
                <p className="text-sm text-gray-400">Respuesta inmediata por WhatsApp</p>
              </div>
            </div>

            {/* Email Contact */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Correo Electrónico</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span>[Tu correo empresarial]</span>
                </div>
                <p className="text-sm text-gray-400">Consultas y cotizaciones</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 EA Tech Company. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EATechWebsite;