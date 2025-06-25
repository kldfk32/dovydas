import '../App.css'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { ArrowLeft, MapPin, Building, Calendar, Euro, Phone, Mail, Shield, Car, Snowflake } from 'lucide-react'
import { motion } from 'framer-motion'
import projectImage from '../assets/project_2_siauliai_office.jpeg'

function ProjectSiauliai({ onBack }) {
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
              Ofisas Šiauliuose
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
                  alt="Jaukus ofisas Šiauliuose"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Nuomojamas
                </div>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Ofisas
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Jaukus ofisas Šiauliuose
              </h1>
              <div className="flex items-center text-gray-600 mb-6">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Gytarių g. 24, Šiauliai</span>
              </div>
              
              <div className="text-3xl font-bold text-primary mb-2">80€/mėn.</div>
              <div className="text-sm text-gray-600 mb-6">+ 20€ komunaliniai mokesčiai</div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary">11</div>
                    <div className="text-sm text-gray-600">kv.m.</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary">1</div>
                    <div className="text-sm text-gray-600">darbo vieta</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Shield className="h-6 w-6 text-primary mx-auto mb-1" />
                    <div className="text-sm text-gray-600">24/7 apsauga</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Car className="h-6 w-6 text-primary mx-auto mb-1" />
                    <div className="text-sm text-gray-600">Parkavimas</div>
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
                  <CardTitle>Apie ofisą</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Nuomojamas nedidelis, jaukus ir saugus ofisas – puikiai tinkantis ramiam darbui, 
                    pietinėje Šiaulių miesto dalyje, Gytarių mikrorajone.
                  </p>
                  <p className="text-gray-600">
                    Patalpos puikiai tiktų administracinei veiklai ar tiems, kurie ieško ramios ir saugios 
                    vietos darbui. Ofise įrengta viena darbo vieta: rašomasis stalas su patogia kėde, 
                    taip pat yra sofa, kurioje patogiai gali įsitaisyti klientai ar svečiai.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Privalumai</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <Shield className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Saugi aplinka</p>
                          <p className="text-sm text-gray-600">24/7 apsauga ir vaizdo stebėjimas</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Car className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Parkavimas</p>
                          <p className="text-sm text-gray-600">Vieta automobiliui ir patogus privažiavimas</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Snowflake className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Kondicionierius</p>
                          <p className="text-sm text-gray-600">Naujas Gree kondicionierius su šildymu</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <Building className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Sandėliukai</p>
                          <p className="text-sm text-gray-600">Galimybė naudotis saugomais sandėliukais</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Gera lokacija</p>
                          <p className="text-sm text-gray-600">Šalia sporto klubas, SPA kompleksas</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Bendra informacija</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Adresas:</span>
                      <span className="font-medium">Gytarių g. 24</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Plotas:</span>
                      <span className="font-medium">11 kv.m.</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Šildymas:</span>
                      <span className="font-medium">Elektra</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Kondicionierius:</span>
                      <span className="font-medium">Gree</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Nuomos kaina:</span>
                      <div className="text-right">
                        <div className="font-bold text-primary">80€/mėn.</div>
                        <div className="text-sm text-gray-600">+ 20€ komunaliniai</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Kaimynystė</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Daiktų ir automobilių saugojimo aikštelė „Energy Box"</li>
                    <li>• Sporto klubas „Energy gym"</li>
                    <li>• Pirties ir Spa kompleksas „Spa Šiauliai"</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Susisiekite su brokeriumi</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-medium">Dovydas Radzius</p>
                    <p className="text-sm text-gray-600">Nekilnojamojo turto profesionalas</p>
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
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectSiauliai

