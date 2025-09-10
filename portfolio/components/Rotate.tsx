import { useEffect, useRef, ReactNode } from 'react';

interface RotatingDivProps {
    children: ReactNode;
}

const RotatingDiv = ({ children }: RotatingDivProps) => {
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentDiv = divRef.current;

        interface MouseEventWithClient extends MouseEvent {
            clientX: number;
            clientY: number;
        }

        const handleMouseMove = (event: MouseEventWithClient) => {
            if (currentDiv) {
                const { clientX, clientY } = event;
                const { left, top, width, height } = currentDiv.getBoundingClientRect();
                const x = clientX - left - width / 2;
                const y = clientY - top - height / 2;
                const rotateX = (y / height) * -25;
                const rotateY = (x / width) * 25;

                currentDiv.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            }
        };

        const handleMouseEnter = () => {
            if (currentDiv) {
                currentDiv.addEventListener('mousemove', handleMouseMove);
            }
        };

        const handleMouseLeave = () => {
            if (currentDiv) {
                currentDiv.style.transform = 'rotateX(0deg) rotateY(0deg)';
                currentDiv.removeEventListener('mousemove', handleMouseMove);
            }
        };

        if (currentDiv) {
            currentDiv.addEventListener('mouseenter', handleMouseEnter);
            currentDiv.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (currentDiv) {
                currentDiv.removeEventListener('mouseenter', handleMouseEnter);
                currentDiv.removeEventListener('mouseleave', handleMouseLeave);
                currentDiv.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, []);

    return (
        <div
            ref={divRef}
            style={{
                perspective: '500px',
                transition: 'transform 0.1s',
                transformStyle: 'preserve-3d',
            }}
        >
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    transition: 'transform 0.1s',
                }}
                onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateZ(10px)';
                }}
                onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateZ(0px)';
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default RotatingDiv;
