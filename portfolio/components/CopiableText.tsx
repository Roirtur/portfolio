import React, { useState } from 'react';
import { Typography, IconButton, Tooltip } from '@mui/material';
import { ContentCopy as ContentCopyIcon } from '@mui/icons-material';
import { MilkerFont } from '@/styles/theme';

interface CopiableTextProps {
    children: string;
}

const CopiableText: React.FC<CopiableTextProps> = ({ children }) => {
    const [hovered, setHovered] = useState(false);

    const copyToClipboard = (text: string) => {
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text).catch(err => console.error('Failed to copy text: ', err));
        } else {
            const textArea = document.createElement("textarea");
            textArea.value = text;
            textArea.style.position = "fixed";
            textArea.style.left = "-999999px";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand('copy');
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
            document.body.removeChild(textArea);
        }
    };

    const [clicked, setClicked] = useState(false);

    const handleCopyClick = (text: string) => {
        copyToClipboard(text);
        setClicked(true);
        setTimeout(() => setClicked(false), 2000); // Reset clicked state after 2 seconds
    };

    return (
        <Tooltip title={<Typography variant="h6" sx={{ fontSize: "1.3em", color: '#fff', fontFamily: `${MilkerFont.style.fontFamily}, Arial, sans-serif`, }}>{clicked ? 'Copied!' : 'Copy'}</Typography>} arrow placement="left" slotProps={{ popper: { sx: { '& .MuiTooltip-tooltip': { backgroundColor: '#333', borderRadius: '10px', padding: '10px', fontFamily: MilkerFont }, '& .MuiTooltip-arrow': { color: '#333' } } } }}>
            <Typography
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => handleCopyClick(children)}
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', textDecoration: hovered ? 'underline' : 'none', width: 'fit-content', position: "relative" }}
            >
                {children}
                {hovered && (
                    <ContentCopyIcon fontSize="small" style={{ position: 'absolute', right: '-25px' }} />
                )}
            </Typography>
        </Tooltip>
    );
};

export default CopiableText;