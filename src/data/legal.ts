import { contact, type Lang } from './site';

export type BloqueLegal = string | { ul: string[] } | { tabla: [string, string][]; cabecera: [string, string] };
export interface SeccionLegal { h2: string; bloques: BloqueLegal[] }
export interface TextoLegal { titulo: string; descripcion: string; actualizado: string; secciones: SeccionLegal[] }
export type DocLegal = 'legal' | 'privacidad' | 'cookies';

const titular = 'María Teresa Vicente Pérez';
const nombreComercial = 'Maite Psicóloga';
const nif = '53120648D';
const domicilio = 'Carrer de Roger de Flor, 63, 1-2, 08401 Granollers (Barcelona)';
const correo = `<a href="mailto:${contact.email}">${contact.email}</a>`;
const enlace = (url: string, texto = url.replace(/^https:\/\//, '')) => `<a href="${url}" target="_blank" rel="noopener">${texto}</a>`;

export const legal: Record<Lang, Record<DocLegal, TextoLegal>> = {
  es: {
    legal: {
      titulo: 'Aviso legal',
      descripcion: 'Datos de la titular de la web, información profesional y condiciones de uso.',
      actualizado: 'Última actualización: 11 de noviembre de 2026',
      secciones: [
        {
          h2: 'Titular del sitio web',
          bloques: [
            'En cumplimiento del artículo 10 de la Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico, se facilitan los datos de la titular de este sitio web:',
            { ul: [
              `Titular: ${titular}, profesional autónoma.`,
              `Nombre comercial: ${nombreComercial}.`,
              `NIF: ${nif}.`,
              `Domicilio profesional: ${domicilio}, España.`,
              `Correo electrónico: ${correo}.`,
              `Teléfono: <a href="${contact.phoneHref}">${contact.phone}</a>.`,
              'Sitio web: https://www.maitepsicologa.com.',
            ] },
          ],
        },
        {
          h2: 'Información profesional',
          bloques: [
            `${titular} es psicóloga, licenciada en Psicología en España y colegiada n.º ${contact.colegiada} en el Col·legi Oficial de Psicologia de Catalunya (COPC).`,
            `Martina Pages, psicóloga que también presta sus servicios en la consulta, está colegiada con el n.º ${contact.colegiadaMartina} en el mismo colegio.`,
            `La normativa profesional y deontológica puede consultarse en ${enlace('https://www.copc.cat/normativa-propia-aplicable')}.`,
          ],
        },
        {
          h2: 'Finalidad y uso del sitio web',
          bloques: [
            'Esta web ofrece información sobre la consulta, sus profesionales y sus servicios, y facilita el contacto y la solicitud de citas. Los contenidos divulgativos tienen carácter general y no sustituyen una valoración individual ni la atención profesional adaptada a cada persona.',
            'Las personas usuarias deben utilizar la web de forma lícita y respetuosa, sin actuaciones que puedan perjudicar su funcionamiento o los derechos de otras personas.',
          ],
        },
        {
          h2: 'Citas y enlaces externos',
          bloques: [
            'Las reservas se realizan mediante Setmore o a través de los canales de contacto indicados. Antes de confirmar una contratación se facilitarán las condiciones aplicables al servicio, incluidos el precio y, cuando proceda, las condiciones de pago y cancelación. Este aviso no establece por sí mismo dichas condiciones.',
            'La web puede enlazar a plataformas externas, como Setmore, WhatsApp, Google Maps o redes sociales. Al acceder a ellas se aplicarán también sus propias condiciones y políticas de privacidad.',
          ],
        },
        {
          h2: 'Contenidos y derechos',
          bloques: [
            'Los textos, fotografías y demás contenidos están protegidos por los derechos que correspondan a sus titulares. Su utilización deberá respetar las autorizaciones y los usos permitidos por la legislación. Se procurará mantener la información actualizada; si detectas un error, puedes comunicarlo al correo indicado.',
          ],
        },
      ],
    },
    privacidad: {
      titulo: 'Política de privacidad',
      descripcion: 'Qué datos personales se tratan al contactar o reservar, para qué, durante cuánto tiempo y cómo ejercer tus derechos.',
      actualizado: 'Última actualización: 11 de noviembre de 2026',
      secciones: [
        {
          h2: '1. Responsable y contacto',
          bloques: [
            `La responsable del tratamiento de los datos gestionados a través de esta web y de sus canales de contacto es ${titular}, profesional autónoma, con NIF ${nif} y domicilio en ${domicilio}, España. Puedes contactar en ${correo} o en el teléfono <a href="${contact.phoneHref}">${contact.phone}</a>.`,
          ],
        },
        {
          h2: '2. Qué información comprende esta política',
          bloques: [
            'Esta política explica el tratamiento de datos relacionado con las consultas, las solicitudes de información y la organización de citas. La atención profesional y sus registros requieren, además, información específica sobre protección de datos y las condiciones de la intervención, que facilitará la profesional responsable antes de iniciar ese tratamiento.',
          ],
        },
        {
          h2: '3. Qué datos se recogen',
          bloques: [
            'Se tratarán los datos que facilites al contactar o reservar: nombre, datos de contacto, contenido de la consulta y datos necesarios para organizar la cita, como la profesional elegida, el servicio, el día y la hora. Cuando corresponda, se solicitarán los datos necesarios para facturar y cumplir obligaciones legales.',
            'Para una primera consulta o una reserva no es necesario enviar informes, diagnósticos ni una descripción detallada de tu situación personal. La propia información sobre una cita puede revelar datos relativos a la salud y requiere una protección especial.',
            'Al visitar la web, el proveedor de alojamiento registra de forma automática la dirección IP y datos técnicos de la conexión, como el navegador y la hora de la visita, por motivos de seguridad. Esta web no utiliza esos datos para identificarte ni para elaborar perfiles, y no incluye formularios, analíticas ni herramientas de seguimiento.',
          ],
        },
        {
          h2: '4. Para qué se utilizan y con qué base jurídica',
          bloques: [
            'Las solicitudes sobre servicios y las reservas se atienden para aplicar las medidas precontractuales que solicites o gestionar la relación contractual, conforme al artículo 6.1.b del RGPD. Los datos necesarios para cumplir obligaciones fiscales, contables u otras obligaciones legales se tratan con base en el artículo 6.1.c del RGPD.',
            'Las comunicaciones generales ajenas a una contratación, así como los registros técnicos de seguridad de la web, se tratan sobre la base del interés legítimo, conforme al artículo 6.1.f del RGPD. Puedes oponerte a este tratamiento por motivos relacionados con tu situación particular.',
            'Contactar o reservar no supone suscribirse a comunicaciones publicitarias.',
          ],
        },
        {
          h2: '5. Datos relativos a la salud',
          bloques: [
            `${nombreComercial} ofrece servicios de acompañamiento terapéutico no sanitario. Para gestionar solicitudes, reservas y citas, se aplica el principio de minimización de datos del artículo 5.1.c del RGPD.`,
            'Las agendas compartidas de Setmore muestran únicamente nombre y apellidos, fecha y hora y tipo de servicio reservado, datos necesarios para identificar correctamente a las personas, evitar confusiones y gestionar citas, cambios y cancelaciones.',
            'Las profesionales colaboradoras pueden consultar esta información exclusivamente para tareas de coordinación administrativa, bajo obligaciones de confidencialidad. Las anotaciones de las sesiones y los expedientes individuales se mantienen separados de los calendarios compartidos.',
            'Aunque la actividad no sea sanitaria, durante la terapia pueden tratarse datos relativos a la salud, especialmente protegidos por el artículo 9 del RGPD. Cuando sea necesario tratarlos sobre la base del consentimiento explícito (artículo 9.2.a), este se solicitará previamente, de forma específica e informada, se conservará constancia de su otorgamiento y podrá retirarse mediante los canales indicados en esta política, sin perjuicio de los tratamientos anteriores legítimos y las obligaciones legales aplicables. Además, deberá existir una base jurídica válida conforme al artículo 6 del RGPD.',
            'Por protección de tu privacidad, evita incluir diagnósticos, informes médicos o información sensible en los mensajes de contacto y en el formulario de reserva. Si es necesario aportar esta información, la profesional te indicará el procedimiento adecuado para hacerlo de forma segura.',
          ],
        },
        {
          h2: '6. Atención de cada profesional',
          bloques: [
            `${titular} y Martina Pages, psicóloga colegiada n.º ${contact.colegiadaMartina} en el COPC, atienden cada una a sus propios pacientes. Cada profesional dispone de su propia cuenta en Setmore y de acceso individual y exclusivo a las fichas de sus pacientes, y es responsable del tratamiento de los datos de la atención que presta.`,
            'Ambas pueden ver la agenda de la otra con el único fin de coordinar las citas presenciales y evitar duplicidades, con los datos mínimos descritos en el apartado anterior. Martina Pages te facilitará la información de privacidad correspondiente a la atención que te preste.',
          ],
        },
        {
          h2: '7. Proveedores y personas destinatarias',
          bloques: [
            'Para prestar el servicio intervienen los siguientes proveedores, que acceden a los datos solo en la medida necesaria para su función:',
            { ul: [
              'GitHub (alojamiento de la web).',
              'DonDominio (dominio y correo electrónico).',
              'Setmore (reserva y gestión de citas).',
              'WhatsApp, si eliges contactar por ese canal. Puedes optar por el correo electrónico o el teléfono si prefieres otro canal.',
              'Google Maps, solo si pulsas «Mostrar el mapa» o abres la ubicación en Google Maps.',
            ] },
            'Los datos se comunicarán a las administraciones u organismos competentes cuando exista una obligación legal.',
            `Puedes consultar las políticas de estas plataformas en ${enlace('https://www.setmore.com/privacy')}, ${enlace('https://www.whatsapp.com/legal/privacy-policy-eea')}, ${enlace('https://docs.github.com/es/site-policy/privacy-policies/github-general-privacy-statement')} y ${enlace('https://policies.google.com/privacy')}.`,
          ],
        },
        {
          h2: '8. Transferencias internacionales',
          bloques: [
            'Algunos proveedores, como GitHub (alojamiento de la web) y Setmore (reservas), pueden tratar datos fuera del Espacio Económico Europeo, en particular en Estados Unidos. En esos casos, las transferencias se amparan en la decisión de adecuación del Marco de Privacidad de Datos UE-EE. UU., cuando el proveedor está adherido, o en las cláusulas contractuales tipo aprobadas por la Comisión Europea.',
            `Puedes solicitar más información sobre estas garantías escribiendo a ${correo}.`,
          ],
        },
        {
          h2: '9. Durante cuánto tiempo se conservan los datos',
          bloques: [
            { cabecera: ['Tipo de información', 'Plazo de conservación'], tabla: [
              ['Documentación y anotaciones de las sesiones de terapia', 'Hasta 5 años desde la finalización del acompañamiento terapéutico.'],
              ['Reservas y citas', 'Hasta 2 años desde la última gestión de la reserva.'],
              ['Consultas de personas que no llegan a iniciar terapia', 'Hasta 2 años desde el último contacto, cuando sea necesario para gestionar o dar seguimiento a su solicitud.'],
              ['Facturas y documentación contable', '6 años, salvo obligaciones legales que requieran un plazo superior.'],
            ] },
            'Transcurridos los plazos aplicables, los datos se eliminarán de forma segura o se bloquearán cuando legalmente corresponda, salvo que exista una obligación legal o una causa debidamente justificada que exija conservarlos durante más tiempo.',
          ],
        },
        {
          h2: '10. Tus derechos',
          bloques: [
            `Puedes solicitar el acceso a tus datos, su rectificación o supresión, la limitación del tratamiento, la oposición y, cuando proceda, la portabilidad, escribiendo a ${correo} o al domicilio profesional indicado. Explica qué derecho deseas ejercer e incluye los datos necesarios para poder atender tu solicitud.`,
            'Si existen dudas razonables sobre tu identidad, podrá solicitarse información adicional proporcionada para comprobarla. No es necesario adjuntar una copia del DNI de forma automática en todas las solicitudes.',
            'Cuando un tratamiento se base en tu consentimiento, podrás retirarlo en cualquier momento sin que ello afecte a la licitud del tratamiento anterior a su retirada. Algunos derechos pueden estar sujetos a límites legales, por ejemplo, cuando exista una obligación de conservar determinados datos.',
            'Con carácter general, recibirás respuesta en un mes desde la recepción de tu solicitud. Si la complejidad o el número de solicitudes justifican una ampliación conforme al RGPD, se te informará dentro de ese primer mes.',
            `Si consideras que el tratamiento de tus datos no respeta la normativa, puedes presentar una reclamación ante la Agencia Española de Protección de Datos: ${enlace('https://www.aepd.es')}.`,
          ],
        },
        {
          h2: '11. Datos de menores y representación',
          bloques: [
            'Si contactas en nombre de otra persona, facilita únicamente los datos necesarios y asegúrate de contar con la representación o legitimación que corresponda. Las solicitudes relativas a menores requieren comprobar las circunstancias de representación y las reglas aplicables al servicio. El consentimiento en materia de datos personales no equivale por sí mismo al consentimiento para la intervención profesional.',
          ],
        },
        {
          h2: '12. Actualizaciones',
          bloques: [
            'Esta política se actualizará cuando cambien los tratamientos o sea necesario adaptar la información facilitada. Los cambios se identificarán mediante la fecha de actualización. Si un cambio exige nueva información individual o consentimiento, se actuará conforme a la normativa aplicable.',
          ],
        },
      ],
    },
    cookies: {
      titulo: 'Política de cookies',
      descripcion: 'Esta web no instala cookies. Qué ocurre con el mapa y con los enlaces a otros servicios.',
      actualizado: 'Última actualización: 11 de noviembre de 2026',
      secciones: [
        {
          h2: 'Uso de cookies y tecnologías similares',
          bloques: [
            'Este sitio web no utiliza cookies ni otras tecnologías de almacenamiento o acceso a información en tu dispositivo. Tampoco utiliza herramientas de analítica ni tecnologías de seguimiento publicitario.',
            'Por eso no se muestra ningún aviso para aceptar cookies: no se instalan.',
          ],
        },
        {
          h2: 'El mapa de la consulta',
          bloques: [
            'La portada y la página de contacto incluyen un mapa que no se carga hasta que pulsas «Mostrar el mapa». Mientras no lo pulses, la web no se conecta con Google.',
            `Si lo pulsas, el mapa se carga desde Google Maps, que recibe tu visita y puede utilizar cookies o tecnologías similares conforme a su propia política: ${enlace('https://policies.google.com/technologies/cookies')}. También puedes abrir la ubicación directamente en Google Maps con el enlace que hay junto al mapa.`,
          ],
        },
        {
          h2: 'Enlaces a servicios externos',
          bloques: [
            'La web incluye enlaces que permiten acceder a otros servicios, como Setmore para reservar cita, WhatsApp para contactar o Instagram. Al abrir estos enlaces visitarás servicios de terceros, que pueden utilizar sus propias cookies o tecnologías y tienen sus propias políticas de privacidad.',
          ],
        },
        {
          h2: 'Cambios en la configuración',
          bloques: [
            'Si se incorporan herramientas que utilicen cookies o tecnologías similares, esta política se actualizará. Cuando la normativa lo exija, se facilitará información y se solicitará el consentimiento antes de su uso, con las opciones correspondientes para rechazarlo o retirarlo.',
            `Puedes consultar cualquier duda sobre esta política en ${correo}.`,
          ],
        },
      ],
    },
  },
  ca: {
    legal: {
      titulo: 'Avís legal',
      descripcion: 'Dades de la titular del web, informació professional i condicions d’ús.',
      actualizado: 'Darrera actualització: 11 de novembre de 2026',
      secciones: [
        {
          h2: 'Titular del lloc web',
          bloques: [
            'En compliment de l’article 10 de la Llei 34/2002, de serveis de la societat de la informació i de comerç electrònic, es faciliten les dades de la titular d’aquest lloc web:',
            { ul: [
              `Titular: ${titular}, professional autònoma.`,
              `Nom comercial: ${nombreComercial}.`,
              `NIF: ${nif}.`,
              `Domicili professional: ${domicilio}, Espanya.`,
              `Correu electrònic: ${correo}.`,
              `Telèfon: <a href="${contact.phoneHref}">${contact.phone}</a>.`,
              'Lloc web: https://www.maitepsicologa.com.',
            ] },
          ],
        },
        {
          h2: 'Informació professional',
          bloques: [
            `${titular} és psicòloga, llicenciada en Psicologia a Espanya i col·legiada núm. ${contact.colegiada} al Col·legi Oficial de Psicologia de Catalunya (COPC).`,
            `Martina Pages, psicòloga que també presta els seus serveis a la consulta, està col·legiada amb el núm. ${contact.colegiadaMartina} al mateix col·legi.`,
            `La normativa professional i deontològica es pot consultar a ${enlace('https://www.copc.cat/normativa-propia-aplicable')}.`,
          ],
        },
        {
          h2: 'Finalitat i ús del lloc web',
          bloques: [
            'Aquest web ofereix informació sobre la consulta, les seves professionals i els seus serveis, i facilita el contacte i la sol·licitud de cites. Els continguts divulgatius tenen caràcter general i no substitueixen una valoració individual ni l’atenció professional adaptada a cada persona.',
            'Les persones usuàries han d’utilitzar el web de manera lícita i respectuosa, sense actuacions que puguin perjudicar-ne el funcionament o els drets d’altres persones.',
          ],
        },
        {
          h2: 'Cites i enllaços externs',
          bloques: [
            'Les reserves es fan mitjançant Setmore o pels canals de contacte indicats. Abans de confirmar una contractació es facilitaran les condicions aplicables al servei, inclosos el preu i, quan escaigui, les condicions de pagament i cancel·lació. Aquest avís no estableix per si mateix aquestes condicions.',
            'El web pot enllaçar a plataformes externes, com Setmore, WhatsApp, Google Maps o xarxes socials. En accedir-hi s’aplicaran també les seves pròpies condicions i polítiques de privacitat.',
          ],
        },
        {
          h2: 'Continguts i drets',
          bloques: [
            'Els textos, les fotografies i la resta de continguts estan protegits pels drets que corresponguin als seus titulars. La seva utilització ha de respectar les autoritzacions i els usos permesos per la legislació. Es procurarà mantenir la informació actualitzada; si detectes un error, pots comunicar-ho al correu indicat.',
          ],
        },
      ],
    },
    privacidad: {
      titulo: 'Política de privacitat',
      descripcion: 'Quines dades personals es tracten en contactar o reservar, per a què, durant quant de temps i com exercir els teus drets.',
      actualizado: 'Darrera actualització: 11 de novembre de 2026',
      secciones: [
        {
          h2: '1. Responsable i contacte',
          bloques: [
            `La responsable del tractament de les dades gestionades a través d’aquest web i dels seus canals de contacte és ${titular}, professional autònoma, amb NIF ${nif} i domicili a ${domicilio}, Espanya. Pots contactar a ${correo} o al telèfon <a href="${contact.phoneHref}">${contact.phone}</a>.`,
          ],
        },
        {
          h2: '2. Què inclou aquesta política',
          bloques: [
            'Aquesta política explica el tractament de dades relacionat amb les consultes, les sol·licituds d’informació i l’organització de cites. L’atenció professional i els seus registres requereixen, a més, informació específica sobre protecció de dades i les condicions de la intervenció, que facilitarà la professional responsable abans d’iniciar aquest tractament.',
          ],
        },
        {
          h2: '3. Quines dades es recullen',
          bloques: [
            'Es tractaran les dades que facilitis en contactar o reservar: nom, dades de contacte, contingut de la consulta i dades necessàries per organitzar la cita, com la professional escollida, el servei, el dia i l’hora. Quan correspongui, es demanaran les dades necessàries per facturar i complir obligacions legals.',
            'Per a una primera consulta o una reserva no cal enviar informes, diagnòstics ni una descripció detallada de la teva situació personal. La mateixa informació sobre una cita pot revelar dades relatives a la salut i requereix una protecció especial.',
            'En visitar el web, el proveïdor d’allotjament registra de manera automàtica l’adreça IP i dades tècniques de la connexió, com el navegador i l’hora de la visita, per motius de seguretat. Aquest web no utilitza aquestes dades per identificar-te ni per elaborar perfils, i no inclou formularis, analítiques ni eines de seguiment.',
          ],
        },
        {
          h2: '4. Per a què s’utilitzen i amb quina base jurídica',
          bloques: [
            'Les sol·licituds sobre serveis i les reserves s’atenen per aplicar les mesures precontractuals que sol·licitis o gestionar la relació contractual, d’acord amb l’article 6.1.b del RGPD. Les dades necessàries per complir obligacions fiscals, comptables o altres obligacions legals es tracten amb base en l’article 6.1.c del RGPD.',
            'Les comunicacions generals alienes a una contractació, així com els registres tècnics de seguretat del web, es tracten sobre la base de l’interès legítim, d’acord amb l’article 6.1.f del RGPD. Pots oposar-te a aquest tractament per motius relacionats amb la teva situació particular.',
            'Contactar o reservar no implica subscriure’s a comunicacions publicitàries.',
          ],
        },
        {
          h2: '5. Dades relatives a la salut',
          bloques: [
            `${nombreComercial} ofereix serveis d’acompanyament terapèutic no sanitari. Per gestionar sol·licituds, reserves i cites, s’aplica el principi de minimització de dades de l’article 5.1.c del RGPD.`,
            'Les agendes compartides de Setmore mostren únicament nom i cognoms, data i hora i tipus de servei reservat, dades necessàries per identificar correctament les persones, evitar confusions i gestionar cites, canvis i cancel·lacions.',
            'Les professionals col·laboradores poden consultar aquesta informació exclusivament per a tasques de coordinació administrativa, sota obligacions de confidencialitat. Les anotacions de les sessions i els expedients individuals es mantenen separats dels calendaris compartits.',
            'Encara que l’activitat no sigui sanitària, durant la teràpia es poden tractar dades relatives a la salut, especialment protegides per l’article 9 del RGPD. Quan calgui tractar-les sobre la base del consentiment explícit (article 9.2.a), aquest es demanarà prèviament, de manera específica i informada, se’n conservarà constància i es podrà retirar pels canals indicats en aquesta política, sense perjudici dels tractaments anteriors legítims i de les obligacions legals aplicables. A més, hi haurà d’haver una base jurídica vàlida d’acord amb l’article 6 del RGPD.',
            'Per protegir la teva privacitat, evita incloure diagnòstics, informes mèdics o informació sensible en els missatges de contacte i en el formulari de reserva. Si cal aportar aquesta informació, la professional t’indicarà el procediment adequat per fer-ho de manera segura.',
          ],
        },
        {
          h2: '6. Atenció de cada professional',
          bloques: [
            `${titular} i Martina Pages, psicòloga col·legiada núm. ${contact.colegiadaMartina} al COPC, atenen cadascuna els seus propis pacients. Cada professional disposa del seu propi compte a Setmore i d’accés individual i exclusiu a les fitxes dels seus pacients, i és responsable del tractament de les dades de l’atenció que presta.`,
            'Totes dues poden veure l’agenda de l’altra amb l’única finalitat de coordinar les cites presencials i evitar duplicitats, amb les dades mínimes descrites a l’apartat anterior. Martina Pages et facilitarà la informació de privacitat corresponent a l’atenció que et presti.',
          ],
        },
        {
          h2: '7. Proveïdors i persones destinatàries',
          bloques: [
            'Per prestar el servei hi intervenen els proveïdors següents, que accedeixen a les dades només en la mesura necessària per a la seva funció:',
            { ul: [
              'GitHub (allotjament del web).',
              'DonDominio (domini i correu electrònic).',
              'Setmore (reserva i gestió de cites).',
              'WhatsApp, si tries contactar per aquest canal. Pots optar pel correu electrònic o el telèfon si prefereixes un altre canal.',
              'Google Maps, només si prems «Mostrar el mapa» o obres la ubicació a Google Maps.',
            ] },
            'Les dades es comunicaran a les administracions o organismes competents quan hi hagi una obligació legal.',
            `Pots consultar les polítiques d’aquestes plataformes a ${enlace('https://www.setmore.com/privacy')}, ${enlace('https://www.whatsapp.com/legal/privacy-policy-eea')}, ${enlace('https://docs.github.com/es/site-policy/privacy-policies/github-general-privacy-statement')} i ${enlace('https://policies.google.com/privacy')}.`,
          ],
        },
        {
          h2: '8. Transferències internacionals',
          bloques: [
            'Alguns proveïdors, com GitHub (allotjament del web) i Setmore (reserves), poden tractar dades fora de l’Espai Econòmic Europeu, en particular als Estats Units. En aquests casos, les transferències s’empararan en la decisió d’adequació del Marc de Privacitat de Dades UE-EUA, quan el proveïdor hi està adherit, o en les clàusules contractuals tipus aprovades per la Comissió Europea.',
            `Pots demanar més informació sobre aquestes garanties escrivint a ${correo}.`,
          ],
        },
        {
          h2: '9. Durant quant de temps es conserven les dades',
          bloques: [
            { cabecera: ['Tipus d’informació', 'Termini de conservació'], tabla: [
              ['Documentació i anotacions de les sessions de teràpia', 'Fins a 5 anys des de la finalització de l’acompanyament terapèutic.'],
              ['Reserves i cites', 'Fins a 2 anys des de la darrera gestió de la reserva.'],
              ['Consultes de persones que no arriben a iniciar teràpia', 'Fins a 2 anys des del darrer contacte, quan sigui necessari per gestionar o fer el seguiment de la seva sol·licitud.'],
              ['Factures i documentació comptable', '6 anys, llevat d’obligacions legals que requereixin un termini superior.'],
            ] },
            'Un cop transcorreguts els terminis aplicables, les dades s’eliminaran de manera segura o es bloquejaran quan legalment correspongui, llevat que hi hagi una obligació legal o una causa degudament justificada que n’exigeixi la conservació durant més temps.',
          ],
        },
        {
          h2: '10. Els teus drets',
          bloques: [
            `Pots sol·licitar l’accés a les teves dades, la rectificació o supressió, la limitació del tractament, l’oposició i, quan escaigui, la portabilitat, escrivint a ${correo} o al domicili professional indicat. Explica quin dret vols exercir i inclou les dades necessàries per poder atendre la teva sol·licitud.`,
            'Si hi ha dubtes raonables sobre la teva identitat, es podrà demanar informació addicional proporcionada per comprovar-la. No cal adjuntar una còpia del DNI de manera automàtica en totes les sol·licituds.',
            'Quan un tractament es basi en el teu consentiment, el podràs retirar en qualsevol moment sense que això afecti la licitud del tractament anterior a la retirada. Alguns drets poden estar subjectes a límits legals, per exemple, quan hi hagi l’obligació de conservar determinades dades.',
            'Amb caràcter general, rebràs resposta en un mes des de la recepció de la teva sol·licitud. Si la complexitat o el nombre de sol·licituds justifiquen una ampliació d’acord amb el RGPD, se t’informarà dins d’aquest primer mes.',
            `Si consideres que el tractament de les teves dades no respecta la normativa, pots presentar una reclamació davant l’Agència Espanyola de Protecció de Dades: ${enlace('https://www.aepd.es')}.`,
          ],
        },
        {
          h2: '11. Dades de menors i representació',
          bloques: [
            'Si contactes en nom d’una altra persona, facilita únicament les dades necessàries i assegura’t de tenir la representació o legitimació que correspongui. Les sol·licituds relatives a menors requereixen comprovar les circumstàncies de representació i les regles aplicables al servei. El consentiment en matèria de dades personals no equival per si mateix al consentiment per a la intervenció professional.',
          ],
        },
        {
          h2: '12. Actualitzacions',
          bloques: [
            'Aquesta política s’actualitzarà quan canviïn els tractaments o calgui adaptar la informació facilitada. Els canvis s’identificaran mitjançant la data d’actualització. Si un canvi exigeix nova informació individual o consentiment, s’actuarà d’acord amb la normativa aplicable.',
          ],
        },
      ],
    },
    cookies: {
      titulo: 'Política de galetes',
      descripcion: 'Aquest web no instal·la galetes. Què passa amb el mapa i amb els enllaços a altres serveis.',
      actualizado: 'Darrera actualització: 11 de novembre de 2026',
      secciones: [
        {
          h2: 'Ús de galetes i tecnologies similars',
          bloques: [
            'Aquest lloc web no utilitza galetes ni altres tecnologies d’emmagatzematge o accés a informació en el teu dispositiu. Tampoc no utilitza eines d’analítica ni tecnologies de seguiment publicitari.',
            'Per això no es mostra cap avís per acceptar galetes: no se n’instal·la cap.',
          ],
        },
        {
          h2: 'El mapa de la consulta',
          bloques: [
            'La portada i la pàgina de contacte inclouen un mapa que no es carrega fins que prems «Mostrar el mapa». Mentre no el premis, el web no es connecta amb Google.',
            `Si el prems, el mapa es carrega des de Google Maps, que rep la teva visita i pot utilitzar galetes o tecnologies similars d’acord amb la seva pròpia política: ${enlace('https://policies.google.com/technologies/cookies')}. També pots obrir la ubicació directament a Google Maps amb l’enllaç que hi ha al costat del mapa.`,
          ],
        },
        {
          h2: 'Enllaços a serveis externs',
          bloques: [
            'El web inclou enllaços que permeten accedir a altres serveis, com Setmore per reservar cita, WhatsApp per contactar o Instagram. En obrir aquests enllaços visitaràs serveis de tercers, que poden utilitzar les seves pròpies galetes o tecnologies i tenen les seves pròpies polítiques de privacitat.',
          ],
        },
        {
          h2: 'Canvis en la configuració',
          bloques: [
            'Si s’incorporen eines que utilitzin galetes o tecnologies similars, aquesta política s’actualitzarà. Quan la normativa ho exigeixi, es facilitarà informació i es demanarà el consentiment abans del seu ús, amb les opcions corresponents per rebutjar-lo o retirar-lo.',
            `Pots consultar qualsevol dubte sobre aquesta política a ${correo}.`,
          ],
        },
      ],
    },
  },
};
