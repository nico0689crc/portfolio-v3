import fetcher from "./fetcher";
import { apiRoutes } from "@/configs/routes";

const getSocialLinks = async () => {
  try {
    return await fetcher(`${process.env.API_URL}/${apiRoutes.socialLinks}`);
  } catch (error) {
    console.error("Failed to fetch social links:", error);
    throw error;
  }
}

export default getSocialLinks;