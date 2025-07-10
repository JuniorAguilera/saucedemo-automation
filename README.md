# SauceDemo Automation 

Este proyecto automatiza pruebas end-to-end para la aplicación web [SauceDemo](https://www.saucedemo.com/) utilizando **Playwright**, **Cucumber**, **TypeScript** y el patrón de diseño **Page Object Model (POM)**.

---

## 📦 Tecnologías utilizadas

- [Node.js](https://nodejs.org/) (LTS)
- [Playwright](https://playwright.dev/)
- [Cucumber.js](https://cucumber.io/docs/guides/10-minute-tutorial/)
- TypeScript
- Page Object Model (POM)
- VS Code

---

## 📁 Estructura del proyecto

<img width="502" height="389" alt="image" src="https://github.com/user-attachments/assets/5ee23f6c-98ea-4339-9ed4-dcd40ac39767" />


-------------------------------------------------------------

## 🚀 Instrucciones de ejecución

### 1. Clona el repositorio

```bash
git clone https://github.com/JuniorAguilera/saucedemo-automation.git
cd saucedemo-automation
2. Instala dependencias
npm install
npx playwright install
3. Ejecuta los tests
npx cucumber-js --config tests/cucumber.js
💡 Usa npx para no instalar globalmente Cucumber.

✅ Escenarios cubiertos
Login exitoso (usuario válido)

Login fallido (usuario bloqueado)

Agregar producto al carrito

Ver productos en el carrito

Completar el proceso de compra

👤 Credenciales usadas
Usuario válido: standard_user / secret_sauce

Usuario bloqueado: locked_out_user / secret_sauce

✍️ Autor
Junior Aguilera

---

## 📄 Informe de Estrategia

# Estrategia de Automatización

## 1. Enfoque

Se utilizó una estrategia basada en pruebas **End-to-End** para validar los flujos más importantes de la aplicación **SauceDemo** desde la perspectiva del usuario.

## 2. Herramientas

- **Playwright**: para la automatización del navegador
- **Cucumber**: para definir escenarios en lenguaje natural
- **TypeScript**: por su robustez y mejor soporte para Playwright
- **Page Object Model (POM)**: para mantener el código modular y reutilizable

## 3. Patrones y buenas prácticas

- Se implementó el patrón **Page Object Model** para desacoplar la lógica de los pasos de la lógica de UI.
- Cada página (`LoginPage`, `ProductsPage`, `CartPage`, `CheckoutPage`) encapsula acciones reutilizables.
- Se validan mensajes visibles en la UI y URL de navegación para verificar que el flujo se complete correctamente.
- Cada test cierra el navegador al finalizar.

## 4. Escenarios considerados

- Login con credenciales válidas
- Login con usuario bloqueado
- Agregado de productos
- Validación de carrito
- Checkout completo hasta confirmación

## 5. Consideraciones

- Se utilizó `headless: false` para facilitar la visualización durante el desarrollo
- El tiempo de ejecución completo de los tests es inferior a 15 segundos
