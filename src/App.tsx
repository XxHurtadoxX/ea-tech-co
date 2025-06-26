import React, { useState } from 'react';
import { Menu, X, ChevronRight, Phone, Mail, Users, BarChart3, Lightbulb, Target, TrendingUp, Settings, Vote, GraduationCap } from 'lucide-react';

const EATechWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const ServiceCard = ({ icon, title, bullets }: {
    icon: JSX.Element;
    title: string;
    bullets: { label: string; detail: string }[];
  }) => {
    const [showMore, setShowMore] = useState(false);

    return (
      <div className="bg-white shadow-md p-6 rounded-xl space-y-3">
        <div className="flex items-center space-x-3 mb-2">
          {icon}
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <ul className="list-disc pl-5 text-justify text-sm">
          {bullets.map((item, idx) => (
            <li key={idx}>
              {item.label}
              {showMore && (
                <p className="text-gray-600 mt-1">{item.detail}</p>
              )}
            </li>
          ))}
        </ul>
        <button
          onClick={() => setShowMore(!showMore)}
          className="text-blue-600 text-sm hover:underline mt-2"
        >
          {showMore ? "Ver menos" : "Ver más"}
        </button>
      </div>
    );
  };

  const servicesData = [
    {
      icon: <TrendingUp className="w-8 h-8 text-gray-700" />,
      title: "Finanzas",
      description: "Optimización financiera y análisis predictivo para maximizar rentabilidad",
      bullets: [
        {
          label: "Modelado predictivo de mercado",
          detail: "Anticipamos escenarios económicos mediante machine learning y series de tiempo."
        },
        {
          label: "Optimización financiera basada en datos",
          detail: "Maximizamos utilidades reduciendo riesgos a través de dashboards y simulaciones."
        },
        {
          label: "Análisis automatizado con agentes inteligentes",
          detail: "Implementamos bots que ejecutan tareas de detección de anomalías y reporting."
        },
        {
          label: "Estrategias de rentabilidad",
          detail: "Diseñamos planes de inversión y flujo de caja óptimos según tus objetivos."
        }
      ]
    },
    {
      icon: <Target className="w-8 h-8 text-gray-700" />,
      title: "Marketing",
      description: "Estrategias digitales y construcción de marca con análisis de datos",
      bullets: [
        {
          label: "Construcción de identidad de marca",
          detail: "Desarrollamos tu storytelling y diseño visual respaldados en análisis cuali-cuanti."
        },
        {
          label: "Estrategia digital con KPIs",
          detail: "Creamos embudos de conversión y medimos cada interacción para optimizar ROI."
        },
        {
          label: "Monetización de marcas personales y corporativas",
          detail: "Implementamos acciones de contenido, afiliados y e-commerce para generar ingresos."
        },
        {
          label: "Campañas optimizadas por IA",
          detail: "Segmentamos audiencias y ajustamos creatividades en tiempo real con algoritmos."
        }
      ]
    },
    {
      icon: <Settings className="w-8 h-8 text-gray-700" />,
      title: "Gestión Operativa",
      description: "Automatización de procesos y optimización operacional",
      bullets: [
        {
          label: "Automatización de procesos críticos",
          detail: "Integramos RPA y flujos de trabajo automáticos para reducir tiempos muertos."
        },
        {
          label: "Gestión inteligente de inventarios",
          detail: "Aplicamos forecasting y reorder points para evitar quiebres o sobrestock."
        },
        {
          label: "Control de costos en tiempo real",
          detail: "Monitoreamos KPIs operativos con alertas instantáneas al superar umbrales."
        },
        {
          label: "Monitoreo de calidad con machine learning",
          detail: "Detectamos defectos o variaciones con visión por computador y análisis continuo."
        }
      ]
    },
    {
      icon: <Vote className="w-8 h-8 text-gray-700" />,
      title: "Servicios Electorales",
      description: "Estrategia política y comunicación electoral basada en datos",
      bullets: [
        {
          label: "Rebranding y estrategia digital",
          detail: "Renovación de identidad y narrativa online para conectar con tu electorado."
        },
        {
          label: "Investigación electoral",
          detail: "Diseño de encuestas, segmentación de votantes y modelado predictivo por región."
        },
        {
          label: "Comunicación política",
          detail: "Media training, gestión de crisis y mensajes clave para cada audiencia."
        },
        {
          label: "Evaluación post-electoral",
          detail: "Análisis de resultados, rebranding post-campaña y planificación de expansión."
        }
      ]
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
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img
                src="https://i.imgur.com/p5QcCPf.png"
                alt="Logo EA"
                className="h-12 w-auto object-contain"
              />
              <span className="font-bold text-xl">EA Tech Company</span>
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
              SOLUCIONES EN DATOS
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
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
              <p className="text-gray-700 leading-relaxed text-justify">
                EA Tech Company es una firma especializada en análisis de datos, estrategia financiera y crecimiento digital. 
                Nuestra misión consiste en transformar información compleja en estrategias accionables que optimicen la rentabilidad, 
                anticipen tendencias económicas y fortalezcan la presencia digital de nuestros clientes.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify">
                Implementamos soluciones con seguimiento basado en métricas y resultados tangibles, convirtiéndonos en el socio 
                estratégico de referencia en toma de decisiones basadas en datos.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Nuestra Visión</h3>
              <p className="leading-relaxed text-justify">
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
                    Creación de sistemas, informes y automatizaciones personalizados para control flexible de datos, análisis y dashboards interactivos.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Lightbulb className="w-8 h-8 text-gray-700 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Consultoría Integral</h4>
                  <p className="text-gray-600">
                    Soluciones personalizadas en finanzas, marketing y operaciones con acompañamiento continuo para el éxito de las organizaciones.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">Nuestro Equipo</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-8 min-h-[300px] flex flex-col justify-center items-center">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4E03AQHBjglRbVTxCg/profile-displayphoto-shrink_800_800/B4EZVzsOY3HcAg-/0/1741402728439?e=1756339200&v=beta&t=5JnayiC7rA78DWH2IvvGIeE4WBKQTlGxCxQK7soWmT0"
                  alt="Foto de Daniel Hurtado"
                  className="w-24 h-24 rounded-full mb-4 object-cover"
                />
                <h4 className="font-semibold text-lg mb-2">Daniel Hurtado</h4>
                <p className="text-gray-600 font-medium mb-4">CEO y Gerente de Datos / Científico de datos y Economista</p>
                <p className="text-gray-600 text-justify">
                  Daniel cuenta con más de 3 años de experiencia en ciencia de datos, combinando economía, BI y machine learning para sectores como salud, manufactura, retail y e-commerce.
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-8 min-h-[300px] flex flex-col justify-center items-center">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4E03AQH2XVYrHnD4lw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1668789112556?e=1756339200&v=beta&t=i6CFAda6dcTcp_NIA12pXjG8dfSHAJ-ukDSjGUMWjDM"
                  alt="Foto de Valentina Pacheco Ferrer"
                  className="w-24 h-24 rounded-full mb-4 object-cover"
                />
                <h4 className="font-semibold text-lg mb-2">Valentina Pacheco Ferrer</h4>
                <p className="text-gray-600 font-medium mb-4">Directora de crecimiento y marketing / Estratega y Economista</p>
                <p className="text-gray-600 text-justify">
                  Valentina cuenta con 10 años en el sector social, 5 en el sector público, y 3 años en el sector digital acompañando fundaciones, emprendimientos, marcas personales y políticas.
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

          {/* Service Cards con detalles */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {servicesData.map((svc, i) => (
              <ServiceCard
                key={i}
                icon={svc.icon}
                title={svc.title}
                bullets={svc.bullets}
              />
            ))}
          </div>

          {/* Detailed Features */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
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
            <div className="mb-6 flex justify-center">
              <img
                src="https://i.imgur.com/Q57HCQU.png"
                alt="Logo EA"
                className="h-32 w-auto object-contain"
              />
            </div>

            {/* Phone Contact */}
            <div>
              <h3 className="text-xl font-semibold mb-4">WhatsApp</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <span>+57 305 3421950</span>
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
                  <span>econoanalyticgroup@gmail.com</span>
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