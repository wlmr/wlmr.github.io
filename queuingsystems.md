# Köteorins centrala begrepp

Köteori används för att analysera system där kunder och betjänare interagerar. Hur många kunder kommer det i snitt att finnas i systemet? Är systemet stabilt eller kommer antalet kunder att öka obehindrat?

Hur man får fram svaren på dessa och liknande frågor tas upp nedan.

För att kategorisera kösystem används ofta en modell "A/B/x". A är fördelningen mellan ankomster, B motsvarar betjäningstidernas fördelning och x antalet betjänare. Denna konvention saknar dock information om antalet buffertplatser i systemet. Så länge inget annat anges gäller hursomhelst att antalet sådana platser är oändligt.

A och B antar ofta ett av tre värden:

* M - exponentialfördelad
* D - deterministisk (konstant)
* G - godtycklig fördelning (men känd)

## Olika kötyper
### Markovska köer
* Beskrivs av *markovkedjor
* Alla tider mellan ankomster samt betjäningstider är exponentialfördelade.

##### Standardmall för beräkning
1. Rita markovkedjan
2. Hitta tillståndsfördelningen med snittmtoden
3. Beräkna intressanta performanceparametrar
  * E(N)
  * P(Spärr)


#### M/M/1

### Markovkedjan och Markovprocessen
* Stokastisk process där allt som spelar roll för nästa tillstånd är nuvarande tillstånd. 
* Tidsdiskret       -> Markovkedja
* Tidskontinuerlig  -> Markovprocess


##### E(N) 
Kan härledas genom definition av medelvärdet eller z-transformera och låta z -> 1.

##### P(spärr)
OBS! behöver matteformatering:
antalet $x^2 = y$



##### Littles sats

##### Ankomstintensitet

##### Ködisciplin

##### Buffertplatser

##### Spärrsannolikhet

##### Medelbetjäningstid

##### Poissonprocesser

##### Markovprocesser

##### Markovkedja

##### Tillståndsdiagram
