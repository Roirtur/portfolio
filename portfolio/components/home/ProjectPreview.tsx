"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import OutlinedHeading from "@/components/OutlinedHeading";
import RotatingDiv from "@/components/Rotate";
import ProjectWheel from "@/components/works/ProjectWheel";
import { projects } from "@/components/works/projects";
import { MilkerFont, SofiaProFont } from "@/styles/theme";
import "@/styles/home/style.css";

export default function ProjectPreview({ pageChanging }: { pageChanging: boolean }) {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={pageChanging ? { opacity: 0, x: 60 } : { opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: pageChanging ? 0 : 0.2 }}
      className="home-project-preview"
    >
      <div className="home-project-preview-heading">
        <div className="home-project-preview-title-row">
          <OutlinedHeading className="home-project-preview-title">My Projects</OutlinedHeading>
          <RotatingDiv>
            <Link href="/works" className="home-project-preview-link" style={{ fontFamily: MilkerFont.style.fontFamily }}>
              Pick a project <span aria-hidden="true">↗</span>
            </Link>
          </RotatingDiv>
        </div>
        <div className="home-project-preview-actions">
          <p className="home-project-preview-context" style={{ fontFamily: SofiaProFont.style.fontFamily }}>
            A few things I&apos;ve worked on during my internship and studies.
          </p>
        </div>
      </div>
      <ProjectWheel activeIndex={0} turn={0} compact onSelect={(index) => router.push(`/works?project=${projects[index].id}`)} />
    </motion.div>
  );
}
