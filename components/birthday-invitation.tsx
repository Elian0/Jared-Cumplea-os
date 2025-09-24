"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin } from "lucide-react"

export function BirthdayInvitation() {
  const [isRSVPed, setIsRSVPed] = useState(false)
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2025-09-28T15:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleRSVP = () => {
    setIsRSVPed(true)
  }

  const toggleMusic = () => {
    const audio = document.getElementById("background-music") as HTMLAudioElement
    if (audio) {
      if (isMusicPlaying) {
        audio.pause()
        setIsMusicPlaying(false)
      } else {
        audio.play().catch((error) => {
          console.log("Audio no disponible:", error)
          // Si no hay archivo de audio válido, solo cambiamos el estado visual
          setIsMusicPlaying(false)
        })
        setIsMusicPlaying(true)
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/10 relative overflow-hidden">
      {
      <audio id="background-music" loop preload="auto" className="hidden">
        <source src="/paw-patrol-theme.mp3" type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>
      }

      <button
        onClick={toggleMusic}
        className="fixed top-4 right-4 z-50 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors"
        aria-label={isMusicPlaying ? "Pausar música" : "Reproducir música"}
        title="Música (agregar archivo de audio en /public/)"
      >
        <span className="text-white text-lg">{isMusicPlaying ? "🔊" : "🔇"}</span>
      </button>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">🐾</span>
          </div>
        </div>
        <div className="absolute top-40 right-20 animate-bounce-gentle">
          <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
            <span className="text-white text-xs">⭐</span>
          </div>
        </div>
        <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: "1s" }}>
          <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
            <span className="text-white text-sm">🚔</span>
          </div>
        </div>
        <div className="absolute top-60 left-1/3 animate-paw-wiggle" style={{ animationDelay: "2s" }}>
          <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white text-xs">🐕</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 text-lg px-6 py-2">
              {"¡Estás Invitado!"}
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold text-balance mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              PAW PATROL
            </h1>
            <p className="text-2xl font-semibold text-primary mb-4">CUMPLEAÑOS</p>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-1 bg-primary rounded-full"></div>
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-white text-sm">🐾</span>
              </div>
              <div className="w-16 h-1 bg-accent rounded-full"></div>
            </div>
          </div>

          <Card className="mb-8 shadow-2xl border-0 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-2">Ezequiel Jared Mejia Perez</h2>
                    <p className="text-2xl text-muted-foreground mb-4">{"Cumple 2 años"}</p>
                    <p className="text-lg text-balance leading-relaxed">
                      {
                        "¡Ven a celebrar con los cachorros de Paw Patrol! Habrá juegos, música, pastel delicioso y muchas aventuras. ¡Será una misión súper divertida!"
                      }
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                      <Calendar className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold">Domingo, 27 de Septiembre</p>
                        <p className="text-sm text-muted-foreground">2025</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                      <Clock className="w-5 h-5 text-accent" />
                      <div>
                        <p className="font-semibold">3:00 PM - 8:00 PM</p>
                        <p className="text-sm text-muted-foreground"> 5 horas de aventuras</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                      <MapPin className="w-5 h-5 text-secondary" />
                      <div>
                        <p className="font-semibold">Salon de Eventos</p>
                        <p className="text-sm text-muted-foreground">Calle Arica entre Arce y San Felipe</p>
                        <button
                          onClick={() => window.open("https://maps.app.goo.gl/1dNEGDwDkQm6zfmi7", "_blank")}
                          className="text-xs text-primary hover:text-primary/80 underline mt-1"
                        >
                          Ver en Google Maps
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-64 h-64 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-full flex items-center justify-center animate-bounce-gentle">
                      <img src="/Image/paw1.png" alt="Imagen de Paw Patrol" className="w-32 h-32" />
                    </div>
                    <div className="absolute -top-4 -right-4 animate-float">
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-secondary-foreground">2</span>
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -left-2 animate-paw-wiggle">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">🐾</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8 shadow-2xl border-0 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-center mb-6 text-primary">¡Cuenta Regresiva para la Aventura!</h3>
              <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5">
                  <div className="text-3xl font-bold text-primary">{timeLeft.days}</div>
                  <div className="text-sm text-muted-foreground">Días</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-accent/10 to-accent/5">
                  <div className="text-3xl font-bold text-accent">{timeLeft.hours}</div>
                  <div className="text-sm text-muted-foreground">Horas</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-secondary/10 to-secondary/5">
                  <div className="text-3xl font-bold text-secondary">{timeLeft.minutes}</div>
                  <div className="text-sm text-muted-foreground">Minutos</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5">
                  <div className="text-3xl font-bold text-primary">{timeLeft.seconds}</div>
                  <div className="text-sm text-muted-foreground">Segundos</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8 shadow-xl border-0 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold text-center mb-8 text-primary">{"¿Qué aventuras tendremos?"}</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚔</span>
                  </div>
                  <h4 className="font-bold text-lg mb-2">Misiones de Rescate</h4>
                  <p className="text-sm text-muted-foreground">Juegos divertidos como los cachorros</p>
                </div>

                <div className="text-center p-6 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎵</span>
                  </div>
                  <h4 className="font-bold text-lg mb-2">Canciones de Paw Patrol</h4>
                  <p className="text-sm text-muted-foreground">Cantaremos y bailaremos juntos</p>
                </div>

                <div className="text-center p-6 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/5">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎂</span>
                  </div>
                  <h4 className="font-bold text-lg mb-2">Pastel de Paw Patrol</h4>
                  <p className="text-sm text-muted-foreground">Delicioso pastel temático</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-0 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary">{"¡Confirma tu Asistencia!"}</h3>
              <p className="text-muted-foreground mb-6 text-balance">
                {"Por favor confirma antes del 28 de Septiembre para preparar todo perfectamente"}
              </p>

              {!isRSVPed ? (
                <div className="space-y-4">
                  <Button
                    onClick={handleRSVP}
                    size="lg"
                    className="text-lg px-8 py-3 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transform hover:scale-105 transition-all duration-200"
                  >
                    {"¡Sí, Asistiré! 🐾"}
                  </Button>
                  <p className="text-sm text-muted-foreground">{"Contacta a Milton o Mayra para confirmar"}</p>
                </div>
              ) : (
                <div className="space-y-4">
                    <div className="flex justify-center">
                    <img src="/Image/paw3.png" alt="Perro" className="w-24 h-24 animate-bounce-gentle" />
                    </div>
                  <h4 className="text-xl font-bold text-primary">{"¡Genial! Te esperamos"}</h4>
                  <p className="text-muted-foreground">{"Gracias por confirmar. ¡Será una aventura increíble!"}</p>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="text-center mt-12 space-y-4">
            <div className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-xs">🐾</span>
              </div>
              <p className="text-muted-foreground">{"Con amor, Milton, Mayra y Jared"}</p>
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-xs">🐾</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{"¡No olvides traer tu mejor sonrisa de cachorro!"}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
