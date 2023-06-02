import { NOTFOUND_METADATA } from "@/constants"
import { notFound } from "next/navigation"

export const metadata = NOTFOUND_METADATA

export default function NotFoundCatchAll() {
  notFound()
}
