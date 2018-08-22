### DEL 1: Sannolikhet eller hur man beskriver slumpen

__utfall__ -- resultatet av ett slumpmässigt försök

__utfallsrummet__ -- mängden möjliga utfall

__händelse__ -- samling utfall

__relativ frekvens__ -- kvoten mellan antalet erhållet utfall och hela antalet utförda kast

__disjunkta händelser__ -- kan inte inträffa samtidigt

__Kolmogorovs axiomsystem__:


1. Händelsen P(A) måste ligga mellan 0 & 1
2. P(utfallsrummet) = 1
3. om A & B är parvis oförenliga gäller \\( P(A) + P(B) = P(A \\cup B) \\)

__komplementsatsen__
P(A*) = 1 - P(A)

__Additionssatsen__
P(A or B) = P(A) + P(B) - P(A and B)

__oberoende händelser__ -- \\( P(A \\cap B) = P(A)P(B) \\)

__Booles olikhet__ -- \\( P(A \\cup B) \\leq P(A) + P(B) \\)

#### Kombinatorik

Förutsättningar:

* n element
* k av dessa plockas

__Klassiska sannolikhetsdefinitionen__
Vid likformigt sannolikhetmått är sannolikheten för en händelse lika med kvoten mellan antalet för händelsen gynsamma fall och antalet möjliga fall.

__Dragning med återläggning och hänsyn till ordning__
\\[n^k\\]

__Dragning utan återläggning med hänsyn till ordning__
\\[n*(n-1)(n-2) \\cdots (n-k)\\]

__Dragning utan återläggning utan hänsyn till ordning__
\\[\\binom{n}{k}\\]

__Dragning utan återläggning__
Urna med kulor av två olika färger. Hur stor är chansen att erhålla k vita? Enl. __Klas. sann._ ges svaret av 
\\[ g/m \\]
\\[ m = \\binom{v+s}{n} \\]
\\[ g = \\binom{v}{k} \\binom{s}{n-k} \\] 
Alltså produkten av sätten att få k stycken vita och alla möjligheter att få resterande svarta.

__Dragning med återläggning__
Samma som ovan men med återläggning. 
\\[ m = (v+s)^n \\]
\\[ g = \\binom{n}{k} v^k s^{n-k}\\]

Alltså antalet olika kombinationer det finns av k stora samlingar bland n multiplicerat med sannolikheten för k vita multiplicerat med n-k svarta. Allt detta dividerat med m.

__Betingade sannolikheten__ -- sannolikheten att något inträffar givet en annan händelse.

\\[P(B|A) = \\frac{P(A \\cap B)}{P(A)}\\]

Ger alltså ett samband mellan betingning och snitt.

__Lagen om total sannolikhet__ -- genom att summera de olika produkter som ges av sannolikheten för varje möjligt utfall \\( H_i \\) multiplicerat med sannolikheten att A händer om vi faktiskt fått \\( H_i \\) får vi den totala sannolikheten att A händer.

\\[P(A) = \\sum_{i=1}^{n} P(H_i)P(A|H_i)\\]

__Bayes sats__ -- när man behöver vända på en betingad sannolikhet. Nämnaren i bråket är alltså högerledet i lagen om total sannolikhet.

\\[P(H_i|A) = \\frac{P(H_i)P(A|H_i)}{\\sum_{j=1}^{n} P(H_j)P(A|H_j)}\\]

__Oberoende händelser__ -- \\( P(B|A) = P(B) \\)

__sannolikheten att minst en inträffar__
\\[A_1 , A_2 , ... , A_n \\text{ är oberoende }, \\quad P(A_i)=p_i\\]
\\[1-(1-p_1)(1-p_2)...(1-p_n) = 1-(1-p)^n\\]


### 1. Endimensionella stokastiska variabler
Den stokastiska variabeln är bron mellan matematiken och slumpen men är inget mer än en reellvärd funktion definierad på ett utfallsrum. Betecknas i texten som versaler från slutet av alfabetet som X, Y, eller Z.

#### diskret stokastisk variabel
En s.v. är __diskret_ om den kan anta ett ändligt eller uppräkneligt oändligt antal olika värden.
funktionen över värdemängden kallas sannolikhetsfunktionen.

1. __Enpunktsfördelning__ -- all massa i ett värde \\[p_X(a) = 1\\]

