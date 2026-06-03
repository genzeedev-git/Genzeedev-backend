import { Router } from "express";
import SiteContent from "../models/SiteContent";

const router = Router();

const getContent = async (type: string, res: any) => {
  try {
    const doc = await SiteContent.findOne({ type });
    if (!doc) {
      return res.status(404).json({ error: "Content not found" });
    }
    res.json(doc.data);
  } catch (error) {
    console.error(`Error fetching ${type}:`, error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
};

router.get("/home", (_req, res) => getContent("home", res));
router.get("/about", (_req, res) => getContent("about", res));
router.get("/work", (_req, res) => getContent("work", res));
router.get("/contact", (_req, res) => getContent("contact", res));
router.get("/nav", (_req, res) => getContent("nav", res));
router.get("/footer", (_req, res) => getContent("footer", res));

export default router;
