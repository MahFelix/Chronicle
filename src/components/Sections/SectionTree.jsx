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

Poder de Criação de Ilusões: Mythen possui a habilidade de criar ilusões poderosas e enganosas. Ela é capaz de manipular a percepção das pessoas, projetando imagens e cenários falsos em suas mentes. Suas ilusões são tão convincentes que podem enganar até mesmo os sentidos mais aguçados, fazendo com que as vítimas vejam, ouçam e sintam coisas que não são reais.
<br></br><br></br>

Manipulação Emocional: Mythen tem a capacidade de semear ódio, medo e discórdia nas pessoas ao seu redor. Ela é uma mestra na manipulação das emoções alheias, explorando as fraquezas e inseguranças dos outros para incitar conflitos e semear o caos. Sua habilidade de manipulação emocional a torna uma ameaça sutil e perigosa.
<br></br><br></br>
Poder Cósmico: Assim como sua irmã, Ethan Nova, Mythen recebeu um poder cósmico concedido por deuses misteriosos. Seu poder cósmico lhe confere uma ampla gama de habilidades, como controle sobre a energia estelar, manipulação das forças gravitacionais e a capacidade de gerar explosões cósmicas devastadoras.
<br></br><br></br>
História:<br></br><br></br>
Mythen Nova é uma figura sinistra e manipuladora que reside em Caelum. Enquanto sua irmã, Ethan Nova, usa seus poderes divinos para proteger e trazer justiça, Mythen abraçou a escuridão e escolheu um caminho de maldade e manipulação.
<br></br><br></br>
Desde jovem, Mythen demonstrou uma personalidade retorcida e um desejo de causar sofrimento aos outros. Ela foi agraciada com poderes cósmicos por deuses enigmáticos, que reconheceram sua inclinação para o mal e lhe concederam habilidades além da compreensão comum.
<br></br><br></br>
Usando seu poder de criação de ilusões, Mythen é capaz de distorcer a realidade e enganar aqueles que cruzam seu caminho. Ela aproveita suas habilidades manipuladoras para plantar sementes de ódio e discórdia, incitando conflitos e alimentando as piores emoções das pessoas.
<br></br><br></br>
Mythen não possui escrúpulos e está disposta a fazer qualquer coisa para atingir seus objetivos sombrios. Ela busca causar caos e destruição, utilizando seu poder cósmico para gerar explosões devastadoras e manipular as forças do universo em seu benefício.
<br></br><br></br>
Sua rivalidade com sua irmã, Ethan Nova, é uma batalha épica entre a luz e as trevas, o bem e o mal. Enquanto Ethan luta para proteger a harmonia e o equilíbrio em Caelum, Mythen busca destruir e corromper tudo o que encontra.
<br></br><br></br>
A história de Mythen Nova é uma saga de manipulação e perversidade, representando a corrupção e a maldade em contraste com o heroísmo e a bondade de sua irmã. Ela é uma força formidável e perigosa que desafia os limites da moralidade e testa a coragem daqueles que a enfrentam.
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

else if(namePerson === 'Aria Nova'){
 return(
    <h1>
Nome: Aria Nova
<br></br><br></br>
Planeta de origem: Caelum
<br></br><br></br>
Poderes:
<br></br><br></br>
Controle dos Elementos: Aria tem a habilidade de controlar os elementos da natureza, como fogo, água, terra e ar. Ela pode criar tempestades, controlar o clima, gerar terremotos e manipular os elementos em sua forma mais pura.
<br></br><br></br>
Super Força: Aria possui uma força sobre-humana, permitindo que ela levante objetos extremamente pesados e enfrente adversários poderosos. Sua força aprimorada a torna uma defensora formidável e capaz de realizar feitos impressionantes em combate.
<br></br><br></br>
Super Sentidos: Aria possui sentidos super aguçados, tornando-a capaz de perceber o ambiente ao seu redor de forma extraordinária. Ela pode enxergar à distância, ouvir sons sutis e sentir vibrações imperceptíveis para outras pessoas.
<br></br><br></br>
Poder de Parar o Tempo: Aria tem a habilidade de congelar o tempo ao seu redor, permitindo que ela se mova livremente enquanto o resto do mundo permanece imóvel. Essa habilidade lhe confere uma vantagem estratégica em combate e a capacidade de tomar decisões com calma em momentos críticos.
<br></br><br></br>
História
<br></br><br></br>
Aria Nova é uma mulher madura, segura e empoderada, nascida em Caelum com dons extraordinários. Desde muito jovem, ela teve que aprender a controlar seus poderes, o que não foi uma tarefa fácil. Sua infância foi marcada por desafios, já que seus pais não compreendiam plenamente seus dons e, às vezes, temiam o que ela poderia fazer.
<br></br><br></br>
Apesar das dificuldades, Aria perseverou e se tornou uma mulher confiante e poderosa. Ela usou seus poderes para ajudar e proteger os outros em Caelum, defendendo a justiça e a harmonia em seu planeta.
<br></br><br></br>
Ao longo da vida, Aria deu à luz duas filhas: Mythen Nova e Ethan Nova. No entanto, ela acabou se perdendo delas quando ainda eram bebês, devido a eventos misteriosos que a afastaram de suas filhas. Essa separação deixou uma lacuna em seu coração, mas ela nunca parou de procurá-las em sua busca incansável por reunir sua família novamente.
<br></br><br></br>
Aria dominou completamente seus poderes, aprimorando suas habilidades e entendendo a responsabilidade que vem com eles. Seu controle sobre os elementos é incomparável, e sua força, sentidos e capacidade de parar o tempo a tornam uma força imparável em Caelum.
<br></br><br></br>
Apesar das adversidades, Aria sempre se manteve firme em sua missão de proteger Caelum e reencontrar suas filhas. Sua história é uma jornada de amor, resiliência e autodescoberta, enquanto ela luta pela justiça, enfrenta seus desafios pessoais e mostra ao mundo que uma mulher empoderada e com grande poder pode fazer a diferença.
<br></br><br></br>

    </h1>
 )
}

