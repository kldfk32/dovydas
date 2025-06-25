import './App.css'
import { useState } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Input } from './components/ui/input'
import { Textarea } from './components/ui/textarea'
import { Phone, Mail, MapPin, Home, Building, Users, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import ProjectPlunge from './components/ProjectPlunge'
import ProjectSiauliai from './components/ProjectSiauliai'

// Import images
import dovydasImage from './assets/dovydas_new.jpg'
import projectPlungeImage from './assets/project_1_plunge_apartment.jpeg'
import projectSiauliaiImage from './assets/project_2_siauliai_office.jpeg'
import dovydasBanner from './assets/dovydas_banner.jpg'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [currentView, setCurrentView] = useState('main')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    alert('Ačiū už jūsų žinutę! Susisieksiu su jumis artimiausiu metu.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const showProjectPlunge = () => {
    setCurrentView('plunge')
  }

  const showProjectSiauliai = () => {
    setCurrentView('siauliai')
  }

  const backToMain = () => {
    setCurrentView('main')
  }

  if (currentView === 'plunge') {
    return <ProjectPlunge onBack={backToMain} />
  }

  if (currentView === 'siauliai') {
    return <ProjectSiauliai onBack={backToMain} />
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-lg md:text-xl font-bold text-primary"
            >
              Dovydas Radzius
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {[
                { id: 'home', label: 'Pagrindinis' },
                { id: 'about', label: 'Apie mane' },
                { id: 'services', label: 'Paslaugos' },
                { id: 'projects', label: 'Projektai' },
                { id: 'contact', label: 'Kontaktai' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary font-medium' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            {/* Mobile Navigation */}
            <div className="md:hidden flex space-x-2">
              <Button 
                size="sm" 
                variant="outline" 
                onClick={() => scrollToSection('projects')}
                className="text-xs px-3"
              >
                Projektai
              </Button>
              <Button 
                size="sm" 
                onClick={() => scrollToSection('contact')}
                className="text-xs px-3"
              >
                Kontaktai
              </Button>
            </div>
            
            <Button onClick={() => scrollToSection('contact')} className="hidden md:block">
              Susisiekite
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 md:pt-20 pb-12 md:pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                Jūsų patikimas{' '}
                <span className="text-primary">nekilnojamojo turto</span>{' '}
                partneris Lietuvoje
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
                Padedu rasti svajonių namus, efektyviai parduoti ar išnuomoti nekilnojamąjį turtą. 
                Profesionalumas, patikimumas ir individualus požiūris į kiekvieną klientą.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Button size="lg" onClick={() => scrollToSection('projects')} className="w-full sm:w-auto">
                  Peržiūrėti projektus
                </Button>
                <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')} className="w-full sm:w-auto">
                  Susisiekti dabar
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative order-1 lg:order-2"
            >
              <img
                src={dovydasImage}
                alt="Dovydas Radzius"
                className="rounded-2xl shadow-2xl w-full max-w-sm md:max-w-md mx-auto"
              />
              <div className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 bg-white p-3 md:p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 md:h-5 w-4 md:w-5 text-green-500" />
                  <span className="font-medium text-sm md:text-base">Licencijuotas brokeris</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Apie Dovydą Radzių – Jūsų nekilnojamojo turto ekspertą
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Esu Dovydas Radzius, nekilnojamojo turto profesionalas. 
              Mano tikslas – užtikrinti sklandų ir sėkmingą nekilnojamojo turto sandorį, atsižvelgiant į 
              individualius kliento poreikius.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Users,
                title: 'Individualus požiūris',
                description: 'Kiekvienas klientas yra unikalus, todėl siūlau personalizuotas sprendimus, atitinkančius jūsų poreikius ir biudžetą.'
              },
              {
                icon: CheckCircle,
                title: 'Profesionalumas',
                description: 'Specializuojuosi gyvenamojo ir komercinio nekilnojamojo turto pardavime, pirkime ir nuomoje su aukščiausiais standartais.'
              },
              {
                icon: Home,
                title: 'Rinkos žinios',
                description: 'Puikiai pažįstu Lietuvos nekilnojamojo turto rinką ir galiu pasiūlyti geriausius sprendimus jūsų investicijoms.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="sm:col-span-2 lg:col-span-1 last:sm:col-start-1 last:sm:col-end-3 last:lg:col-start-auto last:lg:col-end-auto"
              >
                <Card className="text-center h-full">
                  <CardHeader className="pb-4">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg md:text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Mano teikiamos nekilnojamojo turto paslaugos
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                icon: Home,
                title: 'Turto pardavimas',
                description: 'Profesionalus turto įvertinimas, rinkodaros strategijos kūrimas ir aktyvi paieška potencialių pirkėjų.'
              },
              {
                icon: Building,
                title: 'Turto pirkimas',
                description: 'Padedu rasti jūsų poreikius atitinkantį nekilnojamąjį turtą ir deruosi dėl geriausios kainos.'
              },
              {
                icon: Users,
                title: 'Turto nuoma',
                description: 'Tarpininkauju nuomojant gyvenamąjį ar komercinį turtą, padedu rasti patikimus nuomininkus.'
              },
              {
                icon: CheckCircle,
                title: 'Konsultacijos',
                description: 'Teikiu išsamias konsultacijas visais nekilnojamojo turto klausimais ir investicinėmis galimybėmis.'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="sm:col-span-2 lg:col-span-1"
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg md:text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm md:text-base">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Mano įgyvendinti ir dabartiniai projektai
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer" onClick={showProjectPlunge}>
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img
                    src={projectPlungeImage}
                    alt="Butas Plungėje"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 md:top-4 left-3 md:left-4 bg-green-500 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                    Parduodamas
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg md:text-xl">1 kambario butas Plungėje</CardTitle>
                  <CardDescription className="text-sm md:text-base">A. Vaišvilos g. 33, Plungė</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm md:text-base">
                      <span className="text-gray-600">Plotas:</span>
                      <span className="font-medium">17.73 kv.m.</span>
                    </div>
                    <div className="flex justify-between text-sm md:text-base">
                      <span className="text-gray-600">Aukštas:</span>
                      <span className="font-medium">5/5</span>
                    </div>
                    <div className="flex justify-between text-sm md:text-base">
                      <span className="text-gray-600">Kaina:</span>
                      <span className="font-bold text-primary">6,900€</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base mb-4">
                    Bendrabutinio tipo butas, pilnai paruoštas remontui. Įdėtas plastikinis langas, 
                    priklauso rūsys. Centrinė miesto dalis, patogus susisiekimas.
                  </p>
                  <Button variant="outline" className="w-full">
                    Daugiau informacijos
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer" onClick={showProjectSiauliai}>
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img
                    src={projectSiauliaiImage}
                    alt="Ofisas Šiauliuose"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 md:top-4 left-3 md:left-4 bg-blue-500 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                    Nuomojamas
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg md:text-xl">Jaukus ofisas Šiauliuose</CardTitle>
                  <CardDescription className="text-sm md:text-base">Gytarių g. 24, Šiauliai</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm md:text-base">
                      <span className="text-gray-600">Plotas:</span>
                      <span className="font-medium">11 kv.m.</span>
                    </div>
                    <div className="flex justify-between text-sm md:text-base">
                      <span className="text-gray-600">Tipas:</span>
                      <span className="font-medium">Ofisas</span>
                    </div>
                    <div className="flex justify-between text-sm md:text-base">
                      <span className="text-gray-600">Nuoma:</span>
                      <span className="font-bold text-primary">80€/mėn.</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base mb-4">
                    Nedidelis, jaukus ir saugus ofisas pietinėje Šiaulių dalyje. Saugoma teritorija, 
                    kondicionierius, vieta automobiliui.
                  </p>
                  <Button variant="outline" className="w-full">
                    Daugiau informacijos
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Susisiekite su manimi
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Susisiekite šiandien ir aptarkime Jūsų nekilnojamojo turto poreikius!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg md:text-xl">Kontaktinė informacija</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 md:space-y-6">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm md:text-base">Telefonas</p>
                      <p className="text-gray-600 text-sm md:text-base">+370 634 47925</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm md:text-base">El. paštas</p>
                      <p className="text-gray-600 text-sm md:text-base">dovydas@duprocentai.lt</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm md:text-base">Adresas</p>
                      <p className="text-gray-600 text-sm md:text-base">Vytauto g. 42, Šiauliai</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-xs md:text-sm text-gray-500">
                      Nekilnojamojo turto agentūra „DU PROCENTAI" 2%, nemokamai suteikia profesionalią 
                      pagalbą bei konsultacijas visais nekilnojamojo turto klausimais.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg md:text-xl">Parašykite man</CardTitle>
                  <CardDescription className="text-sm md:text-base">
                    Užpildykite formą ir susisieksiu su jumis artimiausiu metu
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Input
                          placeholder="Jūsų vardas"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="text-sm md:text-base"
                        />
                      </div>
                      <div>
                        <Input
                          type="email"
                          placeholder="El. paštas"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="text-sm md:text-base"
                        />
                      </div>
                    </div>
                    <div>
                      <Input
                        type="tel"
                        placeholder="Telefono numeris"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="text-sm md:text-base"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Jūsų žinutė..."
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        required
                        className="text-sm md:text-base"
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Siųsti žinutę
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info Banner Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl shadow-2xl"
          >
            <img
              src={dovydasBanner}
              alt="Dovydas Radzius - Nekilnojamojo turto profesionalas"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-lg md:text-xl font-bold mb-2">Dovydas Radzius</h3>
            <p className="text-gray-400 mb-4 text-sm md:text-base">Nekilnojamojo turto brokeris</p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs md:text-sm text-gray-400">
              <span>+370 634 47925</span>
              <span className="hidden sm:inline">•</span>
              <span>Vytauto g. 42, Šiauliai</span>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-800 text-xs md:text-sm text-gray-500">
              © 2025 Dovydas Radzius. Visos teisės saugomos.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

