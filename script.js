// State Management
let sneakers = [];
let cart = [];
let currentUser = null;
let selectedProduct = null;
let selectedSize = null;
let selectedColor = null;
let currentImageIndex = 0;
let wishlist = [];
let orders = [];
let filters = {
    categories: [],
    brands: [],
    priceRanges: []
};

const sneakersData = [
  {
    "id": 1,
    "name": "Air Max 270",
    "brand": "Nike",
    "category": "Running",
    "price": 150,
    "description": "The Nike Air Max 270 delivers visible cushioning under every step. The lifestyle shoe borrows design elements from the iconic Air Max 93 and Air Max 180, topped with the Air unit for everyday comfort.",
    "features": [
      "Max Air unit in heel provides cushioning",
      "Mesh upper with synthetic overlays for durability",
      "Foam midsole for lightweight comfort",
      "Rubber outsole for traction"
    ],
    "sizes": [39, 40, 41, 42, 43, 44, 45],
    "colors": [
      {
        "name": "Black/Red",
        "code": "#000000",
        "images": [
          "https://www.nike.com.kw/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dwacea2600/nk/c91/1/2/7/2/0/c9112720_1dcb_4247_ac54_583b9c82a4b6.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
          "https://www.nike.com.kw/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw8c97b3aa/nk/c8a/a/6/2/5/5/c8aa6255_9ebe_436e_be12_b2c1cc5393de.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
          "https://www.nike.com.kw/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw14068113/nk/7a1/f/f/a/2/b/7a1ffa2b_971b_45cb_a68f_8c71a728e5e8.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
          "https://www.nike.com.kw/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw28c89b99/nk/7c4/4/5/c/4/5/7c445c45_05af_4f99_90b2_d403e71a2c18.jpg?sw=700&sh=700&sm=fit&q=100&strip=false"
        ]
      },
      {
        "name": "White/Blue",
        "code": "#FFFFFF",
        "images": [
          "https://www.nike.com.kw/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw90e20664/nk/feb/3/9/c/7/5/feb39c75_3aa3_44a7_9ec2_d298f19f2d27.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
          "https://www.nike.com.kw/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dwa6e1d892/nk/5b1/4/3/f/5/b/5b143f5b_65df_49e2_989f_cbc156e53e6a.jpg?sw=700&sh=700&sm=fit&q=100&strip=false",
          "https://www.nike.com.kw/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw60487d11/nk/1bd/5/0/e/a/5/1bd50ea5_fed3_49d8_8b6c_d53fa46da3f5.jpg?sw=700&sh=700&sm=fit&q=100&strip=false"
        ]
      }
    ],
    "reviews": [
      {
        "user": "John Doe",
        "rating": 5,
        "comment": "Amazing comfort and style! Best running shoes I've ever owned.",
        "date": "2025-11-15"
      },
      {
        "user": "Sarah Smith",
        "rating": 4,
        "comment": "Great shoes, very comfortable. The Air Max cushioning is incredible.",
        "date": "2025-11-10"
      }
    ],
    "featured": true
  },
  {
    "id": 2,
    "name": "Jordan 1 Retro High",
    "brand": "Jordan",
    "category": "Basketball",
    "price": 170,
    "description": "The Air Jordan 1 Retro High remakes the classic sneaker, giving you a fresh look with iconic details. It features premium leather and breathable materials for lasting comfort.",
    "features": [
      "Premium leather upper for durability",
      "Air-Sole unit for cushioning",
      "Solid rubber outsole for grip",
      "Padded collar for comfort"
    ],
    "sizes": [39, 40, 41, 42, 43, 44, 45, 46],
    "colors": [
      {
        "name": "Chicago",
        "code": "#DC143C",
        "images": [
          "https://images.stockx.com/360/Air-Jordan-1-Retro-High-OG-Bred-Patent/Images/Air-Jordan-1-Retro-High-OG-Bred-Patent/Lv2/img01.jpg?w=576&q=57&dpr=2&updated_at=1634062853&h=384",
          ""
        ]
      },
      {
        "name": "Bred",
        "code": "#000000",
        "images": [
          "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800",
          "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800"
        ]
      }
    ],
    "reviews": [
      {
        "user": "Mike Johnson",
        "rating": 5,
        "comment": "Classic design that never goes out of style. Perfect fit!",
        "date": "2025-11-18"
      }
    ],
    "featured": true
  },
  {
    "id": 3,
    "name": "Ultraboost 22",
    "brand": "Adidas",
    "category": "Running",
    "price": 190,
    "description": "Made for runners by runners, Ultraboost 22 features responsive cushioning that adapts to your stride. The flexible knit upper provides a supportive, sock-like fit.",
    "features": [
      "Boost midsole for energy return",
      "Primeknit+ textile upper",
      "Torsion system for stability",
      "Continental rubber outsole"
    ],
    "sizes": [39, 40, 41, 42, 43, 44, 45],
    "colors": [
      {
        "name": "Core Black",
        "code": "#000000",
        "images": [
          "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800",
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"
        ]
      },
      {
        "name": "Solar Red",
        "code": "#DC143C",
        "images": [
          "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800",
          "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800"
        ]
      }
    ],
    "reviews": [
      {
        "user": "Emily Brown",
        "rating": 5,
        "comment": "The boost technology is incredible. So comfortable for long runs!",
        "date": "2025-11-12"
      }
    ],
    "featured": true
  },
  {
    "id": 4,
    "name": "Stan Smith",
    "brand": "Adidas",
    "category": "Casual",
    "price": 90,
    "description": "The iconic Stan Smith gets a modern update. Built with premium leather and featuring the signature perforated 3-Stripes and heel tab, this clean design is a timeless classic.",
    "features": [
      "Full grain leather upper",
      "OrthoLite sockliner for comfort",
      "Rubber cupsole",
      "Classic Stan Smith design"
    ],
    "sizes": [39, 40, 41, 42, 43, 44],
    "colors": [
      {
        "name": "White/Green",
        "code": "#FFFFFF",
        "images": [
          "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800",
          "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800"
        ]
      },
      {
        "name": "Triple White",
        "code": "#FFFFFF",
        "images": [
          "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=800",
          "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800"
        ]
      }
    ],
    "reviews": [],
    "featured": false
  },
  {
    "id": 5,
    "name": "990v5",
    "brand": "New Balance",
    "category": "Casual",
    "price": 185,
    "description": "The 990v5 is an icon of innovation and style. Made in USA, it features premium pigskin and mesh uppers, ENCAP midsole cushioning, and blown rubber outsole.",
    "features": [
      "Premium pigskin/mesh upper",
      "ENCAP midsole technology",
      "Blown rubber outsole",
      "Made in USA"
    ],
    "sizes": [39, 40, 41, 42, 43, 44, 45],
    "colors": [
      {
        "name": "Grey",
        "code": "#808080",
        "images": [
          "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800",
          "https://images.unsplash.com/photo-1561909848-977d0617f275?w=800"
        ]
      },
      {
        "name": "Navy",
        "code": "#000080",
        "images": [
          "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800",
          "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800"
        ]
      }
    ],
    "reviews": [
      {
        "user": "David Lee",
        "rating": 5,
        "comment": "Premium quality! Worth every penny. Very comfortable.",
        "date": "2025-11-08"
      }
    ],
    "featured": false
  },
  {
    "id": 6,
    "name": "Suede Classic",
    "brand": "Puma",
    "category": "Casual",
    "price": 75,
    "description": "First released in 1968, the Puma Suede Classic is an icon of hip-hop culture. Featuring premium suede and a classic low-top silhouette, it's a timeless favorite.",
    "features": [
      "Premium suede upper",
      "Rubber midsole",
      "Classic Formstrip branding",
      "Low-top silhouette"
    ],
    "sizes": [39, 40, 41, 42, 43, 44],
    "colors": [
      {
        "name": "Black/White",
        "code": "#000000",
        "images": [
          "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800",
          "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=800"
        ]
      },
      {
        "name": "Peacoat",
        "code": "#000080",
        "images": [
          "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800",
          "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800"
        ]
      }
    ],
    "reviews": [],
    "featured": false
  },
  {
    "id": 7,
    "name": "Metcon 8",
    "brand": "Nike",
    "category": "Training",
    "price": 150,
    "description": "Built for the grind, the Nike Metcon 8 is stable, durable, and flexible. It features a wide, flat heel for stability during squats and lifts, with flexible forefoot for sprints and rope climbs.",
    "features": [
      "Wide, flat heel for stability",
      "Flexible forefoot grooves",
      "Rubber tread wraps up sides",
      "Breathable mesh upper"
    ],
    "sizes": [39, 40, 41, 42, 43, 44, 45],
    "colors": [
      {
        "name": "Black/Crimson",
        "code": "#000000",
        "images": [
          "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800",
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"
        ]
      },
      {
        "name": "White/Red",
        "code": "#FFFFFF",
        "images": [
          "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=800",
          "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800"
        ]
      }
    ],
    "reviews": [
      {
        "user": "Chris Wilson",
        "rating": 4,
        "comment": "Great for CrossFit! Very stable and durable.",
        "date": "2025-11-05"
      }
    ],
    "featured": true
  },
  {
    "id": 8,
    "name": "Free Metcon 4",
    "brand": "Nike",
    "category": "Training",
    "price": 120,
    "description": "The Nike Free Metcon 4 is designed for runners who lift and lifters who run. It combines the flexibility of Nike Free with the stability of Metcon for versatile workouts.",
    "features": [
      "Flexible Nike Free sole",
      "Flat, wide heel for stability",
      "Rope wrap on medial toe",
      "Lightweight and breathable"
    ],
    "sizes": [39, 40, 41, 42, 43, 44],
    "colors": [
      {
        "name": "Black/Grey",
        "code": "#000000",
        "images": [
          "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800",
          "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=800"
        ]
      },
      {
        "name": "Wolf Grey",
        "code": "#808080",
        "images": [
          "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800",
          "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800"
        ]
      }
    ],
    "reviews": [],
    "featured": false
  },
  {
    "id": 9,
    "name": "LeBron XX",
    "brand": "Nike",
    "category": "Basketball",
    "price": 200,
    "description": "The LeBron XX is the latest signature shoe for basketball's all-time leading scorer. Featuring Zoom Air cushioning and a 360-degree cable system for lockdown support.",
    "features": [
      "Zoom Air cushioning",
      "360-degree cable system",
      "Lightweight Battleknit 2.0 upper",
      "Data-informed design"
    ],
    "sizes": [40, 41, 42, 43, 44, 45, 46],
    "colors": [
      {
        "name": "Lakers",
        "code": "#552583",
        "images": [
          "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800",
          "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800"
        ]
      },
      {
        "name": "Miami Nights",
        "code": "#DC143C",
        "images": [
          "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800",
          "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800"
        ]
      }
    ],
    "reviews": [
      {
        "user": "James Carter",
        "rating": 5,
        "comment": "Best basketball shoes ever! Amazing support and cushioning.",
        "date": "2025-11-20"
      }
    ],
    "featured": true
  },
  {
    "id": 10,
    "name": "Kyrie Infinity",
    "brand": "Nike",
    "category": "Basketball",
    "price": 130,
    "description": "The Kyrie Infinity is designed for quick, shifty players. It features Zoom Air cushioning in the forefoot and a curved outsole for enhanced court feel and grip.",
    "features": [
      "Zoom Air in forefoot",
      "Curved outsole for grip",
      "360 traction pattern",
      "Lightweight mesh upper"
    ],
    "sizes": [39, 40, 41, 42, 43, 44, 45],
    "colors": [
      {
        "name": "Black/Gold",
        "code": "#000000",
        "images": [
          "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800",
          "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800"
        ]
      },
      {
        "name": "White/Blue",
        "code": "#FFFFFF",
        "images": [
          "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=800",
          "https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=800"
        ]
      }
    ],
    "reviews": [],
    "featured": false
  },
  {
    "id": 11,
    "name": "Pegasus 40",
    "brand": "Nike",
    "category": "Running",
    "price": 140,
    "description": "The Nike Pegasus 40 is a versatile road running shoe with responsive cushioning. Perfect for everyday training, tempo runs, and race day.",
    "features": [
      "ReactX foam midsole",
      "Nike Air Zoom unit",
      "Waffle outsole pattern",
      "Breathable mesh upper"
    ],
    "sizes": [39, 40, 41, 42, 43, 44, 45],
    "colors": [
      {
        "name": "Black/White",
        "code": "#000000",
        "images": [
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
          "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800"
        ]
      },
      {
        "name": "Volt",
        "code": "#DFFF00",
        "images": [
          "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800",
          "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=800"
        ]
      }
    ],
    "reviews": [
      {
        "user": "Lisa Martinez",
        "rating": 4,
        "comment": "Very comfortable for daily runs. Great cushioning!",
        "date": "2025-11-14"
      }
    ],
    "featured": false
  },
  {
    "id": 12,
    "name": "Harden Vol. 7",
    "brand": "Adidas",
    "category": "Basketball",
    "price": 160,
    "description": "The adidas Harden Vol. 7 is built for explosive moves and quick changes of direction. Features Boost cushioning and a rubber outsole designed for optimal traction.",
    "features": [
      "Boost midsole cushioning",
      "Textile upper",
      "Torsion system",
      "High-traction rubber outsole"
    ],
    "sizes": [40, 41, 42, 43, 44, 45],
    "colors": [
      {
        "name": "Core Black",
        "code": "#000000",
        "images": [
          "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800",
          "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800"
        ]
      },
      {
        "name": "Team Red",
        "code": "#DC143C",
        "images": [
          "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800",
          "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800"
        ]
      }
    ],
    "reviews": [],
    "featured": false
  }
];
// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    loadSneakers();
    loadCart();
    loadUser();
    loadWishlist();
    loadOrders();
    loadOrders();
    setupEventListeners();
});