2. __Tvåpunktsfördelning__ -- om X endast antar två värden a & b med sannolikheterna p respektive 1-p.
ex: krona/klave
då X tar värdena a = 1 och b = 0 sägs X vara Bernoulli-fördelad.

3. __Likformig fördelning__ -- X antar värden 1,2,..,m och alla dessa med samma sannolikhet.
\\[p_X(k)=1/m, k = 1,2,...,m.\\]

4. __För-första-gången-fördelning__  -- När samma oberoende försök görs om och om tills ett visst resultat erhålls. Antalet försök t.o.m. resultatet är då en s.v. med ffg-fördelning.
\\[ p_X(k)=(1-p)^{k-1}p,    k=1,2,...,\\]
\\[ X \\in ffg(p) \\]

5. __Geometrisk fördelning__ -- genom att skippa resultatrundan som räknas in i ffg-fördelningen tillhör X Ge(p).
\\[p_X(k) = (1 - p)^kp,    k = 0,1,2,...,\\]


6. __Binomialfördelning__ -- slumpmässigt försök med en händelse A där P(A) = p upprepas n oberoende ggr. 
\\[ p_X(k) = \\binom{ n }{ k } p^k ( 1 - p )^{ n - k } \\]
\\[ X \\in Bin(n,p) \\]

7. __Hypergeometrisk fördelning__ -- uppträdde vid dragning utan återläggning ur urna med vita och svarta kulor.
\\[ p_X(k) = \\frac{\\binom{v}{k} \\binom{s}{n-k}}{\\binom{v+s}{n}}\\]
\\[ X \\in Hyp(N,n,p)\\]

8. __Poisson-fördelning__ -- beskriver antalet företelser som inträffar oberoende av varandra.
\\[ p_X(k) = \\frac{ \\mu^k }{ k! }e^{ -e } \\]
\\[ X \\in Po(\\mu)\\]

#### kontinuerlig stokastisk variabel
Sannolikhetsfunktionen kallas nu täthetsfunktion och betecknas med f.

1. __Likformig fördelning__ -- X antar alla värden mellan a och b med samma sannolikhet
\\[ f_X(x) = 1/(b-a) \\text{ om } a < x < b >\\]

2. __Exponentialfördelning__ -- beskriver tiderna mellan händelserna i en poissonprocess. 
\\[ f_X(x) = \\lambda e^{-\\lambda x} \\quad E(X) = 1 / \\lambda, \\quad D(X) = 1 / \\lambda \\]

3. __Normalfördelningen__ 

4. __Weibull-fördelning__

5. __Gammafördelning__


__fördelningsfunktion__ -- Funktion som för varje möjligt utfall beräknar sannolikheten att utfallet blir just detta eller lägre.

__funktioner av stokastisk variabel__ -- När man vill veta hur en s.v., Y som beror av g(x), ser ut. Nedan följer generellt tillvägagångssätt för att beskriva \\( f_y (y) \\) i termer av den kända \\( f_x (y) \\). Med exemplet: \\( g(x) = |X| \\)

1. Beskriv: \\( F_y (y) = P( Y \\leq y) \\)
2. Byt ut Y mot g(X): \\( P( g(X) \\leq y) \\)
3. Lös ut X: \\( P( -y \\leq X \\leq y) = F_X (y) - F_X (-y) \\) 
4. \\(f_Y (y) = f_X (y) + f_X (-y) \\)

__intensitet__


### 2. Flerdimensionella stokastiska variabler

#### Note to self: 
* \\[ p_{X,Y}(i,j) = p_X(i)p_Y(j) = P(j|i)P(i) \\] OBS! Dont forget the last P(i)



#### Största och minsta värdet
* Z = max(X,Y)
\\[F_Z(z) = F_X(z)F_Y(z)\\]

* Z = min(X,Y)
\\[F_Z(z) = 1-[1-F_X(z)][1-F_Y(z)]\\]

Gör först om till fördelningsfunktion om täthetsfunktion

#### Summan av s.v.
* \\[f_Z(z) = \\int_{\\infty}^{\\infty} f_X(x)f_Y(z-x)dx\\]




### 3. Väntevärden

#### Note to self: 
konstanter inuti väntevärdesfunktioner är korkat.

