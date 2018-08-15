
### Begrepp

__linjär faltining__ -- Som att ta impulssvaret h(n) och dra detta igenom input x(n) med h(0) i bräschen. Vid y(0) har bara x(0) hunnit skickas in. Detta multipliceras med h(0)--beskrivningen av hur systemet svarar på input. I nästa tidssteg kommer även x(1) ha skickats in i systemet, detta värde multipliceras nu med h(0). x(0) är inte helt borta ty length(h(n))>1 och multipliceras nu med h(1). Varje inputvärde klingar ut enligt h(n). Först ljuder det enligt h(0). I nästa t kommer samma inputvärde att ha avtagit enl. h(1). Att det avtar förutsätter givetvis att systemet är stabilt--impulssvaret skulle lika gärna kunna förstärka varje indata och samtidigt skicka in utdata som indata. 

$$ x(n) = 
  \begin{Bmatrix}
    2 & 4 & 6 & 4 & 2 
  \end{Bmatrix} 
$$

\\[ h(n) = 
  \\begin{Bmatrix}
    3 & 2 & 1 
  \\end{Bmatrix} 
\\]

\\[y(n) = \\sum_k h(n - k) x(k) \\]

_Exempel:_
\\[y(0) = h(0)x(0)+h(-1)x(1)+h(-2)x(2) \\]

_properties_

+ commutativity -- spelar ingen roll vilken som är till vänster eller höger om tecknet
+ associativity -- givet en faltning av tre signaler spelar det ingen roll vilka två som faltas först
+ distributivity -- faltningen mellan en signal och en summa av två signaler kan utvidgas genom att istället räkna på faltningen mellan signalen och den ena signalen i summan pluss faltningen mellan signalen och den andra signalen i summan
+ input-output -- faltning mellan impulssvar och input ger utsignalen

_seriekoppling_ -- utsignalen av två impulssvar efter varandra är faltningen av dessa samt x(n)

_parallellkoppling_ -- utsignalen av två parallellkopplade impulssvar är faltningen mellan insignalen och summan av de två impulssvaren


__korrelation__

+ __linjär korrelation__
\\[ r{yx}(k)=y(k) * x(-k) \\]

+ __linjär autokorrelationen__
\\[ r{xx}(k)=x(k) * x(-k) \\]

+ __\\( x(-n) \\) ?__
$$ x(n) = 
  \begin{Bmatrix}
    2 & \underline{4} & 6 & 4 & 2 
  \end{Bmatrix} 
$$

Spegelvänd nu vektorn runt x(0) och fyll i alla n som finns

$$ x(-n) = 
  \begin{Bmatrix}
    2 & 4 & 6 & \underline{4} & 2 
  \end{Bmatrix} 
$$ 


__cirkulär faltning mod n__ -- Som vanlig faltning fast loopad.

1. Skifta de två signalerna så att n=0 är först i ledet.
2. Skär bort överskott eller lägg till nollor i "slutet" på signalerna (beroende av modulo m)
3. Ställ upp faltningstabell och fyll i. Skillnaden från vanlig faltning är att dessa signaler är periodiska och därför måste man lägga till så många kolumner till vänster om x(0) att alla \\( h(n) \\) har varit med och bidragit för varje \\( n \\).

__cirkulär korrelation modulo n__ -- ???

