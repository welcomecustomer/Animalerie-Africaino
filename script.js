/*********************** DATA PETWORLD AFRICANO ***********************/

const defaultDogProducts = [
  {
    id: 1,
    name: "Croquettes Chien Premium 3Kg",
    price: "45",
    desc: "Alimentation équilibrée riche en protéines pour chiens adultes",
    img: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400"
  },
  {
    id: 2,
    name: "Gamelle Inox Antidérapante",
    price: "15",
    desc: "Gamelle inox haute qualité pour chiens",
    img: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=400"
  }
];

const defaultDogPets = [
  {
    id: 101,
    name: "Chiot Berger Allemand Africano",
    price: "***",
    desc: "Pur race, vacciné, vermifugé avec carnet de santé.",
    img: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=400"
  },
  {
    id: 103,
    name: "Chiot Caniche Blanc",
    price: "***",
    desc: "Adorable chiot blanc, vacciné et très affectueux pour enfants.",
    img: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=400"
  }
];

const defaultCatProducts = [
  {
    id: 3,
    name: "Bac à Litière Chat Ergonomique",
    price: "***",
    desc: "Bac à litière fermé ergonomique et facile à nettoyer",
    img: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400"
  },
  {
    id: 4,
    name: "Arbre à Chat Luxe",
    price: "***",
    desc: "Arbre à chat confortable avec plusieurs niveaux de jeu",
    img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400"
  }
];

const defaultCatPets = [
  {
    id: 102,
    name: "Chaton Siamois Elevé en Famille",
    price: "***",
    desc: "Très joueur, habitué aux enfants et à la litière.",
    img: "https://images.unsplash.com/photo-1513245543132-31f507417b26?w=400"
  },
  {
    id: 104,
    name: "Chaton Persan Pur",
    price: "***",
    desc: "Chaton à poils longs, calme et très câlin.",
    img: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400"
  }
];

const defaultBirdProducts = [
  {
    id: 5,
    name: "Mélange Graines Perruches 1Kg",
    price: "12",
    desc: "Graines enrichies en vitamines pour perruches et canaris.",
    img: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400"
  },
  {
    id: 6,
    name: "Cage Métallique Spacieuse",
    price: "65",
    desc: "Cage de qualité avec mangeoires et perchoirs inclus.",
    img: "https://images.unsplash.com/photo-1520808663317-647b476a81b9?w=400"
  }
];

const defaultBirdPets = [
  {
    id: 201,
    name: "Canaris Chanteurs Jaunes",
    price: "***",
    desc: "Magnifiques canaris au chant très agréable.",
    img: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400"
  },
  {
    id: 202,
    name: "Couple Perruches Ondulées",
    price: "***",
    desc: "Perruches très colorées, faciles à élever.",
    img: "https://images.unsplash.com/photo-1520808663317-647b476a81b9?w=400"
  }
];

const defaultFishProducts = [
  {
    id: 7,
    name: "Nourriture Flocons Poissons 250ml",
    price: "10",
    desc: "Flocons nutritifs pour poissons d'eau douce.",
    img: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=400"
  },
  {
    id: 8,
    name: "Aquarium Design LED 15L",
    price: "110",
    desc: "Aquarium équipé avec filtre interne et éclairage LED.",
    img: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400"
  }
];

const defaultFishPets = [
  {
    id: 301,
    name: "Poisson Rouge Voile de Chine",
    price: "***",
    desc: "Poisson élégant à grandes nageoires.",
    img: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=400"
  },
  {
    id: 302,
    name: "Poisson Betta Splendens (Combattant)",
    price: "***",
    desc: "Superbe poisson combattant aux couleurs éclatantes.",
    img: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400"
  }
];


/*********************** LOCAL STORAGE ***********************/

let dogProducts =
  JSON.parse(localStorage.getItem("pw_dogProducts")) || defaultDogProducts;

let dogPets =
  JSON.parse(localStorage.getItem("pw_dogPets")) || defaultDogPets;

let catProducts =
  JSON.parse(localStorage.getItem("pw_catProducts")) || defaultCatProducts;

let catPets =
  JSON.parse(localStorage.getItem("pw_catPets")) || defaultCatPets;

let birdProducts =
  JSON.parse(localStorage.getItem("pw_birdProducts")) || defaultBirdProducts;

let birdPets =
  JSON.parse(localStorage.getItem("pw_birdPets")) || defaultBirdPets;

let fishProducts =
  JSON.parse(localStorage.getItem("pw_fishProducts")) || defaultFishProducts;

let fishPets =
  JSON.parse(localStorage.getItem("pw_fishPets")) || defaultFishPets;


/*********************** GLOBAL VARIABLES ***********************/

let cart = [];
let selectedCartItemIds = [];
let currentProduct = null;

let currentUserEmail = null;
let currentUserCleanName = "";

let map = null;
let marker = null;
let selectedCoords = "";

const ADMIN_EMAIL = "fedybouaziz10@gmail.com";


/*********************** MOBILE SCROLL LOCK ***********************/

let savedScrollPosition = 0;

