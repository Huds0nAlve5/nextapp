import Link from 'next/link'

export default function RootLayout({children}){
    return(
        <>
        {children}
        <Link href="/">Home</Link>
        <Link href="/relatorio/produto">Relatório</Link>
        </>
    )
}