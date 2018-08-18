## Tidsdomänen

__differensekvationen__ -- Beskriver hur utsignalen, i tidsdomämen, beror av indata och möjligen även tidigare utdata.

Generella fallet:
\\[ y(n) + \\sum_{k=1}^N a_k y(n-k) = \\sum_{k=0}^N b_k x(n - k) \\]


__impulssvar eller \\( h(n) \\)__ -- Beskrivningen av hur systemet förstärker input och hur snabbt den tonar bort. 

+ __härled differensekvation__ -- om \\( h(n) = \\begin{Bmatrix} 3 & 2 & 1 \\end{Bmatrix} \\) så kan man tänka på att \\( h(0) \\) är hur maskinen förstärker det senaste invärdet. Därför går \\( h(n) \\) att skriva om till \\( y(n) = h(0)x(n)+h(1)x(n-1)+h(2)x(n-2) \\)
+ __härled systemfunktionen__ -- systemfunktionen är z transformen av impulssvaret. Transformera!
+ __härled Fouriertransformen__ -- Fouriertransformen är som z transformen. Man behöver bara byta ut \\(z^{-n}\\) mot \\( e^{-j2 \\pi Ft} \\)
+ __härled linjär autokorrektion__ -- \\( r{xx}(k)=x(k) * x(-k) \\). Man får \\( x(-k) \\) genom att snurra \\( x(n) \\) runt y-axeln.
+ __härled utsignal vid viss insignal__ -- om det är två diskreta vektorer -- falta! Annars kan det ofta vara smidigare att första z-transformera, multiplicera och sedan iverstransformera.


## Linjär faltning

Som att ta impulssvaret \\( h(n) \\) och dra detta igenom input \\( x(n) \\) med \\( h(0) \\) i bräschen. Vid \\( y(0) \\) har bara \\( x(0) \\) hunnit skickas in. Detta multipliceras med \\( h(0) \\)--beskrivningen av hur systemet svarar på input. I nästa tidssteg kommer även \\( x(1) \\) ha skickats in i systemet, detta värde multipliceras nu med \\( h(0) \\). \\( x(0) \\) är inte helt borta ty \\( length(h(n))>1 \\) och multipliceras nu med \\( h(1) \\). Varje inputvärde klingar ut enligt \\( h(n) \\). Först ljuder det enligt \\( h(0) \\). I nästa t kommer samma inputvärde att ha avtagit och nu förstärkas enl. \\( h(1) \\). Att det avtar förutsätter givetvis att systemet är stabilt -- impulssvaret skulle lika gärna kunna förstärka varje indata och samtidigt skicka in tidigare utdata som indata (läs: feedback). 

$$ x(n) = \begin{Bmatrix} 2 & 4 & 6 & 4 & 2 \end{Bmatrix} $$

\\[ h(n) = \\begin{Bmatrix} 3 & 2 & 1 \\end{Bmatrix} \\] 

\\[y(n) = \\sum_k h(n - k) x(k) \\]

_Exempel:_
\\[y(0) = h(0)x(0)+h(-1)x(1)+h(-2)x(2) \\]

_properties_

+ commutativity -- spelar ingen roll vilken som är till vänster eller höger om tecknet
+ associativity -- givet en faltning av tre signaler spelar det ingen roll vilka två som faltas först
+ distributivity -- faltningen mellan en signal och en summa av två signaler kan utvidgas genom att istället räkna på faltningen mellan signalen och den ena signalen i summan pluss faltningen mellan signalen och den andra signalen i summan
+ input-output -- faltning mellan impulssvar och input ger utsignalen

_seriekoppling_ -- utsignalen av två impulssvar efter varandra är faltningen av dessa samt \\( x(n) \\)

_parallellkoppling_ -- utsignalen av två parallellkopplade impulssvar är faltningen mellan insignalen och summan av de två impulssvaren


__korrelation__

+ __linjär korrelation__
\\[ r{yx}(k)=y(k) * x(-k) \\]

+ __linjär autokorrelationen__
\\[ r{xx}(k)=x(k) * x(-k) \\]

+ __\\( x(-n) \\) ?__
\\[ x(n) = \\begin{Bmatrix} 2 & \\underline{4} & 6 & 4 & 2 \\end{Bmatrix} \\]

Spegelvänd nu vektorn runt x(0) och fyll i alla värden som finns

$$ x(-n) = 
  \begin{Bmatrix}
    2 & 4 & 6 & \underline{4} & 2 
  \end{Bmatrix} 