function lockBodyScroll() {

  savedScrollPosition =
    window.scrollY ||
    window.pageYOffset ||
    0;

  document.body.classList.add("checkout-open");

  document.body.style.position = "fixed";
  document.body.style.top = `-${savedScrollPosition}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.width = "100%";
  document.body.style.overflow = "hidden";
}

function unlockBodyScroll() {

  document.body.classList.remove("checkout-open");

  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.width = "";
  document.body.style.overflow = "";

  window.scrollTo(
    0,
    savedScrollPosition
  );
}


/*********************** FAVORITES ***********************/

let favorites =
  JSON.parse(localStorage.getItem("petworldFavorites")) || [];

function getAllItems() {

  return [
    ...dogProducts,
    ...dogPets,
    ...catProducts,
    ...catPets,
    ...birdProducts,
    ...birdPets,
    ...fishProducts,
    ...fishPets
  ];
}

function isFavorite(id) {

  return favorites.some(
    product => product.id === id
  );
}

function toggleFavorite(id, event) {

  if (event) {
    event.stopPropagation();
  }

  const product =
    getAllItems().find(
      p => p.id === id
    );

  if (!product) return;

  if (isFavorite(id)) {

    favorites =
      favorites.filter(
        p => p.id !== id
      );

  } else {

    favorites.push(product);
  }

  localStorage.setItem(
    "petworldFavorites",
    JSON.stringify(favorites)
  );

  updateFavoriteCount();
  updateFavoriteHearts();

  const favoritesPage =
    document.getElementById(
      "favoritesPage"
    );

  if (
    favoritesPage &&
    !favoritesPage.classList.contains("hidden")
  ) {

    displayFavorites();
  }
}

function updateFavoriteCount() {

  const counter =
    document.getElementById(
      "favorite-count"
    );

  if (counter) {
    counter.innerText =
      favorites.length;
  }
}

function updateFavoriteHearts() {

  document
    .querySelectorAll(".favorite-heart")
    .forEach(button => {

      const id =
        Number(
          button.dataset.productId
        );

      if (isFavorite(id)) {

        button.classList.add("active");
        button.innerHTML = "❤️";

      } else {

        button.classList.remove("active");
        button.innerHTML = "♡";
      }
    });
}

function openFavoritesPage() {

  document
    .getElementById("welcomePage")
    .classList.add("hidden");

  document
    .getElementById("mainPage")
    .classList.add("hidden");

  document
    .getElementById("detailsPage")
    .classList.add("hidden");

  document
    .getElementById("cartPage")
    .classList.add("hidden");

  document
    .getElementById("favoritesPage")
    .classList.remove("hidden");

  displayFavorites();
}

function displayFavorites() {

  const container =
    document.getElementById(
      "favoriteProducts"
    );

  if (!container) return;

  if (favorites.length === 0) {

    container.innerHTML = `
      <div class="favorite-empty"
           style="grid-column:1/-1;text-align:center;padding:40px;">

        <div class="empty-heart"
             style="font-size:40px;">
          ♡
        </div>

        <h3>
          Vous n'avez pas encore de favoris
        </h3>

        <p>
          Cliquez sur ❤️ sur un produit
          pour l'ajouter à vos favoris.
        </p>

      </div>
    `;

    return;
  }

  container.innerHTML = "";

  favorites.forEach(product => {

    container.innerHTML += `
      <div class="product-card">

        <button
          class="favorite-heart active"
          data-product-id="${product.id}"
          onclick="toggleFavorite(${product.id}, event)"
          title="Retirer des favoris">
          ❤️
        </button>

        <div>

          <img
            src="${product.img}"
            alt="${product.name}">

          <h3>
            ${product.name}
          </h3>

          <div class="price">
            ${product.price} DT
          </div>

        </div>

        <div class="product-card-actions">

          <button
            class="btn btn-view"
            onclick="showDetails(${product.id})">
            Voir
          </button>

          <button
            class="btn btn-primary"
            style="flex:1"
            onclick="addToCartById(${product.id})">
            Au panier
          </button>

        </div>

      </div>
    `;
  });

  updateFavoriteHearts();
}


/*********************** USER NAME ***********************/

function extractCleanName(email) {

  if (!email) return "";

  let rawName =
    email.split("@")[0];

  let clean =
    rawName
      .replace(/[0-9]/g, "")
      .replace(/[^a-zA-Z]/g, " ")
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .trim();

  if (clean.length === 0) {
    clean = rawName;
  }

  return clean
    .split(/\s+/)
    .map(word =>
      word.charAt(0).toUpperCase() +
      word.slice(1).toLowerCase()
    )
    .join(" ");
}


/*********************** STAR RATING ***********************/

function setRating(type, val) {

  const inputId =
    type === "float"
      ? "floatRatingVal"
      : "postRatingVal";

  const inputEl =
    document.getElementById(inputId);

  if (inputEl) {
    inputEl.value = val;
  }

  const modal =
    type === "float"
      ? document.getElementById("feedbackModal")
      : document.getElementById("postOrderModal");

  if (modal) {

    const stars =
      modal.querySelectorAll(
        ".star-rating span"
      );

    stars.forEach((star, index) => {

      if (index < val) {
        star.classList.add("active");
      } else {
        star.classList.remove("active");
      }

    });
  }
}

function openFeedbackModal() {

  setRating("float", 5);

  document
    .getElementById("feedbackModal")
    .classList.remove("hidden");
}

function closeFeedbackModal() {

  document
    .getElementById("feedbackModal")
    .classList.add("hidden");
}

function skipPostOrderRating() {

  document
    .getElementById("postOrderModal")
    .classList.add("hidden");

  cart = [];
  selectedCartItemIds = [];

  updateCartCount();
  goHome();
}

function finishPostOrderRating(e) {

  if (e) {
    e.preventDefault();
  }

  alert(
    "Merci pour votre avis !"
  );

  document
    .getElementById("postOrderModal")
    .classList.add("hidden");

  cart = [];
  selectedCartItemIds = [];

  updateCartCount();
  goHome();
}

function submitFeedback(e) {

  e.preventDefault();

  alert(
    "Votre message a bien été envoyé ! Merci."
  );

  closeFeedbackModal();
}


/*********************** NAVIGATION ***********************/

function resetNavActive() {

  document
    .querySelectorAll(".nav-item")
    .forEach(el =>
      el.classList.remove("active")
    );
}

function hideAllSections() {

  const sections = [
    "home-section",
    "chiens-section",
    "chats-section",
    "oiseaux-section",
    "poissons-section"
  ];

  sections.forEach(id => {

    const el =
      document.getElementById(id);

    if (el) {
      el.classList.add("hidden");
    }
  });
}

function showHomeSection() {

  goHome();
  resetNavActive();

  const navs =
    document.querySelectorAll(
      ".nav-item"
    );

  if (navs[0]) {
    navs[0].classList.add("active");
  }

  hideAllSections();

  const sec =
    document.getElementById(
      "home-section"
    );

  if (sec) {
    sec.classList.remove("hidden");
  }
}

function showDogSection() {

  goHome();
  resetNavActive();

  const navs =
    document.querySelectorAll(
      ".nav-item"
    );

  if (navs[1]) {
    navs[1].classList.add("active");
  }

  hideAllSections();

  const sec =
    document.getElementById(
      "chiens-section"
    );

  if (sec) {
    sec.classList.remove("hidden");
  }
}

function showCatSection() {

  goHome();
  resetNavActive();

  const navs =
    document.querySelectorAll(
      ".nav-item"
    );

  if (navs[2]) {
    navs[2].classList.add("active");
  }

  hideAllSections();

  const sec =
    document.getElementById(
      "chats-section"
    );

  if (sec) {
    sec.classList.remove("hidden");
  }
}

function showBirdSection() {

  goHome();
  resetNavActive();

  const navs =
    document.querySelectorAll(
      ".nav-item"
    );

  if (navs[3]) {
    navs[3].classList.add("active");
  }

  hideAllSections();

  const sec =
    document.getElementById(
      "oiseaux-section"
    );

  if (sec) {
    sec.classList.remove("hidden");
  }
}

function showFishSection() {

  goHome();
  resetNavActive();

  const navs =
    document.querySelectorAll(
      ".nav-item"
    );

  if (navs[4]) {
    navs[4].classList.add("active");
  }

  hideAllSections();

  const sec =
    document.getElementById(
      "poissons-section"
    );

  if (sec) {
    sec.classList.remove("hidden");
  }
}

function scrollToSection(targetId) {

  if (targetId.startsWith("chiens")) {
    showDogSection();
  }

  else if (targetId.startsWith("chats")) {
    showCatSection();
  }

  else if (targetId.startsWith("oiseaux")) {
    showBirdSection();
  }

  else if (targetId.startsWith("poissons")) {
    showFishSection();
  }

  setTimeout(() => {

    const el =
      document.getElementById(
        targetId
      );

    if (el) {

      el.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

  }, 100);
}

function goToShop() {

  document
    .getElementById("welcomePage")
    .classList.add("hidden");

  document
    .getElementById("mainPage")
    .classList.remove("hidden");

  showHomeSection();
  displayAllCatalogs();
}

function goHome() {

  document
    .getElementById("welcomePage")
    .classList.add("hidden");

  document
    .getElementById("detailsPage")
    .classList.add("hidden");

  document
    .getElementById("cartPage")
    .classList.add("hidden");

  const favoritesPage =
    document.getElementById(
      "favoritesPage"
    );

  if (favoritesPage) {
    favoritesPage.classList.add("hidden");
  }

  document
    .getElementById("mainPage")
    .classList.remove("hidden");
}

function openAboutModal() {

  document
    .getElementById("aboutModal")
    .classList.remove("hidden");
}

function closeAboutModal() {

  document
    .getElementById("aboutModal")
    .classList.add("hidden");
}


/*********************** AUTH ***********************/

function checkSavedUser() {

  const savedEmail =
    localStorage.getItem(
      "petWorldUserEmail"
    );

  if (savedEmail) {

    currentUserEmail =
      savedEmail;

    currentUserCleanName =
      extractCleanName(
        savedEmail
      );
  }

  renderAuthHeader();
  displayAllCatalogs();
}

function openAuthModal(mode) {

  const title =
    document.getElementById(
      "authModalTitle"
    );

  if (title) {

    title.innerText =
      mode === "signin"
        ? "Inscription / Connexion"
        : "Connexion";
  }

  document
    .getElementById("authModal")
    .classList.remove("hidden");
}

function closeAuthModal() {

  document
    .getElementById("authModal")
    .classList.add("hidden");
}

function handleAuthSubmit(e) {

  e.preventDefault();

  const email =
    document
      .getElementById("authEmail")
      .value
      .trim();

  if (!email) return;

  currentUserEmail =
    email;

  currentUserCleanName =
    extractCleanName(email);

  localStorage.setItem(
    "petWorldUserEmail",
    email
  );

  renderAuthHeader();

  closeAuthModal();

  const form =
    document.getElementById(
      "authForm"
    );

  if (form) {
    form.reset();
  }

  displayAllCatalogs();

  if (
    email.toLowerCase() ===
    ADMIN_EMAIL.toLowerCase()
  ) {

    alert(
      "Bienvenue Admin ! Vous pouvez modifier n'importe quel produit sur le site."
    );
  }
}

function logout() {

  currentUserEmail = null;
  currentUserCleanName = "";

  localStorage.removeItem(
    "petWorldUserEmail"
  );

  renderAuthHeader();
  displayAllCatalogs();
}

function renderAuthHeader() {

  const authSection =
    document.getElementById(
      "auth-section"
    );

  if (!authSection) return;

  if (currentUserEmail) {

    const admin =
      currentUserEmail.toLowerCase() ===
      ADMIN_EMAIL.toLowerCase();

    const badgeText =
      admin
        ? "👑 Admin Fedy"
        : `👤 ${currentUserCleanName}`;

    authSection.innerHTML = `

      <div class="user-auth-wrapper">

        <span class="user-chip ${admin ? "admin-chip" : ""}">
          ${badgeText}
        </span>

        <button
          class="btn-logout"
          onclick="logout()">
          Déconnexion
        </button>

      </div>

    `;

  } else {

    authSection.innerHTML = `

      <div class="auth-buttons-wrapper">

        <button
          class="btn btn-outline"
          onclick="openAuthModal('signin')">
          Sign In
        </button>

        <button
          class="btn btn-primary"
          onclick="openAuthModal('login')">
          Log In
        </button>

      </div>

    `;
  }
}

function isAdmin() {

  return (
    currentUserEmail &&
    currentUserEmail.toLowerCase() ===
    ADMIN_EMAIL.toLowerCase()
  );
}


/*********************** ADMIN EDIT ***********************/

function openEditModal(id) {

  const product =
    getAllItems().find(
      p => p.id === id
    );

  if (!product) return;

  document.getElementById(
    "editProductId"
  ).value = product.id;

  document.getElementById(
    "editProductName"
  ).value = product.name;

  document.getElementById(
    "editProductPrice"
  ).value = product.price;

  document.getElementById(
    "editProductImg"
  ).value = product.img;

  document.getElementById(
    "editProductDesc"
  ).value = product.desc;

  document
    .getElementById("editProductModal")
    .classList.remove("hidden");
}

function closeEditModal() {

  document
    .getElementById("editProductModal")
    .classList.add("hidden");
}

function saveProductChanges(e) {

  e.preventDefault();

  const id =
    Number(
      document.getElementById(
        "editProductId"
      ).value
    );

  const newName =
    document.getElementById(
      "editProductName"
    ).value;

  const newPrice =
    document.getElementById(
      "editProductPrice"
    ).value;

  const newImg =
    document.getElementById(
      "editProductImg"
    ).value;

  const newDesc =
    document.getElementById(
      "editProductDesc"
    ).value;

  let found = false;

  const updateList =
    (list, storageKey) => {

      const item =
        list.find(
          p => p.id === id
        );

      if (item) {

        item.name = newName;
        item.price = newPrice;
        item.img = newImg;
        item.desc = newDesc;

        localStorage.setItem(
          storageKey,
          JSON.stringify(list)
        );

        found = true;
      }
    };

  updateList(
    dogProducts,
    "pw_dogProducts"
  );

  updateList(
    dogPets,
    "pw_dogPets"
  );

  updateList(
    catProducts,
    "pw_catProducts"
  );

  updateList(
    catPets,
    "pw_catPets"
  );

  updateList(
    birdProducts,
    "pw_birdProducts"
  );

  updateList(
    birdPets,
    "pw_birdPets"
  );

  updateList(
    fishProducts,
    "pw_fishProducts"
  );

  updateList(
    fishPets,
    "pw_fishPets"
  );

  if (found) {

    alert(
      "Produit mis à jour avec succès ! 🔥"
    );

    closeEditModal();
    displayAllCatalogs();
  }
}


/*********************** CATALOGS ***********************/

function renderGrid(
  containerId,
  list,
  isPet = false
) {

  const container =
    document.getElementById(
      containerId
    );

  if (!container) return;

  container.innerHTML = "";

  list.forEach(p => {

    const actionBtnText =
      isPet
        ? "Réserver"
        : "Au panier";

    const favoriteActive =
      isFavorite(p.id);

    const adminEditBtn =
      isAdmin()
        ? `
          <button
            class="btn btn-outline admin-edit-btn"
            onclick="openEditModal(${p.id})">
            Modifier 🛠️
          </button>
        `
        : "";

    container.innerHTML += `

      <div class="product-card">

        <button
          class="favorite-heart ${favoriteActive ? "active" : ""}"
          data-product-id="${p.id}"
          onclick="toggleFavorite(${p.id}, event)"
          title="Ajouter aux favoris">

          ${favoriteActive ? "❤️" : "♡"}

        </button>

        <div>

          ${adminEditBtn}

          <img
            src="${p.img}"
            alt="${p.name}">

          <h3>
            ${p.name}
          </h3>

          <div class="price">
            ${p.price} DT
          </div>

        </div>

        <div class="product-card-actions">

          <button
            class="btn btn-view"
            onclick="showDetails(${p.id})">
            Voir
          </button>

          <button
            class="btn btn-primary"
            style="flex:1"
            onclick="addToCartById(${p.id})">
            ${actionBtnText}
          </button>

        </div>

      </div>
    `;
  });

  updateFavoriteHearts();
}

function displayAllCatalogs() {

  renderGrid(
    "products-dogs",
    dogProducts,
    false
  );

  renderGrid(
    "pets-dogs",
    dogPets,
    true
  );

  renderGrid(
    "products-cats",
    catProducts,
    false
  );

  renderGrid(
    "pets-cats",
    catPets,
    true
  );

  renderGrid(
    "products-birds",
    birdProducts,
    false
  );

  renderGrid(
    "pets-birds",
    birdPets,
    true
  );

  renderGrid(
    "products-fishes",
    fishProducts,
    false
  );

  renderGrid(
    "pets-fishes",
    fishPets,
    true
  );
}

function showDetails(id) {

  const all =
    getAllItems();

  currentProduct =
    all.find(
      p => p.id === id
    );

  if (!currentProduct) return;

  document
    .getElementById("mainPage")
    .classList.add("hidden");

  document
    .getElementById("cartPage")
    .classList.add("hidden");

  document
    .getElementById("favoritesPage")
    .classList.add("hidden");

  document
    .getElementById("detailsPage")
    .classList.remove("hidden");

  const detailImg =
    document.getElementById(
      "detail-img"
    );

  if (detailImg) {
    detailImg.src =
      currentProduct.img;
  }

  const detailName =
    document.getElementById(
      "detail-name"
    );

  if (detailName) {
    detailName.innerText =
      currentProduct.name;
  }

  const detailDesc =
    document.getElementById(
      "detail-desc"
    );

  if (detailDesc) {
    detailDesc.innerText =
      currentProduct.desc;
  }

  const detailPrice =
    document.getElementById(
      "detail-price"
    );

  if (detailPrice) {
    detailPrice.innerText =
      `${currentProduct.price} DT`;
  }
}


/*********************** CART ***********************/

function addToCartById(id) {

  const product =
    getAllItems().find(
      p => p.id === id
    );

  if (!product) return;

  const item = {
    ...product,

    cartItemId:
      Date.now() +
      Math.random()
  };

  cart.push(item);

  selectedCartItemIds.push(
    item.cartItemId
  );

  updateCartCount();
}

function addToCartFromDetails() {

  if (currentProduct) {

    addToCartById(
      currentProduct.id
    );
  }
}

function updateCartCount() {

  const counter =
    document.getElementById(
      "cart-count"
    );

  if (counter) {
    counter.innerText =
      cart.length;
  }
}

function openCartPage() {

  document
    .getElementById("mainPage")
    .classList.add("hidden");

  document
    .getElementById("detailsPage")
    .classList.add("hidden");

  document
    .getElementById("favoritesPage")
    .classList.add("hidden");

  document
    .getElementById("cartPage")
    .classList.remove("hidden");

  renderCart();
}

function renderCart() {

  const container =
    document.getElementById(
      "cartProducts"
    );

  const controls =
    document.getElementById(
      "cart-controls"
    );

  const actionArea =
    document.getElementById(
      "cart-action-area"
    );

  if (!container) return;

  container.innerHTML = "";

  if (cart.length === 0) {

    container.innerHTML = `
      <p style="
        grid-column:1/-1;
        text-align:center;
        color:var(--text-secondary);
        padding:40px;">
        Votre panier est vide.
      </p>
    `;

    if (controls) {
      controls.classList.add("hidden");
    }

    if (actionArea) {
      actionArea.classList.add("hidden");
    }

    return;
  }

  if (controls) {
    controls.classList.remove("hidden");
  }

  if (actionArea) {
    actionArea.classList.remove("hidden");
  }

  cart.forEach(item => {

    const isChecked =
      selectedCartItemIds.includes(
        item.cartItemId
      )
        ? "checked"
        : "";

    container.innerHTML += `

      <div
        class="product-card"
        style="padding-top:45px;">

        <input
          type="checkbox"
          class="cart-item-check"
          ${isChecked}
          onchange="toggleItemSelection(
            ${item.cartItemId},
            this.checked
          )">

        <img
          src="${item.img}"
          alt="${item.name}">

        <h3>
          ${item.name}
        </h3>

        <div class="price">
          ${item.price} DT
        </div>

        <div class="product-card-actions">

          <button
            class="btn btn-view"
            onclick="showDetails(${item.id})">
            Voir
          </button>

          <button
            class="btn btn-outline"
            style="color:#ff6b6b;border-color:#ff6b6b;"
            onclick="removeFromCart(${item.cartItemId})">
            Supprimer
          </button>

        </div>

      </div>
    `;
  });

  updateCartSummary();
}

function toggleItemSelection(
  cartItemId,
  isChecked
) {

  if (isChecked) {

    if (
      !selectedCartItemIds.includes(
        cartItemId
      )
    ) {

      selectedCartItemIds.push(
        cartItemId
      );
    }

  } else {

    selectedCartItemIds =
      selectedCartItemIds.filter(
        id => id !== cartItemId
      );
  }

  updateCartSummary();
}

function toggleSelectAll(
  masterCheckbox
) {

  if (masterCheckbox.checked) {

    selectedCartItemIds =
      cart.map(
        i => i.cartItemId
      );

  } else {

    selectedCartItemIds = [];
  }

  renderCart();
}

function removeFromCart(
  cartItemId
) {

  cart =
    cart.filter(
      item =>
        item.cartItemId !==
        cartItemId
    );

  selectedCartItemIds =
    selectedCartItemIds.filter(
      id =>
        id !== cartItemId
    );

  updateCartCount();
  renderCart();
}

function updateCartSummary() {

  const selectedItems =
    cart.filter(
      i =>
        selectedCartItemIds.includes(
          i.cartItemId
        )
    );

  let total = 0;
  let hasUnknownPrice = false;

  selectedItems.forEach(item => {

    const numericPrice =
      parseFloat(item.price);

    if (!isNaN(numericPrice)) {

      total += numericPrice;

    } else {

      hasUnknownPrice = true;
    }
  });

  const totalText =
    hasUnknownPrice
      ? `${total} DT + ***`
      : `${total} DT`;

  const totalPriceEl =
    document.getElementById(
      "cart-total-price"
    );

  if (totalPriceEl) {

    totalPriceEl.innerText =
      `Total: ${totalText}`;
  }

  const orderBtn =
    document.getElementById(
      "orderBtn"
    );

  if (orderBtn) {

    orderBtn.innerText =
      `Commander la sélection (${selectedItems.length})`;

    orderBtn.disabled =
      selectedItems.length === 0;
  }

  const selectAllCheck =
    document.getElementById(
      "selectAll"
    );

  if (selectAllCheck) {

    selectAllCheck.checked =
      cart.length > 0 &&
      selectedCartItemIds.length ===
      cart.length;
  }
}


/*********************** CHECKOUT + GPS ***********************/

function openCheckoutModal() {

  if (!currentUserEmail) {

    alert(
      "Veuillez d'abord vous connecter pour passer votre commande !"
    );

    openAuthModal("login");

    return;
  }

  const emailInput =
    document.getElementById(
      "orderEmail"
    );

  const nameInput =
    document.getElementById(
      "orderUserDisplayName"
    );

  if (emailInput) {
    emailInput.value =
      currentUserEmail;
  }

  if (nameInput) {
    nameInput.value =
      currentUserCleanName;
  }

  const modal =
    document.getElementById(
      "checkoutModal"
    );

  if (modal) {
    modal.classList.remove("hidden");
  }

  /*
   IMPORTANT iPhone:
   Bloquer le scroll de la page derrière le modal.
  */
  lockBodyScroll();

  /*
   Donner au navigateur un petit délai
   avant de calculer la taille de la carte.
  */
  setTimeout(() => {

    initMap();

    if (map) {
      map.invalidateSize(true);
    }

  }, 350);
}

function closeCheckoutModal() {

  const modal =
    document.getElementById(
      "checkoutModal"
    );

  if (modal) {
    modal.classList.add("hidden");
  }

  unlockBodyScroll();
}


/*********************** MAP ***********************/

function initMap() {

  const sfaxCoords =
    [34.74056, 10.76028];

  const mapElement =
    document.getElementById(
      "map"
    );

  if (!mapElement) {
    console.warn(
      "Map element #map introuvable."
    );
    return;
  }

  if (!window.L) {

    alert(
      "La carte n'est pas chargée. Vérifiez Leaflet dans votre HTML."
    );

    return;
  }

  /*
   Si la map existe déjà,
   on ne la recrée surtout pas.
  */
  if (!map) {

    try {

      map =
        L.map(
          mapElement,
          {
            zoomControl: true,
            attributionControl: true
          }
        ).setView(
          sfaxCoords,
          13
        );

    } catch (error) {

      console.error(
        "Erreur création Leaflet:",
        error
      );

      return;
    }

    L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution:
          "&copy; OpenStreetMap contributors",
        maxZoom: 19
      }
    ).addTo(map);

    map.on(
      "click",
      function(e) {

        setMapMarker(
          e.latlng.lat,
          e.latlng.lng
        );

      }
    );

    /*
     Empêcher certains gestes du navigateur
     de faire bouger toute la page pendant
     l'interaction avec la carte.
    */

    if (mapElement) {

      mapElement.style.touchAction =
        "none";

      mapElement.style.overscrollBehavior =
        "contain";
    }

  } else {

    /*
     IMPORTANT sur iPhone:
     Leaflet est parfois initialisée dans
     un élément caché. On force le recalcul.
    */

    setTimeout(() => {

      if (map) {
        map.invalidateSize(true);
      }

    }, 100);
  }
}

function setMapMarker(
  lat,
  lng
) {

  if (!map) return;

  if (
    typeof lat !== "number" ||
    typeof lng !== "number"
  ) {
    return;
  }

  if (marker) {

    marker.setLatLng([
      lat,
      lng
    ]);

  } else {

    marker =
      L.marker([
        lat,
        lng
      ]).addTo(map);
  }

  selectedCoords =
    `https://maps.google.com/?q=${lat},${lng}`;

  const locStatus =
    document.getElementById(
      "locationStatus"
    );

  if (locStatus) {

    locStatus.innerText =
      "📍 Position sélectionnée !";
  }
}


