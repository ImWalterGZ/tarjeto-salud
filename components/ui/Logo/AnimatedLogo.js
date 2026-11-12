"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const paths = [
    "M8.62555 1.04234C10.0214 -0.347446 12.2845 -0.347446 13.6804 1.04234L19.939 7.27381L9.84405 17.3249C8.85189 18.3128 8.35757 19.6086 8.36101 20.9033L1.04688 13.6209C-0.348961 12.2312 -0.348961 9.97787 1.04688 8.58809L8.62555 1.04234Z",
    "M28.2496 1.13165C29.6969 -0.309391 32.0018 -0.350966 33.3976 1.03881L34.2401 1.87762C34.7054 2.34088 34.7054 3.09198 34.2401 3.55524L32.2435 5.54313C31.0374 6.74401 31.0026 8.65638 32.1658 9.81454C33.329 10.9727 35.2498 10.938 36.4559 9.73717L38.4524 7.74928C38.9177 7.28602 39.6721 7.28602 40.1374 7.74928L40.9798 8.58809C42.3757 9.97787 42.3339 12.2727 40.8866 13.7138L23.634 30.8914C22.1867 32.3325 19.8818 32.374 18.486 30.9843L10.9038 23.435C9.50791 22.0452 9.54966 19.7504 10.997 18.3093L28.2496 1.13165Z M35.3774 6.61688C35.959 7.19596 35.959 8.13482 35.3774 8.7139C34.7958 9.29298 33.8528 9.29298 33.2712 8.7139C32.6896 8.13482 32.6896 7.19596 33.2712 6.61688C33.8528 6.0378 34.7958 6.0378 35.3774 6.61688Z",
]

const hearthParts = [
    {
        animate: {
            y: [-15, 8, -5, 0,],    // caída + rebote corto
            x: [15.5, 15.5, -1, 0,],    // desplazamiento horizontal
            scale: [.8, .9, 1, 1],
            rotate: [45, 45, -10, 5, 0],
            opacity: [1, 1, 1, 1, 1],
            transition: { duration: 1, ease: "easeOut" },
        },
    },
    {
        animate: {
            y: [-20, 1, -5, 0,],    // caída + rebote corto
            rotate: [-45, -45, 10, -5, 0],
            opacity: [1, 1, 1, 1, 1],
            transition: { duration: 1, ease: "easeOut" },
        },
    },
    // * Se dejo comentado porque podemos separar el punto de la tarjeta y ponerle su propia animacion
    // {
    //     initial: { x: -8.25, y: -25, opacity: 0 },
    //     animate: {
    //         y: [-25, -2, -5, 0,],    // caída + rebote corto
    //         x: [-8.25, -8.25, 0, 0, 0],    // desplazamiento horizontal
    //         opacity: [1, 1, 0, 0, 0, 1],
    //         transition: { duration: 1, ease: "easeOut" },
    //     },
    // }
]

export default function AnimatedLogo({ className }) {
    const lHearthControls = useAnimation()
    const rHearthControls = useAnimation()
    const controls = [lHearthControls, rHearthControls]

    useEffect(() => {
        lHearthControls.start(hearthParts[0].animate)
        rHearthControls.start(hearthParts[1].animate)
    }, []);

    const animation = () => {
        lHearthControls.start({
            y: [0, 1, -6, 0,],    // caída + rebote corto
            x: [0, -1, -3, 0,],    // desplazamiento horizontal
            rotate: [0, 0, -10, 5, 0],
            opacity: [1, 1, 1, 1, 1],
            transition: { duration: 0.75, ease: "easeOut" },
        })
        rHearthControls.start({
            y: [0, 1, -5, 0,],    // caída + rebote corto
            rotate: [-0, -0, 10, -5, 0],
            opacity: [1, 1, 1, 1, 1],
            transition: { duration: 0.75, ease: "easeOut" },
        })
    }
    return (
        <motion.svg
            className={className}
            viewBox="0 0 42 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onHoverStart={animation}
        >
            {paths.map((p, i) => (
                <motion.path
                    key={i}
                    d={p}
                    fill="currentColor"
                    variants={hearthParts[i]}
                    animate={controls[i]}
                />
            ))}
        </motion.svg>
    );
}