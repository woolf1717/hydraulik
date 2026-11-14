# HydroPomoc Warszawa — wersja do Netlify

To jest gotowa, samodzielna wersja statyczna strony. Nie wymaga Node.js, bazy danych ani serwera aplikacyjnego.

## Wdrożenie przez panel Netlify

1. Rozpakuj archiwum ZIP.
2. Wejdź na [app.netlify.com](https://app.netlify.com/), wybierz **Add new site → Deploy manually**.
3. Przeciągnij rozpakowany folder do pola uploadu.
4. Netlify opublikuje stronę automatycznie.

## Wdrożenie przez Git

Możesz też wrzucić zawartość tego folderu do repozytorium GitHub i połączyć repozytorium w Netlify. Plik `netlify.toml` ustawia katalog publikacji na bieżący folder.

## Ważne przed uruchomieniem

W plikach `index.html` oraz `script.js` znajduje się demonstracyjny numer telefonu `600 000 000` i odpowiadający mu link WhatsApp. Przed publikacją zamień `+48600000000` oraz `48600000000` na właściwy numer firmy.

Eksport nie korzysta ze storage Manus. Obraz HERO został zastąpiony lokalnym, lekkim tłem `assets/hero-fallback.svg`, dzięki czemu strona działa niezależnie na Netlify. Logo, CSS, JavaScript i manifest trasy są dołączone lokalnie.