// Load Sneakers Data
function loadSneakers() {
    try {
        sneakers = sneakersData;
        renderShopProducts();
    } catch (error) {
        console.error('Error loading sneakers:', error);
    }
}

// Setup Event Listeners
function setupEventListeners() {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Mobile Filter Toggle
    const mobileFilterToggle = document.getElementById('mobileFilterToggle');
    const shopSidebar = document.getElementById('shopSidebar');
    const closeSidebar = document.getElementById('closeSidebar');
    
    if (mobileFilterToggle) {
        mobileFilterToggle.addEventListener('click', () => {
            shopSidebar.classList.add('active');
        });
    }
    
    if (closeSidebar) {
        closeSidebar.addEventListener('click', () => {
            shopSidebar.classList.remove('active');
        });
    }

     // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        // Allow normal navigation
        if (!link.dataset.page) return;

        e.preventDefault();

        const routes = {
            home: 'index.html',
            shop: 'shop.html',
            about: 'about.html',
            contact: 'feedback.html',
            account: 'account.html'
        };

        const page = link.dataset.page;
        if (routes[page]) {
            window.location.href = routes[page];
        }
    });;

    // Cart Button
    document.getElementById('cartBtn').addEventListener('click', openCart);

    // User Button
    document.getElementById('userBtn').addEventListener('click', toggleUserMenu);

    // Filters
    document.querySelectorAll('input[name="category"]').forEach(input => {
        input.addEventListener('change', handleFilterChange);
    });

    document.querySelectorAll('input[name="brand"]').forEach(input => {
        input.addEventListener('change', handleFilterChange);
    });

    document.querySelectorAll('input[name="price"]').forEach(input => {
        input.addEventListener('change', handleFilterChange);
    });

    // Clear Filters
    const clearFiltersBtn = document.getElementById('clearFilters');
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearFilters);
    }

    // Sort
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', handleSort);
    }

    // FAQ
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            faqItem.classList.toggle('active');
        });
    });

    // Star Rating
    document.querySelectorAll('#starRating i').forEach(star => {
        star.addEventListener('click', handleStarRating);
    });

    // Feedback Form
    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', handleFeedbackSubmit);
    }

    // Newsletter Form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }

    // Checkout Form
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', handleCheckout);
    }

    // Payment Method Change
    const cardPayment = document.getElementById('cardPayment');
    if (cardPayment) {
        cardPayment.addEventListener('change', toggleCardDetails);
    }
    
    document.querySelectorAll('input[name="payment"]').forEach(input => {
        input.addEventListener('change', toggleCardDetails);
    });

    // Card Number Formatting
    const cardNumber = document.getElementById('cardNumber');
    if (cardNumber) {
        cardNumber.addEventListener('input', formatCardNumber);
    }

    // Card Expiry Formatting
    const cardExpiry = document.getElementById('cardExpiry');
    if (cardExpiry) {
        cardExpiry.addEventListener('input', formatCardExpiry);
    }

    // Card CVV Validation
    const cardCVV = document.getElementById('cardCVV');
    if (cardCVV) {
        cardCVV.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '');
        });
    }

    // Review Form
    const reviewForm = document.getElementById('reviewForm');
    if (reviewForm) {
        reviewForm.addEventListener('submit', handleReviewSubmit);
    }

    // Review Stars
    document.querySelectorAll('#reviewStars i').forEach(star => {
        star.addEventListener('click', (e) => {
            const rating = parseInt(e.target.dataset.rating);
            const stars = document.querySelectorAll('#reviewStars i');
            stars.forEach((s, index) => {
                if (index < rating) {
                    s.classList.remove('far');
                    s.classList.add('fas', 'active');
                } else {
                    s.classList.remove('fas', 'active');
                    s.classList.add('far');
                }
            });
        });
    });

    // Close popups on overlay click
    document.querySelectorAll('.popup-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('active');
            }
        });
    });

    // Footer Navigation
    document.querySelectorAll('.footer a[data-page]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.target.dataset.page;
            navigateToPage(page);
        });
    });
}

