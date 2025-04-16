import fs from 'fs';
import path from 'path';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  coverImage: string;
  images: string[];
  details: {
    client: string;
    date: string;
    location: string;
    services: string[];
  };
}

const projects: Project[] = [
  {
    id: 'modern-minimalist-home',
    title: 'Modern Minimalist Home',
    category: 'Residential',
    description: 'A contemporary home design that embraces minimalism and functionality, featuring clean lines and natural materials.',
    coverImage: '/images/projects/modern-minimalist-home/cover.jpg',
    images: [
      '/images/projects/modern-minimalist-home/1.jpg',
      '/images/projects/modern-minimalist-home/2.jpg',
      '/images/projects/modern-minimalist-home/3.jpg',
      '/images/projects/modern-minimalist-home/4.jpg'
    ],
    details: {
      client: 'Private Residence',
      date: 'January 2024',
      location: 'New York, NY',
      services: ['Interior Design', 'Furniture Selection', 'Space Planning', 'Lighting Design']
    }
  },
  {
    id: 'luxury-penthouse',
    title: 'Luxury Penthouse',
    category: 'Residential',
    description: 'An opulent penthouse renovation combining classic elegance with modern luxury, featuring panoramic city views.',
    coverImage: '/images/projects/luxury-penthouse/cover.jpg',
    images: [
      '/images/projects/luxury-penthouse/1.jpg',
      '/images/projects/luxury-penthouse/2.jpg',
      '/images/projects/luxury-penthouse/3.jpg',
      '/images/projects/luxury-penthouse/4.jpg'
    ],
    details: {
      client: 'Private Client',
      date: 'March 2024',
      location: 'Miami, FL',
      services: ['Full Renovation', 'Custom Furniture', 'Lighting Design', 'Art Curation']
    }
  },
  {
    id: 'boutique-hotel',
    title: 'Boutique Hotel',
    category: 'Commercial',
    description: 'A boutique hotel design that creates an intimate and luxurious atmosphere while maintaining operational efficiency.',
    coverImage: '/images/projects/boutique-hotel/cover.jpg',
    images: [
      '/images/projects/boutique-hotel/1.jpg',
      '/images/projects/boutique-hotel/2.jpg',
      '/images/projects/boutique-hotel/3.jpg',
      '/images/projects/boutique-hotel/4.jpg'
    ],
    details: {
      client: 'Luxury Stays Inc.',
      date: 'December 2023',
      location: 'Los Angeles, CA',
      services: ['Commercial Design', 'Space Planning', 'FF&E Selection', 'Project Management']
    }
  }
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

export function getProjectCategories(): string[] {
  const categories = new Set(projects.map(project => project.category));
  return Array.from(categories);
}