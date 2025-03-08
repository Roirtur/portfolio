import { useEffect, useRef, ReactNode } from 'react';

interface RotatingDivProps {
    children: ReactNode;
}

const RotatingDiv = ({ children }: RotatingDivProps) => {
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        interface MouseEventWithClient extends MouseEvent {
            clientX: number;
            clientY: number;
        }

        const handleMouseMove = (event: MouseEventWithClient) => {
            if (divRef.current) {
                const { clientX, clientY } = event;
                const { left, top, width, height } = divRef.current.getBoundingClientRect();
                const x = clientX - left - width / 2;
                const y = clientY - top - height / 2;
                const rotateX = (y / height) * -25;
                const rotateY = (x / width) * 25;

                divRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            }
        };

        const handleMouseEnter = () => {
            if (divRef.current) {
                divRef.current.addEventListener('mousemove', handleMouseMove);
            }
        };

        const handleMouseLeave = () => {
            if (divRef.current) {
                divRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
                divRef.current.removeEventListener('mousemove', handleMouseMove);
            }
        };

        if (divRef.current) {
            divRef.current.addEventListener('mouseenter', handleMouseEnter);
            divRef.current.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (divRef.current) {
                divRef.current.removeEventListener('mouseenter', handleMouseEnter);
                divRef.current.removeEventListener('mouseleave', handleMouseLeave);
                divRef.current.removeEventListener('mousemove', handleMouseMove);
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
