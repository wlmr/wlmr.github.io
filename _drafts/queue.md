---
layout: post
title:  "Köteori"
---

Köteorin används för att analysera system där kunder och betjänare interagerar. Hur många kunder kommer det i snitt att finnas i systemet? Hur lång tid kommer de ta att betjäna? Är systemet stabilt eller kommer antalet kunder att öka obehindrat?


För att kategorisera kösystem används ofta en modell "A/B/x". A är fördelningen mellan ankomster, B motsvarar betjäningstidernas fördelning och x antalet betjänare. Denna konvention saknar dock information om antalet buffertplatser i systemet. Så länge inget annat anges gäller hursomhelst att antalet sådana platser är oändligt.

A och B antar ofta ett av tre värden:

* M - exponentialfördelad
* D - deterministisk (konstant)
* G - godtycklig fördelning (men känd)

## Olika kötyper
### Markovska köer
* Beskrivs av *markovkedjor*
* Alla tider mellan ankomster samt betjäningstider är exponentialfördelade.
* $A(t) = 1 - e^{- \lambda t}$
* $B(x) = 1 - e^{- \rho x}$

##### Standardmall för beräkning
1. Rita markovkedjan
2. Hitta tillståndsfördelningen med snittmtoden
3. Beräkna intressanta performanceparametrar
  * E(N)
  * E(T)
  * P(Spärr)
  * $\lambda_ {eff}$


#### M/M/1
$\bar{N} = \frac{\rho}{1-\rho} = \frac{\lambda}{\mu-\lambda}$

#### M/M/m
Skilnaden här är att vi får multiplar av µ eftersom betjäningstiden beror av antalet betjänare. När det finns _en_ kund i kösystemet kommer betjäningsintensiteten att vara µ. På samma vis blir betjäningsintensiteten 2µ när det finns _två_ kunder i systemet, o.s.v. upp till m. Detta förändrar vid uträkning av tillständsfördelningen.

#### M/M/1/K - begränsade köplatser
Denna typen av kösystem gör det möjligt att räkna på _P(spärr)_. Dessutom är dessa lättare att räkna på eftersom det blir ett finit antal tillständ. 

#### begränsat antal kunder
Här förändras λ istället. Det blir i dessa fall smidigt att räkna med λ som en kunds ankomstintensitet. Har man då fem kunder blir alltså intensiteten till första tillståndet 5λ. I detta tillstånd finns endast fyra kunder utanför systemet och därav följer att ankomstintensiteten till nästa tillstånd blir 4λ.

#### begränsat antal kunder och begränsat antal köplatser
I sådan system kombineras helt enkelt kunskaperna om system med begränsade köplatser och system med begränsat antal kunder.

#### M/M/m * upptagetsystem (Erlangsystemet)
I dessa system gäller följande:
1. m betjänter
2. inga köplatser
3. ankomsterna är poissonprocess
4. ankomstintensitet är alltid $\lambda$
* Bra apporximation om man har många kunder i förhållande till betjänter.
* P(spärr) kallas i Erlangsystem för $E_m(\rho)$
    + räknas ut m.h.a. rekursion eller tabeller
* avverkad trafik = $E(N) = \lambda_{eff} \bar{x} = \rho(1-E_m(\rho))$
* $\bar{x} = \frac{1}{\rho}$
* $p_k = \rho/k \frac{\rho^{k-1}/(k-1)!}{\sum_{i=0}^{m} \frac{\rho^i}{i!}}=\frac{\rho}{k} p_{k-1}$

### Icke-markovska köer

#### M/G/1
* E(X) går att beräkna eftersom man vet fördelningen
* E(T) är trixigare då den beror på hur många som redan är i systemet
* se formelsamling.

### Könät
Ankomsterna till nod 2 är lika med output från nod 1

###### HOWTO

1. Ställ upp ankomstintensiteterna som ekvationssystem
2. Räkna ut $E(N_i) = \frac{\rho _i}{1-\rho _i}$
3. $E(T_i) = \frac{E(N_i)}{\lambda _i}$
4. $E(N_{qi}) = E(N_i) - E(N_si) = E(N_i) - \rho _i$ Dela med lambda för att få medeltid.

###### Att tänka på
Om man vill veta hur lång tid det tar för ett paket genom ett nät som passerar en viss nod så summeras de gemensamma noderna samt sannolikheten för det ena alternativet multiplicerat med tiden för den och samma sak för det andra alternativet. Tiden i ett system beror bara på λ in i systemet och E(N) (summan av alla delsystem).

