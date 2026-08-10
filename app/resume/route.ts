import { redirect } from "next/navigation";

export async function GET() {
  redirect("/resume/krishdshah_cv.pdf");
}