#### Väntevärdet E(X) eller μ
 Är ett typ av lägesmått, precis som medianen. E(X) är väntevärdet för X. E(X) berättar om vad det väntade resultatet blir.

 __DEF:__
 \\[ E(X) = \\sum_kkp_X(k) \\] 
 \\[ E(X) = \\int\\limits_{-\\infty}^{\\infty} x f_X(x)dx \\]

 __Y = g(X)__ -- Väljer du att interfacea funktionen med en ny variabel som beror av X med samma gamla fördelning så kan man trixa enl. följande
\\[ E(Y) = \\sum_kg(k)p_X(k)\\]
\\[ E(X) = \\int\\limits_{-\\infty}^{\\infty} g(x) f_X(x)dx \\]

 \\[ E(X+Y) = E(X)+E(Y) \\]

 X & Y oberoende 
 \\[ E(XY) = E(X)E(Y)\\]
 
 Samling X med samma väntevärde µ
 \\[ E(\\sum_{i=1}^nX_i)=n\\mu \\]

##### Betingade väntevärden
\\[ E(X|Y=k) = \\sum_{j=0}^\\infty jp_{X|Y=k}(j)\\]

\\[ E(X|Y=y) = \\int_{-\\infty}^\\infty xf_{X|Y=y}(x)dx\\]

#### Variansen V(X) eller σ²

Variansen är en typ av spridningsmått. Vid beräkning av varians av en summa olika s.v. bör man __ALDRIG__ anta att inblandade s.v. är oberoende. GLÖM MED ANDRA ORD INTE KOVARIANSEN.

__DEF:__
\\[ V(X) = E[(X-\\mu)^2] \\] 

__Schysta satser:__
$$ V(X) = E(X^2)-[E(X)]^2 $$
\\[ V(aX+b) = a^2V(X) \\]
\\[ V(X + Y) = V(X) + V(Y) + 2C(X,Y) \\]

* Om oberoende: \\( V(X + Y) = V(X) + V(Y) \\)
* Om oberoende och med samma σ: \\( V(\\sum_{i=1}^nX_i) = n\\sigma^2 \\)
* Om oberoende och med samma σ samt µ: \\( V(\\bar{X})=\\sigma^2/n \\)

Tänk på att använda formelsamlingen för att snabbt fastställa varians


#### Standardavvikelse D(X) eller σ
Schyst mått då man får samma dimension som väntevärdet
\\[ D(X) = \\sqrt{V(X)} \\]
\\[ D(aX + b) = |a|D(X) \\]
Om oberoende: \\[ D(X + Y) = \\sqrt{D^2(X) + D^2(Y)} \\]

#### Variationskoefficienten
uttrycks i procent
\\[ R(X) = D(X)/E(X) \\]

#### fel
* __systematiskt fel/bias__  är differansen mellan mätvärdets väntevärde och det korrekta värdet. (ett tal)
* __slumpmässigt fel__ menas differensen mellan mätvärdet och dess väntevärde. (s.v. med E(X) = 0)

#### Beroendemått

##### Kovarians
* Kovariansen C(X,Y) mellan X & Y bör bli positiv om det finns ett beroende sådant att det finns en tendens hos variablerna att samtidigt avvika åt samma håll från sina väntevärden.
* \\( C(X,Y) = E[(X-\\mu_X)(Y-\\mu_Y)] \\)
* \\( C(X,Y) = E(XY)-E(X)E(Y) \\)
* Om C(X,Y) = 0 är X och Y okorrelerade.
* \\( X \\text{ & } Y \\text{ oberoende} \\to \\text{okorrelerade} \\)

##### Korrelationskoefficienten
* DEF: \\[ \\rho(X,Y) = \\frac{C(X,Y)}{D(X)D(Y)} \\]
* Kovarians fast dimensionslös


#### Stora talens lag
* Ju fler oberoende s.v. med samma µ desto närmre kommer medelvärdet att gå mot µ.

#### Betingade väntevärden och varianser

#### Gauss approximationsformler
Har du någonsin känt dig inkapabel? Då är taylorutveckling något för dig! Allt för ofta vill man ha en schyst funktion mitt i väntevärdet men hur räknar man ut E(Y) då!? Du behöver inte vara helt körd i skallen, det kan vara så att du råkat ut för någon av de många fallgropar som kantar väntevägen! 