/*********************** GPS MOBILE FIX ***********************/

/*
  Fonction principale GPS.

  Cette version fonctionne avec:
  - iPhone / Safari
  - Android / Chrome
  - HTTPS
  - GPS précis
  - fallback si GPS précis échoue
  - permission refusée
  - GPS désactivé
  - timeout
*/

function detectGPS() {

  const locStatus =
    document.getElementById(
      "locationStatus"
    );

  /*
   1. Vérification HTTPS
  */

  if (
    !window.isSecureContext &&
    location.hostname !== "localhost" &&
    location.hostname !== "127.0.0.1"
  ) {

    if (locStatus) {

      locStatus.innerText =
        "❌ GPS: HTTPS obligatoire.";
    }

    alert(
      "📍 La localisation nécessite HTTPS.\n\n" +
      "Ouvre ton site avec https:// et non http://."
    );

    return;
  }

  /*
   2. Vérification navigateur
  */

  if (
    !navigator.geolocation
  ) {

    if (locStatus) {

      locStatus.innerText =
        "❌ GPS non supporté.";
    }

    alert(
      "La géolocalisation n'est pas supportée par ce navigateur."
    );

    return;
  }

  /*
   3. Status
  */

  if (locStatus) {

    locStatus.innerText =
      "⏳ Recherche de votre position...";
  }

  /*
   4. Préparer la map
  */

  if (!map) {
    initMap();
  }

  if (map) {

    setTimeout(() => {

      map.invalidateSize(true);

    }, 150);
  }

  /*
   5. Première tentative:
      GPS haute précision.
  */

  getGPSPositionHighAccuracy(
    function(position) {

      handleGPSPosition(
        position
      );

    },

    function(firstError) {

      console.warn(
        "GPS haute précision échoué:",
        firstError
      );

      /*
       6. FALLBACK ANDROID / MOBILE

       On réessaie sans haute précision.
       C'est très important sur certains Android.
      */

      if (locStatus) {

        locStatus.innerText =
          "⏳ Recherche de position alternative...";
      }

      getGPSPositionFallback(
        function(position) {

          handleGPSPosition(
            position
          );

        },

        function(secondError) {

          handleGPSError(
            secondError
          );
        }
      );
    }
  );
}


