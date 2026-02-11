// Product data generator - 500 sample products inspired by open source e-commerce datasets

export interface Product {
    id: number;
    title: string;
    vendor: string;
    category: string;
    price: number;
    compareAtPrice: number | null;
    description: string;
    image: string;
    tags: string[];
    sku: string;
    inStock: boolean;
    rating: number;
    reviewCount: number;
    createdAt: string;
}

const categories = [
    'Electronics', 'Clothing', 'Home & Garden', 'Sports', 'Books',
    'Toys', 'Beauty', 'Automotive', 'Health', 'Food & Beverage',
    'Jewelry', 'Office Supplies', 'Pet Supplies', 'Music', 'Art'
];

const vendors = [
    'TechVault', 'StyleCraft', 'HomeNest', 'ProGear', 'PageTurner',
    'PlayZone', 'GlowUp', 'AutoParts Pro', 'VitalLife', 'TasteBud',
    'SparkleBox', 'DeskMate', 'PawPal', 'SoundWave', 'ArtisanHub',
    'NovaTech', 'UrbanThread', 'CozyCorner', 'FitPro', 'MindBooks'
];

const adjectives = [
    'Premium', 'Classic', 'Ultra', 'Pro', 'Essential', 'Deluxe',
    'Vintage', 'Modern', 'Compact', 'Advanced', 'Eco-Friendly',
    'Wireless', 'Smart', 'Portable', 'Organic', 'Handcrafted',
    'Limited Edition', 'Professional', 'Lightweight', 'Heavy-Duty'
];

const electronicsItems = [
    'Bluetooth Speaker', 'Wireless Earbuds', 'USB-C Hub', 'Mechanical Keyboard',
    'Gaming Mouse', 'Webcam', 'Monitor Stand', 'Laptop Sleeve', 'Power Bank',
    'Smart Watch', 'Tablet Stand', 'LED Desk Lamp', 'Phone Case', 'Charger',
    'HDMI Cable', 'Screen Protector', 'Mouse Pad', 'Ring Light', 'Microphone', 'SSD Drive'
];

const clothingItems = [
    'T-Shirt', 'Hoodie', 'Denim Jacket', 'Sneakers', 'Cap',
    'Joggers', 'Polo Shirt', 'Cardigan', 'Beanie', 'Scarf',
    'Socks Pack', 'Belt', 'Sunglasses', 'Backpack', 'Watch',
    'Flannel Shirt', 'Chinos', 'Vest', 'Windbreaker', 'Shorts'
];

const homeItems = [
    'Throw Pillow', 'Candle Set', 'Wall Art', 'Plant Pot', 'Blanket',
    'Mug Set', 'Cutting Board', 'Storage Basket', 'Coaster Set', 'Vase',
    'Picture Frame', 'Doormat', 'Table Runner', 'Spice Rack', 'Towel Set',
    'Clock', 'Bookend', 'Tray', 'Napkin Holder', 'Planter'
];

