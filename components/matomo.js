import { init } from "@socialgouv/matomo-next";
import { useEffect } from "react";

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL || "";
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID || "";

const Matomo = () => {
    useEffect(() => {
        init({url: MATOMO_URL, siteId: MATOMO_SITE_ID});
    });
    return null;
}

export default Matomo;