/*********************** GPS HIGH ACCURACY ***********************/

function getGPSPositionHighAccuracy(
  success,
  error
) {

  navigator.geolocation.getCurrentPosition(

    success,

    error,

    {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 10000
    }
  );
}


/*********************** GPS FALLBACK ***********************/

function getGPSPositionFallback(
  success,
  error
) {

  navigator.geolocation.getCurrentPosition(

    success,

    error,

    {
      enableHighAccuracy: false,
      timeout: 20000,
      maximumAge: 60000
    }
  );
}


/*********************** GPS SUCCESS ***********************/

function handleGPSPosition(
  position
) {

  if (!position) {
    return;
  }

  const lat =
    position.coords.latitude;

  const lng =
    position.coords.longitude;

  const accuracy =
    position.coords.accuracy;

  if (
    typeof lat !== "number" ||
    typeof lng !== "number"
  ) {

    const locStatus =
      document.getElementById(
        "locationStatus"
      );

    if (locStatus) {

      locStatus.innerText =
        "❌ Position invalide.";
    }

    return;
  }

  /*
   Recréer/initialiser la carte si nécessaire.
  */

  if (!map) {
    initMap();
  }

  /*
   Centrer la map.
  */

  if (map) {

    map.invalidateSize(true);

    map.setView(
      [lat, lng],
      17,
      {
        animate: true
      }
    );
  }

  /*
   Ajouter marker.
  */

  setMapMarker(
    lat,
    lng
  );

  /*
   Afficher résultat.
  */

  const locStatus =
    document.getElementById(
      "locationStatus"
    );

  if (locStatus) {

    if (
      typeof accuracy === "number" &&
      isFinite(accuracy)
    ) {

      locStatus.innerText =
        `📍 Position détectée ! Précision ±${Math.round(accuracy)}m`;

    } else {

      locStatus.innerText =
        "📍 Position détectée !";
    }
  }
}


