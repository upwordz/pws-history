import { db } from "./db";
import { timelineEntries, videos } from "@shared/schema";

async function seedDatabase() {
  console.log("Seeding database with initial data...");

  try {
    // Clear existing data
    await db.delete(timelineEntries);
    await db.delete(videos);

    // Insert timeline entries
    const timelineData = [
      {
        year: 1932,
        title: "Pre-History: Air Reduction Company",
        description: "Mac MacDonald and Joe Martin Sr. start as welders at Air Reduction Co.",
        details: "Clarey Mac Donald (Mac) & Joe Martin Sr. were welders at the Lawley Shipyards in Neponset Mass. Bill Barron, a salesman for Air Reduction Co., recruited them to work for his company in South Boston. Mac was offered a sales position covering all northern New England, while Dorothy Cook (who later married Mac) started as a sales mechanic clerk.",
        tags: ["pre-history", "air-reduction", "sales"],
        featured: false,
      },
      {
        year: 1940,
        title: "New England Shipbuilding Corp",
        description: "Mac takes management position building liberty ships during WWII",
        details: "Mac left Airco to take a management position in South Portland at The New England Shipbuilding Corp. building liberty ships. By the war's end, Roy became a lead foreman with 8 men working for him, while Mac became superintendent of the West Yard with 2,000 men working for him.",
        tags: ["shipyard", "wwii", "management"],
        featured: false,
      },
      {
        year: 1945,
        title: "Company Founded",
        description: "Portland Welding Supply established with $50 in war bonds",
        details: "During summer 1945, Joe Martin convinced Clarey to start his own welding repair and supply business. Clarey sold Roy on the idea and in August, Air Reduction Co agreed to give them the hardgoods distribution business. Each contributed $25 in savings bonds and received 35 shares of stock. They started in the Hazen O. Hagar building on Forest Avenue - a cold, dark, damp space.",
        tags: ["founding", "forest-avenue", "hagar-building"],
        featured: true,
      },
      {
        year: 1947,
        title: "First Employee Hired",
        description: "Frank Tirabassi becomes first part-time employee",
        details: "Frank Tirabassi was hired part-time to do repairs while working as a Portland Police Patrolman. After tough years on Forest Ave, they purchased a government surplus 20' x 36' Quonset hut and erected it on land at 11 Main Street, South Portland, rented from Ken Burr for the cost of taxes.",
        tags: ["first-employee", "quonset-hut", "growth"],
        featured: false,
      },
      {
        year: 1948,
        title: "Jim Whidden Joins & Retail Gas Business",
        description: "Critical hire and expansion into retail gas distribution",
        details: "Jim Whidden appeared looking for work just as PWS needed a driver. Starting at $7 a day, he quickly proved his worth and was offered $50 a week. Airco also gave Mac & Roy the retail gas business, previously handled by Bailey Auto Supply. They purchased their first GMC truck and Jim became their key employee for over 35 years.",
        tags: ["key-hire", "jim-whidden", "gas-business", "first-truck"],
        featured: true,
      },
      {
        year: 1952,
        title: "Veterans Memorial Bridge Announced",
        description: "Bridge construction creates opportunity for relocation",
        details: "The Veterans Memorial Bridge was announced to be completed in 1954, and the old Vaughan Street Bridge connecting South Portland to Portland was to be torn down. This infrastructure change would create the opportunity for PWS to find a better location.",
        tags: ["infrastructure", "bridge", "opportunity"],
        featured: false,
      },
      {
        year: 1954,
        title: "Move to Danforth Street",
        description: "Purchase former Esso station for permanent headquarters",
        details: "The Esso gas station on the Portland side of the bridge went out of business. Standard Oil sold the property to the MacDonald brothers on June 20, 1954. Jim Whidden's quick thinking prevented a construction disaster when he noticed the dock was being built at ground level instead of above ground level, saving the project from a major design flaw.",
        tags: ["expansion", "danforth-street", "esso-station", "permanent-location"],
        featured: true,
      },
      {
        year: 1955,
        title: "First Major Remodel",
        description: "Danforth Street building gets showroom, offices, and warehouse",
        details: "In early 1955, the Danforth St building underwent the first of several remodels, adding a showroom, cylinder room, office, shop & warehouse. The expansion reflected the growing success of the business and the need for proper facilities to serve their expanding customer base.",
        tags: ["remodel", "showroom", "expansion", "facilities"],
        featured: false,
      }
    ];

    await db.insert(timelineEntries).values(timelineData);

    // Insert video data
    const videoData = [
      {
        title: "Company Overview (1970s)",
        description: "Historical commercial showcasing PWS services and equipment from the 1970s era",
        youtubeId: "dQw4w9WgXcQ", // Placeholder - would be replaced with actual PWS video IDs
        thumbnailUrl: null,
        duration: "3:45",
        era: "1970s Era",
        category: "commercial",
        featured: true,
      },
      {
        title: "Welding Techniques Demo",
        description: "Technical demonstration of professional welding methods and best practices",
        youtubeId: "2Vv-BfVoq4g", // Placeholder
        thumbnailUrl: null,
        duration: "8:20",
        era: "Educational",
        category: "educational",
        featured: false,
      },
      {
        title: "Facility Tour (1980s)",
        description: "Behind-the-scenes look at PWS operations, equipment, and facilities in the 1980s",
        youtubeId: "9bZkp7q19f0", // Placeholder
        thumbnailUrl: null,
        duration: "5:15",
        era: "1980s Era",
        category: "tour",
        featured: false,
      },
      {
        title: "Safety Training Video",
        description: "Industrial safety practices and proper equipment handling procedures",
        youtubeId: "jNQXAC9IVRw", // Placeholder
        thumbnailUrl: null,  
        duration: "12:30",
        era: "Training",
        category: "training",
        featured: false,
      },
      {
        title: "Customer Testimonials",
        description: "Long-time customers and partners share their experiences working with PWS",
        youtubeId: "astISOttCQ0", // Placeholder
        thumbnailUrl: null,
        duration: "6:45",
        era: "Testimonials",
        category: "testimonials",
        featured: false,
      },
      {
        title: "50th Anniversary Celebration",
        description: "Company celebration marking 50 years of service to Northern New England",
        youtubeId: "kJQP7kiw5Fk", // Placeholder
        thumbnailUrl: null,
        duration: "15:20",
        era: "1995",
        category: "celebration",
        featured: false,
      },
    ];

    await db.insert(videos).values(videoData);

    console.log("Database seeded successfully!");
    console.log(`- Inserted ${timelineData.length} timeline entries`);
    console.log(`- Inserted ${videoData.length} videos`);

  } catch (error) {
    console.error("Error seeding database:", error);
    throw error;
  }
}

// Run seed if this file is executed directly
seedDatabase()
  .then(() => {
    console.log("Seeding completed successfully!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Seeding failed:", error);
    process.exit(1);
  });

export { seedDatabase };