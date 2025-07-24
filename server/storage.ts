import { timelineEntries, storySubmissions, videos, type TimelineEntry, type InsertTimelineEntry, type StorySubmission, type InsertStorySubmission, type Video, type InsertVideo } from "@shared/schema";

export interface IStorage {
  // Timeline entries
  getTimelineEntries(): Promise<TimelineEntry[]>;
  getTimelineEntry(id: number): Promise<TimelineEntry | undefined>;
  createTimelineEntry(entry: InsertTimelineEntry): Promise<TimelineEntry>;

  // Story submissions
  getStorySubmissions(): Promise<StorySubmission[]>;
  getStorySubmission(id: number): Promise<StorySubmission | undefined>;
  createStorySubmission(submission: InsertStorySubmission): Promise<StorySubmission>;
  updateStorySubmissionStatus(id: number, status: string): Promise<StorySubmission | undefined>;

  // Videos
  getVideos(): Promise<Video[]>;
  getVideo(id: number): Promise<Video | undefined>;
  createVideo(video: InsertVideo): Promise<Video>;

  // Search
  searchContent(query: string): Promise<{
    timelineEntries: TimelineEntry[];
    storySubmissions: StorySubmission[];
  }>;
}

export class MemStorage implements IStorage {
  private timelineEntries: Map<number, TimelineEntry>;
  private storySubmissions: Map<number, StorySubmission>;
  private videos: Map<number, Video>;
  private currentTimelineId: number;
  private currentStoryId: number;
  private currentVideoId: number;

  constructor() {
    this.timelineEntries = new Map();
    this.storySubmissions = new Map();
    this.videos = new Map();
    this.currentTimelineId = 1;
    this.currentStoryId = 1;
    this.currentVideoId = 1;

    // Initialize with sample data from the design reference
    this.initializeData();
  }

  private initializeData() {
    // Timeline entries from the design reference
    const timelineData = [
      {
        id: 1,
        year: 1945,
        title: "Company Founded",
        description: "Brothers Mac and Roy MacDonald start Portland Welding Supply with $50 in war bonds",
        details: "After working at New England Shipbuilding Corp during WWII, the MacDonald brothers decided to start their own welding repair and supply business. Each contributed $25 in savings bonds and received 35 shares of stock. They started in the bottom floor of the Hazen O. Hagar building on Forest Avenue - a cold, dark, damp space they shared with vermin. Air Reduction Co. agreed to give them the hardgoods distribution business.",
        tags: ["founding", "shipyard", "forest-avenue"],
        featured: true,
        createdAt: new Date(),
      },
      {
        id: 2,
        year: 1947,
        title: "First Employee & New Location",
        description: "Frank Tirabassi hired part-time, move to Quonset hut on Main Street",
        details: "Frank Tirabassi became their first employee, hired part-time to do repairs while working as a Portland Police Patrolman. After tough years on Forest Ave, they purchased a government surplus 20' x 36' Quonset hut and erected it on land at 11 Main Street, South Portland, rented from Ken Burr for the cost of taxes.",
        tags: ["growth", "quonset-hut", "south-portland"],
        featured: false,
        createdAt: new Date(),
      },
      {
        id: 3,
        year: 1948,
        title: "Jim Whidden Joins",
        description: "Key hire who would become general manager and drive growth for 35+ years",
        details: "Jim Whidden appeared looking for work just as PWS needed a driver. Starting at $7 a day, he quickly proved his worth and was offered $50 a week with growth potential. Jim became the best industry salesman in northern New England throughout the 60s & 70s, handling everything from cleaning floors to designing building additions, negotiating contracts, and sales.",
        tags: ["key-hire", "leadership", "sales"],
        featured: false,
        createdAt: new Date(),
      },
      {
        id: 4,
        year: 1954,
        title: "Move to Danforth Street",
        description: "Purchase former Esso station for permanent headquarters",
        details: "With the Veterans Memorial Bridge completion announced, the old Vaughan Street Bridge location became an opportunity. Standard Oil sold the former Esso station property to the brothers on June 20, 1954. Jim Whidden's quick thinking prevented a construction disaster when he noticed the dock was being built at ground level instead of above ground level, saving the project.",
        tags: ["expansion", "danforth-street", "permanent-location"],
        featured: false,
        createdAt: new Date(),
      },
    ];

    timelineData.forEach(entry => {
      this.timelineEntries.set(entry.id, entry);
      if (entry.id >= this.currentTimelineId) {
        this.currentTimelineId = entry.id + 1;
      }
    });

    // Sample videos
    const videoData = [
      {
        id: 1,
        title: "Company Overview (1970s)",
        description: "Historical commercial showcasing PWS services and equipment",
        youtubeId: null,
        thumbnailUrl: null,
        duration: "3:45",
        era: "1970s Era",
        category: "commercial",
        featured: true,
      },
      {
        id: 2,
        title: "Welding Techniques Demo",
        description: "Technical demonstration of professional welding methods",
        youtubeId: null,
        thumbnailUrl: null,
        duration: "8:20",
        era: "Educational",
        category: "educational",
        featured: false,
      },
      {
        id: 3,
        title: "Facility Tour (1980s)",
        description: "Behind-the-scenes look at PWS operations and facilities",
        youtubeId: null,
        thumbnailUrl: null,
        duration: "5:15",
        era: "1980s Era",
        category: "tour",
        featured: false,
      },
      {
        id: 4,
        title: "Safety Training Video",
        description: "Industrial safety practices and equipment handling",
        youtubeId: null,
        thumbnailUrl: null,
        duration: "12:30",
        era: "Training",
        category: "training",
        featured: false,
      },
      {
        id: 5,
        title: "Customer Testimonials",
        description: "Long-time customers share their PWS experiences",
        youtubeId: null,
        thumbnailUrl: null,
        duration: "6:45",
        era: "Testimonials",
        category: "testimonials",
        featured: false,
      },
      {
        id: 6,
        title: "Anniversary Celebration",
        description: "50th anniversary company celebration and milestones",
        youtubeId: null,
        thumbnailUrl: null,
        duration: "15:20",
        era: "1995",
        category: "celebration",
        featured: false,
      },
    ];

    videoData.forEach(video => {
      this.videos.set(video.id, video);
      if (video.id >= this.currentVideoId) {
        this.currentVideoId = video.id + 1;
      }
    });
  }