const allItems: Record<string, string[]> = {
    'Electronics': electronicsItems,
    'Clothing': clothingItems,
    'Home & Garden': homeItems,
    'Sports': ['Yoga Mat', 'Resistance Bands', 'Water Bottle', 'Jump Rope', 'Foam Roller', 'Grip Gloves', 'Sweatband', 'Gym Bag', 'Knee Sleeve', 'Ab Wheel', 'Pull-Up Bar', 'Ankle Weights', 'Sports Tape', 'Swim Goggles', 'Tennis Balls', 'Boxing Gloves', 'Skipping Rope', 'Dumbbell Set', 'Fitness Tracker', 'Compression Socks'],
    'Books': ['Sci-Fi Novel', 'Cookbook', 'Self-Help Guide', 'History Book', 'Art Book', 'Poetry Collection', 'Travel Guide', 'Biography', 'Children\'s Book', 'Comic Book', 'Mystery Novel', 'Fantasy Epic', 'Business Book', 'Science Book', 'Philosophy Text', 'Language Guide', 'Graphic Novel', 'Journal', 'Planner', 'Coloring Book'],
    'Toys': ['Building Blocks', 'Puzzle Set', 'Action Figure', 'Board Game', 'Stuffed Animal', 'RC Car', 'Card Game', 'Science Kit', 'Dollhouse', 'Craft Kit', 'Slime Kit', 'Magic Set', 'Robot Kit', 'Train Set', 'Kite', 'Nerf Gun', 'Bubble Machine', 'Play Dough', 'Marble Run', 'Telescope'],
    'Beauty': ['Face Serum', 'Lip Balm', 'Hair Oil', 'Face Mask', 'Moisturizer', 'Eye Cream', 'Sunscreen', 'Body Lotion', 'Perfume', 'Nail Polish', 'Shampoo', 'Conditioner', 'Makeup Brush Set', 'Foundation', 'Mascara', 'Cleanser', 'Toner', 'Exfoliator', 'Hand Cream', 'Bath Bomb'],
    'Automotive': ['Car Charger', 'Dash Cam', 'Seat Cover', 'Air Freshener', 'Phone Mount', 'Floor Mat', 'Trunk Organizer', 'Ice Scraper', 'Tire Gauge', 'Jump Starter', 'Car Vacuum', 'Sun Shade', 'Steering Wheel Cover', 'Car Wash Kit', 'LED Headlight', 'Wiper Blade', 'Oil Filter', 'Brake Pad', 'Spark Plug', 'Battery'],
    'Health': ['Vitamin Pack', 'First Aid Kit', 'Thermometer', 'Blood Pressure Monitor', 'Massage Gun', 'Heating Pad', 'Humidifier', 'Essential Oil', 'Protein Powder', 'Omega-3 Capsules', 'Probiotics', 'Collagen Powder', 'Zinc Tablets', 'Iron Supplement', 'Melatonin', 'Electrolyte Mix', 'Compression Sleeve', 'Ice Pack', 'Pill Organizer', 'Scale'],
    'Food & Beverage': ['Coffee Beans', 'Tea Collection', 'Honey Jar', 'Olive Oil', 'Spice Set', 'Chocolate Box', 'Granola', 'Hot Sauce', 'Protein Bar', 'Dried Fruit', 'Nut Mix', 'Pasta Set', 'Jam Collection', 'Matcha Powder', 'Coconut Water', 'Energy Drink', 'Snack Box', 'Popcorn Pack', 'Beef Jerky', 'Trail Mix'],
    'Jewelry': ['Silver Necklace', 'Gold Ring', 'Bracelet', 'Earring Set', 'Pendant', 'Anklet', 'Brooch', 'Cufflinks', 'Charm', 'Chain', 'Bangle', 'Stud Earrings', 'Hoop Earrings', 'Signet Ring', 'Choker', 'Locket', 'Tiara', 'Hair Pin', 'Body Chain', 'Toe Ring'],
    'Office Supplies': ['Notebook', 'Pen Set', 'Desk Organizer', 'Sticky Notes', 'Stapler', 'Paper Clips', 'Highlighters', 'Whiteboard', 'File Folder', 'Tape Dispenser', 'Scissors', 'Ruler', 'Calculator', 'Binder', 'Envelope Pack', 'Label Maker', 'Stamp Set', 'Push Pins', 'Correction Tape', 'Paper Shredder'],
    'Pet Supplies': ['Dog Food', 'Cat Toy', 'Pet Bed', 'Leash', 'Collar', 'Food Bowl', 'Pet Shampoo', 'Grooming Brush', 'Cat Tree', 'Bird Feeder', 'Fish Tank Filter', 'Pet Carrier', 'Dog Treat', 'Catnip', 'Hamster Wheel', 'Aquarium Plant', 'Pet Blanket', 'Flea Collar', 'Pet Tag', 'Litter Box'],
    'Music': ['Guitar Strings', 'Drum Sticks', 'Music Stand', 'Tuner', 'Capo', 'Pick Set', 'Strap', 'Metronome', 'Sheet Music', 'Headphones', 'Audio Cable', 'Microphone', 'Pop Filter', 'Boom Arm', 'MIDI Controller', 'Synthesizer Patch', 'Vinyl Record', 'CD Case', 'Speaker Cable', 'Amp'],
    'Art': ['Sketchbook', 'Paint Set', 'Brush Kit', 'Canvas', 'Pencil Set', 'Marker Pack', 'Palette', 'Easel', 'Charcoal Set', 'Ink Set', 'Watercolor Paper', 'Clay Kit', 'Carving Tools', 'Stencil Set', 'Color Wheel', 'Drawing Tablet', 'Calligraphy Set', 'Pastel Set', 'Fixative Spray', 'Art Portfolio'],
};