/*********************** GPS ERROR ***********************/

function handleGPSError(
  error
) {

  console.error(
    "GPS FINAL ERROR:",
    error
  );

  const locStatus =
    document.getElementById(
      "locationStatus"
    );

  /*
   PERMISSION DENIED
  */

  if (
    error &&
    error.code === 1
  ) {

    if (locStatus) {

      locStatus.innerText =
        "❌ Autorisation GPS refusée.";
    }

    alert(
      "📍 L'accès à la localisation a été refusé.\n\n" +

      "Sur iPhone :\n" +
      "Réglages → Confidentialité et sécurité → Service de localisation → Safari → Autoriser.\n\n" +

      "Sur Android :\n" +
      "Paramètres → Applications → Chrome → Autorisations → Localisation → Autoriser.\n\n" +

      "Puis recharge la page et réessaie."
    );

    return;
  }

  /*
   POSITION UNAVAILABLE
  */

  if (
    error &&
    error.code === 2
  ) {

    if (locStatus) {

      locStatus.innerText =
        "⚠️ Position GPS indisponible.";
    }

    alert(
      "📍 Impossible de récupérer ta position.\n\n" +
      "Vérifie que la localisation du téléphone est activée, puis réessaie."
    );

    return;
  }

  /*
   TIMEOUT
  */

  if (
    error &&
    error.code === 3
  ) {

    if (locStatus) {

      locStatus.innerText =
        "⏱️ Recherche GPS trop longue.";
    }

    alert(
      "📍 Le GPS prend trop de temps.\n\n" +
      "Active la localisation du téléphone et réessaie.\n\n" +
      "Tu peux aussi sélectionner directement ta position sur la carte."
    );

    return;
  }

  /*
   UNKNOWN ERROR
  */

  if (locStatus) {

    locStatus.innerText =
      "❌ Erreur GPS.";
  }

  alert(
    "Une erreur est survenue avec la localisation.\n\n" +
    "Vérifie que la localisation est activée puis réessaie."
  );
}


