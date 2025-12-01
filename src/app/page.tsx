import { Suspense } from "react";
import HomePage from "./home-page";

// This is a Server Component that suspends a Client Component.
export default function Page() {
  return (
    // The Suspense boundary is needed for useSearchParams() in the Client Component.
    <Suspense>
      <HomePage />
    </Suspense>
  );
}