Feature: Login de usuarios en SauceDemo

  Scenario: Login exitoso con usuario estándar
    Given el usuario navega al login de SauceDemo
    When inicia sesión con usuario "standard_user" y contraseña "secret_sauce"
    Then debería ver la página de productos

  Scenario: Login fallido con usuario bloqueado
    Given el usuario navega al login de SauceDemo
    When inicia sesión con usuario "locked_out_user" y contraseña "secret_sauce"
    Then debería ver un mensaje de error de usuario bloqueado

  Scenario: Agregar un producto al carrito desde la página de productos
    Given el usuario navega al login de SauceDemo
    When inicia sesión con usuario "standard_user" y contraseña "secret_sauce"
    And agrega el producto "Sauce Labs Backpack" al carrito
    Then el ícono del carrito debería mostrar "1"

  Scenario: Ver los productos agregados en el carrito
    Given el usuario navega al login de SauceDemo
    When inicia sesión con usuario "standard_user" y contraseña "secret_sauce"
    And agrega el producto "Sauce Labs Backpack" al carrito
    And navega al carrito
    Then el producto "Sauce Labs Backpack" debería estar en el carrito

  Scenario: Completar el proceso de compra hasta la confirmación
    Given el usuario navega al login de SauceDemo
    When inicia sesión con usuario "standard_user" y contraseña "secret_sauce"
    And agrega el producto "Sauce Labs Backpack" al carrito
    And navega al carrito
    And completa el proceso de compra con nombre "Martin", apellido "QA" y código postal "12345"
    Then debería ver el mensaje de confirmación "Thank you for your order!"