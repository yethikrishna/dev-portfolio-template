import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, FolderIcon } from "lucide-react";

export const NAVBAR = [
  { href: "/", icon: HomeIcon, label: "Home" },
  { href: "/blog", icon: NotebookIcon, label: "Blog" },
  { href: "/projects", icon: FolderIcon, label: "Projects" },
  { href: "/uses", icon: Icons.shop, label: "Uses" },
];

export const CONTACT = {
    email: "hello@myndlabs.tech",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/yethikrishna",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/yethikrishna",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/yethikrishna",
        icon: Icons.x,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://instagram.com/yethikrishnar",
        icon: Icons.instagram,
        navbar: true,
      },
      Youtube: {
        name: "YouTube",
        url: "https://youtube.com/@yethikrishna",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:hello@myndlabs.tech",
        icon: Icons.email,
        navbar: false,
      },
    },
  };