__sampling__ -- Används för att diskretisera någon signal genom att läsa av värdet vid varje \\( t = n T_s = n \\frac{1}{F_s}. För att få med alla frekvenser från den analoga signalen krävs att man samplar med dubbelt så hög frekvens som den högsta i signalen.

_terminologi_

+ \\( T_s \\) -- perioden mellan varje sampel (sec)
+ \\( F_s \\) -- sampeltakten (Hz)


__nedsampling/decimeras__

__uppsamplas/interpoleras__


__pol-/nollställe-diagram__ -- Analysverktyg som visar hur systemet kommer behandla olika z. För z i nollställen kommer \\( H(z) = 0 \\). På motsvarande sätt kommer \\( H(z) = \\infty \\) när z är på en pol. Genom att faktorisera \\( H(z) = \\frac{B(z)}{A(z)} \\) och sedan finna rötterna till de båda funktionerna finner vi också poler och nollställen för systemfunktionen. Rötterna till \\( B(z) \\) ger oss våra nollställen och \\( A(z) \\) våra poler. Tänk på att förlänga kvoten med z för att få nämnaren på kvadratisk form. När rötterna är funna är det alltid fördelaktigt att skriva om \\( H(z) \\) så att pol- och nollställen blir synliga. 

+ __poler__ -- befinner sig polen inuti enhetscirkeln har man inget att frukta. Detta gör så att signalen dör så småningom och är därför stabilt. Om den ligger på enhetscirkeln är det värre ty då tonar aldrig signaler ut och det blir instabilt. Även poler utanför enhetscirkeln leder till instabila system men då växer även signalen! Har man två komplexkonjugerande poler kommer signalen att svaja. Innanför: minskande svaj, på: evigt svaj, utanför: växande svaj. Om polen ligger till vänster om origo kommer tecknet alternera.
+ __nollställen__ -- Dessa dödar den normaliserade frekvensen de befinner sig på men även frekvenser runt omkring nollställen blir försvagade. För att bara slå ut precis en viss frekvens kan man därför med fördel placera poler på samma frekvens men liiiite närmare origo.
+ __maximum phase system__ -- H(z) där alla nollställen ligger utanför enhetscirkeln.
+ __minimum phase system__ -- H(z) där alla nollställen ligger inuti enhetscirkeln.
+ __mixed phase system__ -- H(z) med nollställen både inuti och utanför enhetscirkeln.
+ __kausalt system__ -- om antalet poler är större än eller lika med antalet nollställen. 

__amplitudfunktionen eller \\( |H(\\omega)| \\)__ -- För att se vilka frekvenser en signal består av.

__frekvensrespons eller \\( H(\\omega) \\)__ -- Det samma som amplitudfunktionen?

__fasfunktionen eller \\( arg(H(\\omega)) \\)__ -- För att se hur insignalen fasförskjuts för olika vinkelhastigheter.

+ __rak linje__ -- linjär fasförskjutning
+ 

 __linjär fasförskjutning__ -- När alla frekvenser förändras med en konstant förskjutning. Filtret \\( H( \\omega ) = A( \\omega) e^{j \\Phi( \\omega )} \\) kommer göra precis det. Förändringen bestäms av \\( \\Phi(\\omega) \\). Alla symmetriska och antisymmetriska (2 1 0 -1 -2) impulssvar genererar linjär fas. För att undvika fasförskjutning ö.h.t. krävs antingen att h(n) är statiskt, d.v.s. att det inte består av minneselement, eller att det inte är ett kausalt impulssvar.


__impulssvar eller \\( h(n) \\)__ -- Beskrivningen av hur systemet förstärker input och hur snabbt den tonar bort. 

+ __härled differensekvation__ -- om \\( h(n) = \\begin{Bmatrix} 3 & 2 & 1 \\end{Bmatrix} \\) så kan man tänka på att h(0) är hur maskinen förstärker det senaste invärdet. Därför går h(n) att skriva om till \\[ y(n) = h(0)x(n)+h(1)x(n-1)+h(2)x(n-2) \\]
+ __härled systemfunktionen__ -- systemfunktionen är z transformen av impulssvaret. Transformera!
+ __härled Fouriertransformen__ -- Fouriertransformen är som z transformen. Man behöver bara byta ut \\(z^{-n}\\) mot \\( e^{-j2πFt} \\)
+ __härled linjär autokorrektion__ -- Mq32984u932hrqweroiuhwqrl
+ __härled utsignal vid viss insignal__ -- om det är två diskreta vektorer -- falta! Annars kan det ofta vara smidigare att första z-transformera, multiplicera och sedan iverstransformera.


__systemdiagram__ -- ritning över hur utdata förhåller sig till indata.

+ __härleda differensekvation__ -- Kom ihåg att \\( Y(z) = H(z)X(z) \\). Systemdiagram är alltid "z-transformerade". Bilda hjälpfunktioner inne i diagrammet och härled hur de förhåller sig till varandra. När du har \\( Y(z) = H(z)X(z) \\) måste inverstransformera för att få differensekvationen.
+ __härleda impulssvar__ -- När man har \\( Y(z) = H(z)X(z) \\) löser man ut \\( H(z) \\) och inverstransformerar.
+ __härleda amplitudfunktionen__ -- Finn pol-/nollställen för \\( H(z) \\) och skissa amplituden över olika frekvenser.


__LTI__ -- Linjära tidsinvarianta system

__FIR-system__ -- Finite impulse response-system

+ impulssvaret är av finit längd
+ alltid stabilt
+ alla poler i origo
+ kan ha en fasförskjutning

__IIR-system__ -- Infinite impulse response-system (feedbacksystem)

+ oändligt impulssvar
+ stabilt iff alla poler ligger innanför enhetscirkeln
+ kan inte ha fasförskjutning

__differensekvationen__

Generella fallet:
\\[ y(n) + \\sum_{k=1}^N a_k y(n-k) = \\sum_{k=0}^N b_k x(n - k) \\]

_Typisk uppgift: bestäm utsignal_
\\[ y(n)  = 0.5 y(n - 1) + x(n) \\]
\\[ x(n)  = ( \\frac{1}{3})^n u(n) \\]
\\[ y(-1) = 1 \\]


__systemfunktionen H(z)__ -- z-transformen av impulssvaret. z-transformen går generellt mellan \\( (-\\infty , \\infty) \\) men för kausala system endast ner till 0.
\\[ H(z) = \\sum_{-\\infty}^{\\infty} h(n)z^{-n} \\]


__Fouriertransformen H(ω)__ -- Verktyg för att ta reda på vilka frekvenser en signal består av. Lite som att blanda färg -- fast baklänges. Fouriertransformen är z-transformen beräknad på enhetscirkeln. I utbyte mot att den existerar har den två krav: att impulssvaret är kausalt och stabilt.

__DTFT__ -- Discrete-time Fourier transform. Typen av Fourieranalys som bör användas då input är diskret. Funktionen som produceras är dock kontinuerlig.

__DFT__ -- Discrete Fourier transform. DTFT fast med diskret utdata. Eftersom funktionen är periodisk blir en tidsfördröjning med -1 i DFT detsamma som att skjuta fram varje värde ett steg till höger. Då DFT är cyklisk är x(-1) detsamma som x(N) och det sista värdet i den ursprungliga sekvensen tar plats på n=0.

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


#### matematik

__geometrisk summa__

\\[ \\sum_{k=m}^n a^k = \\frac{a^{n+1} - a^m}{a-1} \\]


__geometrisk serie__

\\[ \\sum_{k=0}^{\\infty} a^k = \\frac{a^0}{1-a} \\quad |a| < 1 >\\]


__partialbråksuppdelning__ -- Hur partialbråket kommer se ut beror på faktorer i nämnaren hos den ursprungliga kvoten. När de olika termerna är uppställda på andra sidan likhetstecknet multipliceras högersidan med vänstersidans nämnare. Sedan får man A, B osv.. genom gausselimination.

\\[ \\frac{2x^2+x-3}{(x+1)^2(x+2)} = \\frac{A}{x+1}+\\frac{B}{(x+1)^2}+\\frac{C}{x+2} \\]

+ \\(  x+a \\to \\frac{A}{x+a} \\)
+ \\( (x+a)^n \\to \\frac{A_1}{x+a} + ... + \\frac{A_n}{(x+a)^n} \\)
+ \\(  x^2 + ax + b \\to \\frac{A_1 x + B_1}{x^2 +ax + b} \\)
+ \\(  x^2 + ax + b \\to \\frac{A_1 x + B_1}{x^2 +ax + b} + ... + \\frac{A_n x + B_n}{(x^2 +ax + b)^n}\\)