$$ 


__cirkulär faltning mod m__ -- Som vanlig faltning fast med loopade signaler.

1. Skär bort överskott eller lägg till nollor i "slutet" på signalerna så att de är m långa (beroende av modulo m).
2. Tidsförskjut de två signalerna så att \\( n=0 \\) är först i ledet. Dessa signaler är cykliska så värdet från det första elementet kommer igen efter det sista, osv..
3. Ställ upp faltningstabell och fyll i. Skillnaden från vanlig faltning är att dessa signaler är periodiska och därför måste man lägga till så många kolumner till vänster om \\( x(0) \\) att alla \\( h(n) \\) har varit med och bidragit för varje \\( n \\).


__cirkulär korrelation modulo n__ -- 

1. Spegelvänd den ena signalen runt \\( n = 0 )\\ och fortsätt sedan enl. stegen för cirkulär faltning.


## Transformer

Transformer är inget konstigare än geniala funktioner. Mer specifikt kommer kursen endast berörar transformer som mappar tidsdomänen på den komplexa frekvensdomänen. Transformer är användbara eftersom vissa operationer som är tidsödande i tidsdomänen motsvaras av enkla operationer i den komplexa frekvensdomänen. De ger också upphov till flera analysverktyg men också möjlighet att förändra system till sin fördel. När man är färdig måste man alltid inverstransformera för att komma tillbaka till tidsdomänen.


### Z-transformen H(z)

Transformen för diskreta signaler. Från z-transformen av differensekvationen leder broar i alla möjliga riktningar. Nedan följer några av fördelarna.

+ faltning blir multiplikation
+ analys och förändring av poler och nollställen nära till hands
+ systemdiagram kan ritas upp
+ Fouriertransformen ligger ett variabelbyte bort
+ differensekvationen ges genom inverstransformering


__bestäm y(n) med begynnelsevilkor__ -- Här använder man den s.k. ensidiga z-transformen. Denna variant börjar först sin summering vid \\( n = 0 \\). Så länge systemet i fråga inte är kausalt och genererar utdata redan när n är mindre än noll kommer dock tidsskifte att leda till ett annorlunda resultat

\\[ Y(n-k) \\Leftrightarrow z^{-k} [ Y^+ (z) + \\sum_{n=1}^k x(-n) z^n ] \\]
\\[ = [ y(-k)+y(-k+1)z^{-1} +...+ y(-1) z^{-k+1} + z^{-k} Y^+ (z) ] \\]

+ __exempeluppgift__
\\[ y(n)  = 0.5 y(n - 1) + x(n) \\]
\\[ x(n)  = ( \\frac{1}{3})^n u(n) \\]
\\[ y(-1) = 1 \\]


__bestäm y(n) då insignalen är en sinusvåg__ -- Som vanligt kommer z-transformen \\( Y(z) \\) vara en produkt av \\( H(z) X(z) = \\frac{N(z)}{D(z)} X(z) \\). Genom partialbråksuppdelning erhålls summan \\( \\frac{N_1 (z)}{D(z)} + \\frac{C_0 + C_1 z^{-1}}{1-2 \\cos ( \\omega_0) z^{-1} + z^{-2}} \\). Efter inv. trans. är svaret funnet. Den vänstra termen är en transient lösning medan den andra är stationär. Den stationära lösningen kommer vara av typen \\( A \\cos ( \\omega_0 n) + B \\sin ( \\omega_0 n) \\)



__systemfunktionen H(z)__ -- z-transformen av impulssvaret. z-transformen går generellt mellan \\( (-\\infty , \\infty) \\) men för kausala system endast ner till 0.
\\[ H(z) = \\sum_{-\\infty}^{\\infty} h(n)z^{-n} \\]

__systemdiagram__ -- ritning av hur utdata förhåller sig till indata i frekvensdomänen.

+ __härleda differensekvation__ -- Kom ihåg att \\( Y(z) = H(z)X(z) \\). Systemdiagram är alltid "z-transformerade". Bilda hjälpfunktioner inne i diagrammet och härled hur de förhåller sig till varandra. När du har \\( Y(z) = H(z)X(z) \\) måste inverstransformera för att få differensekvationen.
+ __härleda impulssvar__ -- När man har \\( Y(z) = H(z)X(z) \\) löser man ut \\( H(z) \\) och inverstransformerar.
+ __härleda amplitudfunktionen__ -- Finn pol-/nollställen för \\( H(z) \\) och skissa amplituden över olika frekvenser.

