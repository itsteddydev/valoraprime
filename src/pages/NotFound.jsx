import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="max-w-md w-full text-center">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">404 - Página no encontrada</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            La página que buscas no existe o fue movida.
          </p>
          <Button onClick={() => navigate("/")} className="w-full">
            Volver al inicio
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
