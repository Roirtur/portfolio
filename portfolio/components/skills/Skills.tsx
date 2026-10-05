import { Box, Tooltip, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { motion } from "framer-motion";
import Image from "next/image";
import OutlinedHeading from "@/components/OutlinedHeading";
import { MilkerFont, SofiaProFont } from "@/styles/theme";

type Skill = { name: string; image: string; link: string };

// Research tools first; the rest of the original logo collection follows below.
const research: Skill[] = [
  { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", link: "https://www.python.org/" },
  { name: "PyTorch", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", link: "https://pytorch.org/" },
  { name: "Scikit-learn", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg", link: "https://scikit-learn.org/" },
  { name: "NumPy", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg", link: "https://numpy.org/" },
  { name: "Jupyter", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg", link: "https://jupyter.org/" },
  { name: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", link: "https://git-scm.com/" },
  { name: "C", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", link: "https://en.wikipedia.org/wiki/C_(programming_language)" },
];

const otherSkills: Skill[] = [
  { name: "Qiskit", image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Qiskit-Logo.svg", link: "https://qiskit.org/" },
  { name: "Docker", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", link: "https://www.docker.com/" },
  { name: "SQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", link: "https://www.mysql.com/" },
  { name: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", link: "https://www.typescriptlang.org/" },
  { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "Java", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", link: "https://www.java.com/" },
  { name: "OCaml", image: "https://www.svgrepo.com/show/373945/ocaml.svg", link: "https://ocaml.org/" },
  { name: "PHP", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", link: "https://www.php.net/" },
  { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", link: "https://reactjs.org/" },
  { name: "NextJS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", link: "https://nextjs.org/" },
  { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", link: "https://nodejs.org/" },
  { name: "Django", image: "https://www.svgrepo.com/show/353657/django-icon.svg", link: "https://www.djangoproject.com/" },
  { name: "GraphQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", link: "https://graphql.org/" },
  { name: "AWS", image: "https://cdn.worldvectorlogo.com/logos/amazon-web-services-2.svg", link: "https://aws.amazon.com/" },
  { name: "Angular", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", link: "https://angular.io/" },
  { name: "VueJS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", link: "https://vuejs.org/" },
  { name: "WordPress", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg", link: "https://wordpress.org/" },
  { name: "Airtable", image: "https://www.svgrepo.com/show/353383/airtable.svg", link: "https://airtable.com/" },
  { name: "Softr", image: "https://cdn.brandfetch.io/idytCFzVcY/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B", link: "https://www.softr.io/" },
];

function SkillTile({ skill, index, pageChanging }: { skill: Skill; index: number; pageChanging: boolean }) {
  return (
    <Grid size={{ xs: 6, sm: 4, md: 3 }}>
      <motion.div initial={{ rotateY: 90 }} animate={{ rotateY: pageChanging ? 90 : 0 }} transition={{ duration: 0.3, delay: pageChanging ? 0 : 0.1 * (index % 4) + 0.5 }} style={{ perspective: 1000, display: "flex", justifyContent: "center" }}>
        <motion.div initial={{ rotateY: 90 }} whileInView={{ rotateY: 0 }} transition={{ duration: 0.3, delay: 0.1 * (index % 4) }} style={{ width: "fit-content" }}>
          <Tooltip title={<Typography variant="h6" sx={{ fontSize: "1.3em", color: "#fff", fontFamily: `${MilkerFont.style.fontFamily}, Arial, sans-serif` }}>{skill.name}</Typography>} arrow placement="bottom" slotProps={{ popper: { sx: { '& .MuiTooltip-tooltip': { backgroundColor: '#333', borderRadius: '10px', padding: '10px', fontFamily: MilkerFont }, '& .MuiTooltip-arrow': { color: '#333' } } } }}>
            <a href={skill.link} target="_blank" rel="noopener noreferrer" aria-label={`${skill.name}, opens in a new tab`}>
              <Box sx={{ backgroundColor: '#eee', padding: 2, borderRadius: '20px', margin: 'auto', transition: 'transform 0.3s, box-shadow 0.3s', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', display: 'inline-block', '&:hover': { transform: 'scale(0.95)', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }, '&:active': { transform: 'scale(0.9)', boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)' } }}>
                <Image src={skill.image} alt={skill.name} width={80} height={80} style={{ margin: 'auto', display: 'block', width: 'auto', height: '80px', maxWidth: '150px' }} />
              </Box>
            </a>
          </Tooltip>
        </motion.div>
      </motion.div>
    </Grid>
  );
}

export default function Skills({ pageChanging }: { pageChanging: boolean }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <section>
        <OutlinedHeading>Research &amp; AI</OutlinedHeading>
        <Typography sx={{ fontFamily: SofiaProFont.style.fontFamily, color: '#0f402b', fontSize: '1.2rem', mb: 3 }}>What I use for AI and research projects.</Typography>
        <Grid container spacing={4}>{research.map((skill, index) => <SkillTile key={skill.name} skill={skill} index={index} pageChanging={pageChanging} />)}</Grid>
      </section>
      <section>
        <OutlinedHeading>Other skills</OutlinedHeading>
        <Typography sx={{ fontFamily: SofiaProFont.style.fontFamily, color: '#0f402b', fontSize: '1.2rem', mb: 3 }}>Things I&apos;ve used in other projects and jobs.</Typography>
        <Grid container spacing={4}>{otherSkills.map((skill, index) => <SkillTile key={skill.name} skill={skill} index={index} pageChanging={pageChanging} />)}</Grid>
      </section>
    </Box>
  );
}