function navigateToPage(page) {
  
    window.location.href = page + '.html';
}

function navigateToShop() {
    window.location.href = 'shop.html';
}

function filterByCategory(category) {
 
    localStorage.setItem('selectedCategory', category);

    window.location.href = 'shop.html';
}


// Update Category Counts
function updateCategoryCounts() {
    const counts = {
        Running: 0,
        Basketball: 0,
        Casual: 0,
        Training: 0
    };

    sneakers.forEach(sneaker => {
        if (counts.hasOwnProperty(sneaker.category)) {
            counts[sneaker.category]++;
        }
    });

    const runningEl = document.getElementById('runningCount');
    const basketballEl = document.getElementById('basketballCount');
    const casualEl = document.getElementById('casualCount');
    const trainingEl = document.getElementById('trainingCount');
    
    if (runningEl) runningEl.textContent = `${counts.Running} Products`;
    if (basketballEl) basketballEl.textContent = `${counts.Basketball} Products`;
    if (casualEl) casualEl.textContent = `${counts.Casual} Products`;
    if (trainingEl) trainingEl.textContent = `${counts.Training} Products`;
}

// Render Featured Products
function renderFeaturedProducts() {
    const featuredGrid = document.getElementById('featuredGrid');
    if (!featuredGrid) return;
    
    const featured = sneakers.filter(s => s.featured).slice(0, 6);

    featuredGrid.innerHTML = featured.map(sneaker => `
        <div class="product-card" onclick="openProductPopup(${sneaker.id})">
            <div class="product-image">
                <img src="${sneaker.colors[0].images[0]}" alt="${sneaker.name}">
                <button class="quick-view-btn" onclick="event.stopPropagation(); openProductPopup(${sneaker.id})">
                    QUICK VIEW
                </button>
            </div>
            <div class="product-details">
                <div class="product-brand">${sneaker.brand}</div>
                <div class="product-name">${sneaker.name}</div>
                <div class="product-category">${sneaker.category}</div>
                <div class="product-price">$${sneaker.price}</div>
            </div>
        </div>
    `).join('');
}

