import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FlagLog — Automatic Changelog from Feature Flag Changes',
  description: 'Monitor feature flag services and auto-generate user-facing changelogs. Connect LaunchDarkly, Split, and more in minutes.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5b10762f-cb2d-429e-bd95-b6d482698d97"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
