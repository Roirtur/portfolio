import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@mui/material';

export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      sx={{
        width: 250,
        margin: 'auto',
        boxShadow: 3,
        borderRadius: 2,
        transition: 'transform 0.3s',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={project.image}
        alt={project.title}
        sx={{ borderTopLeftRadius: 8, borderTopRightRadius: 8, color: 'text.secondary' }}
      />
      <CardContent sx={{ backgroundColor: '#f5f5f5' }}>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', color: '#0f402b' }}>
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ justifyContent: 'center', backgroundColor: '#f5f5f5', borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}
      >
        <Button
          size="small"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#0f402b' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
