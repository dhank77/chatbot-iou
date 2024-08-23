import { Hono } from "hono";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";


const loader = new Hono();

loader.get("/", async (c) => {
    const faqPdf = "./assets/faq.pdf";
   const pdfLoader = new PDFLoader(faqPdf);
   const load = await pdfLoader.load();
   console.log(load[0]);
   
   return c.json(load, 200);
});

export default loader;
