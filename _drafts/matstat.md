%matematisk statistik
### DEL 1: Sannolikhet eller hur man beskriver slumpen
__utfall__ -- resultatet av ett slumpmässigt försök

__utfallsrummet__ -- mängden möjliga utfall

__händelse__ -- samling utfall

__relativ frekvens__ -- kvoten mellan antalet erhållet utfall och hela antalet utförda kast

__disjunkta händelser__ -- kan inte inträffa samtidigt

__Kolmogorovs axiomsystem__:

1. Händelsen P(A) måste ligga mellan 0 & 1.
2. P(utfallsrummet) = 1
3. om A & B är parvis oförenliga gäller $$ P(A) + P(B) = P(A \cup B) $$

__komplementsatsen__ -- P(A*) = 1 - P(A)

__Additionssatsen__ -- P(A or B) = P(A) + P(B) - P(A and B)

__Booles olikhet__ $$P(A \cup B) \leq P(A) + P(B)$$

##### Kombinatorik
Förutsättningar:

* n element
* k av dessa plockas

__Klassiska sannolikhetsdefinitionen__
Vid likformigt sannolikhetmått är sannolikheten för en händelse lika med kvoten mellan antalet för händelsen gynsamma fall och antalet möjliga fall.

__Dragning med återläggning och hänsyn till ordning__ -- $$n^k$$

__Dragning utan återläggning med hänsyn till ordning__
$$n*(n-1)(n-2) \cdots (n-k)$$

__Dragning utan återläggning utan hänsyn till ordning__
$$\binom{n}{k}$$

__Dragning utan återläggning__
Urna med kulor av två olika färger. Hur stor är chansen att erhålla k vita? Enl. _Klas. sann._ ges svaret av g/m.
$$ m = \binom{v+s}{n}$$
$$ g = \binom{v}{k} \binom{s}{n-k} $$ Alltså produkten av sätten att få k stycken vita och alla möjligheter att få resterande svarta.

__Dragning med återläggning__
Samma som ovan men med återläggning. 
$$ m = (v+s)^n $$
$$ g = \binom{n}{k} v^k s^{n-k}$$

Alltså antalet olika kombinationer det finns av k stora samlingar bland n multiplicerat med sannolikheten för k vita multiplicerat med n-k svarta. Allt detta dividerat med m.

__Betingade sannolikheten__ -- sannolikheten att något inträffar givet en annan händelse.

$$P(B|A) = \frac{P(A \cap B)}{P(A)}$$

Ger alltså ett samband mellan betingning och snitt.

__Lagen om total sannolikhet__
$$P(A) = \sum_{i=1}^{n} P(H_i)P(A|H_i)$$

__Bayes sats__
$$P(H_i|A) = \frac{P(H_i)P(A|H_i)}{\sum_{j=1}^{n} P(H_j)P(A|H_j)}$$

__Oberoende händelser__ -- P(B|A) = P(B)


__sannolikheten att minst en inträffar__
$$A_1 , A_2 , ... , A_n är oberoende och P(A_i)=p_i$$
$$1-(1-p_1)(1-p_2)...(1-p_n) = 1-(1-p)^n$$ 


### 1. Endimensionella stokastiska variabler
Den stokastiska variabeln är bron mellan matematiken och slumpen men är inget mer än en reellvärd funktion definierad på ett utfallsrum. Betecknas i texten som versaler från slutet av alfabetet som X, Y, eller Z.

#### diskret stokastisk variabel
En s.v. är _diskret_ om den kan anta ett ändligt eller uppräkneligt oändligt antal olika värden.
funktionen över värdemängden kallas sannolikhetsfunktionen.

1. __Enpunktsfördelning__ -- all massa i ett värde $$p_X(a) = 1$$

2. __Tvåpunktsfördelning__ -- om X endast antar två värden a & b med sannolikheterna p respektive 1-p.
  + ex: krona/klave
  + då X tar värdena a = 1 och b = 0 sägs X vara Bernoulli-fördelad.

3. __Likformig fördelning__ -- X antar värden 1,2,..,m och alla dessa med samma sannolikhet.
  + $$p_X(k)=1/m, k = 1,2,...,m.$$

