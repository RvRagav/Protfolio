import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            if (cursorRef.current) {
                cursorRef.current.style.left = `${e.clientX}px`;
                cursorRef.current.style.top = `${e.clientY}px`;
            }
        };
        const handleMouseDown = () => setClicked(true);
        const handleMouseUp = () => setClicked(false);

        document.addEventListener("mousemove", moveCursor);
        document.addEventListener("mousedown", handleMouseDown);
        document.addEventListener("mouseup", handleMouseUp);

        // Hide default cursor
        document.body.classList.add("cursor-none");

        return () => {
            document.removeEventListener("mousemove", moveCursor);
            document.removeEventListener("mousedown", handleMouseDown);
            document.removeEventListener("mouseup", handleMouseUp);
            document.body.classList.remove("cursor-none");
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className={`
                pointer-events-none fixed z-[9999] left-0 top-0 w-5 h-5 rounded-full
                border-2 border-blue-400 bg-blue-400/20
                shadow-lg
                transition-transform duration-150
                ${clicked ? "scale-75 bg-blue-500/40 border-blue-500" : "scale-100"}
            `}
            style={{
                transform: "translate(-50%, -50%)",
                boxShadow: "0 0 16px 4px rgba(59,130,246,0.3)",
                backdropFilter: "blur(2px)",
            }}
        />
    );
};

export default CustomCursor;
