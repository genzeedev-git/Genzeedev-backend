import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "../config/db.js";
import SiteContent from "../models/SiteContent.js";

dotenv.config();

const seedContent = async () => {
  try {
    await connectDB();

    const contents = [
      {
        type: "home",
        data: {
          hero: {
            badge: "Frontend Development Studio",
            heading: ["Websites", "That Move"],
            subtitle:
              "Award-winning digital experiences combining bold design with smooth animations.",
            ctaPrimary: "See Our Work",
            ctaSecondary: "About Us",
          },
          featuredProjects: [
            {
              title: "E-Commerce Platform",
              category: "Web Development",
              image:
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
            },
            {
              title: "Fitness Mobile App",
              category: "Mobile Development",
              image:
                "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
            },
            {
              title: "Brand Identity",
              category: "Graphic Design",
              image:
                "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
            },
          ],
          services: [
            {
              title: "Web Development",
              description:
                "Custom websites with modern technologies for optimal performance.",
              features: ["React & Next.js", "TypeScript", "Responsive"],
            },
            {
              title: "Mobile Apps",
              description:
                "Native and cross-platform applications that engage users.",
              features: ["React Native", "iOS & Android", "UI/UX"],
            },
            {
              title: "Graphic Design",
              description:
                "Stunning visual designs that communicate your brand.",
              features: ["Logo Design", "Brand Identity", "Print"],
            },
          ],
          features: [
            { number: "01", title: "Fast Delivery", description: "Projects delivered on time without compromising quality." },
            { number: "02", title: "Quality Assurance", description: "Every project undergoes rigorous quality checks." },
            { number: "03", title: "Expert Team", description: "Skilled professionals with years of experience." },
            { number: "04", title: "Competitive Pricing", description: "Premium services at prices that fit your budget." },
            { number: "05", title: "24/7 Support", description: "Round-the-clock support for all your needs." },
            { number: "06", title: "Innovation", description: "Cutting-edge technology for modern businesses." },
          ],
          stats: [
            { value: "150+", label: "Projects" },
            { value: "50+", label: "Clients" },
            { value: "5+", label: "Years" },
            { value: "24/7", label: "Support" },
          ],
        },
      },
      {
        type: "about",
        data: {
          hero: {
            badge: "About",
            heading: ["Building Digital", "Experiences"],
            subtitle:
              "A passionate team creating websites that move, inspire, and deliver results.",
          },
          company: {
            name: "GenZeeDev",
            paragraphs: [
              "<strong>GenZeeDev</strong> is a premier digital solutions company dedicated to transforming businesses through innovative technology. We specialize in creating professional-grade websites, mobile applications, and graphic designs.",
              "Our mission is to deliver exceptional digital experiences that combine creativity with technical excellence. Whether you need a stunning website, a feature-rich mobile app, or eye-catching graphic designs, we have the expertise to bring your vision to life.",
              "At GenZeeDev, we believe in building long-term relationships with our clients through transparent communication, timely delivery, and unmatched quality.",
            ],
          },
          team: [
            {
              name: "Elayabarathi M V",
              role: "Founder & Lead Developer",
              bio: "Passionate developer with expertise in React, TypeScript, and innovative digital solutions.",
              website: "https://elayabarathimv.vercel.app/",
              image:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
              skills: ["React", "TypeScript", "Node.js", "Mobile Apps"],
            },
            {
              name: "Mega Sheyam S",
              role: "Co-Founder & Creative Director",
              bio: "Creative visionary with a keen eye for design. Expert in crafting beautiful user interfaces.",
              website: "https://megashyam.vercel.app/",
              image:
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
              skills: ["UI/UX Design", "Graphic Design", "Brand Identity", "Motion Graphics"],
            },
          ],
          values: [
            { title: "Excellence", description: "We strive for excellence in every project." },
            { title: "Collaboration", description: "We work closely with clients to achieve goals." },
            { title: "Innovation", description: "We embrace cutting-edge solutions." },
            { title: "Passion", description: "We're passionate about transforming ideas." },
          ],
        },
      },
      {
        type: "work",
        data: {
          projects: [
            {
              title: "E-Commerce Platform",
              category: "Web Development",
              image:
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
              description: "Modern e-commerce solution with seamless checkout experience.",
            },
            {
              title: "Fitness Mobile App",
              category: "Mobile Development",
              image:
                "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
              description: "Cross-platform fitness tracking app with personalized workouts.",
            },
            {
              title: "Brand Identity",
              category: "Graphic Design",
              image:
                "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
              description: "Complete brand identity for tech startup including logo and guidelines.",
            },
            {
              title: "Dashboard Analytics",
              category: "Web Development",
              image:
                "https://images.unsplash.com/photo-1551650975-87d7413d6045?w=800&q=80",
              description: "Real-time analytics dashboard with interactive charts.",
            },
            {
              title: "Food Delivery App",
              category: "Mobile Development",
              image:
                "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
              description: "On-demand food delivery with real-time tracking.",
            },
            {
              title: "Corporate Website",
              category: "Web Development",
              image:
                "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
              description: "Professional corporate presence with CMS integration.",
            },
            {
              title: "Financial Dashboard",
              category: "Web Development",
              image:
                "https://images.unsplash.com/photo-1518186558115-c7e9d5c7d9c5?w=800&q=80",
              description: "Secure financial dashboard for investment tracking.",
            },
            {
              title: "Event Management App",
              category: "Mobile Development",
              image:
                "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
              description: "Event planning and ticketing mobile solution.",
            },
            {
              title: "Restaurant Branding",
              category: "Graphic Design",
              image:
                "https://images.unsplash.com/photo-1517248123283-534d6526285c?w=800&q=80",
              description: "Complete restaurant branding and menu design.",
            },
          ],
        },
      },
      {
        type: "contact",
        data: {
          email: "genzeedev.contact@gmail.com",
          phones: ["+91 9842852121", "+91 8248627519"],
          location: "Chennai, Tamil Nadu, India",
        },
      },
      {
        type: "nav",
        data: {
          brand: {
            name: "GenZeeDev",
            logoText: "G",
            href: "/",
          },
          links: [
            { name: "Home", path: "/" },
            { name: "Work", path: "/work" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/#contact" },
          ],
        },
      },
      {
        type: "footer",
        data: {
          tagline:
            "Professional grade websites, mobile apps, and graphic designs. We bring your digital vision to life.",
          social: [
            {
              name: "Mail",
              url: "mailto:genzeedev.contact@gmail.com",
              icon: "envelope",
            },
          ],
          sitemap: [
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Work", path: "/work" },
            { name: "Contact", path: "/#contact" },
          ],
          contact: {
            email: "genzeedev.contact@gmail.com",
            phones: ["+91 9842852121", "+91 8248627519"],
            location: "Chennai, Tamil Nadu, India",
          },
        },
      },
    ];

    for (const item of contents) {
      await SiteContent.findOneAndUpdate(
        { type: item.type },
        { $set: { type: item.type, data: item.data } },
        { upsert: true, returnDocument: "after" }
      );
      console.log(`Seeded: ${item.type}`);
    }

    console.log("Database seeding completed!");
    process.exit(0);
  } catch (error) {
    console.error("Seeding error:", error);
    process.exit(1);
  }
};

seedContent();
