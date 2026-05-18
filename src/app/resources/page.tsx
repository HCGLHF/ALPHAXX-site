import { HubRoute, hubMetadata } from "@/lib/hub-page-route";

export const metadata = hubMetadata("/resources");

export default function Page() {
  return <HubRoute path="/resources" />;
}
