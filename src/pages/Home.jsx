import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    { id: 1, title: "Calcular mi tarifa", description: "Icono de reloj", icon: "⏱️", link: "/calculateprice" },
    { id: 2, title: "Registrar finanzas", description: "Icono de lápiz", icon: "✏️", link: "/registerfinances" },
    { id: 3, title: "Ver progreso", description: "Icono de gráfico de barras", icon: "📊", link: "/viewprogress" },
    { id: 4, title: "Configurar metas", description: "Icono de bandera", icon: "🚩", link: "/setgoals" },
  ];

  const movimientos = [
    { id: 1, concepto: "Pago de alquiler", fecha: "Enero 2022", monto: -1000 },
    { id: 2, concepto: "Ingreso nómina", fecha: "Febrero 2022", monto: 2500 },
  ];

  const metasAlcanzadas = 70; // Porcentaje de ahorro alcanzado.

  return (
    <div className="px-3 space-y-4">
      <Label className="text-xl font-semibold">Funcionalidades Clave</Label>
      {/* <br className='pb-4' /> */}
      <div className="grid grid-cols-2 gap-4">
        {features.map((feature) => (
          <Link to={feature.link} key={feature.id} className="block">
            <Card key={feature.id} className="shadow-md">
              <CardHeader className="flex flex-col items-center justify-center">
                <div className="text-3xl mb-2">{feature.icon}</div>
                <CardTitle className="text-center text-xs font-semibold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
      {/* <br /> */}
      { /* Historial de Movimientos */}
      <div>
        <Label className="text-xl font-semibold">Historial de Movimientos</Label>
        <div className="mt-4 space-y-2">
          {movimientos.map((mov) => (
            <Card key={mov.id} className="shadow-sm">
              <CardContent className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium">{mov.concepto}</p>
                  <p className="text-xs text-muted-foreground">{mov.fecha}</p>
                </div>
                <p
                  className={`text-sm font-bold ${mov.monto < 0 ? "text-red-500" : "text-green-500"
                    }`}
                >
                  {mov.monto < 0 ? "-" : "+"}${Math.abs(mov.monto)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Bienvenida y Acciones */}
      <div className="space-y-4">
        <Card className="shadow-md">
          <CardContent>
            <h2 className="text-lg font-bold">¡Bienvenido a Valora Prime!</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Calcula tu tiempo, gestiona tus finanzas y alcanza tus metas.
            </p>
            <Button className="mt-4">Comenzar ahora</Button>
          </CardContent>
        </Card>
        <div className="flex space-x-4">
          <Button variant="outline" className="w-full">
            Guardar Cálculo
          </Button>
          <Button className="w-full">Calcular Tarifa</Button>
        </div>
      </div>

      {/* Metas Alcanzadas */}
      <div>
        <Label className="text-xl font-semibold">Metas alcanzadas</Label>
        <div className="mt-4">
          <p className="text-sm mb-2">Ahorro mensual</p>
          <Progress value={metasAlcanzadas} className="w-full" />
          <p className="text-sm mt-2">{metasAlcanzadas}% completado. ¡Sigue así!</p>
        </div>
      </div>

      {/* Buscador de Movimientos */}
      <div>
        <Input
          type="text"
          placeholder="Buscar movimientos"
          className="mt-4 w-full"
        />
      </div>
    </div>

  );
};

export default Home;
