// ============================================================
// data.js  –  All static application data for CareForCat
// ============================================================

const CREDENTIALS = {
  owner:  { users: ['minhanh', 'owner'],   pass: '123' },
  seller: { users: ['thanhha', 'seller'],  pass: '123' },
  expert: { users: ['drlan',   'expert'],  pass: '123' }
};

const USERS = {
  owner:  { name:'Minh Anh',       email:'owner@careforcat.com',  role:'Cat Owner',    icon:'🧑‍🦰', avatarClass:'avatar-owner',  phone:'+1 (555) 012-3456', address:'Hanoi, Vietnam',            joinDate:'January 2025',  cats:2 },
  seller: { name:'Thanh Ha Shop',  email:'seller@careforcat.com', role:'Seller',       icon:'🛍️',   avatarClass:'avatar-seller', phone:'+1 (555) 098-7654', address:'Ho Chi Minh City, Vietnam', joinDate:'March 2024',    products:17 },
  expert: { name:'Dr. Lan Phuong', email:'expert@careforcat.com', role:'Veterinarian', icon:'👩‍⚕️', avatarClass:'avatar-expert', phone:'+1 (555) 076-5432', address:'Hanoi, Vietnam',            joinDate:'June 2023',     consultations:203 }
};

const NAV_CONFIG = {
  owner:  [
    { id:'home',           label:'Home',      icon:'🏠' },
    { id:'mycats',         label:'My Cats',   icon:'🐱' },
    { id:'shop',           label:'Shop',      icon:'🛒' },
    { id:'consult',        label:'Consult',   icon:'👩‍⚕️' },
    { id:'forum',          label:'Community', icon:'💬' },
    { id:'profile',        label:'Profile',   icon:'👤' }
  ],
  seller: [
    { id:'home',            label:'Home',      icon:'🏠' },
    { id:'manage-products', label:'Products',  icon:'📦' },
    { id:'manage-orders',   label:'Orders',    icon:'🧾' },
    { id:'shop',            label:'My Store',  icon:'🏪' },
    { id:'forum',           label:'Community', icon:'💬' },
    { id:'profile',         label:'Profile',   icon:'👤' }
  ],
  expert: [
    { id:'home',     label:'Home',      icon:'🏠' },
    { id:'schedule', label:'Schedule',  icon:'📅' },
    { id:'articles', label:'Articles',  icon:'✍️' },
    { id:'forum',    label:'Community', icon:'💬' },
    { id:'profile',  label:'Profile',   icon:'👤' }
  ]
};

const NOTIFICATIONS = {
  owner:  [
    '🐱 Mochi is due for vaccination on Mar 10',
    '🛒 Order #1024 is being processed',
    '👩‍⚕️ Dr. Lan Phuong answered your question',
    '💬 Your post has 5 new comments'
  ],
  seller: [
    '📦 3 new orders need to be processed',
    '⭐ You received a new 5-star review',
    '🔔 "Premium Toy Set" is running out of stock',
    '💬 A customer sent you a message'
  ],
  expert: [
    '📅 New consultation from Minh Anh at 2:00 PM',
    '💬 3 new questions in the community',
    '❤️ Your article received 87 likes',
    '⭐ 5-star rating from Thu Phuong'
  ]
};

const HOME_DATA = {
  owner: {
    greeting: 'Welcome back, Cat Owner!',
    title:    'Mochi and Butter are\nwaiting for your care today 🐱',
    desc:     'Track health, shop for supplies, and connect with the cat lover community.',
    stats: [
      { icon:'🐱', num:'2',      label:'Cats in your care' },
      { icon:'📅', num:'Mar 10', label:'Next vaccination' },
      { icon:'🛒', num:'1',      label:'Order in transit' }
    ],
    cards: [
      { img:'🏥', bg:'card-img-blue',       tag:'Health',   tagClass:'tag-health', title:'Mochi Needs a Vaccination',    desc:'Rabies & 3-in-1 vaccine due on March 10',       btn:'Book Now'  },
      { img:'🛒', bg:'card-img-terracotta', tag:'Shopping', tagClass:'tag-food',   title:'Royal Canin On Sale Today',    desc:'20% off dry cat food — limited time offer',     btn:'Shop Now'  },
      { img:'💬', bg:'card-img-sand',       tag:'Community',tagClass:'tag-care',   title:'New Answer to Your Question',  desc:'Dr. Lan Phuong replied about Mochi\'s sneezing', btn:'Read Now'  }
    ]
  },
  seller: {
    greeting: 'Welcome back, Seller!',
    title:    'You have 3 new orders\nwaiting to be processed 📦',
    desc:     'Manage your products, track orders, and engage with your customers.',
    stats: [
      { icon:'📦', num:'17',    label:'Active products' },
      { icon:'🧾', num:'3',     label:'New orders' },
      { icon:'💰', num:'$4,200',label:'Revenue this month' }
    ],
    cards: [
      { img:'⚠️', bg:'card-img-rose',  tag:'Alert',     tagClass:'tag-care',    title:'Premium Toy Set Out of Stock',  desc:'0 units remaining — restock immediately',           btn:'Restock' },
      { img:'⭐', bg:'card-img-green', tag:'Review',    tagClass:'tag-health',  title:'New 5-Star Rating Received',    desc:'"Great quality product, fast shipping!"',            btn:'View'    },
      { img:'📊', bg:'card-img-blue',  tag:'Analytics', tagClass:'tag-consult', title:'March Revenue Up 15%',          desc:'Strong growth compared to February 2026',            btn:'Details' }
    ]
  },
  expert: {
    greeting: 'Welcome back, Doctor!',
    title:    'You have 2 consultations\nscheduled for today 👩‍⚕️',
    desc:     'Track appointments, publish expert articles, and support the cat community.',
    stats: [
      { icon:'📅', num:'2',   label:"Today's appointments" },
      { icon:'✍️', num:'3',   label:'Articles published' },
      { icon:'⭐', num:'4.9', label:'Average rating' }
    ],
    cards: [
      { img:'🎥', bg:'card-img-blue',  tag:'Consultation', tagClass:'tag-consult', title:'Online Session at 2:00 PM',       desc:'Minh Anh — Cat: Mochi — Sneezing & runny nose',         btn:'Join'     },
      { img:'💬', bg:'card-img-sand',  tag:'Community',    tagClass:'tag-care',    title:'3 Questions Awaiting Reply',      desc:'The community is looking for expert guidance',           btn:'View Now' },
      { img:'📈', bg:'card-img-green', tag:'Analytics',    tagClass:'tag-health',  title:'Article Reached 412 Reads',       desc:'"How to Give Your Cat Medicine" is trending',            btn:'Details'  }
    ]
  }
};

