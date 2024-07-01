import { useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashElement = () => {
    const location = useLocation();

    const hashElement = useMemo(() => {
        const hash = location.hash;

        const removeHashCharacter = (str) => {
            return str.slice(1);
        };

        if (hash) {
            const element = document.getElementById(removeHashCharacter(hash));
            return element;
        } else {
            return null;
        }
    }, [location]);

    useEffect(() => {
        if (hashElement) {
            hashElement.scrollIntoView({
                behavior: "smooth",
                inline: "nearest",
            });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [hashElement]);

    return null;
};

export default ScrollToHashElement;
