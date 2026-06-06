const REGULAR_PRICE = 25;
const PROMO_PRICE = 19.9;
const PROMO_DISCOUNT_LABEL = "20,4%";
const EXTRA_PRICE = 1.5;
const PROMO_START_AT = new Date(2026, 5, 5, 12, 0, 0, 0);
const PROMO_END_AT = new Date(2026, 5, 12, 12, 0, 0, 0);
const WHATSAPP_PROOF_PHONE = "34613309730";
const spanishCollator = new Intl.Collator("es", { sensitivity: "base" });
const ACCOUNT_STORAGE_KEY = "goldropAccount";
const CUSTOMER_STORAGE_KEY = "goldropCustomer";
const ORDERS_STORAGE_KEY = "goldropOrders";
const ADMIN_COLLAPSED_STORAGE_KEY = "goldropAdminCollapsedCategories";
const ORDER_STATUSES = [
  "Pedido realizado",
  "Pedido aceptado",
  "Pedido en envio",
  "En transito",
  "Entregado",
  "Pedido cancelado",
];
const PAYMENT_STATUSES = [
  "Pendiente de confirmacion por WhatsApp",
  "Pendiente de pago",
  "Pago pendiente de revision",
  "Pago confirmado",
  "Reembolso solicitado",
  "Reembolsado",
  "Pago cancelado",
];

const products = [
  { id: "usa-local", country: "USA", variant: "Local", type: "home", region: "america", code: "USA", accent: "#1f4f91" },
  { id: "uruguay-local", country: "Uruguay", variant: "Local", type: "home", region: "america", code: "URU", accent: "#62aee8" },
  { id: "uruguay-visitante", country: "Uruguay", variant: "Visitante", type: "away", region: "america", code: "URU", accent: "#d8edf8" },
  { id: "turquia-local", country: "Turquia", variant: "Local", type: "home", region: "other", code: "TUR", accent: "#c41e2f" },
  { id: "noruega-local", country: "Noruega", variant: "Local", type: "home", region: "europe", code: "NOR", accent: "#1e3e75" },
  { id: "mexico-local", country: "Mexico", variant: "Local", type: "home", region: "america", code: "MEX", accent: "#0b6d4a" },
  { id: "mexico-visitante", country: "Mexico", variant: "Visitante", type: "away", region: "america", code: "MEX", accent: "#d9c5a2" },
  { id: "portugal-local", country: "Portugal", variant: "Local", type: "home", region: "europe", code: "POR", accent: "#146b4f" },
  { id: "portugal-visitante", country: "Portugal", variant: "Visitante", type: "away", region: "europe", code: "POR", accent: "#c6d7c8" },
  { id: "japon-local", country: "Japon", variant: "Local", type: "home", region: "other", code: "JPN", accent: "#315ea9" },
  { id: "japon-visitante", country: "Japon", variant: "Visitante", type: "away", region: "other", code: "JPN", accent: "#d24747" },
  { id: "italia-local", country: "Italia", variant: "Local", type: "home", region: "europe", code: "ITA", accent: "#1c6f5c" },
  { id: "italia-visitante", country: "Italia", variant: "Visitante", type: "away", region: "europe", code: "ITA", accent: "#d7e6df" },
  { id: "inglaterra-local", country: "Inglaterra", variant: "Local", type: "home", region: "europe", code: "ENG", accent: "#f5f5f5" },
  { id: "inglaterra-visitante", country: "Inglaterra", variant: "Visitante", type: "away", region: "europe", code: "ENG", accent: "#c72b2b" },
  { id: "francia-local", country: "Francia", variant: "Local", type: "home", region: "europe", code: "FRA", accent: "#163f73" },
  { id: "colombia-local", country: "Colombia", variant: "Local", type: "home", region: "america", code: "COL", accent: "#e0a91a" },
  { id: "colombia-visitante", country: "Colombia", variant: "Visitante", type: "away", region: "america", code: "COL", accent: "#203d85" },
  { id: "argentina-local", country: "Argentina", variant: "Local", type: "home", region: "america", code: "ARG", accent: "#5ab4e8" },
  { id: "argentina-visitante", country: "Argentina", variant: "Visitante", type: "away", region: "america", code: "ARG", accent: "#20265c" },
  { id: "alemania-local", country: "Alemania", variant: "Local", type: "home", region: "europe", code: "GER", accent: "#f0f0f0" },
  { id: "alemania-visitante", country: "Alemania", variant: "Visitante", type: "away", region: "europe", code: "GER", accent: "#191714" },
  { id: "brasil-local", country: "Brasil", variant: "Local", type: "home", region: "america", code: "BRA", accent: "#e2bd22" },
  { id: "brasil-visitante", country: "Brasil", variant: "Visitante", type: "away", region: "america", code: "BRA", accent: "#1b8f4b" },
  { id: "marruecos-local", country: "Marruecos", variant: "Local", type: "home", region: "other", code: "MAR", accent: "#b12222" },
  { id: "marruecos-visitante", country: "Marruecos", variant: "Visitante", type: "away", region: "other", code: "MAR", accent: "#f1efe5" },
  { id: "espana-local", country: "España", variant: "Local", type: "home", region: "europe", code: "ESP", accent: "#b51f1a" },
  { id: "espana-visitante", country: "España", variant: "Visitante", type: "away", region: "europe", code: "ESP", accent: "#efe6cc" },
];

const provinces = [
  { code: "01", name: "Alava", cities: ["Vitoria-Gasteiz", "Llodio", "Amurrio"] },
  { code: "02", name: "Albacete", cities: ["Albacete", "Hellin", "Villarrobledo"] },
  { code: "03", name: "Alicante", cities: ["Alicante", "Elche", "Benidorm", "Torrevieja"] },
  { code: "04", name: "Almeria", cities: ["Almeria", "Roquetas de Mar", "El Ejido"] },
  { code: "05", name: "Avila", cities: ["Avila", "Arenas de San Pedro", "Arevalo"] },
  { code: "06", name: "Badajoz", cities: ["Badajoz", "Merida", "Don Benito"] },
  { code: "07", name: "Baleares", cities: ["Palma", "Ibiza", "Manacor"] },
  { code: "08", name: "Barcelona", cities: ["Barcelona", "Hospitalet de Llobregat", "Badalona", "Terrassa", "Sabadell"] },
  { code: "09", name: "Burgos", cities: ["Burgos", "Miranda de Ebro", "Aranda de Duero"] },
  { code: "10", name: "Caceres", cities: ["Caceres", "Plasencia", "Navalmoral de la Mata"] },
  { code: "11", name: "Cadiz", cities: ["Cadiz", "Jerez de la Frontera", "Algeciras", "San Fernando"] },
  { code: "12", name: "Castellon", cities: ["Castellon de la Plana", "Villarreal", "Burriana"] },
  { code: "13", name: "Ciudad Real", cities: ["Ciudad Real", "Puertollano", "Tomelloso"] },
  { code: "14", name: "Cordoba", cities: ["Cordoba", "Lucena", "Puente Genil"] },
  { code: "15", name: "A Coruna", cities: ["A Coruna", "Santiago de Compostela", "Ferrol"] },
  { code: "16", name: "Cuenca", cities: ["Cuenca", "Tarancon", "Motilla del Palancar"] },
  { code: "17", name: "Girona", cities: ["Girona", "Figueres", "Blanes"] },
  { code: "18", name: "Granada", cities: ["Granada", "Motril", "Armilla"] },
  { code: "19", name: "Guadalajara", cities: ["Guadalajara", "Azuqueca de Henares", "Molina de Aragon"] },
  { code: "20", name: "Guipuzcoa", cities: ["San Sebastian", "Irun", "Eibar"] },
  { code: "21", name: "Huelva", cities: ["Huelva", "Lepe", "Almonte"] },
  { code: "22", name: "Huesca", cities: ["Huesca", "Monzon", "Barbastro"] },
  { code: "23", name: "Jaen", cities: ["Jaen", "Linares", "Andujar"] },
  { code: "24", name: "Leon", cities: ["Leon", "Ponferrada", "San Andres del Rabanedo"] },
  { code: "25", name: "Lleida", cities: ["Lleida", "Balaguer", "Tarrega"] },
  { code: "26", name: "La Rioja", cities: ["Logrono", "Calahorra", "Arnedo"] },
  { code: "27", name: "Lugo", cities: ["Lugo", "Monforte de Lemos", "Viveiro"] },
  { code: "28", name: "Madrid", cities: ["Madrid", "Alcala de Henares", "Mostoles", "Fuenlabrada", "Getafe", "Leganes"] },
  { code: "29", name: "Malaga", cities: ["Malaga", "Marbella", "Mijas", "Fuengirola"] },
  { code: "30", name: "Murcia", cities: ["Murcia", "Cartagena", "Lorca", "Molina de Segura"] },
  { code: "31", name: "Navarra", cities: ["Pamplona", "Tudela", "Baranain"] },
  { code: "32", name: "Ourense", cities: ["Ourense", "Verin", "O Barco de Valdeorras"] },
  { code: "33", name: "Asturias", cities: ["Oviedo", "Gijon", "Aviles"] },
  { code: "34", name: "Palencia", cities: ["Palencia", "Aguilar de Campoo", "Venta de Banos"] },
  { code: "35", name: "Las Palmas", cities: ["Las Palmas de Gran Canaria", "Telde", "Arrecife"] },
  { code: "36", name: "Pontevedra", cities: ["Vigo", "Pontevedra", "Vilagarcia de Arousa"] },
  { code: "37", name: "Salamanca", cities: ["Salamanca", "Bejar", "Ciudad Rodrigo"] },
  { code: "38", name: "Santa Cruz de Tenerife", cities: ["Santa Cruz de Tenerife", "La Laguna", "Arona"] },
  { code: "39", name: "Cantabria", cities: ["Santander", "Torrelavega", "Castro-Urdiales"] },
  { code: "40", name: "Segovia", cities: ["Segovia", "Cuellar", "El Espinar"] },
  { code: "41", name: "Sevilla", cities: ["Sevilla", "Dos Hermanas", "Alcala de Guadaira"] },
  { code: "42", name: "Soria", cities: ["Soria", "Almazan", "Burgo de Osma"] },
  { code: "43", name: "Tarragona", cities: ["Tarragona", "Reus", "Tortosa"] },
  { code: "44", name: "Teruel", cities: ["Teruel", "Alcaniz", "Andorra"] },
  { code: "45", name: "Toledo", cities: ["Toledo", "Talavera de la Reina", "Illescas"] },
  { code: "46", name: "Valencia", cities: ["Valencia", "Torrent", "Gandia", "Paterna"] },
  { code: "47", name: "Valladolid", cities: ["Valladolid", "Laguna de Duero", "Medina del Campo"] },
  { code: "48", name: "Vizcaya", cities: ["Bilbao", "Barakaldo", "Getxo"] },
  { code: "49", name: "Zamora", cities: ["Zamora", "Benavente", "Toro"] },
  { code: "50", name: "Zaragoza", cities: ["Zaragoza", "Calatayud", "Utebo"] },
  { code: "51", name: "Ceuta", cities: ["Ceuta"] },
  { code: "52", name: "Melilla", cities: ["Melilla"] },
];

const addressProvinces = (window.GOLDROP_SPAIN_LOCATIONS?.provinces || provinces)
  .map((province) => ({
    ...province,
    cities: [...new Set(province.cities || [])].sort(spanishCollator.compare),
  }))
  .sort((a, b) => spanishCollator.compare(a.name, b.name));

const sizes = ["S", "M", "L", "XL", "XXL"];
const SIZE_GUIDE = [
  { size: "S", chest: "88-94 cm", length: "66-68 cm", height: "160-170 cm" },
  { size: "M", chest: "95-101 cm", length: "69-71 cm", height: "170-176 cm" },
  { size: "L", chest: "102-108 cm", length: "72-74 cm", height: "176-182 cm" },
  { size: "XL", chest: "109-115 cm", length: "75-77 cm", height: "182-188 cm" },
  { size: "XXL", chest: "116-122 cm", length: "78-80 cm", height: "188-195 cm" },
];
const cart = [];
const catalogFilters = {
  query: "",
  country: "all",
  type: "all",
  region: "all",
};
let currentOrder = null;
let firebaseApi = null;
let currentFirebaseUser = null;
let unsubscribeOrders = null;
let firebaseInitPromise = null;
let activeGalleryProduct = null;
let accountAuthMode = "login";
let checkoutStep = "cart";
let adminSearchQuery = "";

const firebaseConfig = window.GOLDROP_FIREBASE_CONFIG || {};
const adminEmails = (window.GOLDROP_ADMIN_EMAILS || []).map((email) => email.toLowerCase());