4. __För-första-gången-fördelning__ 
  + $$ p_X(k)=(1-p)^{k-1}p,    k=1,2,...,$$
  + När samma oberoende försök görs om och om tills ett visst resultat erhålls. Antalet försök t.o.m. resultatet är då en s.v. med ffg-fördelning.
  + $$ X \in ffg(p) $$

5. __Geometrisk fördelning__ -- genom att skippa resultatrundan som räknas in i ffg-fördelningen tillhör X Ge(p)
  + $$p_X(k) = (1 - p)^kp,    k = 0,1,2,...,$$

6. __Binomialfördelning__ -- slumpmässigt försök med en händelse A där P(A) = p upprepas n oberoende ggr. 
  + $$ p_X(k) = \binom{n}{k}p^k(1-p)^{n-k} $$
  + $$ X \in Bin(n,p) $$

7. __Hypergeometrisk fördelning__ -- uppträdde vid dragning utan återläggning ur urna med vita och svarta kulor.
  + $$ p_X(k) = \frac{\binom{v}{k} \binom{s}{n-k}}{\binom{v+s}{n}}$$
  + $$ X \in Hyp(N,n,p)$$

8. __Poisson-fördelning__ 
  + $$ p_X(k) = \frac{\mu^k}{k!}e^{-e}$$
  + $$ X \in Po(\mu)$$

#### kontinuerlig stokastisk variabel
Sannolikhetsfunktionen kallas nu täthetsfunktion och betecknas med f.

1. __Likformig fördelning__ -- $$ f_X(x) = 1/(b-a) om a < x < b $$>
2. __Exponentialfördelning__ -- $$ f_X(x) = \lambda e^{-\labda x} $$
3. __Normalfördelningen__ 
4. __Weibull-fördelning__
5. __Gammafördelning__

__fördelningsfunktion__


__intensitet__


### 2. Flerdimensionella stokastiska variabler

#### Note to self: 
* $$ p_{X,Y}(i,j) = p_X(i)p_Y(j) = P(j|i)P(i) $$ OBS! Dont forget the last P(i)



#### Största och minsta värdet
* Z = max(X,Y)
  * $$F_Z(z) = F_X(z)F_Y(z)$$
* Z = min(X,Y)
  * $$F_Z(z) = 1-[1-F_X(z)][1-F_Y(z)]$$

Gör först om till fördelningsfunktion om täthetsfunktion

#### Summan av s.v.
* $$f_Z(z) = \int_{\infty}^{\infty} f_X(x)f_Y(z-x)dx$$




### 3. Väntevärden

#### Note to self: 
konstanter inuti väntevärdesfunktioner är korkat.

#### Väntevärdet E(X) eller μ
 Är ett typ av lägesmått, precis som medianen. E(X) är väntevärdet för X. E(X) berättar om vad det väntade resultatet blir.

 DEF: 
 $$ E(X) = \sum_kkp_X(k) $$ 
 $$ E(X) = \int\limits_{-\infty}^{\infty} x f_X(x)dx $$

 Y = g(X) 
 $$ E(Y) = \sum_kg(k)p_X(k)$$

 $$ E(X+Y) = E(X)+E(Y) $$

 X & Y oberoende 
 $$ E(XY) = E(X)E(Y)$$
 
 Samling X med samma väntevärde µ
 $$ E(\sum_{i=1}^nX_i)=n\mu $$

##### Betingade väntevärden
$$ E(X|Y=k) = \sum_{j=0}^\infty jp_{X|Y=k}(j)$$

$$ E(X|Y=y) = \int_{-\infty}^\infty xf_{X|Y=y}(x)dx$$

#### Variansen V(X) eller σ²

* Variansen är en typ av spridningsmått.
* DEF: $$ V(X) = E[(X-\mu)^2] $$ -- alltså ett väntevärde LOL
* $$ V(X) = E(X^2)-[E(X)]^2 $$
* $$ V(aX+b) = a^2V(X) $$
* V(X + Y) = V(X) + V(Y) + 2C(X,Y)
* Om oberoende: V(X + Y) = V(X) + V(Y)
* Om oberoende och med samma σ: $$ V(\sum_{i=1}^nX_i) = n\sigma^2 $$ 
* Om oberoende och med samma σ samt µ: $$ V(\bar{X})=\sigma^2/n $$


