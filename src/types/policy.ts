export interface Destination {
  code: string;
  name: string;
}

export interface Policy {
  policyNumber: string;
  policyStart: string;
  policyEnd: string;
  primaryTravellerFirstname: string;
  primaryTravellerLastName: string;
  status: string;
  destinations: Destination[];
  type: "Single Trip" | "Annual";
  excess: number;
  maxTripDuration: number;
  planName: string;
}