// Render Shop Products
function renderShopProducts() {
    const productGrid = document.getElementById('productGrid');
    if (!productGrid) return;
    
    let filtered = [...sneakers];

    // Apply filters
    if (filters.categories.length > 0) {
        filtered = filtered.filter(s => filters.categories.includes(s.category));
    }

    if (filters.brands.length > 0) {
        filtered = filtered.filter(s => filters.brands.includes(s.brand));
    }

    if (filters.priceRanges.length > 0) {
        filtered = filtered.filter(s => {
            return filters.priceRanges.some(range => {
                const [min, max] = range.split('-').map(Number);
                return s.price >= min && s.price <= max;
            });
        });
    }

    // Apply sort
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        const sortValue = sortSelect.value;
        if (sortValue === 'price-low') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortValue === 'price-high') {
            filtered.sort((a, b) => b.price - a.price);
        } else if (sortValue === 'name') {
            filtered.sort((a, b) => a.name.localeCompare(b.name));
        }
    }

    const productCount = document.getElementById('productCount');
    if (productCount) {
        productCount.textContent = `${filtered.length} Products`;
    }

    productGrid.innerHTML = filtered.map(sneaker => `
        <div class="product-card" onclick="openProductPopup(${sneaker.id})">
            <div class="product-image">
                <img src="${sneaker.colors[0].images[0]}" alt="${sneaker.name}">
                <button class="quick-view-btn" onclick="event.stopPropagation(); openProductPopup(${sneaker.id})">
                    QUICK VIEW
                </button>
            </div>
            <div class="product-details">
                <div class="product-brand">${sneaker.brand}</div>
                <div class="product-name">${sneaker.name}</div>
                <div class="product-category">${sneaker.category}</div>
                <div class="product-price">$${sneaker.price}</div>
            </div>
        </div>
    `).join('');
}