const MODAL_CONTENT = {
  addCat: `
    <h3>Add a New Cat 🐱</h3>
    <div class="form-group"><label>Cat Name</label><input placeholder="e.g. Mochi, Butter, Cream..."></div>
    <div class="form-group"><label>Breed</label><input placeholder="e.g. British Shorthair, Ragdoll..."></div>
    <div class="form-group"><label>Age (years)</label><input type="number" placeholder="Age in years"></div>
    <div class="form-group"><label>Weight (kg)</label><input type="number" placeholder="e.g. 4.2"></div>
    <div class="form-group"><label>Gender</label><select><option>Male</option><option>Female</option></select></div>
    <button class="form-submit">Add Cat ✓</button>`,

  askQuestion: `
    <h3>Ask an Expert ✏️</h3>
    <div class="form-group"><label>Topic</label><input placeholder="Briefly describe your concern..."></div>
    <div class="form-group"><label>Details</label><textarea placeholder="Describe your cat's symptoms or situation in detail..."></textarea></div>
    <div class="form-group"><label>Choose Expert</label><select><option>Dr. Lan Phuong</option><option>Dr. Minh Tri</option><option>Dr. Thu Hien</option></select></div>
    <button class="form-submit">Send Question →</button>`,

  newPost: `
    <h3>Create a New Post ✍️</h3>
    <div class="form-group"><label>Title</label><input placeholder="Post title..."></div>
    <div class="form-group"><label>Content</label><textarea placeholder="Share your story, experience, or question..." style="min-height:120px"></textarea></div>
    <div class="form-group"><label>Category</label><select><option>Q&A</option><option>Share Experience</option><option>Product Review</option></select></div>
    <button class="form-submit">Publish Post →</button>`,

  addProduct: `
    <h3>Add New Product 📦</h3>
    <div class="form-group"><label>Product Name</label><input placeholder="Product name..."></div>
    <div class="form-group"><label>Category</label><select><option>Food</option><option>Accessories</option><option>Toys</option><option>Hygiene</option><option>Medicine & Vitamins</option></select></div>
    <div class="form-group"><label>Price ($)</label><input type="number" placeholder="e.g. 14.99"></div>
    <div class="form-group"><label>Stock Quantity</label><input type="number" placeholder="e.g. 50"></div>
    <div class="form-group"><label>Description</label><textarea placeholder="Describe the product..."></textarea></div>
    <button class="form-submit">List Product →</button>`,

  setSchedule: `
    <h3>Add Availability 📅</h3>
    <div class="form-group"><label>Date</label><input type="date"></div>
    <div class="form-group"><label>Start Time</label><input type="time"></div>
    <div class="form-group"><label>Duration</label><select><option>30 minutes</option><option>45 minutes</option><option>1 hour</option></select></div>
    <div class="form-group"><label>Consultation Type</label><select><option>🎥 Online (Zoom / Google Meet)</option><option>🏥 In-person at clinic</option></select></div>
    <button class="form-submit">Save Slot ✓</button>`,

  newArticle: `
    <h3>Write a New Article ✍️</h3>
    <div class="form-group"><label>Title</label><input placeholder="Article title..."></div>
    <div class="form-group"><label>Category</label><select><option>Health</option><option>Nutrition</option><option>Treatment</option><option>Behavior</option><option>Prevention</option></select></div>
    <div class="form-group"><label>Summary</label><input placeholder="Brief description of the article..."></div>
    <div class="form-group"><label>Content</label><textarea placeholder="Write your expert article..." style="min-height:120px"></textarea></div>
    <button class="form-submit">Publish Article →</button>`
};
