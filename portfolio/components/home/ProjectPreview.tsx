"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import OutlinedHeading from "@/components/OutlinedHeading";
import ProjectWheel from "@/components/works/ProjectWheel";
import { projects } from "@/components/works/projects";
import "@/styles/home/style.css";

export default function ProjectPreview({ pageChanging }: { pageChanging: boolean }) {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={pageChanging ? { opacity: 0, x: 60 } : { opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: pageChanging ? 0 : 0.7 }}
      className="home-project-preview"
    >
      <div className="home-project-preview-heading"><OutlinedHeading>My Projects</OutlinedHeading></div>
      <ProjectWheel activeIndex={0} turn={0} compact onSelect={(index) => router.push(`/works?project=${projects[index].id}`)} />
    </motion.div>
  );
}
