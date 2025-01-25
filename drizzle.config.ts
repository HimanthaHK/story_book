import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./config/schema.tsx",
  dbCredentials:{
    url:'postgresql://neondb_owner:npg_Xxl9HvsLS5hr@ep-quiet-feather-a8cdag88-pooler.eastus2.azure.neon.tech/ai-kids-story-builder?sslmode=require',
  },
  
});