# Putti - samgöngulausn í vasanum  
Eftir Anton, Kötlu, Pál, og Viktor | VEFÞ3VÞ05DU
---

Putti er samgönguapp sem nýtur sér lausu sætin í bílum einstaklinga sem vilja lækka bensíneyðsluna sína og eintstaklinga sem vilja fleiri samgönguvalmöguleika. Appið sér um vandamál eins og greiðslumáta með því að hafa grunnverð á lítra og lætur farþega borga með aur. Appið er tilvalið fyrir þá sem þurfa að koma sér á stað sem hefur ekkert endilega strætó sem fer alla leið þangað, en hefur marga sem eiga sér leið þangað sem eru ein í bíl.

***

## Farþegi

Farþegi dowloadar app, skráir sig í appinu, tengir símann sinn við appið og sér strax kort af leiðum í nálægð notandans sem eru bráðum að fara af stað.

Notandi hefur svo tvær leiðir til að finna sér ferð lengri fram í tíma

#### Leita í korti

Notandi getur leitað að ferð til ákveðin staðs á ákveðnum tíma og sér á korti allar leiðir þangað á svipuðum tíma.
Þá getur notandi sent fyrirspurn á bílstjóra og fær já eða nei tilbaka.

![](https://github.com/Putti-V-1/Putti-repo/blob/main/Wireframe/Home.png)
![](https://github.com/Putti-V-1/Putti-repo/blob/main/Wireframe/SearchMap.png)
![](https://github.com/Putti-V-1/Putti-repo/blob/main/Wireframe/RequestRide.png)
![](https://github.com/Putti-V-1/Putti-repo/blob/main/Wireframe/Notifications.png)



## Vaktin

Notandi getur einnig sett "vakt" á ferð á ákveðnum tíma, þeas hann getur skráð hvert hann vill fara í á einhverjum ákveðnum degi klukkan eitthvað (hægt er að velja hvenær sem er á ákveðnum degi) og fær svo tilkynningar þegar bílstjórar skrá ferðir sem gætu hentað i þessa ferð og getur þá sent fyrirspurn á bílstjóra.

![](https://github.com/Putti-V-1/Putti-repo/blob/main/Wireframe/Watch.png)

#### Menu, Profile og Report
Notandi getur séð prófílinn sinn, breytt upplýsingum og mynd, ásamt því getur Notandi séð prófíla hjá öðrum, reportað þá eða blokkað þá.

* Ef farþegi blokkar bílstjóra hættir hann að sjá ferðir hjá þeim bílstjóra.
* Ef bílstjóri blokkar farþega getur farþegi ekki séð leiðir hjá bílstjóranum.

![](https://github.com/Putti-V-1/Putti-repo/blob/main/Wireframe/Menu.png)
![](https://github.com/Putti-V-1/Putti-repo/blob/main/Wireframe/Profile.png)
![](https://github.com/Putti-V-1/Putti-repo/blob/main/Wireframe/Report1.png)
![](https://github.com/Putti-V-1/Putti-repo/blob/main/Wireframe/Report2.png)

***


## Bílstjóri

Bílstjóri downloadar appi og skráir sig sem bílstjóra eða breytir sér í bílstjóra ef hann á nú þegar farðegaaðgang. Svo sem bílstjóri getur hann gert allt það sama og farþegi en getur líka skráð leiðir sem hann ætlar að keyra. Bílstjóri fær svo tilkynningu þegar farþegi sendir fyrirspurn um far. Í fyrirspurninni sér bílstjóri hvar farþegi vill láta sækja sig, sirka hversu mikinn tíma það bætir við ferðinna að sækja farþega, og hversu mikinn perning hann fær fyrir það. Þá ýtir bílstjóri annað hvort á já eða nei. 

![](https://github.com/Putti-V-1/Putti-repo/blob/main/Wireframe/NewRide.png)
![](https://github.com/Putti-V-1/Putti-repo/blob/main/Wireframe/DriverAccept.png)

## Þínar ferðir

Þegar Notandi ýtir á hægri mesta takkan þá fær hann upp allar ferðinar hans sem eru aktívar þ.e.a.s ferðir sem voru samþykktar eða þær sem notandinn samþykkti sem bílstjóri. Þegar ýtt er á aktíva ferð fær notandi upp allar þær upplýsingar sem hann þarf. Þar er líka takki sem gerir notandanum kleyft að hætta við ferð ef eitthvað kemur uppá.

![](https://github.com/Putti-V-1/Putti-repo/blob/main/Wireframe/ActiveRides.png)
![](https://github.com/Putti-V-1/Putti-repo/blob/main/Wireframe/ActiveRideInfo.png)

***
---
### Stafli
Fyrir þetta verkefni notuðum við [react-native](https://reactnative.dev/) í gegnum [expo](https://expo.dev/) og notuðum "real time database" hjá [firebase](https://firebase.google.com/) sem gagnagrunn.  
Fyrir kortið notuðum við [react-native-maps](https://github.com/react-native-maps/react-native-maps) og [react-native-maps-directions](https://github.com/bramus/react-native-maps-directions) library sem byggja á google places api og directions api í gegnum google cloud.

### Skjámyndir og upptökur

[youtube video](https://youtu.be/Kz5b0wH6g0M)
***
![](https://github.com/Putti-V-1/Putti-repo/blob/main/Screenshots/LoginScreen.png)
![](https://github.com/Putti-V-1/Putti-repo/blob/main/Screenshots/Simulator%20Screen%20Shot%20-%20iPhone%20SE%20(3rd%20generation)%20-%202022-10-14%20at%2008.50.58.png)
![](https://github.com/Putti-V-1/Putti-repo/blob/main/Screenshots/Simulator%20Screen%20Shot%20-%20iPhone%20SE%20(3rd%20generation)%20-%202022-10-14%20at%2008.51.11.png)
![](https://github.com/Putti-V-1/Putti-repo/blob/main/Screenshots/Simulator%20Screen%20Shot%20-%20iPhone%20SE%20(3rd%20generation)%20-%202022-10-14%20at%2008.51.16.png)
![](https://github.com/Putti-V-1/Putti-repo/blob/main/Screenshots/Simulator%20Screen%20Shot%20-%20iPhone%20SE%20(3rd%20generation)%20-%202022-10-14%20at%2008.51.21.png)
![](https://github.com/Putti-V-1/Putti-repo/blob/main/Screenshots/Simulator%20Screen%20Shot%20-%20iPhone%20SE%20(3rd%20generation)%20-%202022-10-14%20at%2008.51.25.png)
### Gagnagrunnur

Gagnagrunnurinn okkar var settur upp með Firebase realtime database

![](https://github.com/Putti-V-1/Putti-repo/blob/main/Screenshots/Screenshot%202022-10-14%20at%2008.44.08.png)
![](https://github.com/Putti-V-1/Putti-repo/blob/main/Screenshots/Screenshot%202022-10-14%20at%2008.45.27.png)

### Vinnuflæði
[Github projects vinnuflæði](https://github.com/orgs/Putti-V-1/projects/3)
### Samantekt
