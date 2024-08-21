import { Caveat, Roboto_Mono, Satisfy } from "next/font/google"
const roboto = Roboto_Mono({ subsets: ['latin'] });
const satisfy = Satisfy({ weight: "400", subsets:["latin"] });
const caveat = Caveat({ subsets: ["cyrillic"] });
export const robotoFont = roboto.className
export const caveatFont = caveat.className
export const satisfyFont = satisfy.className