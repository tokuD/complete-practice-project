import { ErrorProvider, MemberProvider, ModalProvider } from '@/providers'
import './globals.css'
import type { Metadata } from 'next'
import { Modal } from '@/components'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ModalProvider>
        <MemberProvider>
          <ErrorProvider>
            <body className="bg-black">
              <Modal />
              {children}
            </body>
          </ErrorProvider>
        </MemberProvider>
      </ModalProvider>
    </html>
  )
}