##### En variabel
1. taylorutveckla:
  \\[ g(X) \\approx g(\\mu) + (X - \\mu)g'(\\mu) \\]
2. g(X) har nu approximativa väntevärdet g(µ) samt [g'(E(X))]²V(X) som varians. Med en rak linje blir det enkelt att räkna med µ och σ².

##### Flera variabler
###### Abandon all hope, ye who enter here
1. taylorutveckla:
\\[ g(X,Y) \\approx g(\\mu_X,\\mu_Y)+(X-\\mu_X)g'_X(\\mu_X,\\mu_Y)+(Y-\\mu_Y)g'_Y(\\mu_X,\\mu_Y) \\]

### 4. Normalfördelningen
##### Notes to self:
* ca en tredjedel av massan hamnar utanför en standardavvikelse.
* normalfördelningar bevaras alltid under linjära transformationer


$$ f_X(x) = \frac{1}{\sigma \sqrt{2\pi}}e^{-\frac{(x-\mu)^2}{2\sigma^2}} $$

#### Standardiserad fördelning
 Täthetsfunktion: φ
 Fördelningsfunktion: Φ

\\[ \\Phi(-x) = 1 - \\Phi(x) \\]

#### Allmän fördelning
\\[ X \\in N(\\mu,\\sigma) \\quad iff \\quad Y = (X-\\mu)/\\sigma \\in N(0,1) \\]
\\[ f_X(x) = \\frac{1}{\\sigma}\\varphi(\\frac{x-\\mu}{\\sigma}) \\]
\\[ F_X(x) = \\Phi(\\frac{x-\\mu}{\\sigma}) \\]

#### Linjärkombinationer
Om 
\\[ X \\in N(\\mu,\\sigma) \\]
så gäller att
\\[ Y=aX+b \\in N(a\\mu + b, |a|\\sigma) \\]

Om
\\[ X_1,X_2,..,X_n \\]
är oberoende N(µ,σ) och
\\[ \\bar{X} \\]
är medelvärdet så gäller att
\\[ \\bar{X} \\in N(\\mu,\\sigma/\\sqrt{n}) \\]


### 5. De tre vännerna och Binomialfördelning

#### binomialaren (fördelningen med återläggning)
E(X) = np
V(X) = npq

Om oberoende
\\[ X \\in Bin(n_1,p) \\quad \\& Y \\in Bin(n_2,p) \\]
\\[ X + Y \\in Bin(n_1+n_2,p) \\]

**Obs! Glöm inte att Binomialfördelningen är diskret, håll därför koll på gränserna (> != >=)**

Kan approximeras till

1. __poissonfördelning__ om p är litet
2. __normalfördelning__ om n är stort
N(np,sqrt(npq))

Skillnad mellan två binomialfördelade s.v. approximeras till
\\[ Y_1 - Y_2 \\in N(p_1 - p_2, \\sqrt{ \\frac{p_1 (1-p_2)}{n_1} + \\frac{ p_2 (1- p_1)}{n_2}} ) \\]

#### Hypergeometriske (utan återläggning)
E(X) = np
V(X) = ((N-n)/(N-1))np(1-p)

Kan aproximeras som

1. __binomialapproximation__ om n/N är liten
2. __normalapproximation__ om n är stort

#### Poisson-fördelningen
E(X) = µ
V(X) = µ

\\[ X_1 \\in Po( \\theta_1 ) \\quad and \\quad X_2 \\in Po( \\theta_2 ) \\quad then \\quad X_1+X_2 \\in Po(\\theta_1+\\theta_2) \\]

Kan approximeras som

1. __normalfördelning__  om µ är stort

#### Multinomial


### Markovkedjor
* Stokastiska processer vars nästa värde endast beror på nuvarande värde. 

* övergångsmatris används för att skriva upp "hoppsannolikheterna".

* övergångssannolikheter av N:te ordningen härleds genom att matrismultiplicera övergångsmatrisen med sig själv n ggr. alltså sannolikheten att mellanlanda i ett tillstånd.

För att simulera sannolikheterna att systemet börjar i de olika tillstånden används matrismultiplikation med en radvektor $$ p^{(0)}=(p_1^{(0)},p_2^{(0)},...) $$

\\[ 
\\begin{pmatrix}
1 & 2
\\end{pmatrix}
*
\\begin{pmatrix}
  1to1 & 1to2 \\\\
  2to1 & 2to2
\\end{pmatrix} 
\\]

##### terminologi
__tillstånd__ -- markovkedja är alltid i ett tillstånd. Den lämnar detta enl. övergångsmatrisen

__ändlig__ -- ändligt antal tillstånd i kedjan

__beständigt__ -- om tillstånd där \\( p_{ii} = 1 \\) (Gäller alla olika ordningars övergångsmatriser)

1. kolla första ordningens sannolikhet att kedjan väljer att hoppa till tillståndet det redan var i, sedan andra ordningens och tredje ordningens. Fortsätt tills du hittat ett samband mellan sannolikheterna, ex. i form av en geometrisk serie. Blir summan 1 har du ett __beständigt tillstånd__.
2. Använd sedan faktumet att om __två tillstånd kommunicerar tvåsidigt är de båda antinge beständiga eller båda inte__
3. Använd sedan faktumet att om alla \\( p_{ij} = 0 \\) så är j inte beständigt (går ju inte att komma dit (om man inte börjar där men inte sedan kan man ändå inte komma dit igen)). 

__obeständigt__ -- tillstånd om P(i->i) less than 1

__Om två tillstånd kommunicerar tvåsidigt är de båda antingen beständinga eller inte.__

__irreducibel__ -- om alla tillstånd kommunicerar tvåsidigt med varandra, indirekta anslutningar räknas också.

1. rita upp markovkedjan och följ pilarna


__stationär fördelning__ -- sannolikheterna att systemet befinner sig i de olika tillstånden.

1. skapa sannolikhetsvektorn \\( \\pi = ( \\pi_1, \\pi_2,..) \\)
2. lös ekv. \\( \\pi = \\pi P \\) (P är övergångsmatrisen)

\\[ p^{(n)}=( p_1^{(n)}, p_2^{(n)} ,...) \\to \\pi, \\quad \\text{ när } n \\to \\infty \\]

__asymptotisk fördelning__ -- om man i en ändlig kedja kan finna ett \\( r>0 \\) så beskaffat att alla element i någon kolonn i matrisen P^r är positiva, existerar det en __asymptotisk__ fördelning


__periodiska tillstånd__ -- om det alltid krävs ett visst antal hopp för att komma tillbaka till ett tillstånd är tillståndet periodiskt. t.ex. om processen bara kan nå tillbaka till Ei efter 3,6,9,... steg har Ei perioden 3.

__aperiodiska tillstånd__ -- om det alltid går att komma tillbaka till ett tillstånd direkt..

### DEL 2: Statistik eller vilka slutsatser man kan dra av ett datamaterial

#### terminologi
__parameterrummet__ -- de värden den sökta parametern kan tänkas anta.

__stickprov__ -- betecknas med lilla x = (x1,x2,...,xn) för n dimensionella s.v.

__stickprovsvariansen__ \\[ s^2 = \\frac{1}{n-1} \\sum_{j=1}^n (x_j - \\bar{x})^2 \\]

__kovariansen__ mellan x- och y-värdena i en datamängd \\( ( x_1 , y_1 ),( x_2 , y_2 ),...,( x_n , y_n ) \\)
\\[ c_{xy} = \\frac{1}{n-1}\\sum_{i=1}^n(x_i-\\bar{x})(y_i-\\bar{y}) \\]

__korrelationskoefficienten__
\\[ r = \\frac{c_{xy}}{s_xs_y} \\]


### 7. Punktskattning


__punktskattning__ -- den observerade sannolikheten -- ett utfall av stickprovsvariabeln
\\[ \\theta_{obs}^*(x_1,x_2,...,x_n) \\]

__stickprovsvariabeln__ -- en s.v. som punktskattningen är ett utfall av
\\[ \\theta^*(X_1,X_2,...,X_n) \\]

__väntevärdesriktig__ -- punktskattning vars tillhörande stickprovsvariabel har väntevärdet θ. dvs om
\\[ E(\\theta^*) = \\theta \\]

__MSE__ -- mean square error -- medelkvadratfelet för en punktskattning -- mått på slumpmässigt fel
\\[ MSE = E(( \\theta^* - \\theta)^2) \\]

#### skattning av μ & σ

##### µ
stickprovsmedelvärdet \\[ \\bar{x} \\] är en väntevärdesriktig och konsistent skattning av µ

##### σ^2
stickprovsvariansen s^2 är en väntevärdesriktig skattning av σ^2

#### Maximum-likelihood-metoden -- ML-metoden
1. Skapa 
\\[ L(\\theta) = P(X_1 = x_1, X_2 = x_2,...,X_n = x_n;\\theta) \\]
alt.
\\[ L(\\theta) = f_{X_1,X_2,...,X_n}(x_1,x_2,...,x_n;\\theta) \\]
(A.k.a. likelihood-funktionen)
2. Finn funktionens maxpunkt genom ex. derivering över theta.
3. Funktionens största värde är det mest sannolika scenariot.

#### Minsta-kvadrat-metoden -- MK-metoden
\\[ Q(\\theta) = \\sum_{i=1}^n [x_i - \\mu_i (\\theta)]^2 \\]
Går ut på att anta att det finns små försöksfel vid varje mätdatum och bara genom att minimera dessa finner man bästa skattning av theta. Så hur går man då tillväga? Jo genom att skapa funktionen \\( Q( \\theta )) \\) och sedan derivera denna och finna minimum för
\\[ \\frac{dQ}{d \\theta} Q( \\theta ) \\]

Flera parametrar? Lös partialderivatorna och sedan ekvationssystemet.


### 8. Intevallskattning
När man vill veta hur stor sannolikhet det är att en okänd parameter ligger inom ett visst interval.

#### Tillämpning på normalfördelningen

#### Ett stickprov

##### µ okänt σ känt

\\[\\mu* = \\bar{x} \\]

##### μ känt σ okänt
$$ (\sigma^2)_{obs}^* = \frac{1}{n} \sum_{i=1}^{n} (x_i - \mu)^2 $$

##### Konfidensintervall för väntevärdet
##### Känd standardavvikelse
En lämplig skattning av µ är aritmetiska medelvärdet av X. 
\\[ \\bar{X} \\in N(\\mu,D) \\]
\\[ D = \\sigma/\\sqrt{n} \\]
\\[ I_\\mu = (\\bar{x}-\\lambda_{\\alpha/2}D,\\bar{x}+\\lambda_{\\alpha/2}D) \\]

Allt detta följer av att:

\\[ \\frac{\\bar{X}-\\mu}{D} \\in N(0,1) \\]

Följaktligen gäller med sannolikheten 1-alfa att:

\\[ -\\lambda_{\\alpha/2} < \\frac{\\bar{X}-\\mu}{D} < \\lambda_{\\alpha/2} >\\]

Om vi har ett intervall:

\\[ I_\\mu = (16 \\pm 2.58 * 0.155) \\]

där

\\[ D = 1.2/\\sqrt{60} = 0.155 \\]

och man istället vill ha en mindre standardavvikelse, säg 0.5, så kan man sätta upp följande ekvation:

\\[ 2 * 2.58 * 1.2/\\sqrt{n} = 0.5 \\]

##### Okänd standardavvikelse

I detta fallet gäller en helt galen lösning eftersom man behöver skatta σ 

\\[ I_\\mu = (\\bar{x}-t_{\\alpha/2}(f)d,\\bar{x}+t_{\\alpha/2}(f)d) \\]
\\[ d = s/\\sqrt{n}, \\quad f = n-1 \\]

##### Konfidensintervall för standardavvikelsen

##### Känt väntevärde 

Aint gonna happen gurl

###### Okänt väntevärde

\\[ I_\\sigma = (k_1s,k_2s) \\]
\\[ k_1 = \\sqrt{(f/\\chi_{\\alpha/2}^2(f)} \\]
\\[ k_2 = \\sqrt{(f/\\chi_{1-\\alpha/2}^2(f)} \\]
\\[ f = n-1 \\]

#### Två stickprov
När man vill mäta skillnaden mellan två stickprov. Om de två stickproven parvis korrelerar bör metoden tillhörande stickprov i par användas.

Om σ1 och σ2 är kända:

\\[ I_{\\mu_1-\\mu_2} = (\\bar{x}-\\bar{y}-\\lambda_{\\alpha/2}D,\\bar{x}-\\bar{y}+\\lambda_{\\alpha/2}D) \\]
\\[ D = \\sqrt{ \\sigma_{1}^{2} / n_1 + \\sigma_{2}^{2} / n_2} \\]

Om σ1 = σ2 = σ:

\\[ I_{\\mu_1-\\mu_2} = (\\bar{x}-\\bar{y}-t_{\\alpha/2}(f)d,\\bar{x}-\\bar{y}+t_{\\alpha/2}(f)d) \\]
\\[ d = \\sigma \\sqrt{ \\frac{1}{n_1} + \\frac{1}{n_2}} \\]

#### Stickprov i par
När det utförs två mätningar på n olika objekt. 

Skapa \\[ z = y - x \\]





### 9. Hypotesprövning
__nollhypotes__ -- hypotesen att det inte föreligger något fenomen som kräver en förklaring. Betecknas:
\\( H_0 \\)

__mothypotes__ -- hypotes som kan vara sann om inte nollhypotesen är det. Betecknas:
\\( H_i \\)

__signifikansnivå/felrisk__ -- sannolikheten att nollhypotesen förkastas trots att den är sann. (Ju lägre desto bättre).

  + signifikant* -- 0.05
  + signifikant** -- 0.01
  + signifikant*** -- 0.001

__testvariabel/teststorhet__ -- observation av stickprovsvariabel

__signifikanstest__ 
1. Om \\(t_{obs} \\in \\text{jätteosannolikt område} \\) förkasta \\( H_0 \\)
2. Om \\( t_{obs} \\) å andra sidan är ett sannolikt utfall, även i vanliga fall så bör \\( H_0 \\) inte förkastas.

__konfidensmetoden__ -- genom att beräkna konfidensintervall för variabel och sedan förkasta nollhypotesen om värdet hamnar utanför

__styrkefunktionen__
\\[ h(\\theta) = P(H_0 \\text{ förkastas}) \\]
om θ är det rätta värdet 

  + bör vara stort för alla θ som tillhör mothypotesen
  + bör vara litet för alla θ som tillhör nollhypotesen
  + h(θ) kallas testets styrka för θ


#### How to styrkefunktion
1. create \\( u = \\frac{x - \\mu}{\\sigma} \\)
2. make sure \\( u > \\lambda_\\alpha \\) as this means that it is less likely it happens than α
3. solve for x
4. create \\( h(\\theta) = P(x > \\lambda_\\alpha \\sigma + \\mu) \\)
5. normalize h(θ) by adding -μ and dividing it all by σ

### 10. Regressionsanalys

När man vill se samband mellan två eller flera storheter.

#### Terminologi

__teoretiska regressionslinjen__
\\[ y = \\alpha + \\beta x \\]

__parameterskattningar__

\\[ \\sum x_i , \\quad \\sum x_i^2 , \\quad S_{xx} = \\sum_{i=1}^n (x_i - \\bar{x})^2 = \\sum_{i=1}^n x_i^2 - \\frac{1}{n} (\\sum_{i=1}^n x_i)^2 \\]

\\[ \\sum y_i , \\quad \\sum y_i^2 , \\quad S_{yy} = \\sum_{i=1}^n (y_i - \\bar{y})^2 = \\sum_{i=1}^n y_i^2 - \\frac{1}{n} (\\sum_{i=1}^n y_i)^2 \\]

\\[ \\sum x_i y_i , \\quad  S_{xy} = \\sum_{i=1}^n (x_i - \\bar{x}) (y_i - \\bar{y}) = \\sum_{i=1}^n x_i y_i - \\bar{x} \\bar{y} \\]

#### Punktskattningar

Remember MK-metoden? Bestäm minimum för

\\[ Q( \\alpha , \\beta ) = \\sum_{i}^n (y_i - \\mu_i)^2 \\]
\\[ \\mu_i = \\alpha + \\beta x_i \\]

Genom att sätta partialderivatorna till noll fås

\\[ \\beta^* = \\frac{S_{xy}}{S_{xx}} \\quad \\alpha^* = \\bar{y} - \\beta^* \\bar{x} \\]

##### Skattning av σ

\\[ ( \\sigma^2 )^* = s^2 = \\frac{Q_0}{n-2}, \\quad Q_0 = S_{yy} - S_{xy}^2 / S_{xx} \\]

Observera att

\\[ \\mu_0^* = \\alpha^* + \\beta^* x_0 \\in N( \\alpha + \\beta x_0 , \\sigma \\sqrt{ \\frac{1}{n} + \\frac{(x_0 - \\bar{x})^2}{S_{xx}}}) \\]

#### Intervallskattningar


__Prediktionsintervall för observationer__ -- När man vill göra ett konfidensintervall för framtida observationer av \\( Y \\) för \\( x = x_0 \\)

__Kalibreringsintervall__ -- Då man erhållit värde \\( y_0 \\text{ på } y \\), vad blir då \\( x_0 \\)


#### Stokastiska vektorer
__stokastisk vektor__

__väntevärdesvektorn__ 


#### Multipel regression



### 11. Fallgropar



