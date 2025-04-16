import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Directories for content
const blogsDirectory = path.join(process.cwd(), 'content/blogs');
const projectsDirectory = path.join(process.cwd(), 'content/projects');

// Types
export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  authorImage: string;
  coverImage: string;
  category: string;
  content: string;
  readingTime: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  client: string;
  date: string;
  location: string;
  coverImage: string;
  images: string[];
  features: string[];
  content: string;
}

// Get all blog posts
export function getAllBlogPosts(): BlogPost[] {
  // Create directory if it doesn't exist
  if (!fs.existsSync(blogsDirectory)) {
    fs.mkdirSync(blogsDirectory, { recursive: true });
  }

  // Get all markdown files from the blogs directory
  const fileNames = fs.readdirSync(blogsDirectory);
  
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(blogsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as Omit<BlogPost, 'id' | 'content'>),
      content: matterResult.content,
    };
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// Get a single blog post by id
export async function getBlogPost(id: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(blogsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id and contentHtml
    return {
      id,
      ...(matterResult.data as Omit<BlogPost, 'id' | 'content'>),
      content: contentHtml,
    };
  } catch (error) {
    console.error(`Error getting blog post ${id}:`, error);
    return null;
  }
}

// Get all projects
export function getAllProjects(): Project[] {
  // Create directory if it doesn't exist
  if (!fs.existsSync(projectsDirectory)) {
    fs.mkdirSync(projectsDirectory, { recursive: true });
  }

  // Get all markdown files from the projects directory
  const fileNames = fs.readdirSync(projectsDirectory);
  
  const allProjectsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the project metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as Omit<Project, 'id' | 'content'>),
      content: matterResult.content,
    };
  });

  // Sort projects by date
  return allProjectsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// Get a single project by id
export async function getProject(id: string): Promise<Project | null> {
  try {
    const fullPath = path.join(projectsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the project metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id and contentHtml
    return {
      id,
      ...(matterResult.data as Omit<Project, 'id' | 'content'>),
      content: contentHtml,
    };
  } catch (error) {
    console.error(`Error getting project ${id}:`, error);
    return null;
  }
}

// Get all blog categories
export function getBlogCategories(): string[] {
  const posts = getAllBlogPosts();
  const categories = new Set<string>();
  
  posts.forEach(post => {
    if (post.category) {
      categories.add(post.category);
    }
  });
  
  return Array.from(categories);
}

// Get all project categories
export function getProjectCategories(): string[] {
  const projects = getAllProjects();
  const categories = new Set<string>();
  
  projects.forEach(project => {
    if (project.category) {
      categories.add(project.category);
    }
  });
  
  return Array.from(categories);
}