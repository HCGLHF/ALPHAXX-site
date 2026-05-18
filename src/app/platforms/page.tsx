import { HubRoute, hubMetadata } from "@/lib/hub-page-route";

export const metadata = hubMetadata("/platforms");

export default function Page() {
  return <HubRoute path="/platforms" />;
}
