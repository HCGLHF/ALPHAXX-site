import { HubRoute, hubMetadata } from "@/lib/hub-page-route";

export const metadata = hubMetadata("/buyers");

export default function Page() {
  return <HubRoute path="/buyers" />;
}