#### Standardavvikelse D(X) eller σ
* Schyst mått då man får samma dimension som väntevärdet
* $$ D(X) = \sqrt{V(X)} $$
* $$ D(aX + b) = |a|D(X) $$
* Om oberoende: $$ D(X + Y) = \sqrt{D^2(X) + D^2(Y)} $$

#### Variationskoefficienten
uttrycks i procent
$$ R(X) = D(X)/E(X) $$

#### fel
* _systematiskt fel/bias_  är differansen mellan mätvärdets väntevärde och det korrekta värdet. (ett tal)
* _slumpmässigt fel_ menas differensen mellan mätvärdet och dess väntevärde. (s.v. med E(X) = 0)

#### Beroendemått

##### Kovarians
* Kovariansen C(X,Y) mellan X & Y bör bli positiv om det finns ett beroende sådant att det finns en tendens hos variablerna att samtidigt avvika åt samma håll från sina väntevärden.
* $$ C(X,Y) = E[(X-\mu_X)(Y-\mu_Y)] $$
* $$ C(X,Y) = E(XY)-E(X)E(Y) $$
* Om C(X,Y) = 0 är X och Y okorrelerade.
* $$ X & Y oberoende \to okorrelerade $$

##### Korrelationskoefficienten
* DEF: $$ \rho(X,Y) = \frac{C(X,Y)}{D(X)D(Y)} $$
* Kovarians fast dimensionslös


#### Stora talens lag
* Ju fler oberoende s.v. med samma µ desto närmre kommer medelvärdet att gå mot µ.

#### Betingade väntevärden och varianser

#### Gauss approximationsformler
Har du någonsin känt dig inkapabel? Då är taylorutveckling något för dig! Allt för ofta vill man ha en schyst funktion mitt i väntevärdet men hur räknar man ut E(Y) då!? Du behöver inte vara helt körd i skallen, det kan vara så att du råkat ut för någon av de många fallgropar som kantar väntevägen! 

##### En variabel
1. taylorutveckla:
  $$ g(X) \approx g(\mu) + (X - \mu)g'(\mu) $$
