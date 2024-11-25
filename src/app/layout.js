import './globals.css'

export const metadata = {
  title: 'Under Construction',
  description: 'Our website is coming soon',
}

export default function UnderConstructionLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head />
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}