/*********************** ORDER ***********************/

function prepareOrderSubmission(e) {

  if (e) {
    e.preventDefault();
  }

  if (!selectedCoords) {

    alert(
      "Veuillez sélectionner votre localisation sur la carte !"
    );

    return;
  }

  const selectedItems =
    cart.filter(
      i =>
        selectedCartItemIds.includes(
          i.cartItemId
        )
    );

  if (
    selectedItems.length === 0
  ) {

    alert(
      "Veuillez sélectionner au moins un article."
    );

    return;
  }

  const orderDetailsText =
    selectedItems
      .map(
        i =>
          `${i.name} (${i.price} DT)`
      )
      .join(", ");

  const totalPriceEl =
    document.getElementById(
      "cart-total-price"
    );

  const totalPriceText =
    totalPriceEl
      ? totalPriceEl.innerText
      : "";

  const formDetails =
    document.getElementById(
      "formOrderDetails"
    );

  const formTotal =
    document.getElementById(
      "formTotalPrice"
    );

  const formCoords =
    document.getElementById(
      "formLocationCoords"
    );

  if (formDetails) {

    formDetails.value =
      orderDetailsText;
  }

  if (formTotal) {

    formTotal.value =
      totalPriceText;
  }

  if (formCoords) {

    formCoords.value =
      selectedCoords;
  }

  const formElement =
    document.getElementById(
      "checkoutForm"
    );

  if (!formElement) {

    alert(
      "Erreur: formulaire de commande introuvable."
    );

    return;
  }

  const formData =
    new FormData(
      formElement
    );

  fetch(
    "https://formsubmit.co/ajax/fedybouaziz10@gmail.com",
    {
      method: "POST",
      body: formData
    }
  )
    .then(response =>
      response.json()
    )
    .then(data => {

      console.log(
        "Commande envoyée:",
        data
      );

    })
    .catch(error => {

      console.error(
        "Erreur:",
        error
      );

    });

  closeCheckoutModal();

  setRating(
    "post",
    5
  );

  const postModal =
    document.getElementById(
      "postOrderModal"
    );

  if (postModal) {

    postModal.classList.remove(
      "hidden"
    );
  }
}