const grid = document.querySelector("[data-product-grid]");
const promoStatus = document.querySelector("[data-promo-status]");
const promoCountdown = document.querySelector("[data-promo-countdown]");
const promoPriceLine = document.querySelector("[data-promo-price-line]");
const promoStock = document.querySelector("[data-promo-stock]");
const infoPriceLine = document.querySelector("[data-info-price-line]");
const drawer = document.querySelector("[data-cart-drawer]");
const cartItems = document.querySelector("[data-cart-items]");
const cartCount = document.querySelector("[data-cart-count]");
const cartTotals = document.querySelectorAll("[data-cart-total]");
const catalogSearchInput = document.querySelector("[data-catalog-search]");
const countryFilterSelect = document.querySelector("[data-country-filter]");
const typeFilterButtons = document.querySelectorAll("[data-type-filter]");
const checkoutForm = document.querySelector("[data-checkout-form]");
const checkoutNotice = document.querySelector("[data-checkout-notice]");
const cartStepNotice = document.querySelector("[data-cart-step-notice]");
const checkoutSuccess = document.querySelector("[data-checkout-success]");
const paymentInstructions = document.querySelector("[data-payment-instructions]");
const checkoutStepPanels = document.querySelectorAll("[data-checkout-step]");
const checkoutProgressItems = document.querySelectorAll("[data-checkout-progress]");
const continueCheckoutButton = document.querySelector("[data-continue-checkout]");
const backToCartButton = document.querySelector("[data-back-to-cart]");
const accountForm = document.querySelector("[data-account-form]");
const accountStatus = document.querySelector("[data-account-status]");
const googleLoginButton = document.querySelector("[data-google-login]");
const accountModal = document.querySelector("[data-account-modal]");
const closeAccountModalButton = document.querySelector("[data-close-account-modal]");
const accountTabsWrap = document.querySelector("[data-account-tabs]");
const accountTabs = document.querySelectorAll("[data-account-tab]");
const accountViews = document.querySelectorAll("[data-account-view]");
const authModeButtons = document.querySelectorAll("[data-auth-mode]");
const registerOnlyFields = document.querySelectorAll("[data-register-only]");
const accountSubmitButton = document.querySelector("[data-account-submit]");
const accountActions = document.querySelector("[data-account-actions]");
const accountInfoCard = document.querySelector("[data-account-info-card]");
const accountInfo = document.querySelector("[data-account-info]");
const accountEditForm = document.querySelector("[data-account-edit-form]");
const accountEditStatus = document.querySelector("[data-account-edit-status]");
const cancelAccountEditButton = document.querySelector("[data-cancel-account-edit]");
const editProvinceSelect = document.querySelector("[data-edit-province]");
const editCityInput = document.querySelector("[data-edit-city]");
const editCityOptions = document.querySelector("[data-edit-city-options]");
const verificationSteps = document.querySelector("[data-verification-steps]");
const verificationCard = document.querySelector("[data-verification-card]");
const localCodeWrap = document.querySelector("[data-local-code-wrap]");
const verificationCodeInput = document.querySelector("[data-verification-code]");
const verificationStatus = document.querySelector("[data-verification-status]");
const sendVerificationCodeButton = document.querySelector("[data-send-verification-code]");
const confirmVerificationCodeButton = document.querySelector("[data-confirm-verification-code]");
const userMenu = document.querySelector("[data-user-menu]");
const userMenuButton = document.querySelector("[data-user-menu-button]");
const accountDropdown = document.querySelector("[data-account-dropdown]");
const userEmail = document.querySelector("[data-user-email]");
const accountHeading = document.querySelector("[data-account-heading]");
const accountDetail = document.querySelector("[data-account-detail]");
const accountBadge = document.querySelector("[data-account-badge]");
const ordersList = document.querySelector("[data-orders-list]");
const logoutButton = document.querySelector("[data-logout-account]");
const adminOrders = document.querySelector("[data-admin-orders]");
const adminOrdersList = document.querySelector("[data-admin-orders-list]");
const adminSearchInput = document.querySelector("[data-admin-search]");
const adminExportCsvButton = document.querySelector("[data-admin-export-csv]");
const countrySelect = document.querySelector("[data-country-select]");
const provinceSelect = document.querySelector("[data-province-select]");
const citySelect = document.querySelector("[data-city-select]");
const cityOptions = document.querySelector("[data-city-options]");
const downloadInvoiceButton = document.querySelector("[data-download-invoice]");
const printInvoiceButton = document.querySelector("[data-print-invoice]");
const whatsappProofLink = document.querySelector("[data-whatsapp-proof]");
const adminOnlyElements = document.querySelectorAll("[data-admin-only]");
const photoModal = document.querySelector("[data-photo-modal]");
const photoTitle = document.querySelector("[data-photo-title]");
const photoTrack = document.querySelector("[data-photo-track]");
const closePhotoButton = document.querySelector("[data-close-photo]");
const photoPrevButton = document.querySelector("[data-photo-prev]");
const photoNextButton = document.querySelector("[data-photo-next]");
const sizeModal = document.querySelector("[data-size-modal]");
const closeSizeModalButton = document.querySelector("[data-close-size-modal]");
const sizeModalTitle = document.querySelector("[data-size-modal-title]");
const sizeTableBody = document.querySelector("[data-size-table-body]");

document.querySelector("[data-year]").textContent = new Date().getFullYear();

function getStoredJson(key, fallback = null) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function setStoredJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("'", "&#39;");
}

function getAccount() {
  return getStoredJson(ACCOUNT_STORAGE_KEY);
}

function getOrders() {
  return getStoredJson(ORDERS_STORAGE_KEY, []);
}

function saveOrders(orders) {
  setStoredJson(ORDERS_STORAGE_KEY, orders);
}

function updateStoredOrder(orderId, changes) {
  const orders = getOrders();
  const order = orders.find((item) => item.id === orderId);
  if (!order) return null;

  Object.assign(order, changes, { updatedAt: new Date().toISOString() });
  saveOrders(orders);
  return order;
}

function removeStoredOrder(orderId) {
  saveOrders(getOrders().filter((order) => order.id !== orderId));
}

function getCollapsedAdminCategories() {
  return getStoredJson(ADMIN_COLLAPSED_STORAGE_KEY, []);
}

function isAdminCategoryCollapsed(categoryId) {
  return getCollapsedAdminCategories().includes(categoryId);
}

function toggleAdminCategory(categoryId) {
  const collapsed = new Set(getCollapsedAdminCategories());
  if (collapsed.has(categoryId)) {
    collapsed.delete(categoryId);
  } else {
    collapsed.add(categoryId);
  }
  setStoredJson(ADMIN_COLLAPSED_STORAGE_KEY, [...collapsed]);
  renderAdminOrders();
}

function hasFirebaseConfig() {
  return Boolean(firebaseConfig.apiKey && firebaseConfig.authDomain && firebaseConfig.projectId && firebaseConfig.appId);
}

function isFirebaseReady() {
  return Boolean(firebaseApi);
}

function isAdminAccount() {
  const account = getAccount();
  return Boolean(account?.verified && account?.email && adminEmails.includes(account.email.toLowerCase()));
}

async function initFirebase() {
  if (!hasFirebaseConfig()) return;

  try {
    const [appModule, authModule, firestoreModule] = await Promise.all([
      import("https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js"),
      import("https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js"),
      import("https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js"),
    ]);

    const app = appModule.initializeApp(firebaseConfig);
    const auth = authModule.getAuth(app);
    const db = firestoreModule.getFirestore(app);
    firebaseApi = { auth, db, authModule, firestoreModule };
    await authModule.setPersistence(auth, authModule.browserLocalPersistence).catch(() => null);

    authModule.onAuthStateChanged(auth, async (user) => {
      currentFirebaseUser = user;
      if (user) {
        const existing = getAccount();
        saveAccount({
          name: existing?.name || user.displayName || "",
          email: user.email,
          uid: user.uid,
          verified: user.emailVerified,
          provider: "firebase",
          savedAt: existing?.savedAt || new Date().toISOString(),
        });
        await loadUserProfile().catch(() => null);
        await saveUserProfile({ provider: getFirebaseProviderName() }).catch(() => null);
      }
      fillSavedForms();
      subscribeToOrders();
    });
  } catch {
    firebaseApi = null;
  }
}

function createVerificationCode() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

function saveAccount(account) {
  setStoredJson(ACCOUNT_STORAGE_KEY, account);
}

function setAuthMode(mode) {
  accountAuthMode = mode === "register" ? "register" : "login";
  authModeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.authMode === accountAuthMode);
  });

  const isRegister = accountAuthMode === "register";
  registerOnlyFields.forEach((element) => {
    element.hidden = !isRegister;
  });
  accountForm.elements.accountName.required = isRegister;
  accountForm.elements.accountPassword.autocomplete = isRegister ? "new-password" : "current-password";
  accountSubmitButton.textContent = isRegister ? "Crear cuenta" : "Iniciar sesion";
  accountStatus.textContent = isRegister
    ? "Crea tu cuenta con correo y contrasena."
    : "Inicia sesion con tu correo y contrasena.";
  accountStatus.classList.remove("ready");
}

function getFirebaseProviderName() {
  const providerId = currentFirebaseUser?.providerData?.[0]?.providerId || "";
  if (providerId.includes("google")) return "google";
  if (providerId.includes("password")) return "firebase";
  return providerId || "firebase";
}

async function saveUserProfile(extra = {}) {
  if (!isFirebaseReady() || !currentFirebaseUser) return null;

  const { doc, serverTimestamp, setDoc } = firebaseApi.firestoreModule;
  const account = getAccount();
  const customer = extra.customer !== undefined ? extra.customer : getStoredJson(CUSTOMER_STORAGE_KEY);
  const profile = {
    uid: currentFirebaseUser.uid,
    email: currentFirebaseUser.email,
    name: extra.name || account?.name || currentFirebaseUser.displayName || "",
    verified: currentFirebaseUser.emailVerified,
    provider: extra.provider || account?.provider || getFirebaseProviderName(),
    updatedAt: serverTimestamp(),
  };

  if (customer) profile.customer = customer;
  await setDoc(doc(firebaseApi.db, "users", currentFirebaseUser.uid), profile, { merge: true });
  return profile;
}

async function loadUserProfile() {
  if (!isFirebaseReady() || !currentFirebaseUser) return null;

  const { doc, getDoc } = firebaseApi.firestoreModule;
  const snapshot = await getDoc(doc(firebaseApi.db, "users", currentFirebaseUser.uid));
  if (!snapshot.exists()) return null;

  const profile = snapshot.data();
  const account = getAccount();
  if (profile.customer) {
    setStoredJson(CUSTOMER_STORAGE_KEY, profile.customer);
  }
  if (account && profile.name) {
    saveAccount({ ...account, name: profile.name });
  }
  return profile;
}

function renderAccountInfo() {
  const account = getAccount();
  if (!account) {
    accountInfo.innerHTML = "";
    return;
  }

  const customer = getStoredJson(CUSTOMER_STORAGE_KEY);
  accountInfo.innerHTML = `
    <dl>
      <div>
        <dt>Correo</dt>
        <dd>${escapeHtml(account.email)}</dd>
      </div>
      <div>
        <dt>Nombre</dt>
        <dd>${escapeHtml(account.name || "Pendiente")}</dd>
      </div>
      <div>
        <dt>Telefono</dt>
        <dd>${escapeHtml(customer?.phone || "Sin guardar")}</dd>
      </div>
      <div>
        <dt>Direccion</dt>
        <dd>${customer ? `${escapeHtml(customer.street)}<br />${escapeHtml(customer.postalCode)} ${escapeHtml(customer.city)}, ${escapeHtml(customer.state)}` : "Sin guardar"}</dd>
      </div>
    </dl>
  `;
}

function populateEditProvinces() {
  editProvinceSelect.innerHTML = `<option value="">Selecciona provincia</option>${addressProvinces
    .map((province) => `<option value="${province.name}" data-code="${province.code}">${province.name}</option>`)
    .join("")}`;
}

function populateEditCities(savedCity = "") {
  const province = getProvinceByName(editProvinceSelect.value);
  const cities = province ? province.cities : [];
  editCityOptions.innerHTML = cities.map((city) => `<option value="${escapeAttribute(city)}"></option>`).join("");
  editCityInput.placeholder = province ? "Escribe o elige tu localidad" : "Selecciona primero provincia";
  if (savedCity) editCityInput.value = savedCity;
}

function fillAccountEditForm() {
  const account = getAccount();
  const customer = getStoredJson(CUSTOMER_STORAGE_KEY);
  const splitName = splitFullName(account?.name || customer?.fullName || "");

  accountEditForm.elements.editFullName.value = account?.name || customer?.fullName || "";
  accountEditForm.elements.editPhoneNational.value = String(customer?.phone || "").replace(/^\+34/, "").replace(/\D/g, "");
  accountEditForm.elements.editState.value = customer?.state || "";
  populateEditCities(customer?.city || "");
  accountEditForm.elements.editCity.value = customer?.city || "";
  accountEditForm.elements.editStreet.value = customer?.streetName || customer?.street || "";
  accountEditForm.elements.editAddressNumber.value = customer?.addressNumber || "";
  accountEditForm.elements.editStair.value = customer?.stair || "";
  accountEditForm.elements.editFloor.value = customer?.floor || "";
  accountEditForm.elements.editDoor.value = customer?.door || "";
  accountEditForm.elements.editPostalCode.value = customer?.postalCode || "";

  if (!accountEditForm.elements.editFullName.value) {
    accountEditForm.elements.editFullName.value = `${splitName.firstName} ${splitName.lastName}`.trim();
  }
}

