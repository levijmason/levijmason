import { Spinner } from "@nextui-org/spinner";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="flex flex-col min-h-screen content-center">
      <Spinner label="Loading..." size="lg" />
    </div>
  );
}
