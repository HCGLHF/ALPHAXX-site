import { HubRoute, hubMetadata } from "@/lib/hub-page-route";

export const metadata = hubMetadata("/locations");

export default function Page() {
  return <HubRoute path="/locations" />;
}
