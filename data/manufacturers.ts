export type Manufacturer = {
  name: string;
  role: string;
  bio: string;
  image?: string;
  website?: string;
};

/** URL slug for a manufacturer name (e.g. "Aston Martin" -> "aston-martin"). */
export function manufacturerSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}

/** Index in MANUFACTURERS for a given slug, or 0 if not found. */
export function getIndexBySlug(slug: string | null): number {
  if (!slug) return 0;
  const index = MANUFACTURERS.findIndex(
    (m) => manufacturerSlug(m.name) === slug.toLowerCase()
  );
  return index >= 0 ? index : 0;
}

export const MANUFACTURERS: Manufacturer[] = [
  {
    name: "Volkswagen",
    role: "Germany",
    bio: "Volkswagen is one of the world's leading carmakers and the largest in Europe. Founded in 1937, the brand is known for the Beetle, Golf, and Polo, and has grown into a global group including Audi and Porsche. The brand emphasizes engineering, reliability, and broad appeal across mass-market and premium segments.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg",
    website: "https://www.volkswagen.com",
  },
  {
    name: "Audi",
    role: "Germany",
    bio: "Audi is a German luxury automotive manufacturer known for 'Vorsprung durch Technik' (Advancement through Technology). Part of the Volkswagen Group, Audi produces premium sedans, SUVs, and sportbacks, with a strong focus on quattro all-wheel drive, design, and innovation in lighting and digital interiors.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg",
    website: "https://www.audi.com",
  },
  {
    name: "Porsche",
    role: "Germany",
    bio: "Porsche is a German sports and luxury car manufacturer founded in 1931. Famous for the 911, Cayenne, and Taycan, Porsche combines performance, craftsmanship, and motorsport heritage. The brand is part of the Volkswagen Group and is synonymous with precision engineering and driving excellence.",
    image: "/porsche.svg",
    website: "https://www.porsche.com",
  },
  {
    name: "Jaguar",
    role: "UK",
    bio: "Jaguar is a British luxury car brand known for elegant design and dynamic performance. Founded in 1935, it has produced iconic models such as the E-Type and XJ. Now under JLR (Jaguar Land Rover), Jaguar focuses on sedans and SUVs that blend refinement with sporty character.",
    image: "/jaguar.svg",
    website: "https://www.jaguar.com",
  },
  {
    name: "Land Rover",
    role: "UK",
    bio: "Land Rover is a British brand specializing in premium off-road and luxury SUVs. Since 1948 it has been synonymous with capability and adventure, from the original Series to the Range Rover, Defender, and Discovery. Part of JLR, Land Rover combines ruggedness with luxury and advanced technology.",
    image: "/landrover.svg",
    website: "https://www.landrover.com",
  },
  {
    name: "Aston Martin",
    role: "UK",
    bio: "Aston Martin is a British luxury and high-performance car manufacturer with a rich heritage in motorsport and film. Known for the DB series and the Vantage, Aston Martin builds handcrafted sports cars and grand tourers that blend power, style, and exclusivity.",
    image: "/aston-martin.svg",
    website: "https://www.astonmartin.com",
  },
  {
    name: "Ferrari",
    role: "Italy",
    bio: "Ferrari is an Italian luxury sports car manufacturer and one of the most iconic brands in automotive history. Founded by Enzo Ferrari, the company is celebrated for Formula 1 success and road cars that deliver extreme performance, sound, and design. Ferrari represents the pinnacle of Italian automotive passion.",
    image: "/ferrari.svg",
    website: "https://www.ferrari.com",
  },
  {
    name: "Maserati",
    role: "Italy",
    bio: "Maserati is an Italian luxury car manufacturer known for performance, style, and a distinctive engine note. Part of Stellantis, Maserati produces the Gran Turismo, Ghibli, Quattroporte, Levante, and MC20, combining Italian flair with grand touring comfort and sporting character.",
    image: "/maserati.png",
    website: "https://www.maserati.com",
  },
  {
    name: "Renault",
    role: "France",
    bio: "Renault is a French multinational vehicle manufacturer with a history dating back to 1899. Known for innovation and accessible design, Renault produces cars from the compact Clio to the electric Mégane E-Tech and the Alpine sports brand. It is a key player in the Renault-Nissan-Mitsubishi alliance.",
    image: "/renault.svg",
    website: "https://www.renault.com",
  },
  {
    name: "Peugeot",
    role: "France",
    bio: "Peugeot is a French car brand and one of the oldest in the world, established in 1810. Part of Stellantis, Peugeot is known for the 208, 308, 3008, and 508, combining sharp design with efficient engines and competitive value. The brand emphasizes style, comfort, and everyday usability.",
    image: "/peugeot.png",
    website: "https://www.peugeot.com",
  },
];
