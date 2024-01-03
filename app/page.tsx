import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import LoginButton from "@/components/auth/loginButton";

const PoppinsFont = Poppins({ subsets: ["latin"], weight: ["600"] });

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center  bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-200 to-blue-200 ">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-5xl font-semibold drop-shadow-md",
            PoppinsFont.className,
          )}
        >
          🔐 Auth
        </h1>
        <p className="text-lg">Testing Simple Auth stuff</p>
        <LoginButton>
          <Button variant="secondary" size="lg">
            Sign in
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
