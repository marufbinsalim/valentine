import { Slide } from "@/components/slideshow";
import { Slide1 } from "./slide1";
import { Slide2 } from "./slide2";
import { Slide3 } from "./slide3";
import { Slide4 } from "./slide4";
import { Slide5 } from "./slide5";

// Define the slideshow slides with configurable duration and position
export const slides2026: Slide[] = [
    {
        component: <div />,
        duration: 1000,
        position: "center",
    },
    {
        component: <Slide1 />,
        duration: 3000,
        position: "center",
    },
    {
        component: <Slide2 />,
        duration: 3000,
        position: "center",
    },
    {
        component: <Slide3 />,
        duration: 3000,
        position: "top-left",
    },
    {
        component: <Slide4 />,
        duration: 3000,
        position: "bottom-right",
    },
    {
        component: <Slide5 />,
        duration: Infinity,
        position: "center",
    },
];

export { Slide1, Slide2, Slide3, Slide4, Slide5 };
