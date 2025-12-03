const readline = require('readline/promises');
const { stdin: input, stdout: output } = process;

async function championSearch() {
    // Terminal arayüzünü başlat
    const rl = readline.createInterface({ input, output });

    try {
        // 1. Kullanıcıdan Şampiyon İsmini İste
        const userInput = await rl.question('Lütfen şampiyon adını girin (Örn: Ekko, Yasuo, Wukong): ');

        // Kullanıcı girdisini temizle (boşlukları sil, küçült)
        const searchTerm = userInput.trim().toLowerCase();

        console.log("Veriler Riot sunucusundan çekiliyor, lütfen bekleyin...");

        // 2. Güncel Versiyonu Al
        const versionRes = await fetch("https://ddragon.leagueoflegends.com/api/versions.json");
        const versions = await versionRes.json();
        const latestVersion = versions[0];

        // 3. Tüm Şampiyon Verilerini İndir (championFull.json)
        const dataUrl = `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/tr_TR/championFull.json`;
        const dataRes = await fetch(dataUrl);
        const json = await dataRes.json();
        const champions = json.data;

        const iconUrl = `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/en_US/profileicon.json`
        const iconsRes = await fetch(iconUrl)
        const iconsJson = await iconsRes.json();
        const icons = iconsJson.data;

        // 4. Şampiyonu Bul
        let foundChamp = null;

        for (const key in champions) {
            const champ = champions[key];
            // Hem ID'ye hem isime bakıyoruz
            if (champ.id.toLowerCase() === searchTerm || champ.name.toLowerCase() === searchTerm) {
                foundChamp = champ;
                break;
            }
        }

        // 5. Sonucu Yazdır

        if (foundChamp) {
            console.log(`\n✅ ŞAMPİYON BULUNDU: ${foundChamp.name} (ID: ${foundChamp.id})`);
            console.log("-".repeat(50));

            const validUrls = [];

            foundChamp.skins.forEach(skin => {
                const url = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${foundChamp.id}_${skin.num}.jpg`;

                console.log(`[Kostüm No: ${skin.num}] ${skin.name}`);
                console.log(`Link: ${url}`);
                console.log("-"); // Ayıraç

                validUrls.push(url);
            });

            console.log(`\nToplam ${validUrls.length} adet görsel linki listelendi.`);
        } else {
            console.log(`\n❌ HATA: "${userInput}" isminde bir şampiyon bulunamadı.`);
            console.log("İpucu: Türkçe karakterlere dikkat edin veya İngilizce adını deneyin.");
        }

    } catch (error) {
        console.error("Bir bağlantı hatası oluştu:", error);
    } finally {
        // Programı kapat
        rl.close();
    }
}

championSearch();