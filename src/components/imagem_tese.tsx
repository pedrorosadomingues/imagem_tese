export default function ImagemTese(): JSX.Element {
    return (
        <div className="border-[#000] border border-solid border-gray-300 p-4 flex justify-center items-center w-[70%] text-[12px]">
            <div className="w-[50%] flex flex-col">
                <div className="flex justify-center items-center mb-[20px]">
                    <img className="w-[130px] rounded-[20px] " src='observacao-em-pesquisa-1.png' />
                    <p className="ml-[10px] text-[#000]">1) observação-participante das reuniões do Comitê CIAD que validou o conteúdo do instrumento;</p>
                </div>
                <div className="flex justify-center items-center ml-[25px]">
                    <img className="w-[60px] pb-[25px] " src='switch9.svg' />
                    <img className='w-[150px] ml-[15px]' src='logo_conade.png' />
                    <p className="ml-[10px] text-[#000]">2) observação-participante nas reuniões do Conselho Nacional dos Direitos das Pessoas com Deficiência (CONADE) e em audiências públicas;</p>
                </div>
                <div className="flex items-center mt-[15px]">
                    <img className="w-[150px] rounded-[20px] " src='brasil_deficiencia.jpeg' />
                    <p className="ml-[10px] text-[#000] ">3) observação-participante em diversas capacitações realizadas em todo o Brasil com profissionais que aplicariam o IFBrM; Foto: Capacitação realizada em Recife</p>
                    <img className="mirror-horizontal w-[120px] mb-[60px]" src='switch3.svg' />
                </div>
                <div className="flex justify-center items-center ">
                    <div className="flex justify-center items-center">
                        <img className="w-[500px] mb-[50px]" src='switch11.svg' />
                    </div>
                    <img className="w-[130px] rounded-[20px] mb-[-60px] ml-[14px]" src='ambiente_virtual.jpeg' />
                    <p className="ml-[10px] text-[#000] mb-[-60px]">4) observação-participante no Ambiente Virtual utilizado como apoio para a capacitação dos profissionais;</p>
                </div>
                <div className="flex justify-center">
                    <img className="w-[300px] mt-[-30px]" src='switch10.svg' />
                </div>
                <div className="flex justify-center items-center ml-[25px]">
                    <img className='w-[150px] ml-[15px]' src='ambiente_virtual.webp' />
                    <p className="ml-[10px] text-[#000]"> 5) observação-participante da avaliação da deficiência nos campos de pesquisa;</p>

                </div>
            </div>
            <div className="flex">
                <img className=" h-[630px] mb-[0px] mr-[15px]" src='switch5.svg'></img>
            </div >
            <div className="flex flex-col w-[50%] mt-[-60px]">
                <div className="flex items-center">
                    <img className="w-[150px] rounded-[20px] " src='entrevistas.webp' />
                    <p className="ml-[10px] text-[#000] ">6) entrevistas qualitativas em profundidade com 47 profissionais e com 58 pessoas com deficiência (e/ou seus familiares);</p>
                </div>
                <div className="flex justify-center items-center">
                    <img className="w-[90px] mb-[50px]  mt-[8px]" src='switch12.svg' />
                    <img className="w-[110px] rounded-[20px] ml-[15px] " src='inquerito.jpg' />
                    <p className="ml-[10px] text-[#000]">7) inquérito enviado para 802 profissionais capacitados que realizaram pelo menos duas avaliações com o instrumento, sendo respondido por 390 profissionais;</p>
                </div>
                <div className="flex mt-[-30px]">
                    <div className="flex justify-center items-center">
                        <img className='w-[150px]' src='formulario.webp' />
                        <p className="ml-[10px] text-[#000]">
                            8) dados da avaliação da deficiência produzidos a partir do preenchimento do IFBrM por pares de profissionais
                            referentes a funcionalidade de 8.795 pessoas com deficiência;
                        </p>
                    </div>
                    <img className="w-[70px] mb-[80px]" src='switch13.svg' />

                </div>
                <div className="flex items-center">
                    <img className=" w-[80px] mb-[30px] ml-[30px] mt-[-50px] pt-[25px] mirror-horizontal mr-[15px]" src='switch13.svg' />
                    <img className="w-[150px] rounded-[20px] " src='opiniao.avif' />
                    <p className="ml-[10px] text-[#000] ">9) dados sobre a opinião dos profissionais sobre a funcionalidade dos sujeitos avaliados;</p>

                </div>
                <div className="flex items-center justify-center">
                    <div className="flex justify-center items-nceter">
                        <img className="w-[150px] rounded-[20px] " src='artigo-de-opiniao.jpg' />
                        <p className="ml-[10px] text-[#000]  pt-[55px] ">10) dados sobre a opinião dos sujeitos sobre a própria funcionalidade;</p>
                    </div>
                    <img className="w-[70px] pl-[6px] pb-[80px]" src='switch13.svg' />
                </div>
            </div>

        </div>

    )
}

