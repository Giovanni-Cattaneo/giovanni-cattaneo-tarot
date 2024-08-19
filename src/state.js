import { reactive } from 'vue'
export const state = reactive({
    flipCards: [],
    over: true,
    value: 0,
    cards: [
        {
            name: "Il Matto",
            retro: "retro.png",
            img: "matto.png",
            up: true,
            upValue: 1,
            downValue: -1,
            upMeaning: "Il Matto rappresenta l'inizio di un viaggio, la spontaneità e la libertà. È la carta del nuovo inizio e dell'innocenza, simbolo di possibilità illimitate e scelte non convenzionali. Invita a lanciarsi nell'ignoto con fiducia e a seguire il proprio cuore, senza paura delle conseguenze. Rappresenta anche l'ingenuità e l'incoscienza, esprimendo il potenziale di crescita che può derivare dall'apertura verso nuove esperienze.",
            downMeaning: "Quando appare capovolta, Il Matto può indicare imprudenza, irresponsabilità e mancanza di direzione. Può suggerire che si sta agendo senza pensare alle conseguenze o che si sta evitando di affrontare le proprie paure. La carta capovolta può segnalare un bisogno di riflessione prima di intraprendere nuovi percorsi e di evitare decisioni impulsive che potrebbero portare a problemi futuri."
        },
        {
            name: "Il Mago",
            retro: "retro.png",
            img: "mago.png",
            up: true,
            upValue: 1,
            downValue: -1,
            upMeaning: "Il Mago è una figura che rappresenta l'abilità di utilizzare le proprie risorse e talenti per raggiungere gli obiettivi. Questa carta simboleggia l'azione, la capacità di manifestare desideri e risultati attraverso la volontà e la concentrazione. Il Mago ha il potere di trasformare le idee in realtà, evidenziando il potenziale dell'intelligenza e delle competenze personali. È un segnale positivo di abilità, intraprendenza e successo che deriva dal merito e dall'azione.",
            downMeaning: "Capovolta, Il Mago può indicare manipolazione, inganno o mancanza di chiarezza. Può suggerire che le proprie risorse e talenti non sono utilizzati in modo efficace o che si sta cercando di ottenere risultati attraverso mezzi disonesti. Questa carta capovolta può essere un avvertimento di evitare trappole e di essere onesti e trasparenti nelle proprie azioni per evitare conseguenze negative."
        },
        {
            name: "La Papessa",
            retro: "retro.png",
            img: "papessa.png",
            up: true,
            upValue: 1,
            downValue: -1,
            upMeaning: "La Papessa è custode della saggezza e dell'intuizione. Rappresenta la conoscenza nascosta e il mistero, invitando a esplorare il regno dell'inconscio e ad ascoltare la voce interiore. Simboleggia l'accesso alla saggezza segreta e il potere della riflessione profonda. Questa carta può indicare un periodo di introspezione e l'importanza di fidarsi della propria intuizione e della propria connessione spirituale.",
            downMeaning: "Quando capovolta, La Papessa può indicare confusione, ignoranza o una chiusura mentale. Può suggerire che si sta ignorando la propria intuizione o che si è troppo focalizzati su risposte superficiali, trascurando la saggezza interiore. Questa carta capovolta potrebbe segnalare un bisogno di prestare maggiore attenzione ai propri sentimenti e di cercare risposte più profonde."
        },
        {
            name: "L'Imperatrice",
            retro: "retro.png",
            img: "imperatrice.png",
            up: true,
            upValue: 1,
            downValue: -1,
            upMeaning: "L'Imperatrice è simbolo di fertilità, abbondanza e creatività. Rappresenta la capacità di generare e nutrire, sia a livello fisico che emotivo. Questa carta celebra la crescita, il comfort e il benessere, e incarna il potere della creatività e dell'espressione artistica. È un richiamo a connettersi con la propria creatività e a cercare la bellezza e l'armonia nelle relazioni e nei progetti.",
            downMeaning: "Capovolta, L'Imperatrice può indicare stagnazione, mancanza di crescita o difficoltà a esprimere la propria creatività. Può suggerire che ci siano problemi con l'abbondanza o il comfort nella propria vita, e che sia necessario lavorare per superare ostacoli che impediscono la realizzazione dei propri desideri e progetti. Questa carta capovolta può anche segnalare tensioni nelle relazioni e difficoltà nel nutrire e sostenere gli altri."
        },
        {
            name: "L'Imperatore",
            retro: "retro.png",
            img: "imperatore.png",
            up: true,
            upValue: 0,
            downValue: -1,
            upMeaning: "L'Imperatore rappresenta l'autorità, il controllo e la stabilità. Simboleggia il potere e la struttura, e indica una figura di leadership e responsabilità. Questa carta suggerisce la necessità di stabilire ordine e disciplina nella propria vita, e di applicare la propria forza e determinazione per raggiungere gli obiettivi. Rappresenta la sicurezza e la stabilità che derivano dalla capacità di esercitare il controllo e prendere decisioni ferme.",
            downMeaning: "Quando appare capovolta, L'Imperatore può indicare abuso di potere, rigidezza o mancanza di disciplina. Può suggerire che ci sia una mancanza di controllo nella propria vita o che si stia esercitando un'autorità in modo oppressivo. Questa carta capovolta può segnalare un bisogno di riesaminare le proprie modalità di gestione e di cercare un equilibrio tra autorità e flessibilità."
        },
        {
            name: "Il Papa",
            retro: "retro.png",
            img: "papa.png",
            up: true,
            upValue: 1,
            downValue: -1,
            upMeaning: "Il Papa è una figura di conoscenza spirituale, tradizione e insegnamento. Rappresenta la connessione con il divino e la saggezza accumulata attraverso la tradizione e l'educazione. Questa carta può indicare un periodo di apprendimento o di ricerca di guida spirituale. Il Papa simboleggia anche la capacità di offrire supporto e consiglio agli altri, e di onorare i valori e le pratiche tradizionali.",
            downMeaning: "Capovolta, Il Papa può indicare dogmatismo, rigidità o la mancanza di connessione con la propria spiritualità. Può suggerire che ci sia una difficoltà a seguire i propri valori o che si stia ignorando la propria intuizione e guida interiore. Questa carta capovolta può segnalare un bisogno di esplorare nuove vie spirituali e di evitare il conformismo eccessivo."
        },
        {
            name: "Gli Amanti",
            retro: "retro.png",
            img: "amanti.png",
            up: true,
            upValue: 1,
            downValue: -1,
            upMeaning: "Gli Amanti simboleggiano l'amore, le relazioni e le scelte significative. Rappresenta l'unione e l'armonia tra due persone, così come le decisioni che riguardano le questioni del cuore. Questa carta indica anche il potere delle scelte e delle connessioni personali, e la necessità di prendere decisioni che rispecchino i propri valori e desideri profondi. Gli Amanti celebrano la connessione emotiva e l'intimità.",
            downMeaning: "Quando appare capovolta, Gli Amanti possono indicare conflitti, indecisioni o relazioni problematiche. Può suggerire che ci siano difficoltà nel prendere decisioni significative o che si stia vivendo un momento di disarmonia nelle relazioni. Questa carta capovolta può segnalare la necessità di affrontare i problemi di comunicazione e di rivedere le proprie scelte per ritrovare l'equilibrio e l'armonia."
        },
        {
            name: "Il Carro",
            retro: "retro.png",
            img: "carro.png",
            up: true,
            upValue: 1,
            downValue: -1,
            upMeaning: "Il Carro rappresenta la determinazione, la vittoria e il successo. Simboleggia la capacità di superare gli ostacoli attraverso la forza di volontà e la guida decisa. Questa carta indica che, con impegno e controllo, è possibile raggiungere i propri obiettivi e ottenere risultati significativi. Il Carro celebra la conquista e il trionfo, e suggerisce che è il momento di prendere il controllo e dirigere la propria vita verso il successo.",
            downMeaning: "Capovolta, Il Carro può indicare mancanza di direzione, perdita di controllo o ostacoli imprevisti. Può suggerire che ci siano difficoltà nel mantenere la propria determinazione e nel superare le sfide. Questa carta capovolta può segnalare un momento di incertezza e la necessità di rivedere le strategie e di recuperare la direzione e il controllo nella propria vita."
        },
        {
            name: "La Giustizia",
            retro: "retro.png",
            img: "giustizia.png",
            up: true,
            upValue: 1,
            downValue: -1,
            upMeaning: "La Giustizia simboleggia verità, equità e legge. Rappresenta il principio di giustizia e la necessità di prendere decisioni giuste e equilibrate. Questa carta indica la ricerca della verità e l'importanza di mantenere l'equilibrio nelle questioni legali e morali. La Giustizia è un invito a riflettere sulle proprie azioni e a garantire che siano giuste e oneste.",
            downMeaning: "Quando appare capovolta, La Giustizia può indicare ingiustizia, parzialità o problemi legali. Può suggerire che ci siano questioni non risolte o che le decisioni prese non siano eque o giuste. Questa carta capovolta può segnalare un bisogno di rivedere le proprie azioni e di cercare di ristabilire l'equilibrio e la giustizia nelle situazioni problematiche."
        },
        {
            name: "L'Eremita",
            retro: "retro.png",
            img: "eremita.png",
            up: true,
            upValue: 0,
            downValue: -1,
            upMeaning: "L'Eremita rappresenta la riflessione, l'introspezione e la solitudine. Simboleggia un periodo di ricerca interiore e di isolamento necessario per ottenere chiarezza e saggezza. Questa carta suggerisce la necessità di ritirarsi dal mondo per trovare risposte profonde e di dedicare tempo alla riflessione e alla contemplazione. L'Eremita è un richiamo a cercare la luce interiore e a fare un viaggio spirituale.",
            downMeaning: "Capovolta, L'Eremita può indicare isolamento e solitudine eccessiva o una difficoltà a trovare chiarezza interiore. Può suggerire che si stia evitando di confrontarsi con i propri problemi o che ci sia una mancanza di direzione nella ricerca di risposte. Questa carta capovolta può segnalare un bisogno di connettersi con gli altri e di non isolarsi troppo nella propria riflessione."
        },
        {
            name: "La Fortuna",
            retro: "retro.png",
            img: "fortuna.png",
            up: true,
            upValue: 1,
            downValue: -1,
            upMeaning: "La Fortuna rappresenta il destino, il cambiamento e i cicli della vita. Simboleggia l'influenza della fortuna e delle circostanze esterne, e indica che la vita è in continua evoluzione. Questa carta invita ad accettare i cambiamenti e ad adattarsi ai nuovi sviluppi, riconoscendo che la fortuna e il destino giocano un ruolo importante nel nostro percorso. La Fortuna celebra l'idea che ogni fase della vita ha il suo valore e il suo significato.",
            downMeaning: "Quando appare capovolta, La Fortuna può indicare sfortuna, resistenza al cambiamento o cicli interrotti. Può suggerire che si stia lottando contro le circostanze e che ci sia una difficoltà ad accettare i cambiamenti inevitabili. Questa carta capovolta può segnalare un momento di difficoltà e la necessità di adattarsi meglio alle nuove situazioni per superare le sfide."
        },
        {
            name: "La Forza",
            retro: "retro.png",
            img: "forza.png",
            up: true,
            upValue: 1,
            downValue: -1,
            upMeaning: "La Forza simboleggia coraggio, pazienza e controllo. Rappresenta la capacità di affrontare le sfide con determinazione e gentilezza, e di dominare le proprie paure e debolezze. Questa carta indica che la forza interiore e la resilienza sono essenziali per superare le difficoltà e per mantenere l'equilibrio. La Forza celebra la potenza della calma e del dominio interiore nel gestire le prove della vita.",
            downMeaning: "Capovolta, La Forza può indicare debolezza, mancanza di controllo o paura. Può suggerire che ci sia una difficoltà ad affrontare le sfide con coraggio o che si stia cedendo sotto la pressione delle situazioni. Questa carta capovolta può segnalare un momento di vulnerabilità e la necessità di lavorare su se stessi per ritrovare la forza e il controllo interiore."
        },
        {
            name: "L'Appeso",
            retro: "retro.png",
            img: "appeso.png",
            up: true,
            upValue: -1,
            downValue: -1,
            upMeaning: "L'Appeso rappresenta la sospensione, la prospettiva e il sacrificio. Simboleggia un periodo di pausa e riflessione, in cui è necessario cambiare punto di vista e considerare nuove prospettive. Questa carta indica che a volte è necessario fare sacrifici e accettare un periodo di incertezza per ottenere risultati migliori in seguito. L'Appeso invita a guardare le cose da una nuova angolazione e a trovare la saggezza nella sospensione e nella riflessione.",
            downMeaning: "Quando appare capovolta, L'Appeso può indicare impazienza, rigidità o resistenza al cambiamento. Può suggerire che si stia lottando con la propria situazione attuale e che ci sia una difficoltà ad accettare i sacrifici necessari. Questa carta capovolta può segnalare un bisogno di rivedere la propria attitudine e di essere più aperti ai cambiamenti e alle nuove prospettive."
        },
        {
            name: "La Morte",
            retro: "retro.png",
            img: "morte.png",
            up: true,
            upValue: 0,
            downValue: -1,
            upMeaning: "La Morte simboleggia trasformazione, fine di un ciclo e nuovi inizi. Rappresenta il termine di una fase della vita e il potenziale per un rinnovamento. Questa carta indica che è il momento di lasciar andare il passato e abbracciare i cambiamenti necessari per una nuova crescita. La Morte celebra la bellezza del rinnovamento e la capacità di risorgere dalle ceneri di ciò che è finito, portando nuove opportunità e cambiamenti positivi.",
            downMeaning: "Capovolta, La Morte può indicare resistenza al cambiamento, paura della trasformazione o stagnazione. Può suggerire che ci sia una difficoltà ad accettare la fine di un ciclo e a fare spazio per nuovi inizi. Questa carta capovolta può segnalare un momento di blocco e la necessità di lavorare per accettare e affrontare i cambiamenti inevitabili nella propria vita."
        },
        {
            name: "La Temperanza",
            retro: "retro.png",
            img: "temperanza.png",
            up: true,
            upValue: 1,
            downValue: -1,
            upMeaning: "La Temperanza rappresenta equilibrio, moderazione e armonia. Simboleggia l'arte di trovare il giusto equilibrio tra opposti e di mantenere la calma e la pace interiore. Questa carta indica la necessità di evitare gli estremi e di adottare un approccio equilibrato nelle situazioni della vita. La Temperanza celebra l'armonia e la capacità di gestire le sfide con equilibrio e serenità.",
            downMeaning: "Quando appare capovolta, La Temperanza può indicare squilibrio, eccesso o conflitto interiore. Può suggerire che ci sia una difficoltà a mantenere la calma e l'armonia nelle proprie situazioni. Questa carta capovolta può segnalare un momento di disarmonia e la necessità di rivedere il proprio approccio per trovare un equilibrio più sano e gestire le tensioni in modo più efficace."
        },
        {
            name: "Il Diavolo",
            retro: "retro.png",
            img: "diavolo.png",
            up: true,
            upValue: -1,
            downValue: 1,
            upMeaning: "Il Diavolo simboleggia tentazione, attaccamento e materialismo. Rappresenta le influenze negative e i vincoli autoimposti che possono limitare la propria libertà. Questa carta indica la necessità di affrontare le proprie dipendenze e i propri attaccamenti materiali, e di liberarsi dalle catene che impediscono una crescita autentica. Il Diavolo può anche mettere in luce le ombre e le paure interiori che richiedono attenzione e risoluzione.",
            downMeaning: "Capovolta, Il Diavolo può indicare liberazione da vincoli, risoluzione di dipendenze o superamento delle tentazioni. Può suggerire che si stia lavorando per liberarsi dalle influenze negative e per recuperare la propria libertà e indipendenza. Questa carta capovolta può segnalare un periodo di recupero e di crescita personale, dove si affrontano le proprie paure e si trova un nuovo equilibrio."
        },
        {
            name: "La Torre",
            retro: "retro.png",
            img: "torre.png",
            up: true,
            upValue: -1,
            downValue: -1,
            upMeaning: "La Torre rappresenta rovina, cambiamento improvviso e rivelazione. Simboleggia la demolizione di strutture obsolete e la necessità di affrontare la verità anche quando è scomoda. Questa carta indica che un cambiamento radicale può portare a una nuova comprensione e a una trasformazione significativa. La Torre celebra il potere della rivelazione e della ricostruzione attraverso la distruzione di ciò che non serve più.",
            downMeaning: "Quando appare capovolta, La Torre può indicare resistenza al cambiamento, instabilità o una crisi evitata. Può suggerire che si stia tentando di evitare il crollo di strutture obsolete o che si stia procrastinando una necessaria trasformazione. Questa carta capovolta può segnalare un bisogno di affrontare i cambiamenti inevitabili e di prepararsi a rivedere le proprie strutture e convinzioni per evitare problemi futuri."
        },
        {
            name: "Le Stelle",
            retro: "retro.png",
            img: "stelle.png",
            up: true,
            upValue: 1,
            downValue: -1,
            upMeaning: "Le Stelle simboleggiano speranza, ispirazione e serenità. Rappresentano la luce guida nelle tenebre e la promessa di un futuro migliore. Questa carta indica un periodo di guarigione, creatività e ottimismo, e celebra la capacità di trovare bellezza e significato anche nei momenti difficili. Le Stelle invitano a mantenere la fede e a cercare la luce che guida verso nuovi orizzonti e opportunità.",
            downMeaning: "Capovolta, Le Stelle possono indicare disperazione, mancanza di speranza o blocchi creativi. Può suggerire che ci sia una difficoltà a vedere il lato positivo delle situazioni o a mantenere la fede nei propri sogni. Questa carta capovolta può segnalare un momento di incertezza e la necessità di ritrovare la speranza e l'ispirazione per superare le sfide e recuperare la serenità."
        },
        {
            name: "La Luna",
            retro: "retro.png",
            img: "luna.png",
            up: true,
            upValue: 0,
            downValue: -1,
            upMeaning: "La Luna rappresenta illusione, intuizione e incertezza. Simboleggia i misteri dell'inconscio e la necessità di esplorare l'interno per scoprire verità nascoste. Questa carta indica la presenza di dubbi e confusione, ma anche la possibilità di accedere a una maggiore comprensione attraverso l'intuizione e la riflessione. La Luna celebra il potere dell'immaginazione e la capacità di navigare nelle acque dell'incertezza con apertura mentale.",
            downMeaning: "Quando appare capovolta, La Luna può indicare confusione estrema, inganno o perdita di contatto con la propria intuizione. Può suggerire che ci sia una difficoltà a distinguere tra realtà e illusione o che si stia vivendo un periodo di disorientamento. Questa carta capovolta può segnalare un momento di oscurità e la necessità di ritrovare chiarezza e stabilità mentale."
        },
        {
            name: "Il Sole",
            retro: "retro.png",
            img: "sole.png",
            up: true,
            upValue: 1,
            downValue: -1,
            upMeaning: "Il Sole simboleggia felicità, successo e vitalità. Rappresenta il raggiungimento di obiettivi e il senso di realizzazione e gioia. Questa carta indica un periodo di chiarezza e illuminazione, e celebra i frutti del lavoro e dell'impegno. Il Sole è un segnale positivo di energia, prosperità e ottimismo, e invita a godere dei successi e delle gioie della vita con gratitudine e entusiasmo.",
            downMeaning: "Capovolta, Il Sole può indicare tristezza, delusione o mancanza di chiarezza. Può suggerire che ci siano difficoltà a raggiungere i propri obiettivi o che si stia vivendo un periodo di oscurità e incertezza. Questa carta capovolta può segnalare un momento di mancanza di energia e la necessità di ritrovare la luce e il positivo nella propria vita per superare le sfide."
        },
        {
            name: "Il Mondo",
            retro: "retro.png",
            img: "mondo.png",
            up: true,
            upValue: 1,
            downValue: -1,
            upMeaning: "Il Mondo rappresenta completamento, realizzazione e integrazione. Simboleggia la conclusione di un ciclo e il raggiungimento di un obiettivo con successo. Questa carta indica un senso di armonia e soddisfazione, e celebra la realizzazione di sogni e aspirazioni. Il Mondo invita a riconoscere e godere dei successi ottenuti, e a prepararsi per nuove avventure con una solida base di realizzazione e crescita.",
            downMeaning: "Quando appare capovolta, Il Mondo può indicare incompletamento, mancanza di successo o difficoltà a raggiungere gli obiettivi. Può suggerire che ci siano problemi nel chiudere un ciclo o nel completare un progetto, portando a un senso di insoddisfazione. Questa carta capovolta può segnalare un bisogno di lavorare su aree incomplete e di trovare nuovi modi per raggiungere la realizzazione e l'integrazione."
        }
    ],

})