"use client"

import { useState } from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { MenuIcon } from 'lucide-react'

export function SidebarFilters() {
  const [isOpen, setIsOpen] = useState(false)
  const [filters, setFilters] = useState({
    nombre: '',
    industria: '',
    empleadosMin: 0,
    empleadosMax: 1000
  })

  const handleFilterChange = (key: string, value: string | number) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const handleApplyFilters = () => {
    console.log('Filtros aplicados:', filters)
    // Aquí iría la lógica para aplicar los filtros
    setIsOpen(false)
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="fixed top-4 left-4 z-50" aria-label="Abrir filtros">
          <MenuIcon className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Filtros de búsqueda</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="nombre">Nombre de la empresa</Label>
            <Input
              id="nombre"
              value={filters.nombre}
              onChange={(e) => handleFilterChange('nombre', e.target.value)}
              placeholder="Buscar por nombre"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="industria">Industria</Label>
            <Input
              id="industria"
              value={filters.industria}
              onChange={(e) => handleFilterChange('industria', e.target.value)}
              placeholder="Filtrar por industria"
            />
          </div>
          <div className="space-y-2">
            <Label>Número de empleados</Label>
            <Slider
              min={0}
              max={1000}
              step={50}
              value={[filters.empleadosMin, filters.empleadosMax]}
              onValueChange={(value) => {
                handleFilterChange('empleadosMin', value[0])
                handleFilterChange('empleadosMax', value[1])
              }}
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{filters.empleadosMin}</span>
              <span>{filters.empleadosMax}</span>
            </div>
          </div>
          <Button onClick={handleApplyFilters}>Aplicar filtros</Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

