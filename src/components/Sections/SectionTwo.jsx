import {useState} from 'react'
import Popup from '../Popup/Popup'
import Cardprops from '../Cards/Cardprops'

const SectionTwo = () => {
const [namePerson, setNamePerson] = useState()
const [showPup, setShowPup] = useState(false)
const [, setDescription] = useState()

function textarea() {
   if(namePerson === 'Noah Summers'){
     return(
      <h1> Nome: Noah Summers
<br></br><br></br>
Planeta de origem: Caelum
<br></br><br></br>
Poderes:
<br></br><br></br>
Olhar da Penitência: Noah possui o poder do Olhar da Penitência, uma habilidade que lhe permite enxergar a verdadeira essência de uma pessoa ao olhar em seus olhos. Esse olhar revela seus segredos mais profundos, culpa e arrependimento, forçando-os a enfrentar as consequências de suas ações. Noah pode usar esse poder para expor a verdade e trazer justiça.<br></br><br></br>

Dominação de Sangue: Noah tem o domínio sobre o sangue. Ele pode controlar e manipular o sangue de si mesmo e de outros seres. Com essa habilidade, ele pode acelerar ou diminuir o fluxo sanguíneo, causando fraqueza, desmaios ou até mesmo curando ferimentos mais rapidamente. Noah também pode solidificar o sangue, moldando-o em armas afiadas ou escudos protetores.
<br></br><br></br>
História:
Noah Summers nasceu no planeta Caelum como filho de Aveline Morganroth, uma renomada guerreira e protetora do planeta. Desde jovem, Noah demonstrou uma conexão especial com os elementos vitais do universo, especialmente o sangue. Ele foi treinado por sua mãe e por outros mestres em Caelum para desenvolver e aprimorar seus poderes.
<br></br><br></br>
Caelum é um planeta conhecido por sua busca incansável pela justiça e equilíbrio. Com a habilidade de ver a verdade nas pessoas através de seu Olhar da Penitência, Noah foi treinado para usar seus poderes para trazer à luz as sombras e segredos ocultos daqueles que ameaçam a paz e a harmonia em Caelum.
<br></br><br></br>
Noah também descobriu sua habilidade de Dominação de Sangue, o que o tornou uma força formidável em batalha. Ele aprendeu a controlar e manipular o sangue, usando-o tanto para proteger quanto para punir. Com a capacidade de solidificar o sangue em armas afiadas ou escudos protetores, Noah se tornou um guerreiro temido por seus oponentes.
<br></br><br></br>
Ao longo de sua jornada, Noah enfrenta desafios e ameaças que testam sua coragem e determinação. Ele descobre segredos sombrios sobre a história de Caelum e seu próprio passado, enquanto busca a justiça e a proteção dos inocentes. Com sua habilidade de Olhar da Penitência e Dominação de Sangue, Noah se torna uma figura inspiradora para o povo de Caelum, lutando para manter a paz e o equilíbrio em seu planeta natal.
</h1>
    )
   }
else if(namePerson === 'Maude Connor'){
 return(
    <h1>
Nome: Maude Connor
<br></br><br></br>
Planeta de origem: Caelum
<br></br><br></br>
Poderes:<br></br><br></br>

Parar o Tempo: Maude possui a habilidade de controlar o tempo ao seu redor. Ele pode interromper o fluxo do tempo, fazendo com que tudo e todos ao seu redor fiquem imóveis. Essa capacidade lhe permite realizar ações e tomar decisões enquanto o mundo ao seu redor está parado, concedendo-lhe uma vantagem estratégica em situações de perigo ou necessidade.
<br></br><br></br>
Controle de Sonhos: Maude tem a habilidade de controlar e influenciar os sonhos das pessoas. Ele pode entrar nos sonhos de outros e alterar seu conteúdo, manipulando as experiências e emoções durante o sono. Isso permite que ele se comunique de forma única e transmita mensagens ou afete o estado mental de outras pessoas através de seus sonhos.
<br></br><br></br>
Controle de Sentimentos: Maude tem a capacidade de manipular e influenciar os sentimentos das pessoas ao seu redor. Ele pode intensificar ou diminuir emoções, como amor, raiva, tristeza, alegria, entre outros. Essa habilidade lhe dá a capacidade de acalmar conflitos, inspirar coragem ou provocar medo, dependendo de sua intenção e dos objetivos que deseja alcançar.
<br></br><br></br>
História:
Maude Connor é um ser extraordinário que reside em Caelum, um planeta de mistérios e poderes sobrenaturais. Ele é primo de Ethan Nova, a deusa da tempestade, e compartilha um vínculo especial com ela. Desde jovem, Maude manifestou habilidades únicas e incomuns, tornando-o uma figura intrigante entre os habitantes de Caelum.
<br></br><br></br>
A habilidade de Maude de controlar o tempo é uma das suas características mais impressionantes. Ele aprendeu a dominar essa habilidade ao longo dos anos, permitindo-lhe parar o tempo ao seu redor quando necessário. Essa capacidade confere a ele uma vantagem estratégica em situações perigosas, permitindo-lhe tomar decisões e agir enquanto todos os outros estão imóveis.
<br></br><br></br>
Além disso, Maude possui o dom do controle dos sonhos. Ele pode entrar nos sonhos das pessoas e manipular o conteúdo de suas experiências oníricas. Essa habilidade lhe dá a capacidade de se comunicar de forma única e transmitir mensagens importantes ou influenciar o estado mental de outros através de seus sonhos.
<br></br><br></br>
Outra habilidade notável de Maude é o controle de sentimentos. Ele pode manipular e influenciar as emoções das pessoas ao seu redor, intensificando ou diminuindo sentimentos específicos. Essa capacidade o torna um poderoso agente de mudança emocional, capaz de acalmar conflitos, inspirar coragem ou provocar medo, dependendo de sua intenção.
<br></br><br></br>
Maude usa seus poderes de forma responsável e com compaixão. Ele está sempre em busca de equilíbrio e harmonia em Caelum, usando suas habilidades para ajudar aqueles que precisam e proteger seu planeta natal. Seu vínculo com Ethan Nova fortalece seu propósito e juntos eles trabalham para preservar a paz e a segurança de Caelum.
<br></br><br></br>
Maude Connor é uma figura cativante e misteriosa em Caelum, um protetor habilidoso com o poder de parar o tempo, controlar sonhos e sentimentos. Sua presença é reconfortante para aqueles que o conhecem, pois ele traz serenidade e influencia positivamente o mundo ao seu redor. Sua jornada continua, desvendando os segredos de Caelum e usando seus dons para trazer esperança e transformação.

    </h1>
 )
}

else if(namePerson === 'Adrian Colins'){
 return(
    <h1>
Nome: Adrian Collins
<br></br><br></br>
Planeta de origem: Caelum
<br></br><br></br>
Poderes:
<br></br><br></br>
Controle de Ondas Sonoras: Adrian possui a habilidade de controlar e manipular ondas sonoras. Ele pode amplificar ou diminuir o som ao seu redor, podendo criar vibrações tão poderosas que são capazes de gerar terremotos e impactar o ambiente. Esse controle sobre as ondas sonoras permite que ele exerça grande influência sobre seu entorno.
<br></br><br></br>
Telecinese: Adrian tem o poder da telecinese, a capacidade de mover objetos com a mente. Ele pode levitar e manipular objetos de diferentes tamanhos e pesos, usando sua força mental para controlá-los e direcioná-los conforme sua vontade. Essa habilidade dá a Adrian um grande potencial tanto em combate como em situações cotidianas.
<br></br><br></br>
Vôo: Adrian possui a capacidade de voar. Ele pode levitar e se deslocar no ar, alcançando altas velocidades e manobrando com agilidade. Seus poderes de voo permitem que ele explore livremente os céus de Caelum, além de fornecer uma vantagem tática em combate ou para alcançar lugares inacessíveis.
<br></br><br></br>
História:
Adrian Collins nasceu em Caelum, um planeta onde a diversidade de poderes e habilidades é uma realidade. Desde jovem, ele manifestou poderes extraordinários, sendo capaz de controlar as ondas sonoras ao seu redor. No entanto, seus pais, apesar de serem ricos, não aceitavam sua natureza e tinham dificuldade em lidar com os poderes de Adrian.
<br></br><br></br>
Em um mundo onde a aceitação dos poderes é amplamente celebrada, a atitude de seus pais causou conflitos internos em Adrian. Ele enfrentou rejeição e incompreensão, mas isso não diminuiu sua determinação de explorar e aprimorar seus dons.
<br></br><br></br>
Com o tempo, Adrian descobriu que também possuía habilidades de telecinese, permitindo-lhe mover objetos com sua mente. Essa revelação ampliou ainda mais suas possibilidades e o ajudou a ganhar confiança em suas habilidades únicas.
<br></br><br></br>
Aos poucos, Adrian aprendeu a controlar seus poderes, aprimorando sua habilidade de criar terremotos através do controle das ondas sonoras. Ele também desenvolveu maior maestria na telecinese, realizando feitos impressionantes ao manipular objetos de diferentes tamanhos e pesos.
<br></br><br></br>
Em meio à sua jornada de autodescoberta, Adrian encontrou apoio e amizade em um grupo de indivíduos com habilidades especiais, que valorizavam e celebravam a diversidade de poderes em Caelum. Essa comunidade tornou-se sua família escolhida, oferecendo-lhe apoio emocional e um ambiente de aceitação.
<br></br><br></br>
Determinado a seguir seu próprio caminho, Adrian enfrentou os desafios impostos por seus pais e rejeitou suas tentativas de tirar seus poderes. Ele se tornou um defensor da diversidade e dos direitos de todos os seres de Caelum, lutando pela igualdade e pelo respeito às individualidades.
<br></br><br></br>
Adrian Collins é uma figura corajosa e resiliente em Caelum. Seus poderes de controle de ondas sonoras, telecinese e vôo o tornam um ser excepcionalmente poderoso. Ele luta não apenas por si mesmo, mas por todos aqueles que enfrentam rejeição e discriminação, buscando um mundo onde todos sejam valorizados por suas diferenças e habilidades.

    </h1>
 )
}

else if(namePerson === 'Lucas Blackthorn'){
 return(
    <h1>
Nome: Lucas Blackthorn
<br></br><br></br>
Planeta de origem: Caelum
<br></br><br></br>
Poderes:
<br></br><br></br>
Destruição da Matéria: Lucas possui o poder de destruir a matéria ao seu redor. Ele é capaz de desintegrar objetos, estruturas e até mesmo seres vivos com um simples gesto ou pensamento. Sua habilidade de destruição é tão poderosa que pode alterar a composição molecular das coisas, reduzindo-as a nada.
<br></br><br></br>
Criação de Buraco Negro: Lucas tem a capacidade de criar e controlar buracos negros. Ele pode convocar essas forças cósmicas poderosas, que absorvem tudo em seu caminho, incluindo luz e matéria. Essa habilidade permite que ele manipule a gravidade e exerça controle sobre a energia do universo.
<br></br><br></br>
Viagem Espacial: Lucas é capaz de viajar pelo espaço, movendo-se entre as estrelas e galáxias com facilidade. Ele pode percorrer distâncias astronômicas em um piscar de olhos, explorando o cosmos e visitando outros planetas e sistemas solares. Sua capacidade de viagem espacial lhe confere uma perspectiva única do universo e uma compreensão profunda de suas vastas maravilhas.
<br></br><br></br>
História:
Lucas Blackthorn teve um começo difícil em Caelum. Abandonado em um orfanato da cidade quando era apenas uma criança, ele passou sua infância em um ambiente sombrio e desprovido de amor. No entanto, eventos misteriosos levaram Lucas a uma transformação que mudaria sua vida para sempre.
<br></br><br></br>
Aos poucos, Lucas descobriu que possuía poderes desconhecidos e devastadores. Sua capacidade de destruir a matéria ao seu redor causou temor e caos entre aqueles que o encontraram. No entanto, ele também encontrou uma maneira de canalizar esses poderes, aprendendo a controlá-los e a usá-los com sabedoria.
<br></br><br></br>
À medida que Lucas crescia, ele percebeu que sua transformação não era apenas física, mas também espiritual. Ele se tornou uma entidade cósmica, conectado às forças do universo de uma maneira profunda e intrincada. Essa conexão cósmica deu a Lucas o dom da criação de buracos negros e a capacidade de viajar pelo espaço.
<br></br><br></br>
No entanto, o poder de Lucas não era totalmente compreendido. Sua presença em Caelum começou a ser temida e considerada uma assombração. Ele se tornou um ser solitário, vagando pelos confins do cosmos, buscando respostas sobre sua origem e propósito.
<br></br><br></br>
Embora suas habilidades sejam poderosas e até mesmo aterrorizantes, Lucas Blackthorn não é um ser malévolo. Ele carrega consigo a tristeza de sua infância abandonada e anseia por encontrar seu lugar no universo. Sua jornada é uma busca por compreensão, aceitação e redenção, enquanto ele procura equilibrar seu imenso poder com compaixão e bondade.
<br></br><br></br>
Lucas Blackthorn, a entidade cósmica de poderes desconhecidos, é uma figura enigmática em Caelum. Sua história é um lembrete de que até mesmo aqueles com origens sombrias e poderes avassaladores podem encontrar luz e propósito em meio à escuridão.
    </h1>
 )
}

else if(namePerson === 'Devan Stone'){
 return(
    <h1>
Nome: Devan Stone
<br></br><br></br>
Planeta de origem: Caelum
<br></br><br></br>
Habilidades:
<br></br><br></br>
Inteligência e Habilidades Naturais: Devan possui uma mente brilhante e habilidades naturais excepcionais em várias áreas, como ciência, tecnologia e estratégia. Ele é um jovem talentoso, reconhecido por sua perspicácia e capacidade de resolver problemas complexos.
<br></br><br></br>
Alter Ego Maligno: À medida que Devan descobre seu poderoso alter ego maligno, ele ganha acesso a uma gama de habilidades sombrias e destrutivas. Seu alter ego possui força sobre-humana, velocidade aprimorada e a capacidade de controlar elementos como fogo, sombras ou energia negra.
<br></br><br></br>
Manipulação de Energia: Devan tem a habilidade de manipular e controlar diferentes formas de energia. Ele pode canalizar e redirecionar energia para diversos propósitos, como ataques de energia concentrada ou proteção pessoal.
<br></br><br></br>
História:
Devan Stone era um jovem promissor em Caelum, com um futuro brilhante pela frente. Ele era reconhecido por suas habilidades e talentos excepcionais, tendo conquistado a admiração de muitos em sua comunidade. Sua mente afiada e curiosidade insaciável o impulsionaram a buscar conhecimento e a explorar os limites do seu potencial.
<br></br><br></br>
No entanto, a vida de Devan toma um rumo sombrio quando ele descobre a existência de um alter ego maligno dentro de si. Esse lado sombrio, que surge como uma manifestação de suas emoções reprimidas e desejos obscuros, possui poderes destrutivos além da imaginação.
<br></br><br></br>
Inicialmente, Devan luta para controlar seu alter ego maligno, que deseja destruir o mundo ao seu redor. Ele se vê dividido entre sua natureza benevolente e a influência de sua contraparte malévola. Conforme o tempo passa, a batalha interna de Devan se intensifica, colocando-o diante de escolhas difíceis e levando-o ao limite de suas capacidades.
<br></br><br></br>
Enquanto luta contra seu alter ego maligno, Devan também deve enfrentar os desafios de uma sociedade que o vê com desconfiança e medo. Ele busca compreender a origem de seu alter ego e encontrar uma maneira de reconciliar sua dualidade interna.
<br></br><br></br>
A história de Devan Stone é uma jornada de autodescoberta, superação e redenção. Ele é um herói relutante, lutando contra as trevas que ameaçam consumi-lo e usando suas habilidades para proteger aqueles que ama. No cerne dessa narrativa está a questão da natureza humana e da luta entre o bem e o mal, explorando a capacidade de um indivíduo de encontrar sua verdadeira identidade e abraçar seu potencial de forma positiva.
    </h1>)
}}
  return (

    <>
        <Popup mostrar={showPup} setValue={setShowPup} text={textarea()}  name={namePerson} />
     <section className=' flex gap-[30px] mt-[30px] max-lg:mt-0  items-center justify-center max-lg:flex-col'>

        <Cardprops setValue={setShowPup} value={showPup} setText={setDescription}
          setName={setNamePerson} name='Noah Summers' id='Backimg-6'/>

        <Cardprops setValue={setShowPup} value={showPup} setText={setDescription}
          setName={setNamePerson}  name='Maude Connor' id='Backimg-7'/>

        <Cardprops setValue={setShowPup} value={showPup} setText={setDescription}
          setName={setNamePerson} name='Adrian Colins' id='Backimg-8'/>

        <Cardprops  setValue={setShowPup} value={showPup} setText={setDescription}
          setName={setNamePerson} name='Lucas Blackthorn' id='Backimg-9'/>

        <Cardprops  setValue={setShowPup} value={showPup} setText={setDescription}
          setName={setNamePerson} name='Devan Stone' id='Backimg-10'/>
      </section>
    </>
  )

}

export default SectionTwo