// Filter Handlers
function handleFilterChange(e) {
    const filterType = e.target.name;
    const value = e.target.value;
    const checked = e.target.checked;

    if (filterType === 'category') {
        if (checked) {
            filters.categories.push(value);
        } else {
            filters.categories = filters.categories.filter(c => c !== value);
        }
    } else if (filterType === 'brand') {
        if (checked) {
            filters.brands.push(value);
        } else {
            filters.brands = filters.brands.filter(b => b !== value);
        }
    } else if (filterType === 'price') {
        if (checked) {
            filters.priceRanges.push(value);
        } else {
            filters.priceRanges = filters.priceRanges.filter(p => p !== value);
        }
    }

    renderShopProducts();
}

function clearFilters() {
    filters = {
        categories: [],
        brands: [],
        priceRanges: []
    };

    document.querySelectorAll('input[type="checkbox"]').forEach(input => {
        input.checked = false;
    });

    renderShopProducts();
}

function handleSort() {
    renderShopProducts();
}

// Product Popup
function openProductPopup(id) {
    const product = sneakers.find(s => s.id === id);
    if (!product) return;

    selectedProduct = product;
    selectedColor = product.colors[0];
    selectedSize = null;
    currentImageIndex = 0;

    // Set product details
    document.getElementById('productName').textContent = product.name;
    document.getElementById('productBrand').textContent = product.brand;
    document.getElementById('productPrice').textContent = `$${product.price}`;
    document.getElementById('productDescription').textContent = product.description;

    // Set main image and indicators
    updateProductImage();

    // Set sizes
    const sizesHtml = product.sizes.map(size => `
        <div class="size-option" onclick="selectSize(${size}, this)">${size}</div>
    `).join('');
    document.getElementById('sizeOptions').innerHTML = sizesHtml;

    // Hide size error
    document.getElementById('sizeError').classList.remove('active');

    // Set colors
    const colorsHtml = product.colors.map((color, index) => `
        <div class="color-option ${index === 0 ? 'active' : ''}" 
             style="background-color: ${color.code}" 
             onclick="selectColor(${index}, this)"
             title="${color.name}"></div>
    `).join('');
    document.getElementById('colorOptions').innerHTML = colorsHtml;

    // Set features
    const featuresHtml = product.features.map(feature => `
        <li>${feature}</li>
    `).join('');
    document.getElementById('productFeatures').innerHTML = featuresHtml;

    // Update wishlist button
    updateWishlistButton(product.id);

    // Render reviews
    renderReviews();

    // Show popup
    document.getElementById('productPopup').classList.add('active');
}

function closeProductPopup() {
    document.getElementById('productPopup').classList.remove('active');
    selectedProduct = null;
    selectedSize = null;
    selectedColor = null;
    currentImageIndex = 0;
}

function updateProductImage() {
    const mainImage = document.getElementById('productMainImage');
    const images = selectedColor.images;
    
    mainImage.style.opacity = '0';
    setTimeout(() => {
        mainImage.src = images[currentImageIndex];
        mainImage.style.opacity = '1';
    }, 150);

    // Update indicators
    const indicatorsHtml = images.map((_, index) => `
        <div class="indicator ${index === currentImageIndex ? 'active' : ''}" 
             onclick="goToImage(${index})"></div>
    `).join('');
    document.getElementById('imageIndicators').innerHTML = indicatorsHtml;
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % selectedColor.images.length;
    updateProductImage();
}

function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + selectedColor.images.length) % selectedColor.images.length;
    updateProductImage();
}

function goToImage(index) {
    currentImageIndex = index;
    updateProductImage();
}

function selectSize(size, element) {
    selectedSize = size;
    document.querySelectorAll('.size-option').forEach(opt => {
        opt.classList.remove('active');
    });
    element.classList.add('active');
    document.getElementById('sizeError').classList.remove('active');
}

function selectColor(index, element) {
    selectedColor = selectedProduct.colors[index];
    currentImageIndex = 0;
    
    // Update image
    updateProductImage();
    
    // Update active color
    document.querySelectorAll('.color-option').forEach(opt => {
        opt.classList.remove('active');
    });
    element.classList.add('active');
}

function addToCartFromPopup() {
    if (!selectedSize) {
        document.getElementById('sizeError').classList.add('active');
        return;
    }

    const cartItem = {
        id: `${selectedProduct.id}-${selectedColor.name}-${selectedSize}`,
        productId: selectedProduct.id,
        name: selectedProduct.name,
        brand: selectedProduct.brand,
        price: selectedProduct.price,
        size: selectedSize,
        color: selectedColor.name,
        image: selectedColor.images[0],
        quantity: 1
    };

    // Check if item already exists
    const existingItem = cart.find(item => item.id === cartItem.id);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push(cartItem);
    }

    saveCart();
    updateCartBadge();
    closeProductPopup();
    
    // Open cart instead of alert
    setTimeout(() => {
        openCart();
    }, 200);
}

