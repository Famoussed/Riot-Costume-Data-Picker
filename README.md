# Riot Costume Data Picker

> League of Legends şampiyonlarının **tüm kostüm (skin) splash görsellerini** Riot'un resmî
> Data Dragon API'sinden çeken küçük bir komut satırı aracı.

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![Riot API](https://img.shields.io/badge/Riot-Data%20Dragon-D13639?logo=riotgames&logoColor=white)
![No dependencies](https://img.shields.io/badge/bağımlılık-yok-brightgreen)

---

## Ne Yapıyor

Şampiyon adını yazarsın, araç:

1. Data Dragon'dan **güncel oyun sürümünü** çeker (sürümü elle güncellemen gerekmez),
2. O sürümün Türkçe şampiyon verisini indirir,
3. Girdiğin ismi hem şampiyon ID'si hem görünen ad üzerinden eşleştirir,
4. Şampiyonun **bütün kostümlerini** numara, ad ve splash görseli linkiyle listeler.

```
$ node app.js
Lütfen şampiyon adını girin (Örn: Ekko, Yasuo, Wukong): Ekko
Veriler Riot sunucusundan çekiliyor, lütfen bekleyin...

✅ ŞAMPİYON BULUNDU: Ekko (ID: Ekko)
--------------------------------------------------
[Kostüm No: 0] default
Link: https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_0.jpg
-
[Kostüm No: 1] Sandstorm Ekko
Link: https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_1.jpg
-
...
Toplam 14 adet görsel linki listelendi.
```

---

## Kurulum ve Çalıştırma

Bilgisayarında **Node.js 18+** kurulu olması yeterli — harici bir paket kurmana gerek yok
(yerleşik `fetch` ve `readline/promises` kullanılıyor).

```bash
git clone https://github.com/Famoussed/Riot-Costume-Data-Picker.git
cd Riot-Costume-Data-Picker/kostumscript
node app.js
```

---

## Notlar

- Şampiyon adını **Türkçe veya İngilizce** yazabilirsin; eşleşme her ikisini de dener.
- Sürüm sabit değildir — her çalıştırmada Riot'un yayımladığı en güncel sürüm kullanılır,
  dolayısıyla yeni çıkan kostümler otomatik olarak listeye girer.
- API anahtarı gerekmez; Data Dragon halka açık bir statik veri servisidir.

---

## İletişim

**Ahmet Selim Çiftci** — [GitHub](https://github.com/Famoussed) · [LinkedIn](https://www.linkedin.com/in/ahmet-selim-çiftci-51472035b)
