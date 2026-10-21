import type { Lang, PageKey } from './site';

export type Hora = 'manana' | 'mediodia' | 'tarde' | 'ocaso';
type Par = readonly [string, string];

export interface Terapia {
  hora: Hora;
  h1: string;
  intro: string;
  voces: readonly string[];
  ayudaTitulo: string;
  ayuda: readonly Par[];
  comoTitulo: string;
  como: readonly string[];
  frase?: string;
  pasosTitulo?: string;
  pasos?: readonly Par[];
  resena?: number;
  faqTitulo: string;
  faq: readonly Par[];
  cierreTitulo?: string;
}

export const especialidades: Record<Lang, { titulo: string; key: PageKey; items: readonly string[] }[]> = {
  es: [
    { titulo: 'Adultos', key: 'adultos', items: ['Ansiedad y estrés', 'Depresión', 'Autoestima', 'Duelo', 'TOC', 'Miedos y fobias', 'Dependencia emocional', 'Gestión emocional', 'Postparto'] },
    { titulo: 'Infancia y adolescencia', key: 'infantil', items: ['TDAH', 'TEA', 'Conducta', 'Dificultades de aprendizaje', 'Bullying', 'Ansiedad infantil', 'Alimentación (TCA)'] },
    { titulo: 'Pareja y familia', key: 'pareja', items: ['Comunicación', 'Celos', 'Rupturas', 'Rutina', 'Conflictos familiares', 'Crianza'] },
  ],
  ca: [
    { titulo: 'Adults', key: 'adultos', items: ['Ansietat i estrès', 'Depressió', 'Autoestima', 'Dol', 'TOC', 'Pors i fòbies', 'Dependència emocional', 'Gestió emocional', 'Postpart'] },
    { titulo: 'Infància i adolescència', key: 'infantil', items: ['TDAH', 'TEA', 'Conducta', "Dificultats d’aprenentatge", 'Bullying', 'Ansietat infantil', 'Alimentació (TCA)'] },
    { titulo: 'Parella i família', key: 'pareja', items: ['Comunicació', 'Gelosia', 'Ruptures', 'Rutina', 'Conflictes familiars', 'Criança'] },
  ],
};