// Reviews
function renderReviews() {
    const reviewsContainer = document.getElementById('reviewsContainer');
    if (!reviewsContainer) return;
    
    const reviews = selectedProduct.reviews || [];
    
    if (reviews.length === 0) {
        reviewsContainer.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">No reviews yet. Be the first to review!</p>';
        return;
    }

    reviewsContainer.innerHTML = reviews.map(review => `
        <div class="review-item">
            <div class="review-header">
                <div class="review-user">${review.user}</div>
                <div class="review-rating">${generateStars(review.rating)}</div>
            </div>
            <div class="review-date">${formatDate(review.date)}</div>
            <div class="review-comment">${review.comment}</div>
        </div>
    `).join('');
}

function handleReviewSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const userName = form.querySelector('input[type="text"]').value;
    const comment = form.querySelector('textarea').value;
    const stars = document.querySelectorAll('#reviewStars i.active');
    const rating = stars.length;
    
    if (rating === 0) {
        alert('Please select a rating');
        return;
    }
    
    // Add review to product
    if (!selectedProduct.reviews) {
        selectedProduct.reviews = [];
    }
    
    selectedProduct.reviews.unshift({
        user: userName,
        rating: rating,
        comment: comment,
        date: new Date().toISOString().split('T')[0]
    });
    
    // Re-render reviews
    renderReviews();
    
    // Reset form
    form.reset();
    document.querySelectorAll('#reviewStars i').forEach(star => {
        star.classList.remove('fas', 'active');
        star.classList.add('far');
    });
    
    alert('Thank you for your review!');
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Cart Functions
function openCart() {
    renderCart();
    document.getElementById('cartPopup').classList.add('active');
}

function closeCart() {
    document.getElementById('cartPopup').classList.remove('active');
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; padding: 2rem; color: #666;">Your cart is empty</p>';
        updateCartSummary();
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-details">Size: ${item.size} | Color: ${item.color}</div>
                <div class="cart-item-price">$${item.price}</div>
            </div>
            <div class="cart-item-controls">
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity('${item.id}', -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
                </div>
                <button class="remove-btn" onclick="removeFromCart('${item.id}')">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');

    updateCartSummary();
}

function updateQuantity(itemId, change) {
    const item = cart.find(i => i.id === itemId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            saveCart();
            renderCart();
            updateCartBadge();
        }
    }
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCart();
    renderCart();
    updateCartBadge();
}

function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal >= 100 ? 0 : 10;
    const total = subtotal + shipping;

    document.getElementById('cartSubtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('cartShipping').textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    document.getElementById('cartTotal').textContent = `$${total.toFixed(2)}`;
}

function updateCartBadge() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartBadge').textContent = totalItems;
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartBadge();
    }
}

// Checkout Functions
function proceedToCheckout() {
    if (!currentUser) {
        closeCart();
        openAuth();
        return;
    }

    if (cart.length === 0) {
        return;
    }

    closeCart();
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal >= 100 ? 0 : 10;
    const total = subtotal + shipping;

    document.getElementById('checkoutSubtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('checkoutShipping').textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    document.getElementById('checkoutTotal').textContent = `$${total.toFixed(2)}`;

    document.getElementById('checkoutPopup').classList.add('active');
}

function closeCheckout() {
    document.getElementById('checkoutPopup').classList.remove('active');
}

function toggleCardDetails() {
    const cardPayment = document.getElementById('cardPayment');
    const cardDetails = document.getElementById('cardDetails');
    
    if (cardPayment && cardDetails) {
        if (cardPayment.checked) {
            cardDetails.classList.add('active');
        } else {
            cardDetails.classList.remove('active');
        }
    }
}

function formatCardNumber(e) {
    let value = e.target.value.replace(/\s/g, '');
    value = value.replace(/\D/g, '');
    value = value.substring(0, 16);
    
    const formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
    e.target.value = formattedValue;
}

function formatCardExpiry(e) {
    let value = e.target.value.replace(/\D/g, '');
    
    if (value.length >= 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    
    e.target.value = value;
}

function handleCheckout(e) {
    e.preventDefault();
    
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    
    if (paymentMethod === 'card') {
        const cardNumber = document.getElementById('cardNumber').value.replace(/\s/g, '');
        const cardExpiry = document.getElementById('cardExpiry').value;
        const cardCVV = document.getElementById('cardCVV').value;
        
        if (cardNumber.length !== 16) {
            alert('Please enter a valid card number');
            return;
        }
        
        if (cardExpiry.length !== 5) {
            alert('Please enter a valid expiry date');
            return;
        }
        
        if (cardCVV.length !== 3) {
            alert('Please enter a valid CVV');
            return;
        }
    }
    
    // Process order
    alert('Order placed successfully! Thank you for your purchase.');
    
    // Add order to history
    addOrder({
        items: cart,
        total: parseFloat(document.getElementById('checkoutTotal').textContent.replace('$', '')),
        paymentMethod: paymentMethod
    });
    
    // Clear cart
    cart = [];
    saveCart();
    updateCartBadge();
    
    closeCheckout();
    navigateToPage('home');
}

// Authentication Functions
function openAuth() {
    document.getElementById('authPopup').classList.add('active');
    showLoginForm();
}

function closeAuth() {
    document.getElementById('authPopup').classList.remove('active');
    const loginError = document.getElementById('loginError');
    const signupError = document.getElementById('signupError');
    if (loginError) loginError.classList.remove('active');
    if (signupError) signupError.classList.remove('active');
}

function showLoginForm() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
}

function showSignupForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
}

function switchToLogin() {
    showLoginForm();
}

function switchToSignup() {
    showSignupForm();
}