else if(namePerson === 'Artorious Fenrir'){
  return(
    <h1>
 Nome: Artorious Fenrir
<br></br><br></br>
Planeta de origem: Caelum
<br></br><br></br>
Poderes:
<br></br><br></br>
Levitação e Controle de Objetos: Artorious possui a habilidade de levitar objetos ao seu redor e controlá-los com a mente. No entanto, quando criança, ele não tinha controle total sobre esse poder, o que causava acidentes e machucava as pessoas ao seu redor.
<br></br><br></br>
Viagem nos Sonhos: Artorious tem o poder de viajar entre os sonhos das pessoas. Essa habilidade incontrolável muitas vezes causava problemas para ele, pois as pessoas acordavam após terem sonhos estranhos e perturbadores, sem entender o que estava acontecendo.
<br></br><br></br>
Voo: Artorious é capaz de voar, elevando-se pelos céus de Caelum com facilidade e agilidade.
<br></br><br></br>
Pele Inquebrável: Sua pele pode se tornar inquebrável, tornando-o resistente a ataques físicos e ferimentos.
<br></br><br></br>
Visão de Raio-X: Artorious tem a capacidade de enxergar através de objetos sólidos, como paredes e portas, com sua visão de raio-x.
<br></br><br></br>
Hipnose: Embora ele não domine completamente essa habilidade, Artorious também possui o poder de hipnotizar pessoas em certas ocasiões, influenciando suas mentes e ações.
<br></br><br></br>
História:
<br></br><br></br>
Artorious Fenrir nasceu em uma região pobre de uma cidade em Caelum. Desde cedo, seus pais perceberam que ele possuía poderes extraordinários, o que os encheu de medo e apreensão. Quando criança, ele tinha dificuldade em controlar seus poderes de levitação, o que resultava em objetos flutuantes ao seu redor que muitas vezes causavam acidentes e machucavam quem estivesse perto.
<br></br><br></br>
Além disso, Artorious também descobriu que tinha a habilidade de viajar entre os sonhos das pessoas, mas essa capacidade era incontrolável. As pessoas acordavam após terem sonhos estranhos e perturbadores, sem entender o que estava acontecendo. Isso levou a conflitos e problemas de convivência com os outros em sua comunidade, tornando cada dia mais difícil a relação com seus pais.
<br></br><br></br>
À medida que crescia, Artorious lutava para compreender e controlar seus poderes. Ele se sentia isolado e incompreendido, enfrentando o medo e a rejeição de seus pais e dos demais. No entanto, ele também percebeu que seus poderes tinham um potencial significativo, e ele estava determinado a dominá-los para usar suas habilidades para o bem.
<br></br><br></br>
Em meio a suas lutas, Artorious conhece Varz Delaric, um jovem com poderes herdados por um anel cósmico poderoso. Uma forte conexão se desenvolve entre eles, e eles descobrem que compartilham não apenas a jornada de autoaceitação, mas também a responsabilidade de usar seus poderes para proteger os outros e garantir a segurança de Caelum.
<br></br><br></br>
Artorious e Varz embarcam em uma história de romance e aventura, enfrentando desafios e perigos juntos. Através do amor e apoio mútuo, eles aprendem a superar seus medos e inseguranças, fortalecendo sua confiança e determinação para proteger seu planeta e aqueles que amam.
<br></br><br></br>
A história de Artorious Fenrir é uma saga de crescimento, amadurecimento e autoaceitação, em que ele encontra não apenas a força para dominar seus poderes, mas também o amor e a coragem para enfrentar o desconhecido ao lado de seu parceiro, Varz Delaric. Unidos por seus poderes e sentimentos, eles se tornam uma força poderosa em Caelum, defendendo a justiça e a paz em meio a um universo cheio de desafios e maravilhas.

    </h1>
  )
  }


  else if(namePerson === 'Desconhecido'){
  return(
    <h1>
       Nome: Desconhecido
<br></br><br></br>
Planeta de origem: Desconhecido
<br></br><br></br>
Era uma vez, no enigmático planeta de Caelum, uma criança cujo nome era desconhecido. Ninguém sabia como ela surgiu, nem de onde veio. Sua existência era um mistério, assim como seus poderes que se assemelhavam aos de um Deus. Ela tinha super força, a habilidade de voar pelos céus, sua pele era tão resistente quanto o aço, seus olhos lançavam raios laser e sua velocidade era surpreendente.
<br></br><br></br>
Essa criança era diferente de todas as outras em Caelum. Ela não parecia se importar com suas ações e não fazia distinção entre bem e mal. Suas ações imprevisíveis deixavam o planeta em um caos constante. A população de Caelum ficava apreensiva e tentava entender quem era aquela criança e qual era sua verdadeira intenção.
<br></br><br></br>
Apesar de parecer indiferente, a criança tinha lembranças de dias felizes com sua família em sua terra natal, mas não conseguia se lembrar de como chegou a Caelum ou por que estava lá. Essas memórias a deixavam confusa e desejosa de voltar para casa, mas não importava o quanto tentasse, ela não conseguia encontrar o caminho de volta.
<br></br><br></br>
Enquanto Caelum sofria com o caos causado pela criança, uma figura misteriosa apareceu. Um ancião sábio e poderoso que tinha conhecimento sobre os segredos do universo. Ele sentiu a presença dessa criança e sabia que algo extraordinário estava acontecendo. Ele decidiu se aproximar dela e tentar compreender a verdade por trás do mistério que a envolvia.
<br></br><br></br>
O ancião começou a conversar com a criança, buscando compreender seus sentimentos e suas lembranças perdidas. À medida que os dias passavam, uma conexão profunda e especial se desenvolveu entre eles. A criança começou a se abrir, compartilhando suas memórias de sua terra natal e o amor que sentia por sua família.
<br></br><br></br>
O ancião percebeu que a criança estava perdida e desorientada, sem entender o verdadeiro poder que carregava dentro de si. Ele começou a ensiná-la sobre a importância de suas ações e como elas afetavam o mundo ao seu redor. Ele explicou que, apesar de suas habilidades poderosas, ela tinha a capacidade de fazer a diferença de forma positiva em Caelum.
<br></br><br></br>
À medida que a criança aprendia com o ancião, ela começou a refletir sobre suas ações e o caos que havia causado em Caelum. Ela percebeu que, mesmo sem entender completamente as consequências de suas ações, suas decisões estavam afetando a vida de muitas pessoas inocentes. E assim, um senso de responsabilidade começou a surgir dentro dela.
<br></br><br></br>
Com o tempo, a criança começou a usar seus poderes para proteger e ajudar os habitantes de Caelum. Ela encontrou um novo propósito e descobriu que podia canalizar sua força para o bem. Ela aprendeu a controlar seus poderes e a tomar decisões mais conscientes, procurando evitar o caos que antes ela deixava em seu rastro.
<br></br><br></br>
O ancião continuou sendo seu mentor e amigo, orientando-a em sua jornada de autodescoberta e autocontrole. Aos poucos, a criança começou a encontrar a paz em seu coração e a sentir-se parte do mundo ao seu redor.
<br></br><br></br>
Enquanto isso, o mistério de sua origem ainda permanecia sem resposta, mas a criança já não estava mais tão preocupada com isso. Ela havia encontrado uma nova família em Caelum, com o sábio ancião e as pessoas que aprenderam a confiar nela.
<br></br><br></br>
Assim, a criança desconhecida passou de uma força de caos a uma defensora da ordem e da harmonia em Caelum. Sua jornada de autodescoberta e redenção mostrou que, mesmo aqueles que carregam poderes extraordinários, podem encontrar um caminho para a paz interior e para fazer a diferença positiva no mundo ao seu redor.

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
          setName={setNamePerson} name='Aria Nova' id='Backimg-13'/>

          <Cardprops  setValue={setShowPup} value={showPup} setText={setDescription}
          setName={setNamePerson} name='Artorious Fenrir' id='Backimg-14'/>

          <Cardprops  setValue={setShowPup} value={showPup} setText={setDescription}
          setName={setNamePerson} name='Desconhecido' id='Backimg-15'/>
      </section>



 </>

  )
}

export default SectionOne