/*********************** SEARCH ***********************/

function searchProduct() {

  const searchInput =
    document.getElementById(
      "search"
    );

  if (!searchInput) return;

  const value =
    searchInput.value
      .toLowerCase()
      .trim();

  const suggestions =
    document.getElementById(
      "suggestions"
    );

  if (suggestions) {

    suggestions.innerHTML =
      "";
  }

  const sections = [
    "home-section",
    "chiens-section",
    "chats-section",
    "oiseaux-section",
    "poissons-section"
  ];

  if (value === "") {

    displayAllCatalogs();

    sections.forEach(id => {

      const el =
        document.getElementById(
          id
        );

      if (el) {

        el.classList.remove(
          "hidden"
        );
      }

    });

    return;
  }

  const all =
    getAllItems();

  const filtered =
    all.filter(
      p =>
        p.name
          .toLowerCase()
          .includes(value)
    );

  sections.forEach(id => {

    const el =
      document.getElementById(
        id
      );

    if (el) {

      el.classList.remove(
        "hidden"
      );
    }

  });

  renderGrid(
    "products-dogs",
    filtered.filter(
      p =>
        dogProducts.some(
          dp => dp.id === p.id
        )
    ),
    false
  );

  renderGrid(
    "pets-dogs",
    filtered.filter(
      p =>
        dogPets.some(
          dp => dp.id === p.id
        )
    ),
    true
  );

  renderGrid(
    "products-cats",
    filtered.filter(
      p =>
        catProducts.some(
          cp => cp.id === p.id
        )
    ),
    false
  );

  renderGrid(
    "pets-cats",
    filtered.filter(
      p =>
        catPets.some(
          cp => cp.id === p.id
        )
    ),
    true
  );

  renderGrid(
    "products-birds",
    filtered.filter(
      p =>
        birdProducts.some(
          bp => bp.id === p.id
        )
    ),
    false
  );

  renderGrid(
    "pets-birds",
    filtered.filter(
      p =>
        birdPets.some(
          bp => bp.id === p.id
        )
    ),
    true
  );

  renderGrid(
    "products-fishes",
    filtered.filter(
      p =>
        fishProducts.some(
          fp => fp.id === p.id
        )
    ),
    false
  );

  renderGrid(
    "pets-fishes",
    filtered.filter(
      p =>
        fishPets.some(
          fp => fp.id === p.id
        )
    ),
    true
  );

  if (suggestions) {

    filtered.forEach(p => {

      const li =
        document.createElement(
          "li"
        );

      li.innerText =
        p.name;

      li.onclick = () => {

        showDetails(
          p.id
        );

        suggestions.innerHTML =
          "";

        searchInput.value =
          "";

        displayAllCatalogs();
      };

      suggestions.appendChild(
        li
      );
    });
  }
}


