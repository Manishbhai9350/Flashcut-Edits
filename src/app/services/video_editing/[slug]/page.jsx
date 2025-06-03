import { StaticRoutes } from "../data/staticRoutes";
import VideoClient from "../components/VideoClient";

export async function generateStaticParams() {
  return StaticRoutes.map((slug) => ({ slug }));
}

export default function Page({ params }) {
  return <VideoClient params={params} />;
}