__inverstransformering__ -- Tips och tricks samlade nedan.

+ komplexkonjugerande poler leder till kombination av sinus resp. cosinus-termer och man bör därför i täljaren lägga till \\( 1 - z^{-1} = 1 - z^{-1} + \\alpha \\cos ( \\omega_0 ) z^{-1} - \\alpha \\cos ( \\omega_0 ) z^{-1} \\). Därefter delar man fördelaktigt upp täljaren i termer som behövs för att inverstransformera fram cosinus och resten. Typ så här
\\[ 1 - \\alpha \\cos ( \\omega_0) z^{-1} \\text{ (cosinus) \\]
Resten multiplicerar vi med \\( \\frac{ r \\sin ( \\omega_0 ) }{ r \\sin ( \\omega_0 ) } \\) och får då en term som kan inverstransformeras till en sinusterm med en lustig konstant framför.
+ då polerna är funna kan faktorerna skrivas \\( 1 - p_1 z^{-1} \\) Där \\( p_1 = pol \\)



### Fouriertransformen H(ω)

Verktyg för att ta reda på vilka frekvenser en signal består av. Lite som att blanda färg -- fast baklänges. Fouriertransformen är z-transformen beräknad på enhetscirkeln. I utbyte mot att den existerar har den två krav: att impulssvaret är kausalt och stabilt.

__DTFT__ -- Discrete-time Fourier transform. Typen av Fourieranalys som bör användas då input är diskret. Funktionen som produceras är dock kontinuerlig.

__DFT__ -- Discrete Fourier transform. DTFT fast med diskret utdata. Eftersom funktionen är periodisk blir en tidsfördröjning med -1 i DFT detsamma som att skjuta fram varje värde ett steg till höger. Då DFT är cyklisk är \\( x(-1) \\) detsamma som \\( x(N) \\) och det sista värdet i den ursprungliga sekvensen tar plats på \\( n=0 \\).

_HOWTO:_ 

1. Låt 

$$ x(n) = 
  \begin{Bmatrix}
    2 & 4 & 6 & 4 & 2 
  \end{Bmatrix} 
$$

2. Välj längd N och beräkna DTFT vid frekvenserna

$$ \omega = 2 \pi 
  \begin{Bmatrix}
    0 & \frac{1}{N} & \frac{2}{N} & \frac{3}{N} & ... & \frac{N-1}{N} 
  \end{Bmatrix} 
$$

3. Med dessa värden genereras nu den "diskreta fouriertransformen" för k genom att summera över alla n mellan 0 och N-1

\\[ X_{DFT} (k) = \\sum_{n=0}^{N-1} x(n) e^{-j 2 \\pi \\frac{k}{N} N} \\]

__FFT__ -- Fast Fourier transform. Algorithm for calculating a sequence of the DFT.

\\[ X( \\omega ) = X(z | z = e^{j \\omega} ) \\]


## Sampling

Används för att diskretisera analoga signaler genom att läsa av signalen vid varje \\( t = n T_s = n \\frac{1}{F_s} \\). För att få med alla frekvenser från den analoga signalen krävs enl. __Nyqvist-Shannons samplingsteorem__ att man samplar med mer än dubbelt så hög frekvens som den högsta i signalen.

__HOWTO SAMPLE__
Vi vill sampla \\( x(t) = \\cos (2 \\pi 400 t) \\) med sampeltakten 1000 Hz.

1. Då 2π svarar mot ett varv, alt. en svängning, vet vi att signalens frekvens är 400 Hz.
2. Vi substituerar nu \\( t = \\frac{1}{F_s} \\) som ger 
\\[ x(n) = \\cos (2 \\pi 0.4 n) = \\cos (2 \\pi (0.4 + k)n) \\]
3. Det sista ledet fick följa med då det introducerar __vikning__. Efter sampling kommer en mängd olika frekvenser \\( (F_0 / F_s) + k = f_0 \\) motsvaras av en och samma frekvens. Detta betyder att om man inte samplar med tillräckligt hög frekvens kan vissa höga frekvenser vikas ner till lägre toner. Ifall den normaliserade frekvensens absolutbelopp är större än 0.5 kommer frekvensen inte representeras korrekt i den samplade signalen. Genom att subtrahera heltal från den normaliserade frekvensen tills dess att den befinner sig mellan -0.5 och 0.5 finner man den frekvens som kommer representera den faktiska frekvensen.

* Om vi både har cos och sin i signalen bör man använda Eulers formler för att göra om signalen till enbart cosinus.
* Sinustermer ger upphov till fasskifte på π/2.
* Om man efter sampling vill lista alla möjliga egentliga frekvenser som kunnat ge upphov till den man fick får man __INTE__ glömma att beräkna alla de negativa heltalsmultiplarna.

__Filma hjul__ -- Viktigt att tänka på är vilken period hjulet har. Har hjulet fyra ekrar kommer hjulet verka ha 1/4 periodtid, eftersom hjulet verkar vara tillbaka i ursprungsläget när alla ekrar snurrat 1/4ω. Detta leder till att frekvensområdet krymps och infinner sig halvvägs till de närmaste ekrarna och heltalet k multipliceras nu med 1/4.

\\[ f_0 = \\frac{F}{F_s} \\pm \\frac{1}{4} k , \\quad -1/8 \\leq f \\leq 1/8 \\]

__HOWTO RECONSTRUCT__
Vi har nu en funktion som beror av en normaliserad frekvens som kan vara resultatet av vikning och vill nu återskapa en signalen från våra sampel. Det finns nu tre möjligheter: återskapa genom att multiplicera frekvensen med sampeltakten eller passa på att greja lite till med signalen m.h.a. decimering eller interpolering!! 

__nedsampling/decimeras__ -- reducerar sampeltakten i en signal med faktor  \\( D \\) genom att bara ta med var D:te element. Våra nya frekvenser ges av

\\[ f' = \\frac{F}{F_s} D \\pm k , \\quad -0.5 < f' < 0.5 \\]'>

__uppsamplas/interpoleras__ -- ökar sampeltakten med faktor \\( I \\) i en signal genom att lägga in \\( I \\) nollor mellan varje egentligt signalvärde. Den interpolerade sekvensen förhåller sig på följande sätt till den ursprungliga sekvensen \\( Y( \\omega ) = X( I \\omega) \\). Detta betyder att alla frekvenser mellan -0.5*I och 0.5*I i \\( X( \\omega) \\) kommer komma med i \\( Y( \\omega) \\) men med frekvenserna dividerade med I.

\\[ f' = \\frac{ \\pm \\frac{F}{F_s} \\pm k}{I} , \\quad -0.5 < f' < 0.5 \\]'>


_terminologi_
+ \\( F_0 \\) -- analoga signalens frekvens (Hz)
+ \\( T_s \\) -- perioden mellan varje sampel (sec)
+ \\( F_s \\) -- sampeltakten (Hz)
+ \\( f'  \\) -- den uppfattade frekvensen efter sampling


## Analys

__pol-/nollställe-diagram__ -- Analysverktyg som visar hur systemet kommer behandla olika z. För z i nollställen kommer \\( H(z) = 0 \\). På motsvarande sätt kommer \\( H(z) = \\infty \\) när z är på en pol. Genom att faktorisera \\( H(z) = \\frac{B(z)}{A(z)} \\) och sedan finna rötterna till de båda funktionerna finner vi också poler och nollställen för systemfunktionen. Rötterna till \\( B(z) \\) ger oss våra nollställen och \\( A(z) \\) våra poler. Tänk på att förlänga kvoten med z för att få nämnaren på kvadratisk form. När rötterna är funna är det alltid fördelaktigt att skriva om \\( H(z) \\) så att pol- och nollställen blir synliga. 

+ __poler__ -- befinner sig polen inuti enhetscirkeln har man inget att frukta. Detta gör så att signalen dör så småningom och är därför stabilt. Om den ligger på enhetscirkeln är det värre ty då tonar aldrig signaler ut och det blir instabilt. Poler utanför enhetscirkeln leder till förstärkt feedback vilket i sin tur leder till väldigt instabila system. Har man två komplexkonjugerande poler kommer signalen att svaja. I förhållande till enhetscirkeln gäller följande: Innanför: minskande svaj, på: evigt svaj, utanför: växande svaj. Om polen ligger till vänster om origo kommer tecknet alternera.
+ __nollställen__ -- Dessa dödar den normaliserade frekvensen de befinner sig på men även frekvenser runt omkring nollställen blir försvagade. För att bara slå ut precis en viss frekvens kan man därför med fördel placera poler på samma frekvens men liiiite närmare origo.
+ __maximum phase system__ -- H(z) där alla nollställen ligger utanför enhetscirkeln.
+ __minimum phase system__ -- H(z) där alla nollställen ligger inuti enhetscirkeln.
+ __mixed phase system__ -- H(z) med nollställen både inuti och utanför enhetscirkeln.
+ __kausalt system__ -- om antalet poler är större än eller lika med antalet nollställen. 

__frekvensrespons eller \\( H(\\omega) \\)__ -- Funktion som innehåller info om både amplitud och fas. Dess absolutbelopp ger upphov till amplitudfunktionen och dess argument är fasfunktionen.

__amplitudfunktionen eller \\( |H(\\omega)| \\)__ -- För att se vilka frekvenser en signal förstärker eller dödar. 
\\[ |H( \\omega_0 ) = \\frac{ |V_1| }{ |U_1| |U_2| } \\]

__fasfunktionen eller \\( arg(H(\\omega)) \\)__ -- För att se hur insignalen fasförskjuts för olika frekvenser. Går att skissa m.h.a. pol-/nollställe-diagram genom att summera \\( arg(V_i)  - arg(U_i) \\) där \\( V_i \\) är avståndet från den aktuella frekvensen till nollställe och \\( U_i \\) är motsvarande för poler. 

+ __raka linjer__ -- linjär fasförskjutning innebär att om det existerar poler finns de i origo. Hack i grafen förekommer på nollställen.
+ __¬raka linjer__ -- resultatet av poler utanför origo.


__linjär fasförskjutning__ -- När alla frekvenser förändras med en konstant förskjutning. Filtret \\( H( \\omega ) = A( \\omega) e^{j \\Phi( \\omega )} \\) kommer göra precis det. Förändringen bestäms av \\( \\Phi(\\omega) \\). Alla symmetriska och antisymmetriska, d.v.s. \\( \\begin{Bmatrix} 2 & 1 & 0 & -1 & -2 \\end{Bmatrix} \\) impulssvar genererar linjär fas. För att undvika fasförskjutning ö.h.t. krävs antingen att h(n) är statiskt, d.v.s. att det inte består av minneselement, eller att det inte är ett kausalt impulssvar.


__stabilitet__

+ alla poler i origo
+ alla poler inom enhetscirkeln
+ finit impulssvar

## Systemtyper

__LTI__ -- Linjära tidsinvarianta system. Dessa kommer i två varianter beskrivna nedan.

__FIR-system__ -- Finite impulse response

+ impulssvaret är av finit längd
+ alltid stabilt
+ alla poler i origo
+ kan ha en fasförskjutning

__IIR-system__ -- Infinite impulse response (feedbacksystem)

+ oändligt impulssvar
+ stabilt iff alla poler ligger innanför enhetscirkeln
+ kan inte ha fasförskjutning




## Matematik

__Euler's formler__

\\[ \\cos x = \\frac{e^{ix} + e^{-ix}}{2}, \\quad \\sin x = \\frac{e^{ix} - e^{-ix}}{2i} \\]

__geometrisk summa__

\\[ \\sum_{k=m}^n a^k = \\frac{a^{n+1} - a^m}{a-1} \\]


__geometrisk serie__

\\[ \\sum_{k=0}^{\\infty} a^k = \\frac{a^0}{1-a} \\quad |a| < 1 >\\]


__partialbråksuppdelning__ -- Hur partialbråket kommer se ut beror på faktorer i nämnaren hos den ursprungliga kvoten. När de olika termerna är uppställda på andra sidan likhetstecknet multipliceras högersidan med vänstersidans nämnare. Sedan får man A, B osv.. genom gausselimination.

\\[ \\frac{2x^2 +x -3}{(x+1)^2 (x+2)} = \\frac{A}{x+1} + \\frac{B}{(x+1)^2} + \\frac{C}{x+2} \\]

__nämnarfaktorer -> partialbråkstermer__

+ \\( (x+a) \\to \\frac{A}{x+a} \\)
+ \\( (x+a)^n \\to \\frac{A_1}{x+a} + ... + \\frac{A_n}{(x+a)^n} \\)
+ \\( (x^2 + ax + b) \\to \\frac{A_1 x + B_1}{x^2 +ax + b} \\)
+ \\( (x^2 + ax + b) \\to \\frac{A_1 x + B_1}{x^2 +ax + b} + ... + \\frac{A_n x + B_n}{(x^2 +ax + b)^n} \\)