function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const button = input.nextElementSibling;
    const icon = button.querySelector('i');
    
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.replace('fa-eye-slash', 'fa-eye');
    }
}

function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Find user
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        updateUserUI();
        closeAuth();
    } else {
        const errorDiv = document.getElementById('loginError');
        errorDiv.textContent = 'Invalid email or password';
        errorDiv.classList.add('active');
    }
}

function handleSignup(e) {
    e.preventDefault();
    
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;
    
    const errorDiv = document.getElementById('signupError');
    
    if (password !== confirmPassword) {
        errorDiv.textContent = 'Passwords do not match';
        errorDiv.classList.add('active');
        return;
    }
    
    if (password.length < 6) {
        errorDiv.textContent = 'Password must be at least 6 characters';
        errorDiv.classList.add('active');
        return;
    }
    
    // Get existing users
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Check if email already exists
    if (users.find(u => u.email === email)) {
        errorDiv.textContent = 'Email already registered';
        errorDiv.classList.add('active');
        return;
    }
    
    // Create new user
    const newUser = {
        id: Date.now(),
        name,
        email,
        password
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Login user
    currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    updateUserUI();
    closeAuth();
    
    alert('Account created successfully!');
}

function loadUser() {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateUserUI();
    }
}

function updateUserUI() {
    const userName = document.getElementById('userName');
    const profileInfo = document.getElementById('profileInfo');
    const logoutBtn = document.getElementById('logoutBtn');
    
    if (currentUser) {
        if (userName) userName.textContent = currentUser.name;
        
        if (profileInfo) {
            profileInfo.innerHTML = `
                <p style="margin-bottom: 0.8rem;"><strong>Name:</strong> ${currentUser.name}</p>
                <p style="margin-bottom: 0.8rem;"><strong>Email:</strong> ${currentUser.email}</p>
                <p style="color: #00ff00;"><i class="fas fa-check-circle"></i> Logged In</p>
            `;
        }
        
        if (logoutBtn) {
            logoutBtn.style.display = 'block';
        }
    } else {
        if (profileInfo) {
            profileInfo.innerHTML = '<p class="login-prompt">Please login to view your profile</p>';
        }
        
        if (logoutBtn) {
            logoutBtn.style.display = 'none';
        }
    }
}

function toggleUserMenu() {
    if (!currentUser) {
        openAuth();
    } else {
        const userMenu = document.getElementById('userMenu');
        userMenu.classList.toggle('active');
    }
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    document.getElementById('userMenu').classList.remove('active');
    updateUserUI();
    navigateToPage('home');
}

// Newsletter
function handleNewsletterSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const email = form.querySelector('input[type="email"]').value;
    
    // Hide form and show success
    form.style.display = 'none';
    document.getElementById('newsletterSuccess').classList.add('active');
    
    // Reset after 3 seconds
    setTimeout(() => {
        form.style.display = 'flex';
        form.reset();
        document.getElementById('newsletterSuccess').classList.remove('active');
    }, 3000);
}

// FAQ Functions
function handleStarRating(e) {
    const rating = parseInt(e.target.dataset.rating);
    const stars = document.querySelectorAll('#starRating i');
    
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.remove('far');
            star.classList.add('fas', 'active');
        } else {
            star.classList.remove('fas', 'active');
            star.classList.add('far');
        }
    });
}

function handleFeedbackSubmit(e) {
    e.preventDefault();
    
    // Hide form and show success message
    document.getElementById('feedbackForm').style.display = 'none';
    document.getElementById('feedbackSuccess').classList.add('active');
    
    // Reset form after 3 seconds
    setTimeout(() => {
        document.getElementById('feedbackForm').style.display = 'flex';
        document.getElementById('feedbackForm').reset();
        document.getElementById('feedbackSuccess').classList.remove('active');
        
        // Reset stars
        document.querySelectorAll('#starRating i').forEach(star => {
            star.classList.remove('fas', 'active');
            star.classList.add('far');
        });
    }, 3000);
}

// Helper Functions
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let html = '';
    
    for (let i = 0; i < fullStars; i++) {
        html += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        html += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        html += '<i class="far fa-star"></i>';
    }
    
    return html;
}

