import Popup from '../Popup/Popup'
import Cardprops from '../Cards/Cardprops'
import {useState} from 'react'


const SectionOne = () => {
  const [showPup, setShowPup] = useState(false)
  const [description, setDescription] = useState()
  const [namePerson, setNamePerson] = useState()


  console.log(description)

  function textarea() {
   if(namePerson === 'Ethan Nova'){
     return(
      <h1> Ethan Nova nasceu em um planeta distante, conhecido como Caelum, onde seres cósmicos concedem poderes divinos a indivíduos especiais. Durante sua infância, Ethan foi escolhido por uma entidade cósmica e recebeu a dádiva de controlar os elementos da tempestade. À medida que cresceu, seus poderes se expandiram, permitindo-lhe manipular a realidade e até mesmo criar planetas.  <br></br><br></br>

Poderes e Habilidades:
Controle de Tempestades: Ethan tem o domínio completo sobre as tempestades. Ele pode criar e controlar fenômenos climáticos extremos, como tempestades elétricas, furacões e tornados. Seu poder sobre o clima é tão intenso que pode moldar e redirecionar o vento, a chuva e os raios a seu comando. <br></br><br></br>

Manipulação da Realidade: Ethan é capaz de manipular e alterar a realidade conforme sua vontade. Ele pode modificar eventos, distorcer o tempo e espaço, e até mesmo criar ilusões poderosas. Com essa habilidade, ele pode moldar a percepção das pessoas e reescrever a própria natureza da realidade ao seu redor.<br></br><br></br>

Criação de Planetas: Ethan tem a capacidade de criar planetas inteiros. Utilizando seu poder cósmico, ele pode dar forma a matéria e energia para formar sistemas planetários completos. Esses planetas podem variar em tamanho, ambiente e características únicas, dependendo da visão e intenção de Ethan.<br></br><br></br>

Personalidade e Motivação: Ethan é um ser cósmico sereno, com uma mente sábia e uma presença tranquila. Ele vê seus poderes como uma responsabilidade e busca utilizá-los para o bem-estar do universo. Ethan se preocupa com a harmonia e o equilíbrio cósmico, e usa suas habilidades para proteger os seres vivos e garantir que a ordem seja mantida.<br></br><br></br>

Arqui-inimigos: Ethan enfrenta ameaças cósmicas que desejam usar seu poder para fins malignos ou para desequilibrar o universo. Um de seus arqui-inimigos é um ser interdimensional que busca usar o controle da realidade de Ethan para subjugar a existência e conquistar todos os reinos. Ethan luta para impedir que essas forças destrutivas coloquem em risco a estabilidade cósmica.<br></br><br></br>

Equipe e Aliados: Ethan faz parte de uma ordem cósmica de guardiões, composta por outros seres poderosos dedicados a preservar a ordem universal. Eles colaboram e compartilham conhecimentos e habilidades para proteger o equilíbrio cósmico. Além disso, Ethan também recebe a orientação de entidades cósmicas mais antigas, que lhe fornecem sabedoria e guiam sua jornada.<br></br><br></br></h1>
    )
   }
else if(namePerson === 'Aveline Morganroth'){
 return(
    <h1>
      Nome: Aveline Morganroth
<br></br><br></br>
Planeta de origem: Caelum
<br></br><br></br>
Habilidades especiais:
<br></br><br></br>
Asas de Ferro: Aveline possui asas feitas de um material especial, semelhante ao ferro. Essas asas conferem a ela a habilidade de voar com agilidade e velocidade, permitindo-lhe atravessar grandes distâncias e alcançar alturas impressionantes. As asas de ferro também fornecem uma camada adicional de proteção em combate, agindo como uma armadura contra ataques físicos.
<br></br><br></br>
Telepatia: Aveline possui o poder da telepatia, o que lhe permite ler mentes, transmitir pensamentos e se comunicar mentalmente com outras pessoas. Ela pode receber e enviar informações telepaticamente, permitindo a troca de ideias e a transmissão de mensagens sem o uso da fala ou outros meios convencionais de comunicação.<br></br><br></br>

Comunicação com os Mortos: Aveline tem a capacidade de se comunicar com os mortos. Ela pode entrar em contato com espíritos e almas que partiram para o além, permitindo-lhe obter informações e conhecimentos do mundo dos mortos. Essa habilidade permite que ela explore o passado, descubra segredos ocultos e até mesmo busque orientação espiritual.
<br></br><br></br>
História:
Aveline Morganroth é uma figura lendária em Caelum, um planeta repleto de mistérios e segredos. Ela nasceu com asas feitas de um metal raro e resistente, semelhante ao ferro, que lhe concedeu a habilidade única de voar pelos céus do planeta. Desde jovem, Aveline se destacou por sua coragem, sabedoria e habilidades excepcionais.
<br></br><br></br>
Além de suas asas de ferro, Aveline descobriu cedo em sua vida que possuía o dom da telepatia. Ela podia ouvir os pensamentos e sentimentos das pessoas ao seu redor, estabelecendo uma conexão profunda com os outros e compreendendo seus desejos mais íntimos. Essa habilidade a tornou uma mediadora habilidosa e uma líder respeitada.
<br></br><br></br>
No entanto, foi durante um encontro com a morte que Aveline descobriu seu dom mais extraordinário: a capacidade de se comunicar com os mortos. Ela pode atravessar a barreira entre os reinos da vida e da morte, estabelecendo contato com espíritos e almas que partiram. Essa habilidade de comunicação com os mortos permitiu a Aveline explorar os segredos do passado, desvendar mistérios antigos e buscar sabedoria ancestral.
<br></br><br></br>
Aveline se tornou uma guardiã e protetora de Caelum, usando suas asas de ferro para patrulhar os céus e garantir a segurança de seu povo. Ela é conhecida por sua sabedoria, justiça e compaixão. Sua telepatia e habilidade de comunicação com os mortos a tornam uma conselheira valiosa para aqueles que buscam orientação espiritual ou conhecimento além do mundo físico.
<br></br><br></br>
Aveline Morganroth é reverenciada como uma lenda viva em Caelum, uma líder cujas habilidades únicas e compreensão dos mistérios do universo a tornam uma força inigualável. Sua jornada continua, desvendando os segredos do planeta e protegendo seu povo com suas habilidades extraordinárias.
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
   <section className='flex gap-[30px] justify-center items-center max-lg:flex-col '>
          <Cardprops name='Ethan Nova' id='Backimg-1' setValue={setShowPup} value={showPup} setText={setDescription}
          setName={setNamePerson}
           />

          <Cardprops  setValue={setShowPup} value={showPup} setText={setDescription}
          setName={setNamePerson} name='Aveline Morganroth' id='Backimg-2'/>

          <Cardprops  setValue={setShowPup} value={showPup} setText={setDescription}
          setName={setNamePerson} name='Lucas Backwood' id='Backimg-3'/>

          <Cardprops  setValue={setShowPup} value={showPup} setText={setDescription}
          setName={setNamePerson} name='Sophia Tompson' id='Backimg-4'/>

          <Cardprops  setValue={setShowPup} value={showPup} setText={setDescription}
          setName={setNamePerson} name='Alexandre Knight' id='Backimg-5'/>
      </section>



 </>

  )
}

export default SectionOne