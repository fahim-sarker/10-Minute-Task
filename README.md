# IELTS Course Product Page – 10 Minute School

This project is a solution to the Frontend Engineer (Level 1) Assessment for 10 Minute School. It replicates the landing page of the "IELTS Course by Munzereen Shahid", using real data fetched from the public API. The implementation is built with Next.js (App Router), TypeScript, TailwindCSS, and is Docker-ready.


##  Features

- Server-side rendering (SSR)
- Course Title and HTML Description
- Product trailer (YouTube player)
- Course instructors (from sections)
- Checklist items
- CTA (Call to Action) section
- Course layout overview (features)
- What you will learn (pointers)
- About the course section
- Language localization (`en` / `bn`)
- SEO support (based on API meta data)
- TypeScript support with strict typing
- Responsive design using TailwindCSS
- Docker support for deployment


## Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **State Management**: React Hooks
- **Rendering**: SSR + ISR
- **API**: 10 Minute School Discovery API
- **SEO**: Metadata dynamically injected
- **Deployment**: Docker container ready


##  Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/fahim-sarker/10-Minute-Task.git
cd 10-Minute-Task
npm install
npm run dev

Visit:
http://localhost:3000/en/product/ielts-course
http://localhost:3000/bn/product/ielts-course


# You can view the deployed project here:

Supports both English and Bangla:

English: https://10-minute-task-ten.vercel.app/en/product/ielts-course
Bangla: https://10-minute-task-ten.vercel.app/bn/product/ielts-course



# Folder Structure

src/
├── app/
│   └── [lang]/product/[slug]/page.tsx 
├── components/                         
├── lib/                                
├── types/    

## Screenshot

![IELTS Course Page](./public/assets/images/fullss.png)