// Close user menu when clicking outside
document.addEventListener('click', (e) => {
    const userMenu = document.getElementById('userMenu');
    const userBtn = document.getElementById('userBtn');
    
    if (userMenu && userBtn && !userMenu.contains(e.target) && !userBtn.contains(e.target)) {
        userMenu.classList.remove('active');
    }
    
    // Close mobile menu when clicking outside
    const navMenu = document.getElementById('navMenu');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    
    if (navMenu && mobileMenuToggle && !navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

// Wishlist Functions
function loadWishlist() {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
        wishlist = JSON.parse(savedWishlist);
    }
    renderWishlist();
}

function saveWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

function toggleWishlist(productId) {
    const index = wishlist.findIndex(id => id === productId);
    
    if (index > -1) {
        wishlist.splice(index, 1);
    } else {
        wishlist.push(productId);
    }
    
    saveWishlist();
    renderWishlist();
    updateWishlistButton(productId);
}

function updateWishlistButton(productId) {
    const btn = document.getElementById('wishlistBtn');
    if (btn) {
        const isInWishlist = wishlist.includes(productId);
        const icon = btn.querySelector('i');
        if (icon) {
            if (isInWishlist) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                btn.classList.add('active');
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                btn.classList.remove('active');
            }
        }
    }
}

function renderWishlist() {
    const wishlistContainer = document.querySelector('.account-card:has(.fa-heart) .account-card-body');
    if (!wishlistContainer) return;
    
    if (wishlist.length === 0) {
        wishlistContainer.innerHTML = '<p class=\"no-orders\">Your wishlist is empty</p>';
        return;
    }
    
    const wishlistProducts = sneakers.filter(s => wishlist.includes(s.id));
    
    wishlistContainer.innerHTML = `
        <div class=\"wishlist-grid\">
            ${wishlistProducts.map(product => `
                <div class=\"wishlist-item\">
                    <img src=\"${product.colors[0].images[0]}\" alt=\"${product.name}\" onclick=\"openProductPopup(${product.id})\">
                    <div class=\"wishlist-item-info\">
                        <div class=\"wishlist-item-brand\">${product.brand}</div>
                        <div class=\"wishlist-item-name\">${product.name}</div>
                        <div class=\"wishlist-item-price\">$${product.price}</div>
                        <div class=\"wishlist-item-actions\">
                            <button class=\"wishlist-action-btn\" onclick=\"openProductPopup(${product.id})\">
                                <i class=\"fas fa-eye\"></i> View
                            </button>
                            <button class=\"wishlist-action-btn danger\" onclick=\"removeFromWishlist(${product.id})\">
                                <i class=\"fas fa-trash\"></i> Remove
                            </button>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function removeFromWishlist(productId) {
    wishlist = wishlist.filter(id => id !== productId);
    saveWishlist();
    renderWishlist();
}

// Order History Functions
function loadOrders() {
    const savedOrders = localStorage.getItem('orders');
    if (savedOrders) {
        orders = JSON.parse(savedOrders);
    }
    renderOrderHistory();
}

function saveOrders() {
    localStorage.setItem('orders', JSON.stringify(orders));
}

function addOrder(orderData) {
    const order = {
        id: `ORD-${Date.now()}`,
        date: new Date().toISOString(),
        items: orderData.items,
        total: orderData.total,
        status: 'Processing',
        paymentMethod: orderData.paymentMethod
    };
    
    orders.unshift(order);
    saveOrders();
    renderOrderHistory();
}

function renderOrderHistory() {
    const orderContainer = document.querySelector('.account-card:has(.fa-shopping-bag) .account-card-body');
    if (!orderContainer) return;
    
    if (orders.length === 0) {
        orderContainer.innerHTML = '<p class=\"no-orders\">No orders yet</p>';
        return;
    }
    
    orderContainer.innerHTML = `
        <div class=\"orders-list\">
            ${orders.map(order => `
                <div class=\"order-item\">
                    <div class=\"order-header\">
                        <div class=\"order-id\">
                            <strong>Order #${order.id}</strong>
                            <span class=\"order-status status-${order.status.toLowerCase()}\">${order.status}</span>\n                        </div>
                        <div class=\"order-date\">${formatDate(order.date.split('T')[0])}</div>
                    </div>
                    <div class=\"order-items\">
                        ${order.items.map(item => `
                            <div class=\"order-product\">
                                <img src=\"${item.image}\" alt=\"${item.name}\">
                                <div class=\"order-product-info\">
                                    <div class=\"order-product-name\">${item.name}</div>
                                    <div class=\"order-product-details\">Size: ${item.size} | Color: ${item.color} | Qty: ${item.quantity}</div>
                                </div>
                                <div class=\"order-product-price\">$${(item.price * item.quantity).toFixed(2)}</div>
                            </div>
                        `).join('')}
                    </div>
                    <div class=\"order-total\">
                        <strong>Total:</strong> $${order.total.toFixed(2)}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Gift Code Functions
let appliedDiscount = 0;
const giftCodes = {
    'WELCOME10': 0.10,
    'SAVE20': 0.20,
    'VIP30': 0.30
};

function applyGiftCode() {
    const codeInput = document.getElementById('giftCode');
    const code = codeInput.value.toUpperCase().trim();
    
    if (!code) {
        return;
    }
    
    if (giftCodes[code]) {
        appliedDiscount = giftCodes[code];
        updateCheckoutSummary();
        
        // Visual feedback
        codeInput.style.borderColor = '#00ff00';
        codeInput.value = '';
        codeInput.placeholder = `Code "${code}" applied!`;
        
        setTimeout(() => {
            codeInput.style.borderColor = '';
            codeInput.placeholder = 'Enter Gift Code';
        }, 3000);
    } else {
        // Invalid code feedback
        codeInput.style.borderColor = '#ff0000';
        
        setTimeout(() => {
            codeInput.style.borderColor = '';
        }, 2000);
    }
}

function updateCheckoutSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discount = subtotal * appliedDiscount;
    const discountedSubtotal = subtotal - discount;
    const shipping = discountedSubtotal >= 100 ? 0 : 10;
    const total = discountedSubtotal + shipping;
    
    document.getElementById('checkoutSubtotal').textContent = `$${subtotal.toFixed(2)}`;
    
    const discountRow = document.getElementById('discountRow');
    const discountSpan = document.getElementById('checkoutDiscount');
    if (appliedDiscount > 0) {
        discountRow.style.display = 'flex';
        discountSpan.textContent = `-$${discount.toFixed(2)}`;
    } else {
        discountRow.style.display = 'none';
    }
    
    document.getElementById('checkoutShipping').textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    document.getElementById('checkoutTotal').textContent = `$${total.toFixed(2)}`;

}
