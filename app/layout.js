import './globals.css'

export const metadata = {
  title: 'Sreeshanth Butti - AI/ML Developer Portfolio',
  description: 'Professional portfolio of Sreeshanth Butti, AI/ML enthusiast and NTT DATA intern specializing in Deep Learning, NLP, and Speech Processing.',
  keywords: 'AI, ML, Deep Learning, NLP, LLMs, Speech Processing, Python, React',
  openGraph: {
    title: 'Sreeshanth Butti - AI/ML Developer',
    description: 'AI/ML specialist with expertise in Deep Learning, NLP, and real-time systems',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  )
}