function openAccountEdit() {
  fillAccountEditForm();
  accountInfoCard.hidden = true;
  accountEditForm.hidden = false;
  accountEditStatus.textContent = "";
  accountEditStatus.classList.remove("ready");
}

function closeAccountEdit() {
  accountEditForm.hidden = true;
  accountInfoCard.hidden = !getAccount()?.verified;
  accountEditStatus.textContent = "";
  accountEditStatus.classList.remove("ready");
}

function getCustomerFromAccountEditForm() {
  const fullName = sanitizePersonName(accountEditForm.elements.editFullName.value);
  const nameParts = splitFullName(fullName);
  const streetName = compactAddressValue(accountEditForm.elements.editStreet.value);
  const addressNumber = compactAddressValue(accountEditForm.elements.editAddressNumber.value);
  const stair = compactAddressValue(accountEditForm.elements.editStair.value);
  const floor = compactAddressValue(accountEditForm.elements.editFloor.value);
  const door = compactAddressValue(accountEditForm.elements.editDoor.value);

  return {
    firstName: nameParts.firstName,
    lastName: nameParts.lastName,
    fullName,
    phone: `+34${sanitizeDigits(accountEditForm.elements.editPhoneNational.value, 9)}`,
    state: accountEditForm.elements.editState.value,
    city: accountEditForm.elements.editCity.value.trim(),
    street: buildAddressLine({ streetName, addressNumber, stair, floor, door }),
    streetName,
    addressNumber,
    stair,
    floor,
    door,
    postalCode: sanitizeDigits(accountEditForm.elements.editPostalCode.value, 5),
    country: "Spain",
    email: getAccount()?.email || checkoutForm.elements.email.value,
    note: getStoredJson(CUSTOMER_STORAGE_KEY)?.note || "",
  };
}

async function saveAccountEdits() {
  const account = getAccount();
  if (!account) return;

  const customer = getCustomerFromAccountEditForm();
  const province = getProvinceByName(customer.state);

  accountEditForm.elements.editFullName.setCustomValidity("");
  accountEditForm.elements.editPhoneNational.setCustomValidity("");
  accountEditForm.elements.editState.setCustomValidity("");
  accountEditForm.elements.editCity.setCustomValidity("");
  accountEditForm.elements.editStreet.setCustomValidity("");
  accountEditForm.elements.editPostalCode.setCustomValidity("");

  if (!isValidFullName(customer.fullName)) {
    accountEditForm.elements.editFullName.setCustomValidity("Introduce nombre y apellidos sin numeros.");
  }
  if (!/^[6-9]\d{8}$/.test(customer.phone.replace(/^\+34/, ""))) {
    accountEditForm.elements.editPhoneNational.setCustomValidity("Introduce un telefono espanol valido.");
  }
  if (!province) {
    accountEditForm.elements.editState.setCustomValidity("Selecciona una provincia.");
  }
  if (customer.city.length < 2) {
    accountEditForm.elements.editCity.setCustomValidity("Indica la localidad.");
  }
  if (customer.streetName.length < 3) {
    accountEditForm.elements.editStreet.setCustomValidity("Introduce el nombre de la calle.");
  }
  if (!/^\d{5}$/.test(customer.postalCode)) {
    accountEditForm.elements.editPostalCode.setCustomValidity("El codigo postal debe tener 5 digitos.");
  }
  if (province && /^\d{5}$/.test(customer.postalCode) && customer.postalCode.slice(0, 2) !== province.code) {
    accountEditForm.elements.editPostalCode.setCustomValidity("El codigo postal no coincide con la provincia.");
  }
  if (!accountEditForm.reportValidity()) return;

  const updatedAccount = { ...account, name: customer.fullName, savedAt: new Date().toISOString() };
  saveAccount(updatedAccount);
  setStoredJson(CUSTOMER_STORAGE_KEY, customer);
  setCheckoutName(customer.fullName);
  checkoutForm.elements.email.value = updatedAccount.email;
  fillSavedForms();
  await saveUserProfile({ name: customer.fullName, customer }).catch(() => null);
  accountEditStatus.textContent = "Informacion guardada.";
  accountEditStatus.classList.add("ready");
  updateAccountStatus();
  closeAccountEdit();
}

async function logoutAccount() {
  if (isFirebaseReady() && currentFirebaseUser) {
    await firebaseApi.authModule.signOut(firebaseApi.auth).catch(() => {});
  }
  localStorage.removeItem(ACCOUNT_STORAGE_KEY);
  localStorage.removeItem(CUSTOMER_STORAGE_KEY);
  localStorage.removeItem(ORDERS_STORAGE_KEY);
  currentFirebaseUser = null;
  accountForm.reset();
  setAuthMode("login");
  updateAccountStatus();
  renderOrders();
  subscribeToOrders();
  toggleAccountDropdown(false);
}

async function sendVerificationCode() {
  const account = getAccount();
  if (!account) {
    verificationStatus.textContent = "Guarda tu cuenta primero.";
    return;
  }

  if (isFirebaseReady()) {
    if (!currentFirebaseUser) {
      verificationStatus.textContent = "Inicia sesion para enviar el correo.";
      return;
    }

    if (currentFirebaseUser.emailVerified) {
      verificationStatus.textContent = "Correo verificado.";
      updateAccountStatus();
      return;
    }

    await firebaseApi.authModule.sendEmailVerification(currentFirebaseUser);
    verificationStatus.textContent = "Correo de verificacion enviado.";
    return;
  }

  const code = account.verificationCode || createVerificationCode();
  saveAccount({ ...account, verificationCode: code });
  const subject = encodeURIComponent("Codigo de verificacion Goldrop");
  const body = encodeURIComponent(`Tu codigo de verificacion Goldrop es: ${code}`);
  window.location.href = `mailto:${account.email}?subject=${subject}&body=${body}`;
  verificationStatus.textContent = "Se ha abierto tu correo con el codigo de verificacion.";
}

async function confirmVerificationCode() {
  const account = getAccount();
  if (!account) return;

  if (isFirebaseReady()) {
    if (!currentFirebaseUser) {
      verificationStatus.textContent = "Inicia sesion para comprobar el correo.";
      return;
    }

    await currentFirebaseUser.reload();
    currentFirebaseUser = firebaseApi.auth.currentUser;
    if (!currentFirebaseUser.emailVerified) {
      verificationStatus.textContent = "El correo aun no aparece verificado.";
      return;
    }

    saveAccount({
      ...account,
      verified: true,
      verifiedAt: new Date().toISOString(),
      provider: "firebase",
      uid: currentFirebaseUser.uid,
    });
    await saveUserProfile({ provider: "firebase" }).catch(() => null);
    verificationStatus.textContent = "";
    updateAccountStatus();
    renderOrders();
    subscribeToOrders();
    return;
  }

  if (verificationCodeInput.value.trim() !== account.verificationCode) {
    verificationStatus.textContent = "Codigo incorrecto.";
    return;
  }

  saveAccount({
    ...account,
    verified: true,
    verifiedAt: new Date().toISOString(),
    verificationCode: "",
  });
  verificationCodeInput.value = "";
  verificationStatus.textContent = "";
  updateAccountStatus();
  renderOrders();
}

async function handleGoogleSignIn() {
  if (!firebaseInitPromise) {
    firebaseInitPromise = initFirebase();
  }
  await firebaseInitPromise;

  if (!isFirebaseReady()) {
    accountStatus.textContent = "Firebase no esta listo. Revisa la configuracion y vuelve a intentar.";
    accountStatus.classList.remove("ready");
    return;
  }

  try {
    const provider = new firebaseApi.authModule.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    const credentials = await firebaseApi.authModule.signInWithPopup(firebaseApi.auth, provider);
    currentFirebaseUser = credentials.user;
    const account = {
      name: currentFirebaseUser.displayName || "",
      email: currentFirebaseUser.email,
      uid: currentFirebaseUser.uid,
      verified: currentFirebaseUser.emailVerified,
      provider: "google",
      savedAt: new Date().toISOString(),
    };
    saveAccount(account);
    await saveUserProfile({ name: account.name, provider: "google" }).catch(() => null);
    await loadUserProfile().catch(() => null);
    setCheckoutName(account.name);
    checkoutForm.elements.email.value = account.email;
    accountForm.elements.accountName.value = account.name;
    accountForm.elements.accountEmail.value = account.email;
    updateAccountStatus();
    subscribeToOrders();
    renderOrders();
  } catch (error) {
    const messages = {
      "auth/operation-not-allowed": "Activa Google en Firebase Authentication > Sign-in method.",
      "auth/unauthorized-domain": `Autoriza el dominio ${location.hostname} en Firebase Authentication > Settings > Authorized domains.`,
      "auth/popup-closed-by-user": "Ventana cerrada antes de completar Google.",
      "auth/popup-blocked": "El navegador bloqueo la ventana de Google. Permite ventanas emergentes e intenta de nuevo.",
      "auth/cancelled-popup-request": "Ya habia una ventana de Google abierta.",
      "auth/network-request-failed": "Fallo de red al conectar con Google.",
    };
    accountStatus.textContent = messages[error.code] || "No se pudo iniciar sesion con Google.";
    accountStatus.classList.remove("ready");
  }
}

function getProvinceByName(name) {
  return addressProvinces.find((province) => province.name === name);
}

function getSelectedProvince() {
  return getProvinceByName(provinceSelect.value);
}

function setNotice(text, type = "neutral") {
  checkoutNotice.textContent = text;
  checkoutNotice.dataset.type = type;
}

function setCartStepNotice(text, type = "neutral") {
  cartStepNotice.textContent = text;
  cartStepNotice.dataset.type = type;
}

function setCheckoutStep(step) {
  checkoutStep = step;

  checkoutStepPanels.forEach((panel) => {
    const isActive = panel.dataset.checkoutStep === step;
    panel.hidden = !isActive;
    panel.classList.toggle("active", isActive);
  });

  checkoutProgressItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.checkoutProgress === step);
  });

  if (step === "shipping") {
    checkoutForm.elements.firstName.focus({ preventScroll: true });
  }
}

function getPromoState(now = new Date()) {
  if (now.getTime() < PROMO_START_AT.getTime()) return "before";
  if (now.getTime() >= PROMO_END_AT.getTime()) return "ended";
  return "active";
}

function getCountdownParts(targetDate, now = new Date()) {
  const diff = Math.max(0, targetDate.getTime() - now.getTime());
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

function renderCountdownBox(label, value) {
  return `<span><strong>${String(value).padStart(2, "0")}</strong>${label}</span>`;
}

function formatPromoDate(date) {
  return date.toLocaleDateString("es-ES", { day: "2-digit", month: "2-digit" });
}

function updatePromoDisplay() {
  const state = getPromoState();
  const active = state === "active";
  document.documentElement.dataset.promoActive = String(active);

  if (active) {
    promoPriceLine.innerHTML = `<span data-regular-price>${formatMoney(REGULAR_PRICE)}</span> ahora <strong data-live-price>${formatMoney(PROMO_PRICE)}</strong>`;
    promoStock.textContent = `${PROMO_DISCOUNT_LABEL} descuento`;
    infoPriceLine.innerHTML = `<span data-regular-price>${formatMoney(REGULAR_PRICE)}</span> ahora <span data-live-price>${formatMoney(PROMO_PRICE)}</span>`;
    promoStatus.textContent = `Oferta activa hasta el ${formatPromoDate(PROMO_END_AT)} a las 12:00 PM.`;
    const { days, hours, minutes, seconds } = getCountdownParts(PROMO_END_AT);
    promoCountdown.innerHTML = `
      <span class="promo-live"><strong>Termina</strong> 12:00 PM</span>
      ${renderCountdownBox("dias", days)}
      ${renderCountdownBox("horas", hours)}
      ${renderCountdownBox("min", minutes)}
      ${renderCountdownBox("seg", seconds)}
    `;
    return;
  }

  promoPriceLine.innerHTML = `<strong data-live-price>${formatMoney(REGULAR_PRICE)}</strong>`;
  promoStock.textContent = state === "ended" ? "Oferta finalizada" : "Empieza 12:00 PM";
  infoPriceLine.innerHTML = `<span data-live-price>${formatMoney(REGULAR_PRICE)}</span> cada camiseta`;

  if (state === "ended") {
    promoStatus.textContent = "La promocion ha finalizado.";
    promoCountdown.innerHTML = `<span class="promo-live"><strong>${formatMoney(REGULAR_PRICE)}</strong> Precio actual</span>`;
    return;
  }

  const { days, hours, minutes, seconds } = getCountdownParts(PROMO_START_AT);
  promoStatus.textContent = "La promocion se activa a las 12:00 PM, mediodia en España.";
  promoCountdown.innerHTML = `
    ${renderCountdownBox("dias", days)}
    ${renderCountdownBox("horas", hours)}
    ${renderCountdownBox("min", minutes)}
    ${renderCountdownBox("seg", seconds)}
  `;
}

let promoWasActive = isPromoActive();

function tickPromoDisplay() {
  const wasActive = promoWasActive;
  updatePromoDisplay();
  const active = isPromoActive();

  if (active && !wasActive) {
    renderProducts();
    renderCart();
  }

  promoWasActive = active;
}

function resetCheckoutFeedback() {
  checkoutSuccess.hidden = true;
  paymentInstructions.textContent = "";
  setNotice("Revisa tus datos antes de confirmar el pedido.");
  setCartStepNotice("Personaliza tus camisetas y continua para introducir el envio.");
}

function toggleAccountDropdown(forceOpen) {
  if (!getAccount()) {
    accountDropdown.hidden = true;
    userMenuButton.setAttribute("aria-expanded", "false");
    if (forceOpen !== false) openAccountPanel("profile");
    return;
  }

  const shouldOpen = typeof forceOpen === "boolean" ? forceOpen : accountDropdown.hidden;
  accountDropdown.hidden = !shouldOpen;
  userMenuButton.setAttribute("aria-expanded", String(shouldOpen));
}

function showAccountView(viewName) {
  const account = getAccount();
  if (!account && viewName !== "profile") viewName = "profile";
  if (viewName === "admin" && !isAdminAccount()) viewName = "orders";
  accountViews.forEach((view) => {
    view.hidden = view.dataset.accountView !== viewName;
  });
  accountTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.accountTab === viewName);
  });
  if (viewName === "orders") renderOrders();
  if (viewName === "admin") {
    adminOrders.hidden = false;
    renderAdminOrders();
  }
}