const tags: Record<string, string[]> = {
    'Electronics': ['tech', 'gadgets', 'digital', 'wireless', 'USB'],
    'Clothing': ['fashion', 'apparel', 'streetwear', 'casual', 'unisex'],
    'Home & Garden': ['decor', 'kitchen', 'living room', 'garden', 'cozy'],
    'Sports': ['fitness', 'workout', 'outdoor', 'training', 'gym'],
    'Books': ['reading', 'literature', 'education', 'bestseller', 'paperback'],
    'Toys': ['kids', 'games', 'fun', 'educational', 'creative'],
    'Beauty': ['skincare', 'cosmetics', 'self-care', 'organic', 'vegan'],
    'Automotive': ['car', 'accessories', 'maintenance', 'travel', 'safety'],
    'Health': ['wellness', 'supplements', 'medical', 'natural', 'fitness'],
    'Food & Beverage': ['organic', 'gourmet', 'snacks', 'drinks', 'artisan'],
    'Jewelry': ['accessories', 'luxury', 'handmade', 'sterling', 'fashion'],
    'Office Supplies': ['stationery', 'desk', 'organization', 'school', 'work'],
    'Pet Supplies': ['dogs', 'cats', 'pets', 'grooming', 'food'],
    'Music': ['instruments', 'audio', 'recording', 'accessories', 'performance'],
    'Art': ['supplies', 'creative', 'drawing', 'painting', 'crafts'],
};

const imageColors = ['3b82f6', '10b981', 'f59e0b', 'ef4444', '8b5cf6', 'ec4899', '06b6d4', 'f97316', '84cc16', '6366f1'];

function seededRandom(seed: number): () => number {
    let s = seed;
    return () => {
        s = (s * 1103515245 + 12345) & 0x7fffffff;
        return s / 0x7fffffff;
    };
}

function generateProducts(): Product[] {
    const products: Product[] = [];
    const rng = seededRandom(42);

    for (let i = 1; i <= 500; i++) {
        const categoryIndex = Math.floor(rng() * categories.length);
        const category = categories[categoryIndex];
        const items = allItems[category];
        const item = items[Math.floor(rng() * items.length)];
        const adj = adjectives[Math.floor(rng() * adjectives.length)];
        const vendor = vendors[Math.floor(rng() * vendors.length)];
        const price = Math.round((rng() * 200 + 5) * 100) / 100;
        const hasComparePrice = rng() > 0.6;
        const rating = Math.round((3 + rng() * 2) * 10) / 10;
        const colorIdx = Math.floor(rng() * imageColors.length);

        const productTags = tags[category];
        const selectedTags = productTags.filter(() => rng() > 0.5).slice(0, 3);
        if (selectedTags.length === 0) selectedTags.push(productTags[0]);

        const dayOffset = Math.floor(rng() * 730);
        const date = new Date(2024, 0, 1);
        date.setDate(date.getDate() - dayOffset);

        products.push({
            id: i,
            title: `${adj} ${item}`,
            vendor,
            category,
            price,
            compareAtPrice: hasComparePrice ? Math.round((price * (1.2 + rng() * 0.5)) * 100) / 100 : null,
            description: `High-quality ${adj.toLowerCase()} ${item.toLowerCase()} from ${vendor}. Perfect for everyday use. Features premium materials and thoughtful design. This ${category.toLowerCase()} product has been carefully crafted to meet the highest standards of quality and performance.`,
            image: `https://placehold.co/400x400/${imageColors[colorIdx]}/ffffff?text=${encodeURIComponent(item.split(' ')[0])}`,
            tags: selectedTags,
            sku: `SKU-${category.substring(0, 3).toUpperCase()}-${String(i).padStart(4, '0')}`,
            inStock: rng() > 0.15,
            rating,
            reviewCount: Math.floor(rng() * 500),
            createdAt: date.toISOString(),
        });
    }

    return products;
}

export const products = generateProducts();

export function getProductById(id: number): Product | undefined {
    return products.find(p => p.id === id);
}

export function getCategories(): string[] {
    return categories;
}

export function getVendors(): string[] {
    return vendors;
}
