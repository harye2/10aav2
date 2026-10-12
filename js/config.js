// =============================================================================
// CONFIGURACIÓN GLOBAL
// =============================================================================

const CONFIG = {
    // 1. URLs de las 3 APIs (Google Apps Script Deployments)
    API_URL: "https://script.google.com/macros/s/AKfycbwsK9oe03khQOaTdlsuff9lGS6Mt2UkncjSpMTHDFlttBCRGaiAGZ92zNsi2XYpzxKz/exec",
    CODES_API_URL: "https://script.google.com/macros/s/AKfycbwsK9oe03khQOaTdlsuff9lGS6Mt2UkncjSpMTHDFlttBCRGaiAGZ92zNsi2XYpzxKz/exec",
    NOTES_API_URL: "https://script.google.com/macros/s/AKfycbwsK9oe03khQOaTdlsuff9lGS6Mt2UkncjSpMTHDFlttBCRGaiAGZ92zNsi2XYpzxKz/exec",

    // Tiempos de Sincronización
    SYNC_INTERVAL: 30000, // 30 segundos (Polling inteligente para Notas y Códigos)

    SECURITY_SALT_COINS: "ArcaneMastery2026_X",
    SECURITY_SALT_STORAGE: "tom_secure_salt_2026_X",
    SECURITY_SALT_API: "trialsofmastery2025",

    ADMIN_PASSWORD_HASH: "DESACTIVADO"
};
// =============================================================================
// MODO DE PRUEBAS DEL DOCENTE
// true  = monedas llenas al abrir la tienda + todas las runas disponibles
// false = juego normal (SIEMPRE dejarlo en false antes de subir los archivos)
// =============================================================================
const TEST_MODE = false;
window.TEST_MODE = TEST_MODE;
window.CONFIG = CONFIG;
console.log("⚙️ Configuración global cargada.");
