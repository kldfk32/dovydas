import '../App.css'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { ArrowLeft, MapPin, Home, Calendar, Euro, Phone, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import projectImage from '../assets/project_1_plunge_apartment.jpeg'

function ProjectPlunge({ onBack }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            <Button variant="ghost" onClick={onBack} className="mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Grįžti
            </Button>
            <div className="text-xl font-bold text-primary">
              Butas Plungėje
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-8 items-start"
          >
            <div>
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl mb-6">
                <img
                  src={projectImage}
                  alt="1 kambario butas Plungėje"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Parduodamas
                </div>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Bendrabutinio tipo
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                1 kambario butas Plungėje
              </h1>
              <div className="flex items-center text-gray-600 mb-6">
                <MapPin className="h-5 w-5 mr-2" />
                <span>A. Vaišvilos g. 33, Plungė</span>
              </div>
              
              <div className="text-3xl font-bold text-primary mb-6">6,900€</div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary">17.73</div>
                    <div className="text-sm text-gray-600">kv.m.</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary">5/5</div>
                    <div className="text-sm text-gray-600">aukštas</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary">1967</div>
                    <div className="text-sm text-gray-600">metai</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary">6.8</div>
                    <div className="text-sm text-gray-600">kv.m. rūsys</div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <Button size="lg" className="w-full">
                  <Phone className="h-4 w-4 mr-2" />
                  Skambinti +370 634 47925
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  <Mail className="h-4 w-4 mr-2" />
                  Siųsti žinutę
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Apie butą</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Parduodamas bendrabutinio tipo, 1 kambario butas, bendras plotas – 17.73 kv.m., 
                    penktame aukšte iš penkių, A. Vaišvilos g. 33 Plungė.
                  </p>
                  <div>
                    <h4 className="font-semibold mb-2">Buto ypatybės:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Butas pilnai paruoštas remontui (nuimti tapetai, laminatas, išneštos visos šiukšlės)</li>
                      <li>• Įdėtas dviejų dalių plastikinis langas</li>
                      <li>• Galima lengvai atsivesti miesto vandenį ir nuotekas</li>
                      <li>• Paliekama supakuota santechnika (kriauklė, unitazas)</li>
                      <li>• Bendro naudojimosi patalpos (virtuvė, tualetas, dušas)</li>
                      <li>• Yra bendras balkonas</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Apie namą</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-gray-600">
                    <li>• 1967 metų statybos, mūrinis</li>
                    <li>• Butas penktame aukšte</li>
                    <li>• Butui priklauso rūsys, 6.80 kv.m</li>
                    <li>• Namo kieme automobilių parkavimo aikštelė</li>
                    <li>• Šalia viešojo transporto stotelė</li>
                    <li>• Patogus susisiekimas su bet kuria miesto dalimi</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Lokalizacija</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm">A. Vaišvilos g. 33, Plungė</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Šalia esantys objektai:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Plungės lopšelis-darželis „Pasaka"</li>
                      <li>• Plungės lopšelis-darželis „Raudonkepuraitė"</li>
                      <li>• Plungės akademiko Adolfo Jucio pagrindinė mokykla</li>
                      <li>• Plungės „Ryto" pagrindinė mokykla</li>
                      <li>• Prekybos centrai ir parduotuvės</li>
                      <li>• Gydymo įstaigos</li>
                      <li>• Kavinės ir sporto klubai</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Susisiekite su brokeriumi</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-medium">Dovydas Radzius</p>
                    <p className="text-sm text-gray-600">Nekilnojamojo turto brokeris</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="text-sm">+370 634 47925</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-sm">Vytauto g. 42, Šiauliai</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">
                    Nekilnojamojo turto agentūra „DU PROCENTAI" 2%, nemokamai suteikia 
                    profesionalią pagalbą bei konsultacijas visais nekilnojamojo turto klausimais.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectPlunge

