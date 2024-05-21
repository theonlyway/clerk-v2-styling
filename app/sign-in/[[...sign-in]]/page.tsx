import { SignIn } from "@clerk/nextjs";
export default function Page() {
  return (
    <div className="mt-4 flex justify-center">
      <SignIn
        appearance={{
          elements: {
            card: "bg-red-500",
            footer: "bg-blue-500",
            footerAction: "bg-green-500",
          },
        }}
      />
    </div>
  );
}