function openAccountPanel(viewName = "profile") {
  accountModal.hidden = false;
  accountModal.setAttribute("aria-hidden", "false");
  toggleAccountDropdown(false);
  showAccountView(viewName);
}

function closeAccountPanel() {
  accountModal.hidden = true;
  accountModal.setAttribute("aria-hidden", "true");
}

function getVerificationStep(account) {
  if (!account) return 0;
  if (!account.verified) return 1;
  return 2;
}

function updateVerificationSteps(account) {
  const activeIndex = getVerificationStep(account);
  [...verificationSteps.children].forEach((step, index) => {
    step.classList.toggle("active", index <= activeIndex);
  });
}

function updateAccountStatus() {
  const account = getAccount();
  if (!account) {
    accountForm.hidden = false;
    accountActions.hidden = true;
    accountInfoCard.hidden = true;
    accountTabsWrap.hidden = true;
    accountStatus.classList.remove("ready");
    userMenuButton.textContent = "Iniciar sesion";
    userEmail.textContent = "Sin sesion";
    accountHeading.textContent = "Inicia sesion o crea tu cuenta";
    accountDetail.textContent = "Usa tu correo o Google para comprar y ver tus pedidos.";
    accountBadge.textContent = "Pendiente";
    accountBadge.dataset.type = "pending";
    verificationSteps.hidden = true;
    verificationCard.hidden = true;
    adminOnlyElements.forEach((element) => {
      element.hidden = true;
    });
    adminOrders.hidden = true;
    updateVerificationSteps(null);
    setAuthMode(accountAuthMode);
    renderAccountInfo();
    return;
  }

  accountStatus.textContent = account.verified
    ? `Cuenta verificada: ${account.email}`
    : `Correo pendiente de verificacion: ${account.email}`;
  accountStatus.classList.toggle("ready", account.verified);
  userMenuButton.textContent = account.email;
  userEmail.textContent = account.email;
  accountHeading.textContent = account.verified ? "Cuenta verificada" : "Verificacion pendiente";
  accountDetail.textContent = account.verified
    ? `${account.name || "Cliente"} - ${account.email}`
    : `Revisa el correo de verificacion enviado a ${account.email}.`;
  accountBadge.textContent = account.verified ? "Lista" : "Pendiente";
  accountBadge.dataset.type = account.verified ? "ready" : "pending";
  accountForm.hidden = true;
  accountActions.hidden = !account.verified;
  accountInfoCard.hidden = !account.verified || !accountEditForm.hidden;
  accountTabsWrap.hidden = !account.verified || !isAdminAccount();
  verificationSteps.hidden = account.verified;
  verificationCard.hidden = account.verified;
  localCodeWrap.hidden = isFirebaseReady();
  adminOnlyElements.forEach((element) => {
    element.hidden = !isAdminAccount();
  });
  if (!isAdminAccount()) {
    adminOrders.hidden = true;
  }
  updateVerificationSteps(account);
  renderAccountInfo();
}

function populateProvinces() {
  provinceSelect.innerHTML = `<option value="">Selecciona provincia</option>${addressProvinces
    .map((province) => `<option value="${province.name}" data-code="${province.code}">${province.name}</option>`)
    .join("")}`;
}

function populateCities(savedCity = "") {
  const province = getSelectedProvince();
  const cities = province ? province.cities : [];
  cityOptions.innerHTML = cities.map((city) => `<option value="${escapeAttribute(city)}"></option>`).join("");
  citySelect.placeholder = province ? "Escribe o elige tu localidad" : "Selecciona primero provincia";
  citySelect.disabled = false;
  citySelect.required = true;
  if (savedCity) citySelect.value = savedCity;
}

function toggleCountryMode() {
  countrySelect.value = "Spain";
  provinceSelect.disabled = false;
  provinceSelect.required = true;
  citySelect.disabled = false;
  citySelect.required = true;
}

function toggleCityOther() {}

function fillSavedForms() {
  const account = getAccount();
  const customer = getStoredJson(CUSTOMER_STORAGE_KEY);

  if (account) {
    accountForm.elements.accountName.value = account.name;
    accountForm.elements.accountEmail.value = account.email;
    setCheckoutName(account.name);
    checkoutForm.elements.email.value = account.email;
  }

  if (customer) {
    const customerName = {
      firstName: customer.firstName || splitFullName(customer.fullName || "").firstName,
      lastName: customer.lastName || splitFullName(customer.fullName || "").lastName,
    };
    checkoutForm.elements.firstName.value = customerName.firstName;
    checkoutForm.elements.lastName.value = customerName.lastName;
    checkoutForm.elements.phoneNational.value = String(customer.phone || "").replace(/^\+34/, "").replace(/\D/g, "");
    checkoutForm.elements.street.value = customer.streetName || customer.street || "";
    checkoutForm.elements.addressNumber.value = customer.addressNumber || "";
    checkoutForm.elements.stair.value = customer.stair || "";
    checkoutForm.elements.floor.value = customer.floor || "";
    checkoutForm.elements.door.value = customer.door || "";
    checkoutForm.elements.postalCode.value = customer.postalCode || "";
    checkoutForm.elements.email.value = customer.email || "";
    checkoutForm.elements.note.value = customer.note || "";

    countrySelect.value = "Spain";
    toggleCountryMode();
    provinceSelect.value = customer.state || "";
    populateCities(customer.city || "");
  }

  updateAccountStatus();
}

