% Köteorins centrala begrepp

Köteori används för att analysera system där kunder och betjänare interagerar. Hur många kunder kommer det i snitt att finnas i systemet? Är systemet stabilt eller kommer antalet kunder att öka obehindrat?

Hur man får fram svaren på dessa och liknande frågor tas upp nedan.

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
  * $\lambda_e_f_f$


#### M/M/1

#### M/M/m

#### M/M/1/K - begränsade köplatser

#### begränsat antal kunder

#### begränsat antal kunder och begränsat antal köplatser

#### M/M/m * upptagetsystem (Erlangsystemet)
1. m betjänter
2. inga köplatser
3. ankomsterna är poissonprocess
4. ankomstintensitet är alltid $\lambda$
* Bra apporximation om man har många kunder i förhållande till betjänter.
* P(spärr) kallas i Erlangsystem för $E_m(\rho)$
    + räknas ut m.h.a. rekursion eller tabeller

### Icke-markovska köer

#### M/G/1
* E(X) går att beräkna eftersom man vet fördelningen
* E(T) är trixigare då den beror på hur många som redan är i systemet
* E(T|N = k) = kE(X) + E(R)


## Lexikon

#### Bayes' sats
$P(B_i | A) = \frac{P(A | B_i)P(B_i)}{\sum_{j} P(A | B_j)P(B_j)}$

#### Erbjuden trafik

#### Markovkedjan och Markovprocessen
* Stokastisk process där allt som spelar roll för nästa tillstånd är nuvarande tillstånd. 
* Tidsdiskret       -> Markovkedja
* Tidskontinuerlig  -> Markovprocess

##### E(N) 
* Kan härledas genom definition av medelvärdet eller z-transformera och låta $z -> 1$.
* $\sum_{0}^{\infty} k p_k$
* För M/M/1: $\sum_{k=0}^{\infty} kp_k = \frac{\rho}{1-\rho}$

##### P(spärr) - spärrsannolikhet
* Är noll om det finns oändligt med buffertplatser
* $\frac{\lambda_Lp_L}{\sum_{k=0}^{L} \lambda_kp_k}$
* Om $\lambda_i = \lambda$ så är är $P(spärr) = p_L$

#### lambda_e_f_f
* Är ekvivalent med $\lambda$ när buffert är obegränsad
* Medelantalet som får komma in i systemet (alltså alla som inte blir spärrade)
* $\sum_{k=0}^{L-1} \lambda_kp_k$

#### E(T)
* Medeltiden i som spenderas i systemet. 
* $T = W + \bar{x}$ (väntetid + betjäningstid)
* Använd Littles sats

##### Littles sats
* $E(T) = \frac{E(N)}{\lambda}$

##### Ankomstintensitet
* $\lambda$ betecknar hur många kunder som kommer per sekund
* $\frac{1}{\lambda}$ betecknar därför tiden mellan ankomster

##### Ködisciplin

##### Buffertplatser

##### Medelbetjäningstid

##### Poissonprocesser
* Om ankomsterna är exponentialfördelade och med samma medelvärde bildar ankomsterna en Poissonprocess.
* Minneslös precis som markovkedjan och markovprocessen
* sannolikheten för N ankomster är då poissonfördelad och ges av $P(N = k) = \frac{(\lambda t)^{k}}{k!}e^{- \lambda t}$

##### Markovprocesser

##### Markovkedja

##### Tillståndsdiagram
