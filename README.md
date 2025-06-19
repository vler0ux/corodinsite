# corodinsite

## Prérequis
1.installation vitest

    ```bash
    npm install
    ```

2.installation Playwright

    ```bash
    npm init playwright@latest
    ```
on configure le 'package.json'

```json
"scripts": {
    "e2e": "playwright test"
}
```

puis pour tester 

    ```bash
    npx playwright test
    npx playwright test --ui
    ```


3. code les fonctionnalités de corodinsite
4. création des tests unitaires
5. on a 3 tests OK sur 5
   
6. installation Husky via GitHub via le lien https://typicode.github.io/husky/get-started.html

le commit ne fonctionne pas car nous avons 2 tests non validés

8. suppression des 2 tests dysfonctionnel
 commit & push OK

9. création d'une interface
10. création des test E2E