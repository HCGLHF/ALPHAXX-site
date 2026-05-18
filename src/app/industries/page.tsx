import { HubRoute, hubMetadata } from "@/lib/hub-page-route";

export const metadata = hubMetadata("/industries");

export default function Page() {
  return <HubRoute path="/industries" />;
}
