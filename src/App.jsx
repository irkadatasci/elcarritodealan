import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog.jsx'
import { ShoppingCart, MessageCircle, Star, Heart, Truck, Clock, Phone, MapPin, Calendar, CheckCircle } from 'lucide-react'
import './App.css'

// Importar imágenes
import mandarinaImg from './assets/images/Yz3k62NSjXi0.jpg'
import frutillaImg from './assets/images/uttIZZT9A90G.jpg'
import frambuesaImg from './assets/images/sm6lhd9aoSIY.jpg'
import arandanoImg from './assets/images/rCEvGfeVo9OB.jpg'
import alcachofaImg from './assets/images/xbhCBHJkTm3N.jpg'
import champignonImg from './assets/images/mqP8VsBATY1r.jpg'
import tomateCherryImg from './assets/images/FBIHU8siXAjd.jpg'
import tomatePomarolaImg from './assets/images/FaoNaYo3zK9C.jpg'
import paltaImg from './assets/images/xfzTCmTceUwd.webp'
import aceitunaVerdeImg from './assets/images/gF0mEkviQXHA.jpg'
import aceitunaRellenaImg from './assets/images/KNe1jdEL9okI.webp'

function App() {
  const [mensaje, setMensaje] = useState('')
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const productos = [
    { nombre: 'Mandarinas', imagen: mandarinaImg, precio: 'Consultar' },
    { nombre: 'Frutillas', imagen: frutillaImg, precio: 'Consultar' },
    { nombre: 'Frambuesas', imagen: frambuesaImg, precio: 'Consultar' },
    { nombre: 'Arándanos', imagen: arandanoImg, precio: 'Consultar' },
    { nombre: 'Alcachofas', imagen: alcachofaImg, precio: 'Consultar' },
    { nombre: 'Champignones', imagen: champignonImg, precio: 'Consultar' },
    { nombre: 'Tomates Cherry', imagen: tomateCherryImg, precio: 'Consultar' },
    { nombre: 'Tomates Pomarola', imagen: tomatePomarolaImg, precio: 'Consultar' },
    { nombre: 'Paltas Hass', imagen: paltaImg, precio: 'Consultar' },
    { nombre: 'Aceitunas Verdes', imagen: aceitunaVerdeImg, precio: 'Consultar' },
    { nombre: 'Aceitunas Rellenas', imagen: aceitunaRellenaImg, precio: 'Consultar' }
  ]

  const enviarWhatsApp = () => {
    const numeroWhatsApp = '+56950001111'
    const mensajeCompleto = `¡Hola Alan! ${mensaje}`
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeCompleto)}`
    window.open(url, '_blank')
    setIsDialogOpen(false)
    setMensaje('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="animate-bounce-in">
            <ShoppingCart className="mx-auto mb-6 h-16 w-16 text-white drop-shadow-lg" />
            <h1 className="mb-4 text-5xl font-bold tracking-tight drop-shadow-lg md:text-6xl">
              El Carrito de Alan
            </h1>
            <p className="mb-8 text-xl font-medium drop-shadow-md md:text-2xl">
              Frutas y verduras frescas que huelen a naranja recién partida y suenan a "¡buen día!"
            </p>
            <p className="mb-8 text-lg opacity-90">
              La confianza se construye casa por casa
            </p>
            
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  className="bg-white text-orange-600 hover:bg-orange-50 hover:text-orange-700 font-bold text-lg px-8 py-4 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  ¡Hacer mi pedido!
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-orange-600 text-xl font-bold">
                    ¡Hola! Cuéntame qué necesitas
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <Textarea
                    placeholder="Escribe aquí tu consulta o pedido... ¿Qué frutas y verduras te gustaría recibir hoy?"
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    className="min-h-[100px] border-orange-200 focus:border-orange-400"
                  />
                  <Button 
                    onClick={enviarWhatsApp}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg"
                    disabled={!mensaje.trim()}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Enviar por WhatsApp
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-1 left-0 w-full">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 fill-orange-50">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Productos Section */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Nuestros Productos Frescos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Seleccionamos cuidadosamente cada fruta y verdura para llevarte lo mejor de la naturaleza directamente a tu puerta
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productos.map((producto, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-orange-100 hover:border-orange-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={producto.imagen} 
                      alt={producto.nombre}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-gray-800 mb-2">{producto.nombre}</h3>
                    <p className="text-orange-600 font-semibold">{producto.precio}</p>
                    <div className="flex items-center mt-2 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo hacer un pedido Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Cómo hacer un pedido
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Es muy fácil recibir productos frescos en tu hogar
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600 transition-colors duration-300">
                <MessageCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">1. Escríbeme</h3>
              <p className="text-gray-600">
                Haz clic en el botón "¡Hacer mi pedido!" y cuéntame qué frutas y verduras necesitas
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors duration-300">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">2. Coordino contigo</h3>
              <p className="text-gray-600">
                Te confirmo disponibilidad, precios y coordinamos el horario de entrega que más te convenga
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">3. Llego a tu puerta</h3>
              <p className="text-gray-600">
                Llevo tu pedido directamente a tu casa con mi carrito, productos frescos y una sonrisa
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Alan Section */}
      <section className="py-20 bg-gradient-to-r from-orange-100 to-yellow-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              Conoce a Alan
            </h2>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-orange-500 text-white rounded-full w-20 h-20 flex items-center justify-center">
                  <Heart className="h-10 w-10" />
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Soy Alan, un emprendedor de 30 años que recorre las calles con mi carrito lleno de las frutas y verduras más frescas. 
                Mi pasión es llevar productos de calidad directamente a tu hogar, construyendo relaciones de confianza casa por casa.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Cada mañana selecciono cuidadosamente cada producto pensando en ti y tu familia. 
                Mi carrito no solo lleva frutas y verduras, lleva el compromiso de brindarte lo mejor con una sonrisa y un cálido "¡buen día!"
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                <span className="bg-orange-100 px-4 py-2 rounded-full">✨ Productos frescos</span>
                <span className="bg-green-100 px-4 py-2 rounded-full">🚚 Entrega a domicilio</span>
                <span className="bg-blue-100 px-4 py-2 rounded-full">💝 Atención personalizada</span>
                <span className="bg-yellow-100 px-4 py-2 rounded-full">🤝 Confianza garantizada</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zonas de Reparto y Horarios Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Zonas de Reparto y Horarios
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conoce las zonas donde llego con mi carrito y los horarios de entrega disponibles
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Zonas de Reparto */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Zonas de Reparto</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <div>
                    <p className="font-semibold text-gray-800">Centro Histórico</p>
                    <p className="text-sm text-gray-600">Plaza de Armas, Catedral, Mercado Central</p>
                  </div>
                </div>
                
                <div className="flex items-center p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <div>
                    <p className="font-semibold text-gray-800">Barrio Norte</p>
                    <p className="text-sm text-gray-600">Av. Principal, Parque Norte, Residencial Los Pinos</p>
                  </div>
                </div>
                
                <div className="flex items-center p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <div>
                    <p className="font-semibold text-gray-800">Zona Sur</p>
                    <p className="text-sm text-gray-600">Villa del Sol, Conjunto Habitacional, Av. Sur</p>
                  </div>
                </div>
                
                <div className="flex items-center p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <div>
                    <p className="font-semibold text-gray-800">Barrio Universitario</p>
                    <p className="text-sm text-gray-600">Campus, Residencias Estudiantiles, Zona Comercial</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                <p className="text-sm text-orange-700">
                  <strong>¿Tu zona no está listada?</strong> ¡Escríbeme! Estoy expandiendo mis rutas constantemente.
                </p>
              </div>
            </div>
            
            {/* Horarios de Entrega */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <Calendar className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Horarios de Entrega</h3>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 pl-4 py-2">
                  <h4 className="font-bold text-gray-800 mb-2">Lunes a Viernes</h4>
                  <div className="space-y-1 text-gray-600">
                    <p>🌅 <strong>Mañana:</strong> 7:00 AM - 11:00 AM</p>
                    <p>🌞 <strong>Tarde:</strong> 2:00 PM - 6:00 PM</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <h4 className="font-bold text-gray-800 mb-2">Sábados</h4>
                  <div className="space-y-1 text-gray-600">
                    <p>🌅 <strong>Mañana:</strong> 8:00 AM - 12:00 PM</p>
                    <p>🌞 <strong>Tarde:</strong> 3:00 PM - 7:00 PM</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h4 className="font-bold text-gray-800 mb-2">Domingos</h4>
                  <div className="space-y-1 text-gray-600">
                    <p>🌅 <strong>Solo mañanas:</strong> 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <div className="p-3 bg-yellow-50 rounded-lg">
                  <p className="text-sm text-yellow-700 flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <strong>Tiempo de entrega:</strong> 30-45 minutos desde confirmación
                  </p>
                </div>
                
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-700 flex items-center">
                    <Truck className="h-4 w-4 mr-2" />
                    <strong>Pedido mínimo:</strong> $15.000 para entrega a domicilio
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Información adicional */}
          <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Cómo coordinar tu entrega?</h3>
            <p className="text-lg text-gray-600 mb-6">
              Al hacer tu pedido, coordinamos juntos el mejor horario según tu disponibilidad y mi ruta del día
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <MessageCircle className="h-8 w-8 text-orange-600" />
                </div>
                <p className="font-semibold text-gray-800">Pedido por WhatsApp</p>
                <p className="text-sm text-gray-600">Me escribes con tu lista</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-8 w-8 text-green-600" />
                </div>
                <p className="font-semibold text-gray-800">Coordinamos horario</p>
                <p className="text-sm text-gray-600">Elegimos la mejor hora</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Truck className="h-8 w-8 text-blue-600" />
                </div>
                <p className="font-semibold text-gray-800">Entrega puntual</p>
                <p className="text-sm text-gray-600">Llego a tu puerta</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            ¿Listo para recibir productos frescos?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Haz tu pedido ahora y disfruta de la frescura que llega hasta tu puerta
          </p>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-orange-50 hover:text-orange-700 font-bold text-xl px-12 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="mr-3 h-6 w-6" />
                ¡Contactar a Alan ahora!
              </Button>
            </DialogTrigger>
          </Dialog>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <ShoppingCart className="mx-auto h-12 w-12 text-orange-400 mb-4" />
            <h3 className="text-2xl font-bold">El Carrito de Alan</h3>
            <p className="text-gray-400 mt-2">Frutas y verduras frescas a tu puerta</p>
          </div>
          
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400">
              © 2024 El Carrito de Alan. La confianza se construye casa por casa.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              WhatsApp: +56 9 5000 1111
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