#### Återkoppling

###### Exempeluppgifter
* Vad är sannolikheten att en kund aldrig betjänas av nod x?
  + geometrisk summa
* Hur många gånger kommer en kund att ha betjänats i nod x?
  + ankomstintensitet för x / ankomstintensitet för hela nätet

## Lexikon
##### Transformer
Z-transformen kan användas för att härleda E(X).
I denna kurs har man barnsligt nog valt att definera z-transformen som \
$F(z) = \sum_{n=0}^{\infty} f_n z^n$ \
Alltså med positivt n i exponenten.

* Genom att transformera tillståndssannolikheterna får vi \
$P(z) = \sum_{0}^{\infty} z^k p_k$
* Genom att derivera med avseende på z och låta z -> 1 så finner man E(X)

##### Snittmetoden
Dra vertikala streck mellan tillstånden. De bågar påväg på ena hållet som strecket korsar måste vara lika med de korsande bågarna på andra hållet.

##### Bayes' sats
$P(B_i | A) = \frac{P(A | B_i)P(B_i)}{\sum_{j} P(A | B_j)P(B_j)}$

##### Erbjuden trafik, avverkad trafik och spärrad trafik
avverkad trafik = erbjuden trafik - spärrad trafik
1. Erbjuden trafik är ett annat ord för $\rho = \frac{\lambda}{\mu}$

##### Markovkedjan och Markovprocessen
* Stokastisk process där allt som spelar roll för nästa tillstånd är nuvarande tillstånd. 
* Tidsdiskret       -> Markovkedja
* Tidskontinuerlig  -> Markovprocess

##### E(N) 
* Kan härledas genom definition av medelvärdet eller z-transformera och låta $z -> 1$.
* $\sum_{0}^{\infty} k p_k$
* För M/M/1: $\sum_{k=0}^{\infty} kp_k = \frac{\rho}{1-\rho}$
* $\bar{N} = \bar{N_q} + \bar{N_s}$
* $E(N_s)$ fås genom att summera alla tillstånd då betjäning pågår.

##### P(spärr) - spärrsannolikhet
* Är noll om det finns oändligt med buffertplatser
* $\frac{\lambda _Lp_L}{\sum_{k=0}^{L} \lambda _kp_k}$
* Om $\lambda _i = \lambda$ så är är $P(spärr) = p_L$
* Medelvärdet av antalet kunder som spärras = $\lambda _L p_L$

##### Effektiva lambda
* Är ekvivalent med $\lambda$ när buffert är obegränsad
* Medelantalet som får komma in i systemet (alltså alla som inte blir spärrade)
* $\sum_{k=0}^{L-1} \lambda _kp_k$

##### E(T)
* Medeltiden i som spenderas i systemet. 
* $T = W + \bar{x}$ (väntetid + betjäningstid)
* Använd Littles sats

##### E(W)
* $\frac{\rho}{\mu (1-\rho)}$

##### Littles sats
Antalet genomsnittliga kunder N = produkten av det genomsnittliga antalet icke-blockerade ankomster per tidsenhet och genomsnittliga tiden en kund spenderar i systemet.
* $E(T) = \frac{E(N)}{\lambda _{eff}}$
* $E(N) = E(T)  \lambda _{eff}$
* $E(N_s) = \bar{x}  \lambda _{eff}$
* $E(N_q) = W  \lambda _{eff}$

##### Ankomstintensitet
* $\lambda$ betecknar hur många kunder som kommer per sekund
* $\frac{1}{\lambda}$ betecknar därför tiden mellan ankomster

##### Medelbetjäningstid
$E(x) = \frac{E(N_s)}{\lambda _{eff}}$

##### Poissonprocesser
* Om ankomsterna är exponentialfördelade och med samma medelvärde bildar ankomsterna en Poissonprocess.
* Minneslös precis som markovkedjan och markovprocessen
* sannolikheten för N ankomster är då poissonfördelad och ges av $P(N = k) = \frac{(\lambda t)^{k}}{k!}e^{- \lambda t}$

##### Tillståndsdiagram
Används för att visualisera kösystemets olika tillstånd. Liknar finite state machines.

### Lösningar
#### Hur stor andel av tiden arbetar en betjänare?
1. def. av medelvärde baserat på states där betjänare arbetar
2. E(Ns)/m
