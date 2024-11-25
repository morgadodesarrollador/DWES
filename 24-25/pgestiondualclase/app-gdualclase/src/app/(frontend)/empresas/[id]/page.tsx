import { notFound } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Simulación de datos de empresas (en una aplicación real, esto vendría de una base de datos o API)
const empresas = [
  { id: 1, nombre: "TechCorp", industria: "Tecnología", empleados: 500, descripcion: "Innovación en software y hardware", fundacion: 2005, sede: "Silicon Valley, CA", ingresos: "$50M" },
  { id: 2, nombre: "GreenEnergy", industria: "Energía", empleados: 300, descripcion: "Soluciones de energía renovable", fundacion: 2010, sede: "Austin, TX", ingresos: "$30M" },
  { id: 3, nombre: "HealthPlus", industria: "Salud", empleados: 1000, descripcion: "Servicios médicos avanzados", fundacion: 1995, sede: "Boston, MA", ingresos: "$100M" },
  { id: 4, nombre: "EduLearn", industria: "Educación", empleados: 150, descripcion: "Plataforma de aprendizaje en línea", fundacion: 2015, sede: "New York, NY", ingresos: "$15M" },
  { id: 5, nombre: "FinanceGrow", industria: "Finanzas", empleados: 400, descripcion: "Soluciones financieras innovadoras", fundacion: 2008, sede: "Chicago, IL", ingresos: "$75M" },
  { id: 6, nombre: "EcoFoods", industria: "Alimentación", empleados: 250, descripcion: "Productos orgánicos y sostenibles", fundacion: 2012, sede: "Portland, OR", ingresos: "$40M" },
]

export default function EmpresaDetalle({ params }: { params: { id: string } }) {
  const empresa = empresas.find(e => e.id === parseInt(params.id))

  if (!empresa) {
    notFound()
  }

  return (
    <div className="max-w-3xl mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">{empresa.nombre}</CardTitle>
          <CardDescription>{empresa.industria}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg">{empresa.descripcion}</p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Fundación</h3>
              <p>{empresa.fundacion}</p>
            </div>
            <div>
              <h3 className="font-semibold">Sede</h3>
              <p>{empresa.sede}</p>
            </div>
            <div>
              <h3 className="font-semibold">Empleados</h3>
              <Badge>{empresa.empleados}</Badge>
            </div>
            <div>
              <h3 className="font-semibold">Ingresos Anuales</h3>
              <p>{empresa.ingresos}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