export const terapias: Record<'adultos' | 'infantil' | 'pareja' | 'online', Record<Lang, Terapia>> = {
  adultos: {
    es: {
      hora: 'manana',
      h1: 'Terapia para adultos',
      intro: 'Cuando la ansiedad no te deja dormir, el trabajo te desborda o hace tiempo que no te sientes tú, hablarlo con alguien que sabe escuchar ayuda. Te acompañamos a entender qué te pasa y a encontrar herramientas que te sirvan en el día a día.',
      voces: ['no consigo desconectar', 'me cuesta levantarme por las mañanas', 'siento que no llego a todo'],
      ayudaTitulo: 'En qué te podemos ayudar',
      ayuda: [
        ['Ansiedad y estrés', 'Preocupación constante, nudo en el pecho, taquicardias, la sensación de no llegar a todo.'],
        ['Depresión y ánimo bajo', 'Tristeza que no se va, cansancio, irritabilidad, perder el interés por lo que antes te gustaba.'],
        ['Autoestima', 'Dejar de compararte, hablarte mejor y aprender a poner límites.'],
        ['Duelo', 'Por una persona, una relación o una etapa. El duelo no es un trastorno, es un proceso; a veces se atasca y conviene acompañarlo.'],
        ['TOC y pensamientos obsesivos', 'Ideas que vuelven una y otra vez y rituales que no puedes dejar de hacer.'],
        ['Miedos y fobias', 'Situaciones que evitas y que cada vez te limitan más.'],
        ['Dependencia emocional', 'Relaciones en las que te pierdes a ti misma o a ti mismo.'],
        ['Postparto', 'El embarazo, el parto y los primeros meses también remueven por dentro.'],
      ],
      comoTitulo: 'Cómo trabajamos',
      como: [
        'La primera sesión es para escucharte: qué te pasa, desde cuándo y qué esperas de la terapia. A partir de ahí acordamos objetivos y un ritmo de sesiones.',
        'Trabajamos desde la psicología integrativa: combinamos la terapia cognitivo-conductual, las terapias de tercera generación, como ACT o mindfulness, y la terapia breve estratégica según lo que necesites en cada momento.',
        'Entre sesión y sesión tienes ejercicios adaptados a ti y puedes escribirnos por WhatsApp si te surge una duda.',
      ],
      frase: 'No se trata de sobrevivir, se trata de vivir.',
      resena: 0,
      faqTitulo: 'Lo que suele preguntarse',
      faq: [
        ['¿Cuántas sesiones voy a necesitar?', 'Depende de cada persona y de lo que te trae. En la primera sesión lo hablamos y vamos viendo cómo avanzas.'],
        ['¿Puedo hacer la terapia online?', 'Sí. Por videollamada o por teléfono, con la misma duración y el mismo enfoque. También puedes combinar sesiones presenciales y online.'],
        ['No sé si lo mío es para ir al psicólogo', 'Cuéntanoslo por WhatsApp o por teléfono y te decimos si es algo en lo que te podemos ayudar.'],
      ],
    },
    ca: {
      hora: 'manana',
      h1: 'Teràpia per a adults',
      intro: "Quan l’ansietat no et deixa dormir, la feina et desborda o fa temps que no et sents tu, parlar-ne amb algú que sap escoltar ajuda. T’acompanyem a entendre què et passa i a trobar eines que et serveixin en el dia a dia.",
      voces: ['no aconsegueixo desconnectar', "em costa llevar-me al matí", 'sento que no arribo a tot'],
      ayudaTitulo: 'En què et podem ajudar',
      ayuda: [
        ['Ansietat i estrès', "Preocupació constant, nus al pit, taquicàrdies, la sensació de no arribar a tot."],
        ['Depressió i ànim baix', "Tristesa que no marxa, cansament, irritabilitat, perdre l’interès pel que abans t’agradava."],
        ['Autoestima', 'Deixar de comparar-te, parlar-te millor i aprendre a posar límits.'],
        ['Dol', "Per una persona, una relació o una etapa. El dol no és un trastorn, és un procés; de vegades s’encalla i convé acompanyar-lo."],
        ['TOC i pensaments obsessius', 'Idees que tornen una vegada i una altra i rituals que no pots deixar de fer.'],
        ['Pors i fòbies', 'Situacions que evites i que cada vegada et limiten més.'],
        ['Dependència emocional', 'Relacions en què et perds a tu mateixa o a tu mateix.'],
        ['Postpart', "L’embaràs, el part i els primers mesos també remouen per dins."],
      ],
      comoTitulo: 'Com treballem',
      como: [
        "La primera sessió és per escoltar-te: què et passa, des de quan i què esperes de la teràpia. A partir d’aquí acordem objectius i un ritme de sessions.",
        'Treballem des de la psicologia integrativa: combinem la teràpia cognitivoconductual, les teràpies de tercera generació, com ACT o mindfulness, i la teràpia breu estratègica segons el que necessitis a cada moment.',
        "Entre sessió i sessió tens exercicis adaptats a tu i ens pots escriure per WhatsApp si et sorgeix un dubte.",
      ],
      frase: 'No es tracta de sobreviure, es tracta de viure.',
      resena: 0,
      faqTitulo: 'El que se sol preguntar',
      faq: [
        ['Quantes sessions necessitaré?', "Depèn de cada persona i del que et porta aquí. A la primera sessió en parlem i anem veient com avances."],
        ['Puc fer la teràpia online?', 'Sí. Per videotrucada o per telèfon, amb la mateixa durada i el mateix enfocament. També pots combinar sessions presencials i online.'],
        ['No sé si el que em passa és per anar al psicòleg', "Explica-ho per WhatsApp o per telèfon i et direm si és alguna cosa en què et podem ajudar."],
      ],
    },
  },
  infantil: {
    es: {
      hora: 'tarde',
      h1: 'Terapia para niños y adolescentes',
      intro: 'Cuando a tu hijo o a tu hija le cuesta algo, en el cole, en casa, con los amigos o consigo mismo, no tienes por qué saber qué hacer. Trabajamos con ellos y con vosotros, porque la familia es parte de la solución.',
      voces: ['¿y si es culpa nuestra?', 'en el cole dicen que no se concentra', 'ya no nos cuenta nada'],
      ayudaTitulo: 'En qué os podemos ayudar',
      ayuda: [
        ['TDAH', 'Impulsividad, dificultad para concentrarse u organizarse, baja tolerancia a la frustración. El diagnóstico se recomienda a partir de los 7 años, más o menos.'],
        ['TEA', 'Acompañamiento al niño o la niña y a la familia en el día a día, en casa y en la escuela.'],
        ['Conducta', 'Rabietas, desafíos, agresividad o normas que no hay manera de que funcionen.'],
        ['Dificultades de aprendizaje', 'Cuando estudiar cuesta más de lo que debería y empieza a afectar a cómo se ve.'],
        ['Bullying', 'Tanto si lo sufre como si está implicado. Lo trabajamos con el niño y con la familia.'],
        ['Ansiedad, miedos y ánimo bajo', 'También los niños y los adolescentes se preocupan, se bloquean o se apagan.'],
        ['Adolescencia', 'Autoestima, gestión de las emociones, relación con la comida (TCA) o pensamientos obsesivos (TOC).'],
        ['Crianza', 'Pautas de educación positiva para madres y padres que quieren acompañar mejor.'],
      ],
      comoTitulo: 'Cómo trabajamos',
      como: [
        'En la primera sesión nos contáis qué os preocupa. Después trabajamos con vuestro hijo o vuestra hija y os damos pautas para continuar en casa.',
        'Maite tiene un máster en Psicología Infantil y Juvenil y formación en disciplina positiva y método Montessori.',
        'Las sesiones con niños son siempre presenciales, en la consulta de Granollers.',
      ],
      faqTitulo: 'Lo que suelen preguntar las familias',
      faq: [
        ['¿Tenemos que venir los padres?', 'A la primera sesión, sí: nos contáis qué os preocupa. Después depende de la edad y de cada caso.'],
        ['¿Hacéis sesiones online con niños?', 'No. Las sesiones con niños son siempre presenciales, en la consulta.'],
        ['¿Cómo le explico que va a venir?', 'Con naturalidad: que va a hablar con alguien que ayuda a los niños y a las familias a estar mejor.'],
      ],
    },
    ca: {
      hora: 'tarde',
      h1: 'Teràpia per a infants i adolescents',
      intro: "Quan al teu fill o a la teva filla li costa alguna cosa, a l’escola, a casa, amb els amics o amb si mateix, no tens per què saber què fer. Treballem amb ells i amb vosaltres, perquè la família és part de la solució.",
      voces: ['i si és culpa nostra?', "a l’escola diuen que no es concentra", 'ja no ens explica res'],
      ayudaTitulo: 'En què us podem ajudar',
      ayuda: [
        ['TDAH', "Impulsivitat, dificultat per concentrar-se o organitzar-se, baixa tolerància a la frustració. El diagnòstic es recomana a partir dels 7 anys, més o menys."],
        ['TEA', "Acompanyament a l’infant i a la família en el dia a dia, a casa i a l’escola."],
        ['Conducta', 'Rebequeries, desafiaments, agressivitat o normes que no hi ha manera que funcionin.'],
        ["Dificultats d’aprenentatge", 'Quan estudiar costa més del que hauria i comença a afectar com es veu.'],
        ['Bullying', "Tant si el pateix com si hi està implicat. Ho treballem amb l’infant i amb la família."],
        ['Ansietat, pors i ànim baix', "També els infants i els adolescents es preocupen, es bloquegen o s’apaguen."],
        ['Adolescència', 'Autoestima, gestió de les emocions, relació amb el menjar (TCA) o pensaments obsessius (TOC).'],
        ['Criança', 'Pautes d’educació positiva per a mares i pares que volen acompanyar millor.'],
      ],
      comoTitulo: 'Com treballem',
      como: [
        "A la primera sessió ens expliqueu què us preocupa. Després treballem amb el vostre fill o la vostra filla i us donem pautes per continuar a casa.",
        'La Maite té un màster en Psicologia Infantil i Juvenil i formació en disciplina positiva i mètode Montessori.',
        'Les sessions amb infants són sempre presencials, a la consulta de Granollers.',
      ],
      faqTitulo: 'El que solen preguntar les famílies',
      faq: [
        ['Hi hem de venir els pares?', "A la primera sessió, sí: ens expliqueu què us preocupa. Després depèn de l’edat i de cada cas."],
        ['Feu sessions online amb infants?', 'No. Les sessions amb infants són sempre presencials, a la consulta.'],
        ["Com li explico que vindrà?", 'Amb naturalitat: que parlarà amb algú que ajuda els infants i les famílies a estar millor.'],
      ],
    },
  },
  pareja: {
    es: {
      hora: 'ocaso',
      h1: 'Terapia de pareja y familia',
      intro: 'Cuando las conversaciones acaban siempre en discusión, aparecen los celos o sentís que ya no sois los de antes, no hace falta llegar al límite para pedir ayuda. Un espacio neutral para escucharos y volver a entenderos.',
      voces: ['discutimos por todo', 'ya no somos los de antes', 'en casa nadie se escucha'],
      ayudaTitulo: 'En qué os podemos ayudar',
      ayuda: [
        ['Comunicación y discusiones', 'Conversaciones que siempre acaban igual y temas que ya no os atrevéis a tocar.'],
        ['Celos y desconfianza', 'Cuando la duda se instala y lo tiñe todo.'],
        ['Rutina y desgaste', 'El enamoramiento del principio se vuelve rutina y la falta de ganas acaba en discusiones.'],
        ['Rupturas y separaciones', 'Decidir si seguir, separarse con el menor daño posible o rehacerse después.'],
        ['Sexualidad', 'La insatisfacción sexual también se puede hablar y trabajar.'],
        ['Conflictos familiares', 'Entre padres e hijos, entre hermanos o con la familia de cada uno.'],
        ['Crianza en pareja', 'Ponerse de acuerdo en cómo educar sin que se convierta en otra guerra.'],
      ],
      comoTitulo: 'Cómo trabajamos',
      como: [
        'Escuchamos a los dos, o a toda la familia, sin tomar partido. Trabajamos la comunicación, la empatía, la asertividad y emociones como la culpa, la rabia o el miedo.',
        'Partimos de la terapia sistémica: miramos la relación como un sistema, no buscamos culpables.',
        'Las sesiones de pareja y familia duran 55 minutos y se pueden hacer en la consulta o por videollamada.',
      ],
      frase: 'Una buena relación de pareja no se construye desde la evitación, sino desde el afrontamiento.',
      faqTitulo: 'Lo que suele preguntarse',
      faq: [
        ['¿Y si mi pareja no quiere venir?', 'Puedes empezar tú. Trabajar lo que te pasa en la relación ya cambia cosas, y más adelante puede sumarse.'],
        ['¿Se puede hacer online?', 'Sí, por videollamada, cada uno desde donde esté o los dos juntos.'],
        ['¿Cuánto cuesta?', 'La sesión de pareja o familia cuesta 75 €, en la consulta y online.'],
      ],
    },
    ca: {
      hora: 'ocaso',
      h1: 'Teràpia de parella i família',
      intro: "Quan les converses acaben sempre en discussió, apareix la gelosia o sentiu que ja no sou els d’abans, no cal arribar al límit per demanar ajuda. Un espai neutral per escoltar-vos i tornar a entendre-us.",
      voces: ['discutim per tot', "ja no som els d’abans", 'a casa ningú no escolta'],
      ayudaTitulo: 'En què us podem ajudar',
      ayuda: [
        ['Comunicació i discussions', 'Converses que sempre acaben igual i temes que ja no us atreviu a tocar.'],
        ['Gelosia i desconfiança', "Quan el dubte s’instal·la i ho tenyeix tot."],
        ['Rutina i desgast', "L’enamorament del principi es torna rutina i la manca de ganes acaba en discussions."],
        ['Ruptures i separacions', 'Decidir si continuar, separar-se amb el mínim dany possible o refer-se després.'],
        ['Sexualitat', 'La insatisfacció sexual també es pot parlar i treballar.'],
        ['Conflictes familiars', 'Entre pares i fills, entre germans o amb la família de cadascú.'],
        ['Criança en parella', "Posar-se d’acord en com educar sense que es converteixi en una altra guerra."],
      ],
      comoTitulo: 'Com treballem',
      como: [
        "Escoltem tots dos, o tota la família, sense prendre partit. Treballem la comunicació, l’empatia, l’assertivitat i emocions com la culpa, la ràbia o la por.",
        'Partim de la teràpia sistèmica: mirem la relació com un sistema, no busquem culpables.',
        'Les sessions de parella i família duren 55 minuts i es poden fer a la consulta o per videotrucada.',
      ],
      frase: "Una bona relació de parella no es construeix des de l’evitació, sinó des de l’afrontament.",
      faqTitulo: 'El que se sol preguntar',
      faq: [
        ['I si la meva parella no vol venir?', 'Pots començar tu. Treballar el que et passa en la relació ja canvia coses, i més endavant s’hi pot sumar.'],
        ['Es pot fer online?', "Sí, per videotrucada, cadascú des d’on sigui o tots dos junts."],
        ['Quant costa?', 'La sessió de parella o família costa 75 €, a la consulta i online.'],
      ],
    },
  },
  online: {
    es: {
      hora: 'mediodia',
      h1: 'Terapia online',
      intro: 'La misma terapia, desde donde estés a gusto. Por videollamada o por teléfono, sin desplazarte y con el mismo horario que en la consulta.',
      voces: ['no tengo tiempo de ir a ninguna parte', 'me da apuro ir a una consulta', 'vivo lejos de Granollers'],
      ayudaTitulo: 'Para quién es',
      ayuda: [
        ['Adultos', 'Ansiedad, estrés, autoestima, duelo o lo que te traiga. Sesiones de 55 minutos.'],
        ['Parejas y familias', 'Juntos en la misma pantalla o cada uno desde donde esté.'],
        ['Si no puedes venir', 'Horarios complicados, viajes, movilidad reducida o simplemente comodidad.'],
        ['Si quieres combinar', 'Puedes alternar sesiones presenciales y online cuando te vaya mejor.'],
      ],
      comoTitulo: 'Qué necesitas',
      como: [
        'Un móvil, una tableta o un ordenador con conexión a internet, y un sitio tranquilo donde puedas hablar con calma.',
        'Unos auriculares ayudan a que te sientas más en privado.',
        'Las sesiones con niños son siempre presenciales.',
      ],
      pasosTitulo: 'Cómo funciona',
      pasos: [
        ['Reservas', 'Eliges día y hora en la agenda online, o nos escribes y lo buscamos contigo.'],
        ['Te llega el enlace', 'Antes de la sesión te enviamos el enlace de la videollamada.'],
        ['Te conectas', 'Desde el móvil o el ordenador, sin instalar nada raro.'],
        ['Seguimos en contacto', 'Entre sesiones tienes ejercicios adaptados y WhatsApp para dudas.'],
      ],
      faqTitulo: 'Lo que suele preguntarse',
      faq: [
        ['¿Es la misma terapia que en la consulta?', 'Sí: mismo enfoque, misma duración (55 minutos) y la misma psicóloga.'],
        ['¿Puedo hacerla por teléfono?', 'Sí, si te va mejor que la videollamada.'],
        ['¿Cuánto cuesta?', 'La sesión individual online, desde 60 €. La de pareja o familia, 75 €.'],
      ],
    },
    ca: {
      hora: 'mediodia',
      h1: 'Teràpia online',
      intro: "La mateixa teràpia, des d’on estiguis a gust. Per videotrucada o per telèfon, sense desplaçar-te i amb el mateix horari que a la consulta.",
      voces: ["no tinc temps d’anar enlloc", 'em fa vergonya anar a una consulta', 'visc lluny de Granollers'],
      ayudaTitulo: 'Per a qui és',
      ayuda: [
        ['Adults', "Ansietat, estrès, autoestima, dol o el que et porti aquí. Sessions de 55 minuts."],
        ['Parelles i famílies', "Junts a la mateixa pantalla o cadascú des d’on sigui."],
        ['Si no pots venir', 'Horaris complicats, viatges, mobilitat reduïda o simplement comoditat.'],
        ['Si vols combinar', 'Pots alternar sessions presencials i online quan et vagi millor.'],
      ],
      comoTitulo: 'Què necessites',
      como: [
        'Un mòbil, una tauleta o un ordinador amb connexió a internet, i un lloc tranquil on puguis parlar amb calma.',
        "Uns auriculars ajuden que et sentis més en privat.",
        'Les sessions amb infants són sempre presencials.',
      ],
      pasosTitulo: 'Com funciona',
      pasos: [
        ['Reserves', "Tries dia i hora a l’agenda online, o ens escrius i ho busquem amb tu."],
        ["T’arriba l’enllaç", "Abans de la sessió t’enviem l’enllaç de la videotrucada."],
        ['Et connectes', "Des del mòbil o l’ordinador, sense instal·lar res estrany."],
        ['Seguim en contacte', 'Entre sessions tens exercicis adaptats i WhatsApp per als dubtes.'],
      ],
      faqTitulo: 'El que se sol preguntar',
      faq: [
        ['És la mateixa teràpia que a la consulta?', 'Sí: mateix enfocament, mateixa durada (55 minuts) i la mateixa psicòloga.'],
        ['La puc fer per telèfon?', 'Sí, si et va millor que la videotrucada.'],
        ['Quant costa?', 'La sessió individual online, des de 60 €. La de parella o família, 75 €.'],
      ],
    },
  },
};