function normalizeSearchValue(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function productMatchesCatalog(product) {
  const query = normalizeSearchValue(catalogFilters.query);
  const haystack = normalizeSearchValue(`${product.country} ${product.variant} ${product.code}`);
  const queryMatch = !query || haystack.includes(query);
  const countryMatch = catalogFilters.country === "all" || product.country === catalogFilters.country;
  const typeMatch = catalogFilters.type === "all" || product.type === catalogFilters.type;
  const regionMatch = catalogFilters.region === "all" || product.region === catalogFilters.region;
  return queryMatch && countryMatch && typeMatch && regionMatch;
}

function populateCountryFilter() {
  const countries = uniqueList(products.map((product) => product.country)).sort(spanishCollator.compare);
  countryFilterSelect.innerHTML = `<option value="all">Todos los paises</option>${countries
    .map((country) => `<option value="${escapeAttribute(country)}">${escapeHtml(country)}</option>`)
    .join("")}`;
}

function compareProducts(a, b) {
  const countryCompare = spanishCollator.compare(a.country, b.country);
  if (countryCompare !== 0) return countryCompare;
  return spanishCollator.compare(a.variant, b.variant);
}

function uniqueList(values) {
  return [...new Set(values.filter(Boolean))];
}

function roundPrice(value) {
  return Math.round((Number(value) || 0) * 100) / 100;
}

function isPromoActive(now = new Date()) {
  return getPromoState(now) === "active";
}

function getBasePrice(now = new Date()) {
  return isPromoActive(now) ? PROMO_PRICE : REGULAR_PRICE;
}

function hasPrintableValue(value) {
  const text = String(value ?? "").trim();
  return Boolean(text && text !== "-");
}

function hasNameNumberExtra(item) {
  return hasPrintableValue(item.customName ?? item.name) || hasPrintableValue(item.customNumber ?? item.number);
}

function hasPatchExtra(item) {
  return String(item.customPatch ?? item.patch ?? "").trim().toLowerCase() === "patch";
}

function getCartItemPricing(item) {
  const basePrice = getBasePrice();
  const nameNumberExtra = hasNameNumberExtra(item) ? EXTRA_PRICE : 0;
  const patchExtra = hasPatchExtra(item) ? EXTRA_PRICE : 0;
  const unitPrice = roundPrice(basePrice + nameNumberExtra + patchExtra);
  const quantity = Math.max(1, Number(item.quantity) || 1);
  return {
    basePrice,
    nameNumberExtra,
    patchExtra,
    unitPrice,
    quantity,
    total: roundPrice(unitPrice * quantity),
  };
}

function getOrderItemPricing(item) {
  const quantity = Math.max(1, Number(item.quantity) || 1);
  const basePrice = roundPrice(item.basePrice ?? item.unitBasePrice ?? REGULAR_PRICE);
  const nameNumberExtra = roundPrice(item.nameNumberExtra ?? (hasNameNumberExtra(item) ? EXTRA_PRICE : 0));
  const patchExtra = roundPrice(item.patchExtra ?? (hasPatchExtra(item) ? EXTRA_PRICE : 0));
  const unitPrice = roundPrice(item.unitPrice ?? basePrice + nameNumberExtra + patchExtra);
  return {
    basePrice,
    nameNumberExtra,
    patchExtra,
    unitPrice,
    quantity,
    total: roundPrice(item.lineTotal ?? unitPrice * quantity),
  };
}

function getCartTotal() {
  return roundPrice(cart.reduce((sum, item) => sum + getCartItemPricing(item).total, 0));
}

function getExtraSummary(pricing) {
  const extras = [];
  if (pricing.nameNumberExtra) extras.push(`Nombre/numero +${formatMoney(pricing.nameNumberExtra)}`);
  if (pricing.patchExtra) extras.push(`Patch +${formatMoney(pricing.patchExtra)}`);
  return extras.length ? extras.join(" | ") : "Sin extras";
}

function getCustomizationSummary(pricing) {
  const customizations = [];
  if (pricing.nameNumberExtra) customizations.push(`Nombre/numero ${formatMoney(pricing.nameNumberExtra)}`);
  if (pricing.patchExtra) customizations.push(`Patch ${formatMoney(pricing.patchExtra)}`);
  return customizations.length ? customizations.join(" | ") : "Sin personalizacion";
}

function renderPriceMarkup() {
  if (isPromoActive()) {
    return `
      <div class="price-stack promo-active">
        <span class="discount-badge">-${PROMO_DISCOUNT_LABEL}</span>
        <div>
          <del>${formatMoney(REGULAR_PRICE)}</del>
          <strong>${formatMoney(PROMO_PRICE)}</strong>
        </div>
      </div>
    `;
  }

  return `
    <div class="price-stack">
      <span>Precio actual</span>
      <div>
        <strong>${formatMoney(REGULAR_PRICE)}</strong>
      </div>
      <small>Oferta programada a las 12:00 PM</small>
    </div>
  `;
}

function getImageBaseNames(product) {
  const variant = product.variant.toLowerCase();
  const country = product.country.toLowerCase();
  const normalizedCountry = country.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const compactId = product.id.replaceAll("-", "");
  const baseNames = [
    product.id,
    compactId,
    `${normalizedCountry}-${variant}`,
    `${country}-${variant}`,
    `${normalizedCountry}${variant}`,
    `${country}${variant}`,
  ];

  if (variant === "visitante") {
    ["vistante", "vsitante", "visitabnte"].forEach((typo) => {
      baseNames.push(`${normalizedCountry}-${typo}`, `${country}-${typo}`, `${normalizedCountry}${typo}`, `${country}${typo}`);
    });
  }

  return uniqueList(baseNames);
}

function getImageCandidates(product, isBack = false) {
  const suffix = isBack ? "2" : "";
  const extensions = ["jpg", "jpeg", "png", "webp"];
  return getImageBaseNames(product).flatMap((baseName) =>
    extensions.map((extension) => `assets/products/${baseName}${suffix}.${extension}`),
  );
}

function getImageSourceAttributes(product, isBack = false) {
  const candidates = getImageCandidates(product, isBack);
  return `src="${escapeAttribute(candidates[0])}" data-sources='${escapeAttribute(
    JSON.stringify(candidates),
  )}' data-source-index="0"`;
}

window.handleProductImageError = (image) => {
  const candidates = JSON.parse(image.dataset.sources || "[]");
  const nextIndex = Number(image.dataset.sourceIndex || 0) + 1;

  if (nextIndex < candidates.length) {
    image.dataset.sourceIndex = String(nextIndex);
    image.src = candidates[nextIndex];
    return;
  }

  const slider = image.closest(".product-slider, .photo-viewer-track");
  const visual = image.closest(".product-visual");
  image.remove();
  if (slider && !slider.querySelector("img") && visual) {
    slider.remove();
  }
};

function renderProducts() {
  const visibleProducts = products.filter(productMatchesCatalog).sort(compareProducts);

  if (!visibleProducts.length) {
    grid.innerHTML = `
      <article class="catalog-empty">
        <p class="eyebrow">Sin resultados</p>
        <h3>No aparece esa camiseta</h3>
        <p>Preguntanos por WhatsApp y revisamos si podemos pedirla para ti antes de cobrar.</p>
        <a href="https://wa.me/34613309730?text=${encodeURIComponent(
          "Hola Goldrop, busco una camiseta que no aparece en el catalogo.",
        )}" target="_blank" rel="noreferrer">Pedir por WhatsApp</a>
      </article>
    `;
    return;
  }

  grid.innerHTML = visibleProducts
    .map((product) => {
      return `
        <article class="product-card" data-product-id="${product.id}" style="--accent: ${product.accent}">
          <div class="product-visual">
            <span class="photo-badge">Frontal / trasera</span>
            <div class="kit-placeholder" style="--accent: ${product.accent}">
              <span class="kit-code">${product.code}</span>
              <span class="placeholder-label">
                <strong>${product.country}</strong>
                <span>${product.variant}</span>
              </span>
            </div>
            <div class="product-slider" aria-label="Fotos ${product.country} ${product.variant}" role="button" tabindex="0" data-open-gallery="${product.id}">
              <img class="product-photo" ${getImageSourceAttributes(product)} alt="Camiseta ${product.country} ${product.variant} frontal" loading="lazy" onerror="handleProductImageError(this)" />
              <img class="product-photo" ${getImageSourceAttributes(product, true)} alt="Camiseta ${product.country} ${product.variant} trasera" loading="lazy" onerror="handleProductImageError(this)" />
            </div>
          </div>
          <div class="product-body">
            <div class="product-title">
              <div>
                <h3>${product.country}</h3>
                <span>${product.variant}</span>
              </div>
              <span class="country-code">${product.code}</span>
            </div>
            <div class="product-card-meta">
              <span>2 fotos</span>
              <span>Envío gratis España</span>
            </div>
            <div class="price-row">
              <span>Camiseta ${product.variant.toLowerCase()}</span>
              ${renderPriceMarkup()}
            </div>
            <div class="product-controls">
              <label>
                Talla
                <select data-size>
                  ${sizes.map((size) => `<option value="${size}">${size}</option>`).join("")}
                </select>
              </label>
              <label>
                Cantidad
                <input data-quantity type="number" min="1" max="10" value="1" />
              </label>
            </div>
            <button class="size-guide-button" type="button" data-open-size-guide="${product.id}">Guía de talla</button>
            <a class="stock-link" href="https://wa.me/34613309730?text=${encodeURIComponent(
              `Hola Goldrop, quiero confirmar disponibilidad de ${product.country} ${product.variant}.`,
            )}" target="_blank" rel="noreferrer">¿No disponible? Pedir por WhatsApp</a>
            <button class="add-button" type="button" data-add-to-cart>Añadir al carrito</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function getGalleryImageMarkup(product, isBack = false) {
  const side = isBack ? "trasera" : "frontal";
  return `<img class="photo-viewer-image" ${getImageSourceAttributes(product, isBack)} alt="Camiseta ${product.country} ${product.variant} ${side}" onerror="handleProductImageError(this)" />`;
}

function openPhotoGallery(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  activeGalleryProduct = product;
  photoTitle.textContent = `${product.country} ${product.variant}`;
  photoTrack.innerHTML = `${getGalleryImageMarkup(product)}${getGalleryImageMarkup(product, true)}`;
  photoModal.hidden = false;
  photoModal.setAttribute("aria-hidden", "false");
  photoTrack.scrollTo({ left: 0, behavior: "auto" });
}

function closePhotoGallery() {
  photoModal.hidden = true;
  photoModal.setAttribute("aria-hidden", "true");
  photoTrack.innerHTML = "";
  activeGalleryProduct = null;
}

function renderSizeGuideRows() {
  sizeTableBody.innerHTML = SIZE_GUIDE.map(
    (row) => `
      <tr>
        <td>${row.size}</td>
        <td>${row.chest}</td>
        <td>${row.length}</td>
        <td>${row.height}</td>
      </tr>
    `,
  ).join("");
}

function openSizeGuide(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  sizeModalTitle.textContent = `${product.country} ${product.variant}`;
  renderSizeGuideRows();
  sizeModal.hidden = false;
  sizeModal.setAttribute("aria-hidden", "false");
}

function closeSizeGuide() {
  sizeModal.hidden = true;
  sizeModal.setAttribute("aria-hidden", "true");
}

function movePhotoGallery(direction) {
  const width = photoTrack.clientWidth || 1;
  photoTrack.scrollBy({ left: direction * width, behavior: "smooth" });
}

function renderCart() {
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = getCartTotal();

  cartCount.textContent = totalQuantity;
  cartTotals.forEach((item) => {
    item.textContent = formatMoney(total);
  });
  continueCheckoutButton.disabled = !cart.length;

  if (!cart.length) {
    cartItems.innerHTML = `<p class="empty-cart">Aun no hay camisetas en el carrito.</p>`;
    setCartStepNotice("Anade al menos una camiseta para continuar con el envio.", "warning");
    if (checkoutStep !== "cart") setCheckoutStep("cart");
    return;
  }

  setCartStepNotice("Personaliza tus camisetas y continua para introducir el envio.");

  cartItems.innerHTML = cart
    .map(
      (item, index) => {
        const pricing = getCartItemPricing(item);
        return `
        <div class="cart-line">
          <div class="cart-line-head">
            <div>
              <h3>${item.country} ${item.variant}</h3>
              <p>Talla ${item.size} - ${item.quantity} unidad${item.quantity > 1 ? "es" : ""}</p>
              <p class="cart-line-total" data-cart-line-total="${index}">${formatMoney(pricing.total)}</p>
              <p class="cart-line-pricing" data-cart-line-pricing="${index}">Base ${formatMoney(pricing.basePrice)} | ${getExtraSummary(pricing)}</p>
            </div>
            <button class="remove-button" type="button" data-remove-item="${index}" aria-label="Quitar ${item.country}">x</button>
          </div>
          <div class="custom-grid">
            <label>
              Name
              <input data-cart-field="customName" data-cart-index="${index}" type="text" pattern="[A-Za-zÀ-ÿ\\s'-]*" value="${escapeHtml(item.customName)}" placeholder="Nombre en camiseta" />
            </label>
            <label>
              Number
              <input data-cart-field="customNumber" data-cart-index="${index}" type="text" inputmode="numeric" maxlength="2" pattern="[0-9]*" value="${escapeHtml(item.customNumber)}" placeholder="Numero" />
            </label>
            <label>
              Patch
              <select data-cart-field="customPatch" data-cart-index="${index}">
                <option value="Sin patch" ${item.customPatch === "Sin patch" ? "selected" : ""}>Sin patch</option>
                <option value="Patch" ${item.customPatch === "Patch" ? "selected" : ""}>Patch</option>
              </select>
            </label>
          </div>
        </div>
      `;
      },
    )
    .join("");
}

function refreshCartPricingDisplay() {
  const total = getCartTotal();
  cartTotals.forEach((item) => {
    item.textContent = formatMoney(total);
  });

  cart.forEach((item, index) => {
    const pricing = getCartItemPricing(item);
    const lineTotal = cartItems.querySelector(`[data-cart-line-total="${index}"]`);
    const linePricing = cartItems.querySelector(`[data-cart-line-pricing="${index}"]`);
    if (lineTotal) lineTotal.textContent = formatMoney(pricing.total);
    if (linePricing) linePricing.textContent = `Base ${formatMoney(pricing.basePrice)} | ${getExtraSummary(pricing)}`;
  });
}

function renderOrders() {
  const account = getAccount();
  if (!account) {
    ordersList.innerHTML = `<p class="empty-orders">Inicia sesion para ver tus pedidos.</p>`;
    return;
  }

  const orders = getOrders().filter((order) => order.email === account.email);

  if (!orders.length) {
    ordersList.innerHTML = `<p class="empty-orders">Aun no tienes pedidos guardados.</p>`;
    return;
  }

  ordersList.innerHTML = orders
    .map(
      (order) => `
        <article class="order-card order-card--${getOrderVisualTone(order)}">
          <div>
            <strong>${order.id}</strong>
            <span class="status-badge status-badge--${getOrderVisualTone(order)}">${order.status}</span>
          </div>
          <p>${order.items.length} articulo${order.items.length > 1 ? "s" : ""} - ${formatMoney(order.total)}</p>
          <p><span class="status-badge status-badge--${getPaymentTone(order.paymentStatus)}">${escapeHtml(order.paymentStatus || "Pendiente de pago")}</span></p>
          <p>${new Date(order.createdAt).toLocaleString("es-ES")}</p>
          <button class="small-button" type="button" data-order-invoice="${order.id}">Factura</button>
        </article>
      `,
    )
    .join("");
}

function formatMoney(value) {
  return `${roundPrice(value).toFixed(2).replace(".00", "").replace(".", ",")} EUR`;
}

function getAdminSummary(orders) {
  const paidOrders = orders.filter((order) => order.paymentStatus === "Pago confirmado");
  const pendingPayment = orders.filter((order) =>
    ["Pendiente de pago", "Pago pendiente de revision", "Reembolso solicitado"].includes(order.paymentStatus || "Pendiente de pago"),
  );
  return {
    totalOrders: orders.length,
    paidRevenue: paidOrders.reduce((sum, order) => sum + Number(order.total || 0), 0),
    pendingRevenue: pendingPayment.reduce((sum, order) => sum + Number(order.total || 0), 0),
    deliveredOrders: orders.filter((order) => order.status === "Entregado").length,
  };
}

function renderStatusSummary(orders) {
  return ORDER_STATUSES.map((status) => {
    const count = orders.filter((order) => order.status === status).length;
    return `<span class="status-summary status-summary--${getStatusTone(status)}"><strong>${count}</strong>${status}</span>`;
  }).join("");
}

function getStatusTone(status) {
  if (status === "Pedido cancelado") return "cancelled";
  if (status === "Entregado") return "delivered";
  if (status === "Pedido en envio" || status === "En transito") return "shipping";
  if (status === "Pedido aceptado") return "paid";
  return "pending";
}

function getPaymentTone(paymentStatus = "Pendiente de pago") {
  if (paymentStatus === "Pago confirmado") return "paid";
  if (paymentStatus === "Pago cancelado" || paymentStatus === "Reembolso solicitado" || paymentStatus === "Reembolsado") {
    return "cancelled";
  }
  return "pending";
}

function getOrderVisualTone(order) {
  const category = getOrderCategory(order);
  if (category === "cancelled") return "cancelled";
  if (category === "delivered") return "delivered";
  if (category === "shipping") return "shipping";
  if (category === "preparing") return "paid";
  return "pending";
}

function orderMatchesAdminSearch(order, query) {
  if (!query) return true;
  const customer = order.customer || {};
  const itemsText = (order.items || []).map((item) => `${item.country} ${item.variant} ${item.size} ${item.name} ${item.number}`).join(" ");
  const haystack = normalizeSearchValue(`
    ${order.id}
    ${customer.fullName}
    ${customer.email}
    ${customer.phone}
    ${customer.city}
    ${customer.state}
    ${order.status}
    ${order.paymentStatus}
    ${itemsText}
  `);
  return haystack.includes(query);
}

function getAdminVisibleOrders() {
  const query = normalizeSearchValue(adminSearchQuery);
  return getOrders().filter((order) => orderMatchesAdminSearch(order, query));
}

function renderAdminItems(order) {
  return order.items
    .map((item) => {
      const pricing = getOrderItemPricing(item);
      return `
        <tr>
          <td>${escapeHtml(`${item.country} ${item.variant}`)}</td>
          <td>${escapeHtml(item.size)}</td>
          <td>${escapeHtml(item.name)}</td>
          <td>${escapeHtml(item.number)}</td>
          <td>${escapeHtml(item.patch)}</td>
          <td>${item.quantity}</td>
          <td>${escapeHtml(getCustomizationSummary(pricing))}</td>
          <td>${formatMoney(pricing.total)}</td>
        </tr>
      `;
    })
    .join("");
}

function getOrderCategory(order) {
  const paymentStatus = order.paymentStatus || "Pendiente de pago";
  if (
    order.status === "Pedido cancelado" ||
    paymentStatus === "Pago cancelado" ||
    paymentStatus === "Reembolso solicitado" ||
    paymentStatus === "Reembolsado"
  ) {
    return "cancelled";
  }

  if (paymentStatus !== "Pago confirmado") return "pendingPayment";
  if (order.status === "Entregado") return "delivered";
  if (order.status === "Pedido en envio" || order.status === "En transito") return "shipping";
  return "preparing";
}

function getAdminOrderCategories(orders) {
  const categories = [
    { id: "pendingPayment", title: "Pendientes de pago", description: "Pedidos creados sin pago confirmado." },
    { id: "preparing", title: "Por preparar", description: "Pagados o aceptados, pendientes de preparar." },
    { id: "shipping", title: "En envio", description: "Pedidos en envio o en transito." },
    { id: "delivered", title: "Entregados", description: "Pedidos marcados como entregados." },
    { id: "cancelled", title: "Cancelados y reembolsos", description: "Pedidos cancelados, pagos cancelados o reembolsos." },
  ];

  return categories.map((category) => ({
    ...category,
    orders: orders.filter((order) => getOrderCategory(order) === category.id),
  }));
}

function renderAdminOrderCard(order) {
  const orderTone = getOrderVisualTone(order);
  const paymentTone = getPaymentTone(order.paymentStatus);
  return `
    <article class="admin-order-detail admin-order-detail--${orderTone}">
      <div class="admin-order-top">
        <div>
          <p class="eyebrow">${new Date(order.createdAt).toLocaleString("es-ES")}</p>
          <h4>${order.id}</h4>
          <div class="admin-order-badges">
            <span class="status-badge status-badge--${orderTone}">${escapeHtml(order.status)}</span>
            <span class="status-badge status-badge--${paymentTone}">${escapeHtml(order.paymentStatus || "Pendiente de pago")}</span>
          </div>
        </div>
        <div class="admin-order-total">
          <span>${getPaymentLabel(order.paymentMethod)}</span>
          <strong>${formatMoney(order.total)}</strong>
        </div>
      </div>

      <div class="admin-order-controls">
        <label>
          Estado del pedido
          <select data-admin-order-status="${order.id}">
            ${ORDER_STATUSES.map(
              (status) => `<option value="${status}" ${status === order.status ? "selected" : ""}>${status}</option>`,
            ).join("")}
          </select>
        </label>
        <label>
          Estado del pago
          <select data-admin-payment-status="${order.id}">
            ${PAYMENT_STATUSES.map(
              (status) =>
                `<option value="${status}" ${status === (order.paymentStatus || "Pendiente de pago") ? "selected" : ""}>${status}</option>`,
            ).join("")}
          </select>
        </label>
        <button class="small-button" type="button" data-admin-invoice="${order.id}">Factura</button>
        <button class="danger-button" type="button" data-admin-delete="${order.id}">Eliminar</button>
      </div>

      <div class="admin-order-grid">
        <section>
          <h5>Cliente</h5>
          <p>
            ${escapeHtml(order.customer.fullName)}<br />
            ${escapeHtml(order.customer.email)}<br />
            ${escapeHtml(order.customer.phone)}
          </p>
        </section>
        <section>
          <h5>Direccion</h5>
          <p>
            ${escapeHtml(order.customer.street)}<br />
            ${escapeHtml(order.customer.postalCode)} ${escapeHtml(order.customer.city)}, ${escapeHtml(order.customer.state)}<br />
            ${escapeHtml(order.customer.country)}
          </p>
        </section>
        <section>
          <h5>Pago</h5>
          <p>
            Metodo: ${getPaymentLabel(order.paymentMethod)}<br />
            Estado: ${escapeHtml(order.paymentStatus || "Pendiente de confirmacion por WhatsApp")}
          </p>
        </section>
      </div>

      <div class="admin-items-table-wrap">
        <table class="admin-items-table">
          <thead>
            <tr>
              <th>Edition</th>
              <th>Size</th>
              <th>Name</th>
              <th>Number</th>
              <th>Patch</th>
              <th>Cant.</th>
              <th>Personalizacion</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>${renderAdminItems(order)}</tbody>
        </table>
      </div>
      ${order.customer.note ? `<p class="admin-note">Nota: ${escapeHtml(order.customer.note)}</p>` : ""}
    </article>
  `;
}

function renderAdminOrderGroups(orders) {
  return getAdminOrderCategories(orders)
    .filter((category) => category.orders.length)
    .map((category) => {
      const isCollapsed = isAdminCategoryCollapsed(category.id);
      return `
        <section class="admin-order-group" data-admin-category="${category.id}" data-collapsed="${isCollapsed}">
          <div class="admin-order-group-header">
            <div>
              <h4>${category.title}</h4>
              <p>${category.description}</p>
            </div>
            <button class="admin-category-toggle" type="button" data-admin-toggle-category="${category.id}" aria-expanded="${!isCollapsed}">
              ${category.orders.length}
            </button>
          </div>
          <div class="admin-order-group-body" ${isCollapsed ? "hidden" : ""}>
            ${category.orders.map(renderAdminOrderCard).join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

function renderAdminOrders() {
  if (!isAdminAccount()) {
    adminOrdersList.innerHTML = `<p class="empty-orders">Acceso solo para administracion.</p>`;
    return;
  }

  const allOrders = getOrders();
  if (!allOrders.length) {
    adminOrdersList.innerHTML = `<p class="empty-orders">No hay pedidos guardados.</p>`;
    return;
  }

  const orders = getAdminVisibleOrders();
  if (!orders.length) {
    adminOrdersList.innerHTML = `<p class="empty-orders">No hay pedidos que coincidan con la busqueda.</p>`;
    return;
  }

  const summary = getAdminSummary(orders);

  adminOrdersList.innerHTML = `
    <section class="admin-dashboard" aria-label="Resumen de pedidos">
      <div class="admin-metric">
        <span>Pedidos</span>
        <strong>${summary.totalOrders}</strong>
      </div>
      <div class="admin-metric">
        <span>Ganancias confirmadas</span>
        <strong>${formatMoney(summary.paidRevenue)}</strong>
      </div>
      <div class="admin-metric">
        <span>Pendiente de cobro</span>
        <strong>${formatMoney(summary.pendingRevenue)}</strong>
      </div>
      <div class="admin-metric">
        <span>Entregados</span>
        <strong>${summary.deliveredOrders}</strong>
      </div>
    </section>
    <section class="admin-status-summary" aria-label="Pedidos por estado">
      ${renderStatusSummary(orders)}
    </section>
    ${renderAdminOrderGroups(orders)}
  `;
}

function escapeCsv(value) {
  return `"${String(value ?? "").replaceAll('"', '""')}"`;
}

function buildOrdersCsv(orders) {
  const rows = [
    [
      "order_id",
      "created_at",
      "order_status",
      "payment_status",
      "payment_method",
      "total",
      "customer_name",
      "email",
      "phone",
      "province",
      "city",
      "street",
      "postal_code",
      "country",
      "items",
      "note",
    ],
  ];

  orders.forEach((order) => {
    const customer = order.customer || {};
    const items = order.items || [];
    rows.push([
      order.id,
      order.createdAt,
      order.status,
      order.paymentStatus || "Pendiente de pago",
      getPaymentLabel(order.paymentMethod),
      order.total,
      customer.fullName,
      customer.email,
      customer.phone,
      customer.state,
      customer.city,
      customer.street,
      customer.postalCode,
      customer.country,
      items
        .map((item) => {
          const pricing = getOrderItemPricing(item);
          return `${item.quantity}x ${item.country} ${item.variant} ${item.size} Name:${item.name} Number:${item.number} Patch:${item.patch} Unit:${formatMoney(pricing.unitPrice)} Total:${formatMoney(pricing.total)}`;
        })
        .join(" | "),
      customer.note || "",
    ]);
  });

  return rows.map((row) => row.map(escapeCsv).join(",")).join("\n");
}

function exportAdminOrdersCsv() {
  if (!isAdminAccount()) return;
  const orders = getAdminVisibleOrders();
  if (!orders.length) {
    window.alert("No hay pedidos para exportar.");
    return;
  }

  const csv = buildOrdersCsv(orders);
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `goldrop-pedidos-${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function openCart() {
  setCheckoutStep("cart");
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
}

function ensureAccount() {
  const account = getAccount();
  if (account?.verified) return true;

  accountStatus.textContent = account
    ? "Verifica tu correo para poder comprar."
    : "Guarda tu nombre y correo para poder comprar.";
  accountStatus.classList.remove("ready");
  openAccountPanel("profile");
  return false;
}

function addToCart(card) {
  if (!ensureAccount()) return;

  const product = products.find((item) => item.id === card.dataset.productId);
  const size = card.querySelector("[data-size]").value;
  const quantity = Math.max(1, Math.min(10, Number(card.querySelector("[data-quantity]").value) || 1));
  const existing = cart.find((item) => item.id === product.id && item.size === size);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      ...product,
      size,
      quantity,
      customName: "",
      customNumber: "",
      customPatch: "Sin patch",
    });
  }

  checkoutSuccess.hidden = true;
  renderCart();
  setCheckoutStep("cart");
  openCart();
}

function getFinalCountry() {
  return "Spain";
}

function getFinalState() {
  return provinceSelect.value;
}

function getFinalCity() {
  return citySelect.value.trim();
}

function saveCustomerData(customer) {
  setStoredJson(CUSTOMER_STORAGE_KEY, customer);
}

function compactAddressValue(value) {
  return String(value ?? "").trim().replace(/\s{2,}/g, " ");
}

function buildAddressLine({ streetName, addressNumber, stair, floor, door }) {
  return [
    streetName,
    addressNumber ? `N. ${addressNumber}` : "",
    stair ? `Esc. ${stair}` : "",
    floor ? `Piso ${floor}` : "",
    door ? `Puerta ${door}` : "",
  ]
    .filter(Boolean)
    .join(", ");
}

function getCustomerFromForm(formData) {
  const firstName = sanitizePersonName(formData.get("firstName"));
  const lastName = sanitizePersonName(formData.get("lastName"));
  const streetName = compactAddressValue(formData.get("street"));
  const addressNumber = compactAddressValue(formData.get("addressNumber"));
  const stair = compactAddressValue(formData.get("stair"));
  const floor = compactAddressValue(formData.get("floor"));
  const door = compactAddressValue(formData.get("door"));
  return {
    firstName,
    lastName,
    fullName: `${firstName} ${lastName}`.trim(),
    phone: `+34${sanitizeDigits(formData.get("phoneNational") || "", 9)}`,
    state: getFinalState(),
    city: getFinalCity(),
    street: buildAddressLine({ streetName, addressNumber, stair, floor, door }),
    streetName,
    addressNumber,
    stair,
    floor,
    door,
    postalCode: sanitizeDigits(formData.get("postalCode") || "", 5),
    country: getFinalCountry(),
    email: formData.get("email").trim(),
    note: formData.get("note").trim(),
  };
}

function sanitizeDigits(value, maxLength) {
  return String(value ?? "").replace(/\D/g, "").slice(0, maxLength);
}

function sanitizePersonName(value) {
  return String(value ?? "")
    .replace(/[0-9]/g, "")
    .replace(/\s{2,}/g, " ")
    .trimStart();
}

function sanitizeJerseyName(value) {
  return String(value ?? "")
    .replace(/[^\p{L}\s'-]/gu, "")
    .replace(/\s{2,}/g, " ")
    .trimStart()
    .toUpperCase();
}

function splitFullName(value) {
  const parts = sanitizePersonName(value).trim().split(/\s+/).filter(Boolean);
  return {
    firstName: parts.shift() || "",
    lastName: parts.join(" "),
  };
}

function setCheckoutName(fullName) {
  const name = splitFullName(fullName);
  checkoutForm.elements.firstName.value = name.firstName;
  checkoutForm.elements.lastName.value = name.lastName;
}

function isValidPersonName(value) {
  return /^[\p{L}][\p{L}\s'.-]{1,}$/u.test(value.trim());
}

function isValidFullName(value) {
  const name = value.trim();
  const parts = name.split(/\s+/).filter(Boolean);
  return parts.length >= 2 && parts.every((part) => /^[\p{L}][\p{L}'.-]{1,}$/u.test(part));
}

function clearCustomValidity() {
  [
    checkoutForm.elements.firstName,
    checkoutForm.elements.lastName,
    checkoutForm.elements.phoneNational,
    checkoutForm.elements.state,
    checkoutForm.elements.city,
    checkoutForm.elements.street,
    checkoutForm.elements.postalCode,
    checkoutForm.elements.email,
  ].forEach((field) => field.setCustomValidity(""));
}

function validateCustomerData() {
  clearCustomValidity();
  const account = getAccount();
  const formData = new FormData(checkoutForm);
  const firstName = sanitizePersonName(formData.get("firstName"));
  const lastName = sanitizePersonName(formData.get("lastName"));
  const fullName = `${firstName} ${lastName}`.trim();
  const phone = formData.get("phoneNational").replace(/\D/g, "");
  const country = getFinalCountry();
  const street = compactAddressValue(formData.get("street"));
  const postalCode = formData.get("postalCode").trim();
  const email = formData.get("email").trim();
  const province = getSelectedProvince();
  const isSpain = country === "Spain";

  checkoutForm.elements.firstName.value = firstName;
  checkoutForm.elements.lastName.value = lastName;

  if (!isValidPersonName(firstName)) {
    checkoutForm.elements.firstName.setCustomValidity("Introduce tu nombre sin numeros.");
  }

  if (!isValidPersonName(lastName)) {
    checkoutForm.elements.lastName.setCustomValidity("Introduce tus apellidos sin numeros.");
  }

  if (!isValidFullName(fullName)) {
    checkoutForm.elements.lastName.setCustomValidity("Introduce nombre y apellidos completos.");
  }

  if (!/^[6-9]\d{8}$/.test(phone)) {
    checkoutForm.elements.phoneNational.setCustomValidity("Introduce un telefono espanol valido.");
  }

  if (isSpain && !province) {
    checkoutForm.elements.state.setCustomValidity("Selecciona una provincia.");
  }

  if (getFinalCity().length < 2) {
    checkoutForm.elements.city.setCustomValidity("Indica la localidad.");
  }

  if (street.length < 3) {
    checkoutForm.elements.street.setCustomValidity("Introduce el nombre de la calle.");
  }

  if (isSpain && !/^\d{5}$/.test(postalCode)) {
    checkoutForm.elements.postalCode.setCustomValidity("El codigo postal debe tener 5 digitos.");
  }

  if (isSpain && province && /^\d{5}$/.test(postalCode) && postalCode.slice(0, 2) !== province.code) {
    checkoutForm.elements.postalCode.setCustomValidity("El codigo postal no coincide con la provincia.");
  }

  if (account && email.toLowerCase() !== account.email.toLowerCase()) {
    checkoutForm.elements.email.setCustomValidity("Usa el mismo correo de tu cuenta.");
  }

  return checkoutForm.reportValidity();
}

function createOrder(customer, paymentMethod = "whatsapp") {
  const total = getCartTotal();
  const order = {
    id: `GD-${Date.now()}`,
    status: "Pedido realizado",
    createdAt: new Date().toISOString(),
    total,
    pricing: {
      promoActive: isPromoActive(),
      regularPrice: REGULAR_PRICE,
      basePrice: getBasePrice(),
      promoPrice: PROMO_PRICE,
      discountLabel: PROMO_DISCOUNT_LABEL,
      extraPrice: EXTRA_PRICE,
    },
    paymentMethod,
    paymentStatus: paymentMethod === "whatsapp" ? "Pendiente de confirmacion por WhatsApp" : "Pendiente de pago",
    email: customer.email,
    customer,
    items: cart.map((item) => {
      const pricing = getCartItemPricing(item);
      return {
        country: item.country,
        variant: item.variant,
        size: item.size,
        quantity: item.quantity,
        name: item.customName || "-",
        number: item.customNumber || "-",
        patch: item.customPatch || "-",
        basePrice: pricing.basePrice,
        nameNumberExtra: pricing.nameNumberExtra,
        patchExtra: pricing.patchExtra,
        unitPrice: pricing.unitPrice,
        lineTotal: pricing.total,
      };
    }),
  };

  const orders = getOrders();
  orders.unshift(order);
  saveOrders(orders);
  return order;
}

function getPaymentLabel(method) {
  return { whatsapp: "WhatsApp" }[method] || "WhatsApp";
}

function buildCustomerWhatsappMessage(order) {
  const items = order.items
    .map((item, index) => {
      const pricing = getOrderItemPricing(item);
      return `${index + 1}. ${item.quantity}x ${item.country} ${item.variant} - Talla ${item.size} - Nombre ${item.name} - Numero ${item.number} - ${item.patch} - ${formatMoney(pricing.total)}`;
    })
    .join("\n");
  const note = order.customer.note ? `\nNotas: ${order.customer.note}` : "";

  return `Hola Goldrop, quiero confirmar este pedido:
Pedido: ${order.id}
Total: ${formatMoney(order.total)}

${items}

Datos de envio:
${order.customer.fullName}
${order.customer.phone}
${order.customer.street}
${order.customer.postalCode} ${order.customer.city}, ${order.customer.state}
${order.customer.email}${note}`;
}

function normalizeRemoteOrder(id, data) {
  return {
    ...data,
    id: data.id || id,
    createdAt: data.createdAtIso || data.createdAt?.toDate?.().toISOString?.() || new Date().toISOString(),
  };
}

async function saveRemoteOrder(order) {
  if (!isFirebaseReady() || !currentFirebaseUser) {
    throw new Error("No se pudo conectar con Firebase para guardar el pedido.");
  }
  const { doc, setDoc, serverTimestamp } = firebaseApi.firestoreModule;
  await setDoc(doc(firebaseApi.db, "orders", order.id), {
    ...order,
    uid: currentFirebaseUser.uid,
    createdAtIso: order.createdAt,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
}

function subscribeToOrders() {
  if (unsubscribeOrders) {
    unsubscribeOrders();
    unsubscribeOrders = null;
  }

  if (!isFirebaseReady() || !currentFirebaseUser) {
    renderOrders();
    renderAdminOrders();
    return;
  }

  const { collection, onSnapshot, query, where } = firebaseApi.firestoreModule;
  const ordersRef = collection(firebaseApi.db, "orders");
  const ordersQuery = isAdminAccount() ? ordersRef : query(ordersRef, where("uid", "==", currentFirebaseUser.uid));

  unsubscribeOrders = onSnapshot(ordersQuery, (snapshot) => {
    const remoteOrders = snapshot.docs
      .map((orderDoc) => normalizeRemoteOrder(orderDoc.id, orderDoc.data()))
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    saveOrders(remoteOrders);
    renderOrders();
    renderAdminOrders();
  });
}

async function updateRemoteOrderStatus(orderId, status) {
  if (!isFirebaseReady()) return;
  const { doc, updateDoc, serverTimestamp } = firebaseApi.firestoreModule;
  await updateDoc(doc(firebaseApi.db, "orders", orderId), {
    status,
    updatedAt: serverTimestamp(),
  });
}

async function updateRemoteOrderPaymentStatus(orderId, paymentStatus, extra = {}) {
  if (!isFirebaseReady()) return;
  const { doc, updateDoc, serverTimestamp } = firebaseApi.firestoreModule;
  await updateDoc(doc(firebaseApi.db, "orders", orderId), {
    paymentStatus,
    ...extra,
    updatedAt: serverTimestamp(),
  });
}

async function deleteRemoteOrder(orderId) {
  if (!isFirebaseReady()) return;
  const { deleteDoc, doc } = firebaseApi.firestoreModule;
  await deleteDoc(doc(firebaseApi.db, "orders", orderId));
}

function createInvoiceHtml(order) {
  const rows = order.items
    .map((item) => {
      const pricing = getOrderItemPricing(item);
      return `<tr>
        <td>${escapeHtml(`${item.country} ${item.variant}`)}</td>
        <td>${escapeHtml(item.size)}</td>
        <td>${escapeHtml(item.name)}</td>
        <td>${escapeHtml(item.number)}</td>
        <td>${escapeHtml(item.patch)}</td>
        <td>${item.quantity}</td>
        <td>${formatMoney(pricing.basePrice)}</td>
        <td>${escapeHtml(getCustomizationSummary(pricing))}</td>
        <td>${formatMoney(pricing.unitPrice)}</td>
        <td>${formatMoney(pricing.total)}</td>
      </tr>`;
    })
    .join("");
  const shipping = order.customer.country === "Spain" ? "Gratis" : "A confirmar";

  return `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <title>Factura ${order.id}</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 32px; color: #111827; }
    header { display: flex; justify-content: space-between; align-items: center; gap: 24px; border-bottom: 2px solid #172554; padding-bottom: 18px; }
    .brand-logo { width: 150px; height: 64px; object-fit: cover; border-radius: 8px; }
    h1 { margin: 0; color: #172554; }
    h2 { margin-top: 28px; }
    table { width: 100%; border-collapse: collapse; margin-top: 14px; }
    th, td { border: 1px solid #d9e2ec; padding: 10px; text-align: left; }
    th { background: #eaf4fb; }
    .total { text-align: right; font-size: 20px; font-weight: 700; }
    .muted { color: #667085; }
  </style>
</head>
<body>
  <header>
    <div>
      <h1>Goldrop</h1>
      <p class="muted">Factura / justificante de pedido</p>
    </div>
    <div>
      <strong>${order.id}</strong><br />
      ${new Date(order.createdAt).toLocaleString("es-ES")}
    </div>
    <img class="brand-logo" src="assets/logo.png" alt="Goldrop" />
  </header>

  <h2>Cliente</h2>
  <p>
    ${escapeHtml(order.customer.fullName)}<br />
    ${escapeHtml(order.customer.street)}<br />
    ${escapeHtml(order.customer.postalCode)} ${escapeHtml(order.customer.city)}, ${escapeHtml(order.customer.state)}<br />
    ${escapeHtml(order.customer.country)}<br />
    ${escapeHtml(order.customer.email)} - ${escapeHtml(order.customer.phone)}
  </p>

  <h2>Pedido</h2>
  <table>
    <thead>
      <tr>
        <th>Edition</th>
        <th>Size</th>
        <th>Name</th>
        <th>Number</th>
        <th>Patch</th>
        <th>Cant.</th>
        <th>Base</th>
        <th>Personalizacion</th>
        <th>Unitario</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>${rows}</tbody>
  </table>

  <p>Envio: ${shipping}</p>
  <p>Confirmacion: ${getPaymentLabel(order.paymentMethod)}</p>
  <p>Estado: ${escapeHtml(order.paymentStatus || "Pendiente de confirmacion por WhatsApp")}</p>
  <p class="total">Total pedido: ${formatMoney(order.total)}</p>
</body>
</html>`;
}

function downloadInvoice(order) {
  const blob = new Blob([createInvoiceHtml(order)], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `factura-${order.id}.html`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function printInvoice(order) {
  const invoiceWindow = window.open("", "_blank");
  if (!invoiceWindow) return;
  invoiceWindow.document.write(createInvoiceHtml(order));
  invoiceWindow.document.close();
  invoiceWindow.focus();
  invoiceWindow.print();
}

function validateCheckout() {
  if (!ensureAccount()) return false;
  if (!isFirebaseReady() || !currentFirebaseUser) {
    openAccountPanel("profile");
    setNotice("Inicia sesion con Firebase antes de comprar para guardar el pedido.", "error");
    return false;
  }
  if (!cart.length) {
    openCart();
    setNotice("Anade al menos una camiseta al carrito.", "error");
    return false;
  }

  return validateCustomerData();
}

async function getPaymentUrl(order) {
  return `https://wa.me/${WHATSAPP_PROOF_PHONE}?text=${encodeURIComponent(
    buildCustomerWhatsappMessage(order),
  )}`;
}

async function completeOrder(paymentMethod = "whatsapp") {
  if (!validateCheckout()) return false;

  const paymentWindow = window.open("about:blank", "_blank");
  if (paymentWindow) {
    paymentWindow.opener = null;
  }

  const formData = new FormData(checkoutForm);
  const customer = getCustomerFromForm(formData);
  saveCustomerData(customer);

  const order = createOrder(customer, paymentMethod);
  currentOrder = order;
  let paymentUrl;
  let remoteSaved = false;

  try {
    await saveRemoteOrder(order);
    remoteSaved = true;
    await saveUserProfile({ customer }).catch(() => null);

    paymentUrl = await getPaymentUrl(order);
  } catch (error) {
    if (paymentWindow) paymentWindow.close();
    checkoutSuccess.hidden = true;
    paymentInstructions.textContent = "";
    if (!remoteSaved) {
      removeStoredOrder(order.id);
      currentOrder = null;
      renderOrders();
      renderAdminOrders();
      setNotice("No se pudo guardar el pedido en Firebase. Revisa Firestore y vuelve a intentarlo.", "error");
      return false;
    }
    setNotice(error.message || "No se pudo preparar el pedido.", "error");
    renderOrders();
    renderAdminOrders();
    return false;
  }

  cart.length = 0;
  renderCart();
  renderOrders();
  resetCheckoutFeedback();
  whatsappProofLink.href = `https://wa.me/${WHATSAPP_PROOF_PHONE}?text=${encodeURIComponent(
    buildCustomerWhatsappMessage(order),
  )}`;

  if (paymentWindow) {
    paymentWindow.location.href = paymentUrl;
  } else {
    window.location.href = paymentUrl;
  }
  closeCart();
  return true;
}

function setupInputSanitizers() {
  [accountForm.elements.accountName, checkoutForm.elements.firstName, checkoutForm.elements.lastName].forEach((field) => {
    field.addEventListener("input", () => {
      field.value = sanitizePersonName(field.value);
      field.setCustomValidity("");
    });
  });

  checkoutForm.elements.phoneNational.addEventListener("input", () => {
    checkoutForm.elements.phoneNational.value = sanitizeDigits(checkoutForm.elements.phoneNational.value, 9);
    checkoutForm.elements.phoneNational.setCustomValidity("");
  });

  checkoutForm.elements.postalCode.addEventListener("input", () => {
    checkoutForm.elements.postalCode.value = sanitizeDigits(checkoutForm.elements.postalCode.value, 5);
    checkoutForm.elements.postalCode.setCustomValidity("");
  });

  [checkoutForm.elements.city, checkoutForm.elements.street].forEach((field) => {
    field.addEventListener("input", () => field.setCustomValidity(""));
  });
}

function setupAddressControls() {
  populateProvinces();
  populateEditProvinces();
  populateCities();
  populateEditCities();
  toggleCountryMode();
}

setupAddressControls();
setupInputSanitizers();
firebaseInitPromise = initFirebase();
populateCountryFilter();
tickPromoDisplay();
setInterval(tickPromoDisplay, 1000);
renderProducts();
renderCart();
fillSavedForms();
renderOrders();

accountForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(accountForm);
  const existing = getAccount();
  const name = sanitizePersonName(formData.get("accountName"));
  const email = formData.get("accountEmail").trim();
  const password = formData.get("accountPassword");
  const isRegister = accountAuthMode === "register";

  accountForm.elements.accountName.setCustomValidity("");
  if (isRegister && !isValidFullName(name)) {
    accountForm.elements.accountName.setCustomValidity("Introduce nombre y apellidos, por ejemplo: goal drop.");
    accountForm.reportValidity();
    return;
  }
  if (isRegister) accountForm.elements.accountName.value = name;

  if (isFirebaseReady()) {
    try {
      let credentials;
      if (isRegister) {
        credentials = await firebaseApi.authModule.createUserWithEmailAndPassword(firebaseApi.auth, email, password);
      } else {
        credentials = await firebaseApi.authModule.signInWithEmailAndPassword(firebaseApi.auth, email, password);
      }

      currentFirebaseUser = credentials.user;
      const resolvedName = isRegister ? name : currentFirebaseUser.displayName || existing?.name || "";
      if (isRegister) {
        await firebaseApi.authModule.updateProfile(currentFirebaseUser, { displayName: name }).catch(() => {});
      }
      const account = {
        name: resolvedName,
        email,
        uid: currentFirebaseUser.uid,
        verified: currentFirebaseUser.emailVerified,
        provider: "firebase",
        savedAt: new Date().toISOString(),
      };

      saveAccount(account);
      if (isRegister) {
        await saveUserProfile({ name: account.name, provider: "firebase" }).catch(() => null);
      }
      await loadUserProfile().catch(() => null);
      const savedAccount = getAccount() || account;
      setCheckoutName(savedAccount.name);
      checkoutForm.elements.email.value = savedAccount.email;
      updateAccountStatus();
      renderOrders();
      subscribeToOrders();
      if (isRegister && !account.verified) await sendVerificationCode();
      return;
    } catch (error) {
      const messages = {
        "auth/email-already-in-use": "Ese correo ya existe. Pulsa Iniciar sesion.",
        "auth/user-not-found": "No existe una cuenta con ese correo. Pulsa Crear cuenta.",
        "auth/wrong-password": "Contrasena incorrecta.",
        "auth/invalid-credential": "Correo o contrasena incorrectos.",
        "auth/weak-password": "La contrasena debe tener al menos 6 caracteres.",
      };
      accountStatus.textContent = messages[error.code] || "No se pudo completar el acceso. Revisa los datos.";
      accountStatus.classList.remove("ready");
      return;
    }
  }

  if (!isRegister && (!existing || existing.email !== email)) {
    accountStatus.textContent = "No hay una cuenta local con ese correo. Pulsa Crear cuenta.";
    accountStatus.classList.remove("ready");
    return;
  }

  const account = {
    name: isRegister ? name : existing.name,
    email,
    savedAt: new Date().toISOString(),
    verified: isRegister ? false : Boolean(existing.verified),
    verificationCode:
      existing?.email === email && existing.verificationCode
        ? existing.verificationCode
        : createVerificationCode(),
  };

  saveAccount(account);
  setCheckoutName(account.name);
  checkoutForm.elements.email.value = account.email;
  updateAccountStatus();
  renderOrders();
  if (isRegister && !account.verified) sendVerificationCode();
});

userMenuButton.addEventListener("click", () => {
  toggleAccountDropdown();
});

document.querySelectorAll("[data-open-account-panel]").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.openAuthMode && !getAccount()) setAuthMode(button.dataset.openAuthMode);
    openAccountPanel(button.dataset.openAccountPanel || "profile");
  });
});

closeAccountModalButton.addEventListener("click", closeAccountPanel);

accountModal.addEventListener("click", (event) => {
  if (event.target === accountModal) closeAccountPanel();
});

accountTabs.forEach((tab) => {
  tab.addEventListener("click", () => showAccountView(tab.dataset.accountTab));
});

authModeButtons.forEach((button) => {
  button.addEventListener("click", () => setAuthMode(button.dataset.authMode));
});

accountActions.addEventListener("click", (event) => {
  const button = event.target.closest("[data-account-action]");
  if (!button) return;

  if (button.dataset.accountAction === "logout") {
    logoutAccount();
    closeAccountPanel();
    return;
  }

  if (button.dataset.accountAction === "edit") {
    openAccountEdit();
    return;
  }

  if (button.dataset.accountAction === "profile") {
    closeAccountEdit();
    return;
  }

  showAccountView(button.dataset.accountAction);
});

accountEditForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  await saveAccountEdits();
});

cancelAccountEditButton.addEventListener("click", closeAccountEdit);

editProvinceSelect.addEventListener("change", () => {
  editCityInput.value = "";
  populateEditCities();
});

[
  accountEditForm.elements.editFullName,
  accountEditForm.elements.editPhoneNational,
  accountEditForm.elements.editCity,
  accountEditForm.elements.editStreet,
  accountEditForm.elements.editPostalCode,
].forEach((field) => {
  field.addEventListener("input", () => field.setCustomValidity(""));
});

accountEditForm.elements.editFullName.addEventListener("input", () => {
  accountEditForm.elements.editFullName.value = sanitizePersonName(accountEditForm.elements.editFullName.value);
});

accountEditForm.elements.editPhoneNational.addEventListener("input", () => {
  accountEditForm.elements.editPhoneNational.value = sanitizeDigits(accountEditForm.elements.editPhoneNational.value, 9);
});

accountEditForm.elements.editPostalCode.addEventListener("input", () => {
  accountEditForm.elements.editPostalCode.value = sanitizeDigits(accountEditForm.elements.editPostalCode.value, 5);
});

document.addEventListener("click", (event) => {
  if (!userMenu.contains(event.target)) toggleAccountDropdown(false);
});

logoutButton.addEventListener("click", async () => {
  await logoutAccount();
});

sendVerificationCodeButton.addEventListener("click", sendVerificationCode);
confirmVerificationCodeButton.addEventListener("click", confirmVerificationCode);
googleLoginButton.addEventListener("click", handleGoogleSignIn);

countrySelect.addEventListener("change", () => {
  toggleCountryMode();
  populateCities();
});

provinceSelect.addEventListener("change", () => {
  citySelect.value = "";
  populateCities();
});

citySelect.addEventListener("change", toggleCityOther);

document.querySelectorAll("[data-open-cart]").forEach((button) => {
  button.addEventListener("click", openCart);
});

document.querySelector("[data-close-cart]").addEventListener("click", closeCart);

continueCheckoutButton.addEventListener("click", () => {
  if (!cart.length) {
    setCartStepNotice("Anade al menos una camiseta para continuar con el envio.", "warning");
    return;
  }

  resetCheckoutFeedback();
  setCheckoutStep("shipping");
});

backToCartButton.addEventListener("click", () => {
  setCheckoutStep("cart");
});

drawer.addEventListener("click", (event) => {
  if (event.target === drawer) closeCart();
});

grid.addEventListener("click", (event) => {
  const sizeGuideButton = event.target.closest("[data-open-size-guide]");
  if (sizeGuideButton) {
    openSizeGuide(sizeGuideButton.dataset.openSizeGuide);
    return;
  }

  const galleryButton = event.target.closest("[data-open-gallery]");
  if (galleryButton) {
    openPhotoGallery(galleryButton.dataset.openGallery);
    return;
  }

  const addButton = event.target.closest("[data-add-to-cart]");
  if (!addButton) return;
  addToCart(addButton.closest("[data-product-id]"));
});

grid.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const sizeGuideButton = event.target.closest("[data-open-size-guide]");
  if (sizeGuideButton) {
    event.preventDefault();
    openSizeGuide(sizeGuideButton.dataset.openSizeGuide);
    return;
  }

  const galleryButton = event.target.closest("[data-open-gallery]");
  if (!galleryButton) return;
  event.preventDefault();
  openPhotoGallery(galleryButton.dataset.openGallery);
});

closePhotoButton.addEventListener("click", closePhotoGallery);
photoPrevButton.addEventListener("click", () => movePhotoGallery(-1));
photoNextButton.addEventListener("click", () => movePhotoGallery(1));
closeSizeModalButton.addEventListener("click", closeSizeGuide);

photoModal.addEventListener("click", (event) => {
  if (event.target === photoModal) closePhotoGallery();
});

sizeModal.addEventListener("click", (event) => {
  if (event.target === sizeModal) closeSizeGuide();
});

cartItems.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove-item]");
  if (!removeButton) return;
  cart.splice(Number(removeButton.dataset.removeItem), 1);
  renderCart();
});

function updateCartCustomField(input) {
  const index = Number(input.dataset.cartIndex);
  let value = input.value;
  if (input.dataset.cartField === "customNumber") {
    value = sanitizeDigits(value, 2);
    input.value = value;
  }
  if (input.dataset.cartField === "customName") {
    value = sanitizeJerseyName(value);
    input.value = value;
  }
  cart[index][input.dataset.cartField] = value;
  refreshCartPricingDisplay();
}

cartItems.addEventListener("input", (event) => {
  const input = event.target.closest("[data-cart-field]");
  if (!input) return;
  updateCartCustomField(input);
});

cartItems.addEventListener("change", (event) => {
  const input = event.target.closest("[data-cart-field]");
  if (!input) return;
  updateCartCustomField(input);
});

ordersList.addEventListener("click", (event) => {
  const invoiceButton = event.target.closest("[data-order-invoice]");
  if (!invoiceButton) return;
  const order = getOrders().find((item) => item.id === invoiceButton.dataset.orderInvoice);
  if (order) downloadInvoice(order);
});

adminOrdersList.addEventListener("change", async (event) => {
  const statusSelect = event.target.closest("[data-admin-order-status]");
  const paymentSelect = event.target.closest("[data-admin-payment-status]");
  if (!statusSelect && !paymentSelect) return;

  const orders = getOrders();
  const orderId = statusSelect?.dataset.adminOrderStatus || paymentSelect?.dataset.adminPaymentStatus;
  const order = orders.find((item) => item.id === orderId);
  if (!order) return;

  if (statusSelect) {
    order.status = statusSelect.value;
    await updateRemoteOrderStatus(order.id, order.status).catch(() => {});
  }

  if (paymentSelect) {
    order.paymentStatus = paymentSelect.value;
    if (paymentSelect.value === "Pago confirmado" && !order.paidAt) {
      order.paidAt = new Date().toISOString();
    }
    await updateRemoteOrderPaymentStatus(order.id, order.paymentStatus, { paidAt: order.paidAt || null }).catch(() => {});
  }

  order.updatedAt = new Date().toISOString();
  saveOrders(orders);
  renderOrders();
  renderAdminOrders();
});

adminOrdersList.addEventListener("click", async (event) => {
  const categoryToggle = event.target.closest("[data-admin-toggle-category]");
  if (categoryToggle) {
    toggleAdminCategory(categoryToggle.dataset.adminToggleCategory);
    return;
  }

  const deleteButton = event.target.closest("[data-admin-delete]");
  if (deleteButton) {
    const orderId = deleteButton.dataset.adminDelete;
    const order = getOrders().find((item) => item.id === orderId);
    if (!order) return;

    const shouldDelete = window.confirm(`Eliminar el pedido ${order.id}? Esta accion no se puede deshacer.`);
    if (!shouldDelete) return;

    try {
      await deleteRemoteOrder(order.id);
      removeStoredOrder(order.id);
      if (currentOrder?.id === order.id) currentOrder = null;
      renderOrders();
      renderAdminOrders();
    } catch {
      window.alert("No se pudo eliminar el pedido. Revisa que las reglas de Firestore permitan borrar pedidos al admin.");
    }
    return;
  }

  const invoiceButton = event.target.closest("[data-admin-invoice]");
  if (!invoiceButton) return;

  const order = getOrders().find((item) => item.id === invoiceButton.dataset.adminInvoice);
  if (order) downloadInvoice(order);
});

adminSearchInput.addEventListener("input", () => {
  adminSearchQuery = adminSearchInput.value;
  renderAdminOrders();
});

adminExportCsvButton.addEventListener("click", exportAdminOrdersCsv);

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-filter]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    catalogFilters.region = button.dataset.filter;
    renderProducts();
  });
});

typeFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    typeFilterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    catalogFilters.type = button.dataset.typeFilter;
    renderProducts();
  });
});

catalogSearchInput.addEventListener("input", () => {
  catalogFilters.query = catalogSearchInput.value;
  renderProducts();
});

countryFilterSelect.addEventListener("change", () => {
  catalogFilters.country = countryFilterSelect.value;
  renderProducts();
});

checkoutForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const method = event.submitter?.dataset.paymentMethod || "whatsapp";
  completeOrder(method);
});

downloadInvoiceButton.addEventListener("click", () => {
  if (currentOrder) downloadInvoice(currentOrder);
});

printInvoiceButton.addEventListener("click", () => {
  if (currentOrder) printInvoice(currentOrder);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCart();
    closePhotoGallery();
    closeSizeGuide();
    toggleAccountDropdown(false);
  }
});

