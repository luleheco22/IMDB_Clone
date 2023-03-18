import { NextPage } from "next";
import { useRouter } from "next/router";

const Custom404: NextPage = () => {
  const router = useRouter();

  return (
    <div className="text-center">
      <h1 className="text-amber-400">404 - Página no encontrada</h1>
      <button
      className="hover:text-amber-600"
      onClick={() => router.push("/")}>Volver a la página de inicio</button>
    </div>
  );
};

export default Custom404;