  async getTimelineEntries(): Promise<TimelineEntry[]> {
    return Array.from(this.timelineEntries.values()).sort((a, b) => a.year - b.year);
  }

  async getTimelineEntry(id: number): Promise<TimelineEntry | undefined> {
    return this.timelineEntries.get(id);
  }

  async createTimelineEntry(insertEntry: InsertTimelineEntry): Promise<TimelineEntry> {
    const id = this.currentTimelineId++;
    const entry: TimelineEntry = {
      ...insertEntry,
      id,
      createdAt: new Date(),
    };
    this.timelineEntries.set(id, entry);
    return entry;
  }

  async getStorySubmissions(): Promise<StorySubmission[]> {
    return Array.from(this.storySubmissions.values()).sort((a, b) => 
      new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
    );
  }

  async getStorySubmission(id: number): Promise<StorySubmission | undefined> {
    return this.storySubmissions.get(id);
  }

  async createStorySubmission(insertSubmission: InsertStorySubmission): Promise<StorySubmission> {
    const id = this.currentStoryId++;
    const submission: StorySubmission = {
      ...insertSubmission,
      id,
      status: "pending",
      submittedAt: new Date(),
    };
    this.storySubmissions.set(id, submission);
    return submission;
  }

  async updateStorySubmissionStatus(id: number, status: string): Promise<StorySubmission | undefined> {
    const submission = this.storySubmissions.get(id);
    if (submission) {
      submission.status = status;
      this.storySubmissions.set(id, submission);
      return submission;
    }
    return undefined;
  }

  async getVideos(): Promise<Video[]> {
    return Array.from(this.videos.values());
  }

  async getVideo(id: number): Promise<Video | undefined> {
    return this.videos.get(id);
  }

  async createVideo(insertVideo: InsertVideo): Promise<Video> {
    const id = this.currentVideoId++;
    const video: Video = { ...insertVideo, id };
    this.videos.set(id, video);
    return video;
  }

  async searchContent(query: string): Promise<{
    timelineEntries: TimelineEntry[];
    storySubmissions: StorySubmission[];
  }> {
    const lowerQuery = query.toLowerCase();
    
    const timelineEntries = Array.from(this.timelineEntries.values()).filter(entry =>
      entry.title.toLowerCase().includes(lowerQuery) ||
      entry.description.toLowerCase().includes(lowerQuery) ||
      entry.details?.toLowerCase().includes(lowerQuery) ||
      entry.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
    );

    const storySubmissions = Array.from(this.storySubmissions.values()).filter(submission =>
      submission.storyTitle.toLowerCase().includes(lowerQuery) ||
      submission.storyContent.toLowerCase().includes(lowerQuery) ||
      submission.name.toLowerCase().includes(lowerQuery)
    );

    return { timelineEntries, storySubmissions };
  }
}

export const storage = new MemStorage();
