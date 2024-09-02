Feature: Je souhaite verifier la page de connexion 
Scenario: Connexion avec des donnees valides
Given Je visite le site OrangeHRM
    When Je saisis le login "Admin"
    And Je saisis le mot de passe "admin123"
    And Je clique sur le bouton login
    Then Je me redirige vers la page "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"  