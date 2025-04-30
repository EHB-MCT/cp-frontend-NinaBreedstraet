import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const ScrollScene2 = ({ children }: { children: React.ReactNode }) => {
    const grassRef = useRef(null);

    const { scrollYProgress: grassScrollY } = useScroll({
        target: grassRef,
        offset: ["start end", "end end"] 
    });
    
    const grassY = useTransform(grassScrollY, [0, 1], [0, -200]);
    
    return (
        <div className="scene2-container" style={{ position: "relative", marginTop: "-20vh" }}> 
            <motion.img
                src="/forest3.png"
                ref={grassRef}
                style={{ 
                    y: grassY,
                    width: "100%",
                    position: "relative"
                }} 
            />
        </div>
    );
};