export const formacion = {
  es: [
    ['Licenciada en Psicología', 'UAB y UOC, 2014'],
    ['Máster en Psicología Infantil y Juvenil', 'Universidad Rey Juan Carlos, 2017'],
    ['Máster en Terapias de Tercera Generación', 'Universidad Isabel I'],
    ['Formación en disciplina positiva y método Montessori', ''],
  ],
  ca: [
    ['Llicenciada en Psicologia', 'UAB i UOC, 2014'],
    ['Màster en Psicologia Infantil i Juvenil', 'Universidad Rey Juan Carlos, 2017'],
    ['Màster en Teràpies de Tercera Generació', 'Universidad Isabel I'],
    ['Formació en disciplina positiva i mètode Montessori', ''],
  ],
} as const;

export const enfoques = {
  es: [
    ['Integrativa', 'No nos casamos con una sola escuela: elegimos las herramientas que mejor encajan contigo y con lo que te pasa.'],
    ['Cognitivo-conductual', 'Trabaja la relación entre lo que piensas, lo que sientes y lo que haces, con ejercicios concretos para el día a día.'],
    ['Breve estratégica', 'Se centra en el problema concreto y en lo que lo mantiene, con objetivos claros desde el principio.'],
    ['Sistémica', 'Mira a la persona dentro de su familia y sus relaciones. Es la base del trabajo con parejas y familias.'],
  ],
  ca: [
    ['Integrativa', "No ens casem amb una sola escola: triem les eines que millor encaixen amb tu i amb el que et passa."],
    ['Cognitivoconductual', 'Treballa la relació entre el que penses, el que sents i el que fas, amb exercicis concrets per al dia a dia.'],
    ['Breu estratègica', 'Se centra en el problema concret i en el que el manté, amb objectius clars des del principi.'],
    ['Sistèmica', 'Mira la persona dins de la seva família i les seves relacions. És la base del treball amb parelles i famílies.'],
  ],
} as const;
