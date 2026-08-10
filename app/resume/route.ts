import { redirect } from "next/navigation";

export async function GET() {
  // Redirect to Google Drive link. Default to a placeholder if not yet provided.
  redirect("https://drive.google.com/drive/folders/placeholder-id");
}
