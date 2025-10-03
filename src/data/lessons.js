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
      explanation: "Bu program C dilinde yazılmış en basit örnektir. printf fonksiyonu ekrana yazı yazdırmak için kullanılır."
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
      explanation: "Bu programda printf ile 3 farklı yazı yazdırıyoruz. Her yazının sonunda \\n var, bu yüzden her yazı farklı satırda görünür. \\n olmasaydı hepsi aynı satırda yazılır, okumak çok zor olurdu!"
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
      explanation: "Bu örnekte farklı veri tiplerinde değişkenler tanımlanmış ve printf fonksiyonu ile ekrana yazdırılmıştır. %d tam sayılar için, %f ondalıklı sayılar için, %c karakterler için kullanılır."
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
      explanation: "Yorumlar programın çalışmasını etkilemez ama kodunuzu okuyan kişilerin (gelecekte siz bile!) ne yaptığınızı anlamasını kolaylaştırır. İyi programcılar her zaman yorum yazarlar!"
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
      explanation: "Bu program kullanıcının notuna göre farklı mesajlar gösterir. scanf fonksiyonu kullanıcıdan veri almak için kullanılır. Eğer not 90'dan büyükse A, 80-89 arası B, 70-79 arası C, 70'den küçükse 'çalışmanız gerekiyor' yazısı çıkar."
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
      explanation: "İlk döngü 1'den 10'a kadar sayıları yazdırır. İkinci döngü ise 5'in çarpım tablosunu gösterir. Her döngüde i değişkeni 1 artar ve koşul kontrol edilir."
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
      explanation: "İlk while döngüsü sayi değişkenini 1'den 5'e kadar yazdırır. İkinci döngü kullanıcı 0 girene kadar sayıları almaya devam eder. sayi++ satırı çok önemlidir, yoksa sonsuz döngüye girerdik!"
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
      explanation: "Bu örnekte topla fonksiyonu iki sayıyı toplar ve sonucu döndürür, merhabaYaz fonksiyonu ise parametre almaz ve değer döndürmez. yasKontrol fonksiyonu yaşa göre mesaj yazdırır. Fonksiyonlar kodu daha düzenli ve okunabilir yapar."
    }
  }
];