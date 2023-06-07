import Head from "next/head"
import Image from "next/image"

export default function Cadastro(){
    return(
        <>
        <Head>
            <title>Titulo aqui!</title>
        </Head>
            <p>Página de cadastro</p>
            <Image src="/next.svg" height={100} width={100}  alt="Imagem">

            </Image>
        </>
    )
}