import Popup from '../Popup/Popup'
import Cardprops from '../Cards/Cardprops'
import {useState} from 'react'


const SectionOne = () => {
  const [showPup, setShowPup] = useState(false)
  const [description, setDescription] = useState()
  const [namePerson, setNamePerson] = useState()


  console.log(description)

  function textarea() {
   if(namePerson === 'Mythen Nova'){
     return(
      <h1>
    Nome: Mythen Nova
<br></br><br></br>
Planeta de origem: Caelum
<br></br><br></br>
Poderes:
<br></br><br></br>

Poder de Criação de Ilusões: Mythen possui a habilidade de criar ilusões poderosas e enganosas. Ela é capaz de manipular a percepção das pessoas, projetando imagens e cenários falsos em suas mentes. Suas ilusões são tão convincentes que podem enganar até mesmo os sentidos mais aguçados, fazendo com que as vítimas vejam, ouçam e sintam coisas que não são reais.<br></br><br></br>

Manipulação Emocional: Mythen tem a capacidade de semear ódio, medo e discórdia nas pessoas ao seu redor. Ela é uma mestra na manipulação das emoções alheias, explorando as fraquezas e inseguranças dos outros para incitar conflitos e semear o caos. Sua habilidade de manipulação emocional a torna uma ameaça sutil e perigosa.
<br></br><br></br>
Poder Cósmico: Assim como sua prima, Ethan Nova, Mythen recebeu um poder cósmico concedido por deuses misteriosos. Seu poder cósmico lhe confere uma ampla gama de habilidades, como controle sobre a energia estelar, manipulação das forças gravitacionais e a capacidade de gerar explosões cósmicas devastadoras.
<br></br><br></br>
História:<br></br><br></br>
Mythen Nova é uma figura sinistra e manipuladora que reside em Caelum. Enquanto sua prima, Ethan Nova, usa seus poderes divinos para proteger e trazer justiça, Mythen abraçou a escuridão e escolheu um caminho de maldade e manipulação.
<br></br><br></br>
Desde jovem, Mythen demonstrou uma personalidade retorcida e um desejo de causar sofrimento aos outros. Ela foi agraciada com poderes cósmicos por deuses enigmáticos, que reconheceram sua inclinação para o mal e lhe concederam habilidades além da compreensão comum.
<br></br><br></br>
Usando seu poder de criação de ilusões, Mythen é capaz de distorcer a realidade e enganar aqueles que cruzam seu caminho. Ela aproveita suas habilidades manipuladoras para plantar sementes de ódio e discórdia, incitando conflitos e alimentando as piores emoções das pessoas.
<br></br><br></br>
Mythen não possui escrúpulos e está disposta a fazer qualquer coisa para atingir seus objetivos sombrios. Ela busca causar caos e destruição, utilizando seu poder cósmico para gerar explosões devastadoras e manipular as forças do universo em seu benefício.
<br></br><br></br>
Sua rivalidade com sua prima, Ethan Nova, é uma batalha épica entre a luz e as trevas, o bem e o mal. Enquanto Ethan luta para proteger a harmonia e o equilíbrio em Caelum, Mythen busca destruir e corromper tudo o que encontra.
<br></br><br></br>
A história de Mythen Nova é uma saga de manipulação e perversidade, representando a corrupção e a maldade em contraste com o heroísmo e a bondade de sua prima. Ela é uma força formidável e perigosa que desafia os limites da moralidade e testa a coragem daqueles que a enfrentam.
<br></br><br></br>
      </h1>
    )
   }
else if(namePerson === 'Aurora Gartix'){
 return(
    <h1>
    Nome: Aurora Gartix
<br></br><br></br>
Planeta de origem: Caelum
<br></br><br></br>
Poderes:
<br></br><br></br>
Intangibilidade: Aurora tem a habilidade de se tornar intangível, permitindo que ela passe através de objetos sólidos sem sofrer danos. Essa habilidade lhe confere vantagem tática em situações de combate e a capacidade de se infiltrar em locais inacessíveis.
<br></br><br></br>
Super Força: Aurora possui uma força sobre-humana, permitindo que ela levante objetos extremamente pesados e enfrente oponentes poderosos. Sua força aprimorada também a torna uma defensora formidável e capaz de realizar proezas físicas impressionantes.
<br></br><br></br>
Vôo: Aurora é capaz de voar, elevando-se pelos céus de Caelum com graciosidade e facilidade. Essa habilidade lhe proporciona mobilidade incrível, permitindo que ela se desloque rapidamente pelo planeta e alcance lugares de difícil acesso.
<br></br><br></br>
Hipnose: Aurora possui o poder de hipnotizar e controlar a mente dos outros. Ela pode influenciar os pensamentos, emoções e ações das pessoas, usando sua habilidade de hipnose para obter informações, resolver conflitos ou manipular situações a seu favor.
<br></br><br></br><br></br><br></br>
Duplicação: Aurora pode criar duplicatas de si mesma, permitindo que ela esteja em vários lugares ao mesmo tempo. Essa habilidade a torna uma lutadora versátil, capaz de confundir e sobrecarregar seus oponentes com ataques coordenados.
<br></br><br></br>
História:<br></br><br></br>
Aurora Gartix nasceu em uma tribo rara de Caelum, conhecida por sua linhagem excepcional de poderes especiais. No entanto, quando era criança, seus poderes foram misteriosamente retirados, deixando-a sem acesso às suas habilidades únicas.
<br></br><br></br>
Apesar dessa perda, Aurora cresceu com uma confiança inabalável e um forte amor-próprio. Ela sempre soube que estava destinada a grandes feitos e que seus poderes voltariam para ela quando fosse o momento certo.
<br></br><br></br>
Na vida adulta, um evento surpreendente ocorreu, desencadeando o retorno de seus poderes de forma intensa. Aurora abraçou sua herança e se tornou uma defensora justa em Caelum, usando seus dons para proteger os inocentes, lutar pela justiça e garantir a segurança de seu planeta natal.
<br></br><br></br>
Aurora é admirada por sua força de vontade e determinação incansável. Ela conquista tudo o que deseja com coragem e inteligência, sempre seguindo um código de conduta justo e moral.
<br></br><br></br>
A história de Aurora Gartix é uma saga de superação, autodescoberta e perseverança. Ela personifica a resiliência de sua linhagem rara de uma tribo de Caelum, mostrando que, mesmo diante da adversidade, a verdadeira força vem de dentro e nunca deve ser subestimada. Aurora é um símbolo de esperança e inspiração para todos em seu planeta.
<br></br><br></br>
    </h1>
 )
}

else if(namePerson === 'Lucas Backwood'){
 return(
    <h1>
Nome: Lucas Blackwood
<br></br><br></br>
História de Origem:

 Lucas Blackwood nasceu em uma linhagem ancestral de seres com conexões com o plano da luz. Desde jovem, ele manifestou uma afinidade natural com a energia luminosa e desenvolveu habilidades especiais. Conforme crescia, descobriu seu potencial para influenciar mentes e drenar a energia vital de outras pessoas.<br></br><br></br>

Poderes e Habilidades:
Manipulação da Luz: Lucas possui a habilidade de manipular e controlar a luz. Ele pode criar e projetar feixes de luz brilhante, cegar temporariamente seus oponentes, criar ilusões com luz e até mesmo gerar escudos protetores feitos de energia luminosa. Seus poderes luminosos também lhe conferem uma visão aprimorada em ambientes escuros.<br></br><br></br>

Telepatia: Lucas tem o dom de se comunicar mentalmente com outras pessoas. Ele pode ler e transmitir pensamentos, ideias e emoções entre as mentes, estabelecendo conexões telepáticas com aqueles ao seu redor. Essa habilidade permite que ele compartilhe informações, planeje estratégias em equipe e influencie mentalmente os outros.
<br></br><br></br>
Drenar Vitalidade: Lucas tem a capacidade de drenar a vitalidade e energia vital de outros seres. Ele pode absorver a força vital de seus oponentes, enfraquecendo-os e fortalecendo-se em troca. Essa habilidade pode ser usada como uma forma de defesa, para restaurar sua própria energia ou como uma arma contra adversários poderosos.
<br></br><br></br>
Personalidade e Motivação: Lucas é um personagem complexo, cuja personalidade é influenciada pelos poderes que possui. Ele é geralmente reservado, mantendo uma aura misteriosa e calma. Lucas luta internamente com o equilíbrio entre a luz e a escuridão em seu coração, esforçando-se para usar seus poderes de maneira responsável e justa. Sua motivação é proteger os inocentes e manter a paz, mesmo que isso signifique enfrentar seus próprios conflitos internos.
<br></br><br></br>
Arqui-inimigos: Lucas enfrenta oponentes que buscam abusar do poder da luz e explorar os outros. Um de seus principais inimigos é um ser maligno que deseja utilizar a energia vital de outros para alcançar imortalidade e poder supremo. Lucas se opõe a essas forças sombrias, lutando para proteger aqueles que estão em perigo e preservar o equilíbrio entre a luz e a escuridão.
<br></br><br></br>
Equipe e Aliados: Lucas encontra aliados entre aqueles que compreendem sua luta interna e compartilham seus ideais. Ele se junta a outros heróis com habilidades únicas para enfrentar ameaças maiores. Sua equipe busca combater a injustiça e proteger aqueles que não podem se proteger sozinhos


    </h1>
 )
}

else if(namePerson === 'Sophia Tompson'){
  return(
    <h1>
      Nome: Sofia Thompson

<br></br><br></br>

História de Origem: Sofia Thompson cresceu em uma pequena vila cercada por uma vasta floresta. Desde jovem, ela mostrou uma conexão profunda com a natureza e uma habilidade incomum de se comunicar com os animais. Ao explorar a floresta, Sofia descobriu que podia controlar os elementos ao seu redor. Determinada a usar seus dons para proteger a natureza, ela embarcou em uma jornada para aprimorar suas habilidades.
<br></br><br></br>
Poderes e Habilidades:

Falar com Animais: Sofia possui a habilidade de se comunicar telepaticamente com animais. Ela pode compreender suas emoções, pensamentos e necessidades, estabelecendo laços de amizade e confiança com diferentes espécies. Essa conexão permite que ela obtenha informações valiosas e crie estratégias baseadas nas perspectivas dos animais.
<br></br><br></br>
Dominação dos Elementos: Sofia tem a capacidade de dominar os elementos naturais. Ela pode controlar o fogo, manipular a água, manipular o ar e moldar a terra conforme sua vontade. Seja conjurando chamas para defesa, criando torrentes de água para proteção ou gerando ventos poderosos para movimentação, Sofia tem controle total sobre os elementos ao seu redor.
<br></br><br></br>
Pulos Altos: Sofia possui uma habilidade excepcional para realizar saltos altos e aterrissar com graça e precisão. Ela pode saltar a grandes alturas e distâncias, tornando-se ágil e evasiva em batalhas e explorações. Seja escalando penhascos íngremes ou superando obstáculos aparentemente intransponíveis, Sofia usa seus saltos altos para enfrentar desafios físicos com destreza.
<br></br><br></br>
Personalidade e Motivação: Sofia é uma personagem determinada, corajosa e compassiva. Ela valoriza profundamente a natureza e está comprometida em protegê-la de ameaças e desequilíbrios. Sua conexão com os animais a faz ser empática e preocupada com o bem-estar de todas as criaturas vivas. Sofia busca usar seus poderes para criar um mundo mais harmonioso e preservar a beleza natural do planeta.

    </h1>
  )
  }


  else if(namePerson === 'Alexandre Knight'){
  return(
    <h1>
     Nome: Alexandre Knight
<br></br><br></br>
Planeta de origem: Caelum
<br></br><br></br>
Poderes:
<br></br><br></br>
Imortalidade: Alexandre é dotado do dom da imortalidade, o que o torna incapaz de envelhecer ou morrer de causas naturais. Ele possui uma longevidade extraordinária e é praticamente invulnerável a doenças e ferimentos graves. Alexandre viveu através de séculos, acumulando experiências e conhecimento.
<br></br><br></br>
Vôo Aprimorado: Alexandre possui a habilidade de voar com maestria. Seu vôo é aprimorado em relação a outras formas de voo, permitindo-lhe atingir altas velocidades, manobrar com agilidade e voar em diferentes condições climáticas sem ser afetado. Essa habilidade permite que ele explore os céus de Caelum e se desloque rapidamente pelo planeta.
<br></br><br></br>
Super Força: Além da imortalidade e do vôo, Alexandre também possui uma força sobre-humana. Ele é capaz de levantar objetos extremamente pesados, realizar proezas físicas extraordinárias e enfrentar oponentes poderosos em combate. Sua força sobre-humana o torna um formidável guerreiro e defensor de Caelum.
<br></br><br></br>
História:
Alexandre Knight nasceu em Caelum, um planeta repleto de maravilhas e mistérios. Desde cedo, ficou evidente que ele possuía habilidades excepcionais, fazendo dele um ser único entre os habitantes de seu planeta. Alexandre descobriu que era imortal, incapaz de envelhecer ou morrer de causas naturais.
<br></br><br></br>
Com o passar dos séculos, Alexandre explorou e protegeu Caelum, utilizando sua imortalidade, vôo aprimorado e super força para garantir a segurança do planeta. Ele se tornou uma lenda entre seu povo, um protetor incansável que enfrentava ameaças e desafios com coragem e determinação.
<br></br><br></br>
Ao longo de sua jornada, Alexandre desvendou segredos antigos de Caelum, aprendeu sobre a história e os poderes ocultos do planeta. Sua imortalidade permitiu-lhe testemunhar a ascensão e queda de civilizações, bem como a evolução da sociedade e da magia em Caelum.
<br></br><br></br>
Embora solitário devido à sua imortalidade, Alexandre encontrou conforto e propósito na defesa de seu planeta. Ele se tornou um defensor da justiça, usando sua super força e habilidades de voo para proteger os inocentes e combater o mal que ameaça Caelum.
<br></br><br></br>
A história de Alexandre Knight é uma saga de heroísmo e perseverança, um símbolo de coragem e poder sobre-humano. Sua imortalidade, vôo aprimorado e super força fazem dele um guardião formidável, cuja dedicação a Caelum é inabalável. Alexandre continua sua jornada, enfrentando desafios e protegendo seu planeta natal com seu conjunto único de poderes.

    </h1>
  )
  }



  }
  return (



    <>
      <Popup mostrar={showPup} setValue={setShowPup} text={textarea()}  name={namePerson} />
   <section className='flex gap-[30px] justify-center items-center max-lg:flex-col mt-[30px] mb-[30px]'>
          <Cardprops name='Mythen Nova' id='Backimg-11' setValue={setShowPup} value={showPup} setText={setDescription}
          setName={setNamePerson}
           />

          <Cardprops  setValue={setShowPup} value={showPup} setText={setDescription}
          setName={setNamePerson} name='Aurora Gartix' id='Backimg-12'/>

          <Cardprops  setValue={setShowPup} value={showPup} setText={setDescription}
          setName={setNamePerson} name='' id=''/>

          <Cardprops  setValue={setShowPup} value={showPup} setText={setDescription}
          setName={setNamePerson} name='' id=''/>

          <Cardprops  setValue={setShowPup} value={showPup} setText={setDescription}
          setName={setNamePerson} name='' id=''/>
      </section>



 </>

  )
}

export default SectionOne