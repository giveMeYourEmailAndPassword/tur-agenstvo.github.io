// import { useMemo, useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const ScrollToHashElement = () => {
//     let location = useLocation();

//     let hashElement = useMemo(() => {
//         let hash = location.hash;
//         const removeHashCharacter = (str) => {
//             const result = str.slice(1);
//             return result;
//         };

//         if (hash) {
//             let element = document.getElementById(removeHashCharacter(hash));
//             return element;
//         } else {
//             return null;
//         }
//     }, [location]);

//     useEffect(() => {
//         if (hashElement) {
//             hashElement.scrollIntoView({
//                 behavior: "smooth",
//                 // block: "end",
//                 inline: "nearest",
//             });
//         }
//     }, [hashElement]);

//     return null;
// };

// export default ScrollToHashElement;

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