/*********************** INIT ***********************/

document.addEventListener(
  "DOMContentLoaded",
  () => {

    checkSavedUser();

    updateCartCount();

    updateFavoriteCount();

    displayAllCatalogs();

  }
);


/*********************** SAFETY / MOBILE ***********************/

/*
   إذا تبدلت orientation أو تبدلت
   حجم الشاشة، نصلح حجم Leaflet.
*/

window.addEventListener(
  "resize",
  () => {

    if (map) {

      setTimeout(() => {

        map.invalidateSize(true);

      }, 200);
    }
  }
);

window.addEventListener(
  "orientationchange",
  () => {

    if (map) {

      setTimeout(() => {

        map.invalidateSize(true);

      }, 500);
    }
  }
);


/*
   إذا الصفحة رجعت من background
   على الهاتف، نصلح الخريطة.
*/

document.addEventListener(
  "visibilitychange",
  () => {

    if (
      !document.hidden &&
      map
    ) {

      setTimeout(() => {

        map.invalidateSize(true);

      }, 300);
    }
  }
);


/*
   إذا المستخدم ضغط ESC
   نسكر Checkout ونرجع scroll.
*/

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape"
    ) {

      const checkoutModal =
        document.getElementById(
          "checkoutModal"
        );

      if (
        checkoutModal &&
        !checkoutModal.classList.contains(
          "hidden"
        )
      ) {

        closeCheckoutModal();
      }
    }
  }
);


/*********************** WINDOW BINDINGS ***********************/

window.goToShop =
  goToShop;

window.goHome =
  goHome;

window.openAboutModal =
  openAboutModal;

window.closeAboutModal =
  closeAboutModal;

window.openAuthModal =
  openAuthModal;

window.closeAuthModal =
  closeAuthModal;

window.logout =
  logout;

window.showDetails =
  showDetails;

window.addToCartById =
  addToCartById;

window.addToCartFromDetails =
  addToCartFromDetails;

window.openCartPage =
  openCartPage;

window.toggleItemSelection =
  toggleItemSelection;

window.toggleSelectAll =
  toggleSelectAll;

window.removeFromCart =
  removeFromCart;

window.openCheckoutModal =
  openCheckoutModal;

window.closeCheckoutModal =
  closeCheckoutModal;

window.detectGPS =
  detectGPS;

window.prepareOrderSubmission =
  prepareOrderSubmission;

window.searchProduct =
  searchProduct;

window.toggleFavorite =
  toggleFavorite;

window.openFavoritesPage =
  openFavoritesPage;

window.showHomeSection =
  showHomeSection;

window.showDogSection =
  showDogSection;

window.showCatSection =
  showCatSection;

window.showBirdSection =
  showBirdSection;

window.showFishSection =
  showFishSection;

window.scrollToSection =
  scrollToSection;

window.openFeedbackModal =
  openFeedbackModal;

window.closeFeedbackModal =
  closeFeedbackModal;

window.skipPostOrderRating =
  skipPostOrderRating;

window.finishPostOrderRating =
  finishPostOrderRating;

window.submitFeedback =
  submitFeedback;

window.handleAuthSubmit =
  handleAuthSubmit;

window.openEditModal =
  openEditModal;

window.closeEditModal =
  closeEditModal;

window.saveProductChanges =
  saveProductChanges;