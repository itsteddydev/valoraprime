import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";

const NotFound = () => {
  const { t, i18n } = useTranslation(["notFound"]);
  const navigate = useNavigate();

  // const texts = {
  //   title: "¡Ups! No encontramos esa página",
  //   description: "Parece que te has perdido, pero no te preocupes. ¡Vamos de vuelta a la acción!",
  //   buttonText: "Volver atrás",
  //   imageAlt: "Imagen divertida de un personaje",
  //   imageUrl: "/what-are-you-doing-here-brad-boimler.gif",
  // };

  return (
    <Suspense fallback="loading...">
      <div className="flex items-center justify-center h-screen">
        <Card className="max-w-md w-full text-center">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">{t("title")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <img
                src={t("imageUrl")}
                alt={t("imageAlt")}
                className="mx-auto rounded-lg shadow-lg"
              />
            </div>
            <p className="text-muted-foreground mb-4">
              {t("description")}
            </p>
            <Button onClick={() => navigate(-1)} className="w-full">
              {t("buttonText")}
            </Button>
          </CardContent>
        </Card>
      </div>
    </Suspense>
  );
};

export default NotFound;
