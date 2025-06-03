import { StaticRoutes } from "../data/staticRoutes";
import GraphicsClient from "../components/GraphicsClient";

export async function generateStaticParams() {
  return StaticRoutes.map((slug) => ({ slug }));
}

export default function Page({ params }) {
  return <GraphicsClient params={params} />;
}


