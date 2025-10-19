# Premier League Hungary

---

Ez az oldal a Premier Leagueről fog szólni.

- Tabella
- Kiemelkedő formában lévő játékosok
- Hírek 

---

## Megvalósítás

- 3 HTML file
- CSS
- Java

---

1. index.html 
    - – A főoldal, ahol a tabella található.

2. stats.html 
    - – A játékosok statisztikáit jeleníti meg keresőmezővel.

3. transfers.html 
    - – Az aktuális híreket mutatja be.

---

**JS függvények**

```js
- renderTransfers()
Az átigazolási híreket jeleníti meg dinamikusan a transfers tömb adatai alapján.
```

```js
- renderStats()
A játékosok statisztikáit tölti be a players tömbből.
```

```js
- searchPlayer(name)
Keresést végez a játékosok között a megadott név alapján, és frissíti a megjelenített listát.
```

```js
- renderFilteredStats(list)
A szűrt játékoslistát rendereli a keresés után.
(A searchPlayer() függvény hívja meg.)
```