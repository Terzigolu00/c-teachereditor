export const lessons = [
  {
    id: 1,
    title: "C Diline Giriş",
    description: "C programlama dilinin temellerini öğrenin",
    difficulty: "Başlangıç",
    duration: "30 dk",
    topics: ["Tarihçe", "Derleyici", "İlk Program"],
    content: {
      introduction: "C dili, 1972 yılında Dennis Ritchie tarafından geliştirilmiş güçlü bir programlama dilidir.",
      theory: [
        "C dili sistem programlaması için tasarlanmıştır",
        "Düşük seviyeli işlemlere erişim sağlar",
        "Taşınabilir ve hızlıdır"
      ],
      code: `#include <stdio.h>

int main() {
    printf("Merhaba, C Dünyası!\\n");
    return 0;
}`,
      explanation: "Bu program C dilinde yazılmış en basit örnektir. printf fonksiyonu ekrana yazı yazdırmak için kullanılır.",
      simpleExplanation: `Şimdi size C programlama dilinin en temel örneklerini adım adım anlatayım:

🔍 NE YAPIYOR BU PROGRAM?
Bu program ekrana "Merhaba, C Dünyası!" yazısını yazdırıyor ve sonra kapanıyor. Çok basit görünse de, bu program C dilinin temel yapısını öğrenmek için mükemmel bir başlangıç!

📖 SATIR SATIR İNCELE:

1️⃣ #include <stdio.h>
   - Bu satır BİR ZORUNLULUKTUR!
   - "stdio" = "standard input/output" (ekran ve klavye)
   - ".h" = "header file" (kütüphane dosyası)
   - Bu satır olmadan printf çalışmaz!

2️⃣ int main() {
   - Her C programının ANA GÖREVDİR bu kısım
   - "main" = programın başladığı yer (başlangıç noktası)
   - int = program bittiğinde bir sayı döndürür (0 = başarılı)

3️⃣ printf("Merhaba, C Dünyası!\\n");
   - printf = "print formatted" (ekrana yazdır)
   - Çift tırnak içindeki her şey ekrana yazılır
   - \\n = bir sonraki satıra geç (entere basmak gibi)
   - ; (noktalı virgül) = komutu bitirir (çok önemli!)

4️⃣ return 0;
   - Programın başarıyla bittiğini söyler
   - 0 = "Her şey yolunda, hiç hata yok"

🛠️ NASIL ÇALIŞTIRILIR?
1. Kodu .c dosyasına kaydet (örn: merhaba.c)
2. Derleyici ile derle (gcc merhaba.c -o merhaba)
3. Çalıştır: ./merhaba

⚠️ YAYGIN HATALAR:
- scanf yerine printf yazmayı unutmak
- Noktalı virgül (;) unutmak
- #include satırını yazmayı unutmak
- Çift tırnak yerine tek tırnak kullanmak

Bu örnek C programlamanın ABC'si! Bir sonraki derslerde daha karmaşık şeyler yapacağız ama temeller her zaman böyle başlar.`
    }
  },
  {
    id: 2,
    title: "printf ve \\n Kullanımı",
    description: "Ekrana yazı yazdırma ve satır atlama",
    difficulty: "Başlangıç",
    duration: "25 dk",
    topics: ["printf", "\\n", "String", "Satır atlama"],
    content: {
      introduction: "printf fonksiyonu C dilinde ekrana yazı yazdırmak için kullanılır. \\n ise bir sonraki satıra geçmek için kullanılır.",
      theory: [
        "printf ile ekrana yazı yazdırabiliriz",
        "\\n ile satır atlayabiliriz",
        "Çift tırnak içine yazılan her şey ekrana yazdırılır",
        "printf'ten sonra mutlaka noktalı virgül (;) koymalıyız"
      ],
      code: `#include <stdio.h>

int main() {
    printf("Merhaba Dünya!\\n");
    printf("C dilini öğreniyorum\\n");
    printf("Bu çok eğlenceli!\\n");
    return 0;
}`,
      explanation: "Bu programda printf ile 3 farklı yazı yazdırıyoruz. Her yazının sonunda \\n var, bu yüzden her yazı farklı satırda görünür. \\n olmasaydı hepsi aynı satırda yazılır, okumak çok zor olurdu!",
      simpleExplanation: `💡 PRINTF VE \\N HAKKINDA HER ŞEYİN BASIT ANLATIMI:

🎯 PROGRAMIN AMACI NEDİR?
3 farklı cümle yazıyoruz ve her birini ayrı satırlarda gösteriyoruz. Basit görünse de çok önemli bir alışkanlık!

🔍 SATIR SATIR NE YAPILIYOR:

1️⃣ printf("Merhaba Dünya!\\n");
   - "Merhaba Dünya!" yazısını ekrana yazdır
   - \\n = "bir sonraki satıra geç"
   - ; ile komutu bitir

2️⃣ printf("C dilini öğreniyorum\\n");
   - İkinci cümleyi yazdır
   - Tekrar \\n ile bir alt satıra geç

3️⃣ printf("Bu çok eğlenceli!\\n");
   - Üçüncü cümleyi yazdır
   - Bir kez daha \\n ile satırı değiştir

📊 NETİCELERİN KARŞILAŞTIRMASI:

✅ \\n İLE (Şu anki kod):
Merhaba Dünya!
C dilini öğreniyorum
Bu çok eğlenceli!

❌ \\n OLMADAN (Yanlış kod):
Merhaba Dünya!C dilini öğreniyorumBu çok eğlenceli!

🚀 PRATİK ÖRNEKLER:
- \\n\\n = 2 satır atla (2 enter)
- \\n = 1 satır atla (1 enter)
- \\n olmadan = aynı satırda yazmaya devam

🧠 NEDEN ÖNEMLİ?
- Kodun çıktısı daha okunabilir olur
- Kullanıcı hangi metni gösterildiğini kolayca anlar
- Debug etmek (hataları bulmak) daha kolay
- Profesyonel programlar hep böyle düzenli çıktı verir

⚠️ DİKKAT EDİLECEK NOKTALAR:
1. Çift tırnak içine her şey yazılır
2. \\n asla çift tırnak dışında olmamalı
3. Her printf'ten sonra ; gelmelidir
4. printf'e küçük 'p' ile başla
5. include <stdio.h> satırını unutma

Bu ders ile printf'in temel kullanımını öğrendik! Bir sonraki derste değişkenler hakkında konuşacağız.`
    }
  },
  {
    id: 3,
    title: "Değişkenler ve Veri Tipleri",
    description: "C dilinde değişken tanımlama ve veri tiplerini öğrenin",
    difficulty: "Başlangıç",
    duration: "45 dk",
    topics: ["int", "float", "char", "double"],
    content: {
      introduction: "Değişkenler, programlama sırasında veri saklamak için kullanılır.",
      theory: [
        "int: Tam sayılar için kullanılır (1, 2, 100, -5)",
        "float: Ondalıklı sayılar için kullanılır (3.14, 2.5)",
        "char: Tek karakter için kullanılır ('A', 'b', '5')",
        "double: Çift hassasiyetli ondalıklı sayılar için kullanılır"
      ],
      code: `#include <stdio.h>

int main() {
    int yas = 20;           // Tam sayı
    float boy = 1.75;       // Ondalıklı sayı
    char harf = 'A';        // Tek karakter
    
    printf("Yaşım: %d\\n", yas);
    printf("Boyum: %.2f metre\\n", boy);
    printf("Favori harfim: %c\\n", harf);
    
    return 0;
}`,
      explanation: "Bu örnekte farklı veri tiplerinde değişkenler tanımlanmış ve printf fonksiyonu ile ekrana yazdırılmıştır. %d tam sayılar için, %f ondalıklı sayılar için, %c karakterler için kullanılır.",
      simpleExplanation: `🏠 DEĞİŞKENLER = BİLGİ SAKLAMA KUTULARI!

🎯 DEĞİŞKEN NEDİR?
Düşünün ki çanta sıranızda farklı kutularınız var:
- Bir kutuda kalemleriniz (tam sayılar)
- Başka kutuda para üstünüz (ondalık)
- Üçüncü kutuda okulunuzun harfi (karakter)

Tıpkı bunlar gibi, C programında da bilgileri saklamak için kutular (değişkenler) kullanırız!

📦 VERİ TİPLERİ VE ÖRNEKLERİ:

🔢 INT (Tam Sayılar):
- int yas = 20;
- Sadece tam sayılar: 1, 5, 100, -15
- Yemek tarifindeki gramajlar gibi
- Örnek: "20 yaşında", "365 gün", "100 puan"

📐 FLOAT (Ondalıklı Sayılar):
- float boy = 1.75;
- Nokta ile yazılır: 3.14, 2.5, 0.99
- Kilometre, fiyat gibi hassas ölçümler
- Örnek: "1.75 metre", "2.50 TL", "98.5 derece"

🔤 CHAR (Tek Karakter):
- char harf = 'A';
- TEK karakter!: 'a', 'B', '5', '@'
- Önemli: TEK tırnak kullan, ÇİFT değil!
- Örnek: "A şubesinden", "şifre: X", "özkod: 5"

🎮 PRATİK ÖRNEKLER:

✅ DOĞRU KULLANIM:
int yas = 25;           // Tam sayı, çift tırnak yok
float sicaklik = 36.5;  // Noktalı sayı
char sinif = 'A';       // TEK tırnak

❌ YANLIŞ KULLANIM:
int yas = 25.5;          // Tam sayı kutusuna noktalı koyma!
char sinif = "A";       // Çift tırnak kullanma!
float sicaklik = 36;    // Float'a tam sayı koyabilirsin ama float'a gerek yok

📊 PRINTF İLE YAZDIRMA:

🧮 TAM SAYI İÇİN %d:
printf("Yaşım: %d\\n", yas);
%d = "buraya bir tam sayı gelicek"

🌡️ ONDALIK SAYI İÇİN %.2f:
printf("Boyum: %.2f metre\\n", boy);
%.2f = "buraya noktalı sayı geldi ve 2 basamak göster"

🔤 KARAKTER İÇİN %c:
printf("Harfim: %c\\n", harf);
%c = "buraya tek karakter gelecek"

🎯 KUTUNUN ÖZETİ:
Değişkenler bilgileri geçici saklar, program bittiğinde silinir.
Her değişkenin kendine özel türü vardır ve ona uygun bilgi saklamalıdır.

⚠️ YAYGIN HATALAR:
1. Float'a %d kullanmak (%.2f olmalı)
2. Char için çift tırnak (tek tırnak olmalı)
3. Değişkenin tipine uygun olmayan % formatı
4. Sayının sonuna eksik noktalı virgül

Bu ders çok önemli! Programlama buradan başlar çünkü her zaman bir şeyleri saklamamız gerekir.`
    }
  },
  {
    id: 4,
    title: "Yorum Satırları",
    description: "Kodunuzu açıklamak için yorum satırları nasıl yazılır",
    difficulty: "Başlangıç",
    duration: "20 dk",
    topics: ["//", "/* */", "Açıklama", "Kod okunabilirliği"],
    content: {
      introduction: "Yorum satırları kodunuzu açıklamak için kullanılır. Program çalışırken yorumlar göz ardı edilir.",
      theory: [
        "// ile tek satır yorum yazılır",
        "/* */ ile çok satırlı yorum yazılır",
        "Yorumlar kodunuzu daha anlaşılır yapar",
        "Gelecekte kendi kodunuzu okurken çok işinize yarar"
      ],
      code: `#include <stdio.h>

int main() {
    // Bu bir yorum satırıdır
    int sayi = 10;  // Bu da yorum
    
    printf("Sayı: %d\\n", sayi);
    
    /* Bu çok satırlı
       bir yorum örneğidir
       istediğiniz kadar satır yazabilirsiniz */
    
    return 0;
}`,
      explanation: "Yorumlar programın çalışmasını etkilemez ama kodunuzu okuyan kişilerin (gelecekte siz bile!) ne yaptığınızı anlamasını kolaylaştırır. İyi programcılar her zaman yorum yazarlar!",
      simpleExplanation: `📝 YORUM SATIRLARI = KODUNUZA NOTLAR BIRAKMAK!

🎯 YORUM NEDİR?
Sanki ödev kağıdınızda kenar boşluklarına "burada ne yaptım, niye yaptım" yazmak gibi. Bilgisayar bunları okumaz, sadece sizi ve kodunuzu okuyanlar için!

✨ İKİ ÇEŞİT YORUM VAR:

1️⃣ TEK SATIR YORUM //:
// Bu bir yorum satırıdır
int sayi = 10;  // Bu da yorum
- // İşareti ile başlar
- Sadece o satırın geri kalanını etkiler
- Kodun yanına açıklama yazmak için ideal

2️⃣ ÇOK SATIRLı YORUM /* */:
/* Bu çok satırlı
   bir yorum örneğidir
   istediğiniz kadar satır yazabilirsiniz */
- /* ile başlar, */ ile biter
- Arada kaç satır varsa hepsi yorum olur
- Büyük açıklamalar için kullanılır

🎮 PRATİK ÖRNEKLER:

📋 KOLAY OKUMAYAN KOD:
int a = 15;
int b = 25;
int c = a + b;
printf("%d", c);

📋 YORUM İLE AÇIKLARSAK:
int a = 15;        // Yaşımı saklıyorum
int b = 25;        // Baba yaşını saklıyorum  
int c = a + b;     // Toplam yaşı hesaplıyorum
printf("%d", c);   // Sonucu ekrana yazdırıyorum

🧠 NEDEN YORUM YAZARIZ?

👥 KENDİN İÇİN:
- 6 ay sonra kodunu okuyacağın zaman "ne bu?" demeyi önlersin
- Hangi satırda ne yaptığını hatırlarsın

👥 TAKIM ARKADAŞLARI İÇİN:
- Onlar da kodunu anlayabilir
- İşbirliği yapmak daha kolay olur

👥 İŞVEREN İÇİN:
- Profesyonel görünürsün
- Kodun temiz ve anlaşılır olduğunu kanıtlar

✨ YORUM YAZMAK İÇİN İPUÇLARI:

✅ İYİ YORUMLAR:
// Yaşı kullanıcıdan al
// Hata varsa programdan çık
// Toplam hesapla

❌ KÖTÜ YORUMLAR:
// int tanımladım
// printf kullandım
// Sayı ekliyorum

🎯 YORUMLAMA SEVİYELERİ:

🥉 BAŞLANGIÇ:
// Buraya not yazdırdım

🥈 ORTA:
// Kullanıcının yaşını kontrol et

🥇 İLERİ:
// Yetişkinlik yaşını 18 olarak kabul ediyoruz
// Gelecekte dinamik yaş kontrolü ekle

⚠️ DİKKAT EDİLECEK NOKTALAR:
1. Çok fazla yorum da kötüdür (her satıra 3 yorum!)
2. Açık ve sade Türkçe yaz
3. Boşluk doldurmaca yorum yazma
4. Güncel tut: Kod değişince yorumu da güncelle

Bu alışkanlığı şimdi edinirseniz ileride çok faydasını görürsünüz!`
    }
  },
  {
    id: 5,
    title: "Koşul İfadeleri (if-else)",
    description: "Program akışını kontrol etmeyi öğrenin",
    difficulty: "Orta",
    duration: "50 dk",
    topics: ["if", "else", "else if", "karşılaştırma operatörleri"],
    content: {
      introduction: "Koşul ifadeleri, programın farklı durumlara göre farklı işlemler yapmasını sağlar.",
      theory: [
        "if: Tek koşul kontrol eder",
        "else: if koşulu yanlışsa çalışır",
        "else if: Birden fazla koşul kontrol eder",
        "==, !=, <, >, <=, >= karşılaştırma operatörleridir"
      ],
      code: `#include <stdio.h>

int main() {
    int not;
    printf("Notunuzu girin: ");
    scanf("%d", &not);
    
    if (not >= 90) {
        printf("Harika! A aldınız.\\n");
    } else if (not >= 80) {
        printf("İyi! B aldınız.\\n");
    } else if (not >= 70) {
        printf("Orta! C aldınız.\\n");
    } else {
        printf("Çalışmanız gerekiyor.\\n");
    }
    
    return 0;
}`,
      explanation: "Bu program kullanıcının notuna göre farklı mesajlar gösterir. scanf fonksiyonu kullanıcıdan veri almak için kullanılır. Eğer not 90'dan büyükse A, 80-89 arası B, 70-79 arası C, 70'den küçükse 'çalışmanız gerekiyor' yazısı çıkar.",
      simpleExplanation: `🎯 IF-ELSE = "EĞER... ÖYLE DEĞİLSE..." KARAR MEKANİZMASI!

🧠 BASITÇE ANLAYELİM:
Günlük hayatta her zaman kararlar veririz:
- "Eğer yağmur yağıyorsa şemsiye alırım"
- "Eğer açsam yemek yerim"
- "Eğer yorgunsam uyurum"

Tıpkı bunlar gibi, programlar da karar verebilir! İşte IF-ELSE bunun için var.

🔍 PROGRAMIN NE YAPTIĞI:

1️⃣ scanf("%d", &not); - Kullanıcıdan not alır
2️⃣ if sıraları kontrol eder: Not kaç?
3️⃣ Uygun mesajı gösterir

📊 KARŞILAŞTIRMA İŞARETLERİ:

✅ EŞİTLİK KONTROLLERI:
== "eşit midir?" (5 == 5 → DOĞRU)
!= "eşit değil midir?" (5 != 3 → DOĞRU)

📈 BÜYÜKLÜK KONTROLLERI:
> "büyük müdür?" (10 > 5 → DOĞRU)
< "küçük müdür?" (5 < 10 → DOĞRU)
>= "büyük EŞİT midir?" (5 >= 5 → DOĞRU)
<= "küçük EŞİT midir?" (5 <= 5 → DOĞRU)

🎮 ADIM ADIM ÖRNEKN ANAİLLANMASI:

📍 ADIM 1 - KULLANICI GİRİŞİ:
scanf("%d", &not);
- %d = "tam sayı bekliyorum"
- &not = "scanf sonucunu not kutusuna koy"
- Kullanıcı 85 girdi → not = 85

📍 ADIM 2 - BİRİNCİ KONTROL:
if (not >= 90)
- 85 >= 90? → HAYIR!
- Bu blok çalışmaz

📍 ADIM 3 - İKİNCİ KONTROL:
else if (not >= 80)
- 85 >= 80? → EVET!
- Bu blok çalışır: "İyi! B aldınız."

📍 ADIM 4 - SONUÇ:
Sonraki kontroller çalışmaz çünkü biri çalıştı

🎯 PRATİK ÖRNEKLER:

🌧️ HAVA DURUMU ÖRNEĞİ:
if (sicaklik > 25) {
    printf("Hava çok sıcak!\\n");
} else if (sicaklik > 15) {
    printf("Hava güzel.\\n");
} else {
    printf("Hava soğuk!\\n");
}

🎂 YAŞ KONTROL ÖRNEĞİ:
if (yas >= 18) {
    printf("Yetişkinsiniz!\\n");
} else {
    printf("Henüz küçüksünüz.\\n");
}

⚖️ IF-ELSE KURALLARI:

✅ `if` KURAL:
- Sadece koşul doğruysa çalışır
- Birden fazla olabilir

✅ `else` KURAL:
- Sadece tüm if'ler yanlışsa çalışır
- En fazla 1 tane olur
- Son kontrol olarak kalır

✅ `else if` KURAL:
- İlk if yanlışsa kontrol edilir
- Sınırsız sayıda olabilir
- Sıraları önemlidir!

⚠️ YAYGIN HATALAR:

❌ == VE = KARIŞTIRMA:
if (not = 90)     // YANLIŞ! (atama işlemi)
if (not == 90)    // DOĞRU! (karşılaştırma)

❌ ÇOK STRICT KONTROL:
if (not == 90)    // Sadece tam 90 için çalışır
if (not >= 90)    // 90 ve üstü için çalışır

❌ SONSUZ IF KULLANMA:
if (not == 90) else if (not == 91) else if (not == 92)...
if (not >= 90)    // Tek satırla çözüm!

🧠 IF-ELSE MANTIKI:
"Eğer..." anahtarı programın akışını değiştirir.
Bu olmadan programlar hep aynı şeyi yapardı!
Programlamanın en güçlü araçlarından biri bu!

Bu dersteki örnekleri evinizdeki termostat veya maç sonucu tahmini gibi düşünebilirsiniz.`
    }
  },
  {
    id: 6,
    title: "for Döngüsü",
    description: "Tekrarlı işlemler için for döngüsünü öğrenin",
    difficulty: "Orta",
    duration: "40 dk",
    topics: ["for döngüsü", "sayaç", "tekrar", "döngü kontrolü"],
    content: {
      introduction: "for döngüsü belirli bir işlemi belirli sayıda tekrarlamak için kullanılır.",
      theory: [
        "for döngüsü 3 bölümden oluşur: başlangıç, koşul, artırma",
        "Başlangıç: int i = 1 (sayacı 1'den başlat)",
        "Koşul: i <= 10 (i 10'dan küçük veya eşitken devam et)",
        "Artırma: i++ (her seferinde i'yi 1 artır)"
      ],
      code: `#include <stdio.h>

int main() {
    int i;
    
    printf("1'den 10'a kadar sayılar:\\n");
    
    for (i = 1; i <= 10; i++) {
        printf("%d ", i);
    }
    printf("\\n");
    
    // Çarpım tablosu örneği
    printf("\\n5'in çarpım tablosu:\\n");
    for (i = 1; i <= 10; i++) {
        printf("5 x %d = %d\\n", i, 5 * i);
    }
    
    return 0;
}`,
      explanation: "İlk döngü 1'den 10'a kadar sayıları yazdırır. İkinci döngü ise 5'in çarpım tablosunu gösterir. Her döngüde i değişkeni 1 artar ve koşul kontrol edilir.",
      simpleExplanation: `🔄 FOR DÖNGÜSÜ = "BİR ŞEYİ TEKRAR TEKRAR YAP" MAKİNESİ!

🎯 DÖNGÜ NEDİR?
Tıpkı bir hamalın 10 kez merdiveni çıkıp sandık taşıması gibi!
- 1. turda → 1inci kat
- 2. turda → 2inci kat  
- 3. turda → 3inci kat
- ...ve böyle devam eder

Programlamada da aynı şey! "Bu işi N kez tekrarla!"

🔍 FOR DÖNGÜSÜNÜN 3 PARÇASI:

🏁 BAŞLANGIÇ (int i = 1):
- Sayacı başlat: i = 1 den başlıyoruz

✅ KOŞUL (i <= 10):
- Ne zaman duracak?: i = 10 olunca dur

🚀 ARTIŞ (i++):
- Her turda ne kadar artır?: i++ = i + 1

🤔 BASİT ANLATIM:
"sayaca 1 ver, 10'a kadar artır, her artırımda bir şeyler yap"

🎮 ÖRNEK KODUN ADIM ADIM ANAİLLANMASI:

📍 ÖRNEK 1 - SAYI YAZDIRMA:

for (i = 1; i <= 10; i++) {
    printf("%d ", i);
}

🏁 İlk tur: i = 1, çıktı: "1 "
✅ İkinci tur: i = 2, çıktı: "2 "
✅ Üçüncü tur: i = 3, çıktı: "3 "
...
✅ Son tur: i = 10, çıktı: "10 "

📍 ÖRNEK 2 - ÇARPMA TABLOSU:

for (i = 1; i <= 10; i++) {
    printf("5 x %d = %d\\n", i, 5 * i);
}

🏁 İlk tur: "5 x 1 = 5"
✅ İkinci tur: "5 x 2 = 10"
✅ Üçüncü tur: "5 x 3 = 15"
...

🛠️ MANUEL HESAPLA:

5 x 1 = 5    // i = 1
5 x 2 = 10   // i = 2  
5 x 3 = 15   // i = 3
5 x 4 = 20   // i = 4
5 x 5 = 25   // i = 5
5 x 6 = 30   // i = 6
5 x 7 = 35   // i = 7
5 x 8 = 40   // i = 8
5 x 9 = 45   // i = 9
5 x 10 = 50  // i = 10

📊 DÖNGÜYÜ GÖRSEL ÖRNEKLERLE ANALAYELİM:

🏊‍♂️ HAVUZ ÖRNEĞİ:
- Her bir şeritte 25 metre yüzmek
- 5 şerit = 5 kez tekrarla
- Her seferinde sayıyoruz: 1inci şerit, 2inci şerit...

⚽ TOP ÇELME ÖRNEĞİ:  
- 10 defa topa vur
- Her vuruşta bir öncekinden fazla güç uygula
- 1inci vuruş: %10 güç, 2inci vuruş: %20 güç...

🎯 FARKLI FOR DÖNGÜLERİ:

⏰ ZAMANLI DÖNGÜ:
for (saniye = 0; saniye < 60; saniye++) {
    printf("%d saniye\\n", saniye);
}

🔽 GERİYE SAyMA:
for (i = 10; i >= 1; i--) {
    printf("%d\\n", i);
}
// Sonuç: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

🎪 İKİŞERİ İKİŞERİ ARTIRMA:
for (i = 0; i <= 20; i = i + 2) {
    printf("%d\\n", i);
}
// Sonuç: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

⚠️ YAYGIN HATALAR:

❌ SONSUZ DÖNGÜ:
for (i = 1; i <= 10; i--) {  // i azalıyor ama koşul sadece artış için!
    printf("%d\\n", i);
}
// Çözüm: i++ kullan

❌ YALNış BOUNDARY:
for (i = 1; i < 10; i++) {
    printf("%d\\n", i);
}
// Sonuç: 1'den 9'a kadar (10 dahil değil!)
// Çözüm: i <= 10 veya i < 11 kullan

❌ DEĞİŞKEN İSMİ KARIŞIMI:
for (i = 1; i <= 10; i++) {
    printf("%d\\n", j);  // j tanımlı değil!
}
// Çözüm: printf("%d\\n", i); kullan

🎁 ÖZET:
FOR döngüsü = "5 satır kod yazmak yerine, 10 kez tekrar et"

Bu olmasaydı: her sayı için ayrı printf yazmak zorunda kalırdık!
10 sayı = 10 printf = 10 satır kod
FOR döngüsü ile = 4 satır kod

Programlama işte bu kadar güçlü!`
    }
  },
  {
    id: 7,
    title: "while Döngüsü",
    description: "Koşul sağlandığı sürece çalışan while döngüsü",
    difficulty: "Orta",
    duration: "45 dk",
    topics: ["while döngüsü", "koşul", "sonsuz döngü", "break"],
    content: {
      introduction: "while döngüsü belirli bir koşul sağlandığı sürece çalışır.",
      theory: [
        "while döngüsü sadece koşul kısmına sahiptir",
        "Koşul doğruysa döngü devam eder",
        "Koşul yanlış olunca döngü biter",
        "Dikkat: Sonsuz döngüye girmemek için koşulu değiştirmeyi unutmayın!"
      ],
      code: `#include <stdio.h>

int main() {
    int sayi = 1;
    
    printf("while döngüsü ile 1'den 5'e:\\n");
    while (sayi <= 5) {
        printf("%d ", sayi);
        sayi++;  // Bu çok önemli! sayi'yı artırıyoruz
    }
    printf("\\n");
    
    // Kullanıcıdan 0 girilene kadar sayı alma
    int girilen_sayi;
    printf("\\nSayı girin (0 yazınca durur): ");
    scanf("%d", &girilen_sayi);
    
    while (girilen_sayi != 0) {
        printf("Girdiğiniz sayı: %d\\n", girilen_sayi);
        printf("Başka sayı girin (0 yazınca durur): ");
        scanf("%d", &girilen_sayi);
    }
    printf("Döngü bitti!\\n");
    
    return 0;
}`,
      explanation: "İlk while döngüsü sayi değişkenini 1'den 5'e kadar yazdırır. İkinci döngü kullanıcı 0 girene kadar sayıları almaya devam eder. sayi++ satırı çok önemlidir, yoksa sonsuz döngüye girerdik!",
      simpleExplanation: `🔄 WHILE DÖNGÜSÜ = "TAKİ... OLANA KADAR" DÖNGÜSÜ!

🎯 WHILE NEDİR?
Tıpkı "cookies bitene kadar yemeye devam et" gibi!
- Ne zaman duracak belli değil
- Sadece bir şartın gerçekleşmesini bekliyor
- O şart doğru olduğu sürece devam ediyor

🔍 WHILE DÖNGÜSÜNÜN TEK KOŞULU:
while (koşul) {
    // İşlemler
}

⚡ FOR vs WHILE FARKI:

📊 FOR DÖNGÜSÜ:
- Kaç kez tekrarlanacağı BELLİ (10 kez)
- Başlangıç, bitiş, artış belirli

🀳 WHILE DÖNGÜSÜ:
- Ne zaman biteceği KOŞULA BAĞLI
- Bazen sonsuza kadar gidebilir!

🎮 ÖRNEK KODLARIN ADIM ADIM İNCELENmesi:

📍 ÖRNEK 1 - SAYI YAZDIRMA:

int sayi = 1;
while (sayi <= 5) {
    printf("%d ", sayi);
    sayi++;  // ÇOK ÖNEMLİ!
}

🏁 İlk kontrol: sayi = 1, 1 <= 5? → EVET! → "1 " yazdır
🚀 sayi++ → sayi = 2
✅ İkinci kontrol: sayi = 2, 2 <= 5? → EVET! → "2 " yazdır
🚀 sayi++ → sayi = 3
✅ Üçüncü kontrol: sayi = 3, 3 <= 5? → EVET! → "3 " yazdır
🚀 sayi++ → sayi = 4
✅ İdörtüncü kontrol: sayi = 4, 4 <= 5? → EVET! → "4 " yazdır
🚀 sayi++ → sayi = 5
✅ Beşinci kontrol: sayi = 5, 5 <= 5? → EVET! → "5 " yazdır
🚀 sayi++ → sayi = 6
❌ Altıncı kontrol: sayi = 6, 6 <= 5? → HAYIR! → DÖNGÜ BİTER

📍 ÖRNEK 2 - KULLANICI GİRİŞİ:

while (girilen_sayi != 0) {
    printf("Girdiğiniz sayı: %d\\n", girilen_sayi);
    printf("Başka sayı girin (0 yazınca durur): ");
    scanf("%d", &girilen_sayi);
}

✨ Bu döngü nasıl çalışır:
1️⃣ İlk scanf çalışır
2️⃣ sayi = 5 (örnek)
3️⃣ 5 != 0? → EVET! → "Girdiğiniz sayı: 5"
4️⃣ Yeni scanf → sayi = 8
5️⃣ 8 != 0? → EVET! → "Girdiğiniz sayı: 8"
6️⃣ Yeni scanf → sayi = 0
7️⃣ 0 != 0? → HAYIR! → "DÖNGÜ BİTER!"

🛠️ MANUEL ÇALIŞMA SIRASI:

WHILE DÖNGÜSÜ ALGORITMASı:
1️⃣ Koşulu kontrol et
2️⃣ Koşul doğruysa → İşlemleri yap
3️⃣ Tekrar 1️⃣'e git
4️⃣ Koşul yanlışsa → DÖNGÜ BİTER

🎯 GERÇEK YAŞAM ÖRNEKLERİ:

🚰 ÇAMAŞIR MAKİNESİ:
while (su_seviye < 10_litre) {
    su_doldur();
    su_seviyesi_olc();
}

🚦 TRAFİK IŞIKLARI:
while (kirmizi_yanıyor == true) {
    bekle();
    durumu_kontrol_et();
}

📺 TELEVİZYON İZLEME:
while (dizi_bittimi == false) {
    bolum_izle();
    sıradaki_bolumu_kontrol_et();
}

⚠️ YAYGIN HATALAR VE ÇÖZÜMLERInin:

🚨 SONSUZ DÖNGÜ HATASI #1:
while (sayi <= 5) {
    printf("%d\n", sayi);
    // sayi++ YOK! sayi hep 1 kalıyor!
}
// Çözüm: sayi++; ekle

🚨 SONSUZ DÖNGÜ HATASI #2:
while (true) {
    printf("Hiç bitmeyen döngü!\n");
}
// Çözüm: break veya koşul ekle

🚨 KÖTÜ KOŞUL:
while (sayi != sayi) {  // Hiçbir zaman doğru olmayacak!
    printf("Hiç çalışmayacak!\n");
}

✅ DOĞRU KULLANım ÖRNEKLERİ:
- Menüden çıkma: while (cevap != 'q')
- Dosya okuma: while (dosya_bitmedi)
- Oyun döngüsü: while (oyun_devam_ediyor)
- Girilen sayılar: while (sayi > 0)

🎭 FOR vs WHILE KARŞILAŞTIRMA:

🔢 FOR için kullan:
- Belirli sayıda tekrar (1'den 10'a)
- Sayaç değişkeni gerekli
- Başlangıç ve bitiş belli

🀳 WHILE için kullan:
- Bilinmeyen sayıda tekrar (kullanıcı istediği kadar)
- Tek koşul kontrol
- Esnek çıkış koşulu

💡 ÖZET:
WHILE döngüsü = "Belirsiz zamanlar için, koşula kadar çalış!"

Bu döngü programlamanın en esnek araçlarından biridir!
Çünkü mükemmel şekilde insan davranışını taklit eder.`
    }
  },
  {
    id: 8,
    title: "Fonksiyonlar",
    description: "Kod tekrarını önleyin ve modüler programlama öğrenin",
    difficulty: "Orta",
    duration: "70 dk",
    topics: ["fonksiyon tanımlama", "parametreler", "return", "scope"],
    content: {
      introduction: "Fonksiyonlar, belirli bir işlemi yapan ve gerektiğinde çağrılabilen kod bloklarıdır.",
      theory: [
        "Fonksiyonlar kodu düzenli hale getirir",
        "Tekrar kullanılabilir kod blokları oluşturur",
        "Programı modüler hale getirir",
        "Parametre alabilir ve değer döndürebilir"
      ],
      code: `#include <stdio.h>

// Fonksiyon tanımı
int topla(int a, int b) {
    return a + b;
}

void merhabaYaz() {
    printf("Merhaba!\\n");
}

void yasKontrol(int yas) {
    if (yas >= 18) {
        printf("Yetişkinsiniz!\\n");
    } else {
        printf("Henüz küçüksünüz.\\n");
    }
}

int main() {
    int sonuc = topla(5, 3);
    printf("5 + 3 = %d\\n", sonuc);
    
    merhabaYaz();
    
    yasKontrol(20);
    
    return 0;
}`,
      explanation: "Bu örnekte topla fonksiyonu iki sayıyı toplar ve sonucu döndürür, merhabaYaz fonksiyonu ise parametre almaz ve değer döndürmez. yasKontrol fonksiyonu yaşa göre mesaj yazdırır. Fonksiyonlar kodu daha düzenli ve okunabilir yapar.",
      simpleExplanation: `🏭 FONKSİYONLAR = ÖZEL PROGRAM PARÇACIKLARI!

🎯 FONKSİYON NEDİR?
Tıpkı mutfaktaki bir alet gibi! Mesela mikser:
- Belirli bir işi yapar (çırpar)
- Girdileri alır (yumurta, un, şeker)
- Çıktı verire (karışık hamur)
- Her seferinde aynı şekilde çalışır

Programlamada da aynı! Fonksiyonlar:
- Belirli bir işi yapar
- Parametreler alır (girdiler)
- Sonuç döndürür (çıktı)
- Tekrar tekrar kullanabilirsiniz

🔧 FONKSİYON PARÇALARI:

🏷️ FONKSİYON İSMİ:
topla() - "topla fonksiyonu"
merhabaYaz() - "merhaba yaz fonksiyonu"

📦 PARAMETRELER (Tüm Girdİler):
topla(int a, int b) - a ve b sayılarını alır

🔙 RETURN (Döndür):
return a + b; - Toplamı geri gönder

🎮 ÖRNEK KODLARIN ADIM ADIM ANAİLLANMASI:

📍 FONKSİYON 1 - TOPLA FONKSİYONU:

int topla(int a, int b) {
    return a + b;
}

🧠 Basitçe: "İki sayı al, topla, sonucu gönder!"

🎯 nasıl çalışır:
- topla(5, 3) çağrıldığında
- a = 5, b = 3 olur
- return 5 + 3 = 8 döndürür

📍 FONKSİYON 2 - MERHABA YAZ FONKSİYONU:

void merhabaYaz() {
    printf("Merhaba!\n");
}

🧠 Basitçe: "Parametre alma, sadece mesaj yaz!"

void = "Hiçbir şey döndürmez!"
- Parametresi yok ()
- return yok
- Sadece işini yapar ve biter

📍 FONKSİYON 3 - YAŞ KONTROL FONKSİYONU:

void yasKontrol(int yas) {
    if (yas >= 18) {
        printf("Yetişkinsiniz!\n");
    } else {
        printf("Henüz küçüksünüz.\n");
    }
}

🧠 Basitçe: "Bir yaş al, karşılaştır, mesaj yaz!"

- Parametresi var (int yas)
- Dönüş değeri yok (void)
- If-else kullanır

🎭 FONKSİYON TÜRLERİ:

✅ DEĞER DÖNDÜREN FONKSİYONLAR:
int topla(int a, int b) {
    return a + b;
}
// Sonuç: int, float, char vs. döndürür

✅ HİÇBİR ŞEY DÖNDÜRMEYEN:
void mesajYaz() {
    printf("Merhaba!\n");
}
// void = boş, hiçbir şey döndürmez

🎮 FONKSİYON ÇAĞIRMA ÖRNEKLERİ:

📍 main() fonksiyonunda:
int main() {
    int sonuc = topla(5, 3);     // topla fonksiyonunu çağır
    printf("5 + 3 = %d\n", sonuc);
    
    merhabaYaz();                // merhabaYaz fonksiyonunu çağır
    
    yasKontrol(20);              // yasKontrol fonksiyonunu çağır
    
    return 0;
}

🛠️ ÇALIŞMA ADIMI:

1️⃣ main() başlar
2️⃣ topla(5, 3) çağrılır
3️⃣ topla fonksiyonu çalışır: 5 + 3 = 8
4️⃣ 8 değeri main()e döner
5️⃣ sonuc = 8
6️⃣ printf("5 + 3 = 8") çalışır
7️⃣ merhabaYaz() çağrılır
8️⃣ "Merhaba!" yazdırılır
9️⃣ yasKontrol(20) çağrılır
🔟 "Yetişkinsiniz!" yazdırılır

🎯 GERÇEK YAŞAM ÖRNEKLERİ:

🍳 MUTFAK ÖRNEĞİ:
void kahvegiris(int kahve_miktari) {
    printf("%d gram kahve alın!\n", kahve_miktari);
}

int toplam_fiyat(int kahve_fiyati, int sut_fiyati) {
    return kahve_fiyati + sut_fiyati;
}

🚗 ARAÇ ÖRNEĞİ:
void motor_baslat() {
    printf("Motor çalışıyor!\n");
}

int yakıt_hesapla(int mesafe, int yakit_hizi) {
    return mesafe / yakit_hizi;
}

📊 FONKSİYONLARIN FAYDALARI:

🧹 KOD TEMİZLİĞİ:
- Aynı kodları tekrar yazmazsan
- Programa düzenli görünüm

🚀 KOLAY DEBUGGING:
- Hata varsa hangi fonksiyonda olduğunu bulmak kolay

⚡ TEKRAR KULLANIM:
- topla() fonksiyonu her yerden çağrılabilir
- Yaz, test et, unut!

🎯 TAKIM ÇALIŞMASI:
- Arkadaşların farklı fonksiyonlar yazabilir
- Herkes kendi göreviyle ilgilenir

⚠️ YAYGIN HATALAR:

❌ RETURN EKSİKLİĞİ:
int topla(int a, int b) {
    printf("%d\n", a + b);  // Bu sadece yazdırır
    // return eksik!
}
// Çözüm: return a + b; ekle

❌ WRONG PARAMETER TURU:
topla("merhaba", 5);  // String gönderiyorsun!
// Çözüm: Tam sayı gönder

❌ VOID'E RETURN:
void mesajYaz() {
    return "Merhaba!";  // void fonksiyon return edemez!
}
// Çözüm: return; kullan veya printf

🎁 ÖZET:
FONKSİYONlar = "Kodunuzun LEGO parçaları!"

Program parçalara bölünür, her parça kendi işini yapar.
Eğer 1000 satırlık kodunuzu 50 fonksiyona bölerseniz:
- Okuması kolay olur
- Hataları bulması kolay olur  
- Takım çalışması mümkün olur
- Tekrar kullanım artar!

Bu C programlamanın ileri düzeyi! Temel yapı taşlarını öğrendikten sonra kod nasıl organize edilir ve profesyonel görünüm kazanır!`
    }
  }
];