2. g(X) har nu approximativa väntevärdet g(µ) samt [g'(E(X))]²V(X) som varians. Med en rak linje blir det enkelt att räkna med µ och σ².

##### Flera variabler
###### Abandon all hope, ye who enter here
1. taylorutveckla:
$$ g(X,Y) \approx g(\mu_X,\mu_Y)+(X-\mu_X)g'_X(\mu_X,\mu_Y)+(Y-\mu_Y)g'_Y(\mu_X,\mu_Y) $$

### 4. Normalfördelningen
##### Notes to self:
* ca en tredjedel av massan hamnar utanför en standardavvikelse.
* normalfördelningar bevaras alltid under linjära transformationer


$$ f_X(x) = \frac{1}{\sigma \sqrt{2\pi}}e^{-\frac{(x-\mu)^2}{2\sigma^2}} $$

#### Standardiserad fördelning
 Täthetsfunktion: φ
 Fördelningsfunktion: Φ

$$ \Phi(-x) = 1 - \Phi(x) $$

#### Allmän fördelning
$$ X \in N(\mu,\sigma) \quad iff \quad Y = (X-\mu)/\sigma \in N(0,1) $$
$$ f_X(x) = \frac{1}{\sigma}\varphi(\frac{x-\mu}{\sigma}) $$ 
$$ F_X(x) = \Phi(\frac{x-\mu}{\sigma}) $$

#### Linjärkombinationer
Om 
$$ X \in N(\mu,\sigma) $$
så gäller att
$$ Y=aX+b \in N(a\mu + b, |a|\sigma) $$

Om
$$ X_1,X_2,..,X_n $$
är oberoende N(µ,σ) och
$$ \bar{X} $$
är medelvärdet så gäller att
$$ \bar{X} \in N(\mu,\sigma/\sqrt{n}) $$


### 5. De tre vännerna och Binomialfördelning

#### binomialaren (med återläggning)
E(X) = np
V(X) = npq

Om oberoende
$$ X \in Bin(n_1,p) \quad \& Y \in Bin(n_2,p) $$
$$ X + Y \in Bin(n_1+n_2,p) $$

**Obs! Glöm inte att bin är diskret, håll därför koll på gränserna (> != >=)**
Kan approximeras som 
1. _poissonfördelning_ om p är litet
2. _normalfördelning_ om n är stort
N(np,sqrt(npq))

#### Hypergeometriske (utan återläggning)
E(X) = np
V(X) = ((N-n)/(N-1))np(1-p)

Kan aproximeras som
1. _binomialapproximation_ om n/N är liten
2. _normalapproximation_ om n är stort

#### Poisson-fördelningen
E(X) = µ
V(X) = µ

$$ X_1 \in Po(\theta_1) \quad and \quad X_2 \in Po(\theta_2) \quad then \quad X_1+X_2 \in Po(\theta_1+\theta_2) $$

Kan approximeras som
1. _normalfördelning_  om µ är stort

#### Multinomial


### 6. Slumptal

### Markovkedjor
Stokastiska processer vars nästa värde endast beror på nuvarande värde. 

övergångsmatris används för att skriva upp "hoppsannolikheterna".

övergångssannolikheter av 2a ordningen härleds genom att matrismultiplicera övergångsmatrisen med sig själv. alltså sannolikheten att mellanlanda i ett tillstånd.

För att simulera sannolikheterna att systemet börjar i de olika tillstånden används matrismultiplikation med en radvektor $$ p^{(0)}=(p_1^{(0)},p_2^{(0)},...) $$

$$ 
\begin{pmatrix}
1 & 2
\end{pmatrix}
*
\begin{pmatrix}
1to1 & 1to2  \\
2to1 & 2to2
\end{pmatrix} 
$$

##### terminologi
__beständigt__ tillstånd om P(i->i)=1
__obeständigt__ tillstånd om P(i->i) less than 1

__Om två tillstånd kommunicerar tvåsidigt är de båda antingen beständinga eller inte.__

__irreducibel__ om alla tillstånd kommunicerar tvåsidigt med varandra, indirekta anslutningar räknas också.

__stationär fördelning__  sannolikheterna att systemet befinner sig i de olika tillstånden.

1. skapa sannolikhetsvektorn π = (π1,π2,..)
2. lös ekv. π = πP (P är övergångsmatrisen)

__asymptotisk fördelning__
när $$ p^{(n)}=(p_1^{(n)},p_2^{(n)},...) -> \pi $$
när $$ n -> \infty $$
1. om man i en ändlig kedja kan finna ett r>0 så beskaffat att alla element i någon kolonn i matrisen P^r är positiva, existerar det en asymptotisk fördelning.
2. se stationär fördelning

__periodiska tillstånd__ om det alltid krävs ett visst antal hopp för att komma tillbaka till ett tillstånd är tillståndet periodiskt. t.ex. om processen bara kan nå tillbaka till Ei efter 3,6,9,... steg har Ei perioden 3.
__aperiodiska tillstånd__ om det alltid går att komma tillbaka till ett tillstånd direkt

-----


### DEL 2: Statistik eller vilka slutsatser man kan dra av ett datamaterial

#### terminologi
__parameterrummet__ - de värden den sökta parametern kan tänkas anta.
__stickprov__ -- betecknas med lilla x = (x1,x2,...,xn) för n dimensionella s.v.
__stickprovsvariansen__ 
$$ s^2=\frac{1}{n-1}\sum_{j=1}^n (x_j - \bar{x})^2 $$
__kovariansen mellan x- och y-värdena i en datamängd (x1,y1),(x2,y2),...,(xn,yn)__
$$ c_{xy} = \frac{1}{n-1}\sum_{i=1}^n(x_i-\bar{x})(y_i-\bar{y}) $$
__korrelationskoefficienten__
$$ r = \frac{c_{xy}}{s_xs_y} $$ 


### 7. Punktskattning


__punktskattning__ -- den observerade sannolikheten -- ett utfall av stickprovsvariabeln
$$ \theta_{obs}^*(x_1,x_2,...,x_n) $$

__stickprovsvariabeln__ -- en s.v. som punktskattningen är ett utfall av
$$ \theta^*(X_1,X_2,...,X_n) $$

__väntevärdesriktig__ -- punktskattning vars tillhörande stickprovsvariabel har väntevärdet θ. dvs om
$$ E(\theta^*) = \theta $$

__MSE__ -- mean square error -- medelkvadratfelet för en punktskattning -- mått på slumpmässigt fel
$$ MSE = E((\theta^* - \theta)^2) $$

#### skattning av μ & σ

##### µ
stickprovsmedelvärdet $$ \bar{x} $$ är en väntevärdesriktig och konsistent skattning av µ

##### σ^2
stickprovsvariansen s^2 är en väntevärdesriktig skattning av σ^2

#### Maximum-likelihood-metoden -- ML-metoden
1. Skapa 
$$ L(\theta) = P(X_1 = x_1, X_2 = x_2,...,X_n = x_n;\theta) $$
alt.
$$ L(\theta) = f_{X_1,X_2,...,X_n}(x_1,x_2,...,x_n;\theta) $$
(A.k.a. likelihood-funktionen)
2. Finn funktionens maxpunkt genom ex. derivering över theta.
3. Funktionens största värde är det mest sannolika scenariot.

#### Minsta-kvadrat-metoden -- MK-metoden
$$ Q(\theta) = \sum_{i=1}^n[x_i-\mu_i(\theta)]^2 $$
Går ut på att anta att det finns små försöksfel vid varje mätdatum och bara genom att minimera dessa finner man bästa skattning av theta.

#### Tillämpning på normalfördelningen
##### Ett stickprov

###### µ okänt σ känt
$$\mu* = \bar{x} $$

###### μ känt σ okänt
$$ (\sigma^2)*_{obs} = \frac{1}{n}\sum_{i=1}^n (x_i-\mu)^2 $$



### 8. Intevallskattning
När man vill veta hur stor sannolikhet det är att en okänd parameter ligger inom ett visst interval.

#### Tillämpning på normalfördelningen
#### Ett stickprov
##### Konfidensintervall för väntevärdet
###### Känd standardavvikelse
En lämplig skattning av µ är aritmetiska medelvärdet av X. 
$$ \bar{X} \in N(\mu,D) $$
$$ D = \sigma/\sqrt{n} $$
$$ I_\mu = (\bar{x}-\lambda_{\alpha/2}D,\bar{x}+\lambda_{\alpha/2}D) $$

Allt detta följer av att:
$$ \frac{\bar{X}-\mu}{D} \in N(0,1) $$
Följaktligen gäller med sannolikheten 1-alfa att:
$$ -\lambda_{\alpha/2} < \frac{\bar{X}-\mu}{D} < \lambda_{\alpha/2} >$$ 

Om vi har ett intervall:
$$ I_\mu = (16 \pm 2.58 * 0.155) $$ 
där
$$ D = 1.2/\sqrt{60} = 0.155 $$
och man istället vill ha en mindre standardavvikelse, säg 0.5, så kan man sätta upp följande ekvation:
$$ 2 * 2.58 * 1.2/\sqrt{n} = 0.5 $$

###### Okänd standardavvikelse

I detta fallet gäller en helt galen lösning eftersom man behöver skatta σ 
$$ I_\mu = (\bar{x}-t_{\alpha/2}(f)d,\bar{x}+t_{\alpha/2}(f)d) $$
$$ d = s/\sqrt{n}, \quad f = n-1 $$

##### Konfidensintervall för standardavvikelsen
###### μ känt 
Aint gonna happen gurl

####### µ okänt
$$ I_\sigma = (k_1s,k_2s) $$
$$ k_1 = \sqrt{(f/\chi_{\alpha/2}^2(f)} $$
$$ k_2 = \sqrt{(f/\chi_{1-\alpha/2}^2(f)} $$
$$ f = n-1 $$

##### Två stickprov
Om σ1 och σ2 är kända:
$$ I_{\mu_1-\mu_2} = (\bar{x}-\bar{y}-\lambda_{\alpha/2}D,\bar{x}-\bar{y}+\lambda_{\alpha/2}D) $$
$$ D = \sqrt{\sigma^2_1/n_1+\sigma^2_2/n_2} $$

Om σ1 = σ2 = σ:
$$ I_{\mu_1-\mu_2} = (\bar{x}-\bar{y}-t_{\alpha/2}(f)d,\bar{x}-\bar{y}+t_{\alpha/2}(f)d) $$

##### Stickprov i par
Skapa $$ z = y - x $$
### 9. Hypotesprövning


### 10. Regressionsanalys


### 11. Fallgropar

