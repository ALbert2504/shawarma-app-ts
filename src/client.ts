import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  'https://stukysyjpbxtezxaaxcr.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyODcxMzM2MiwiZXhwIjoxOTQ0Mjg5MzYyfQ.uFrk8cXFx280xl--Ca-Zk7v4K_eNx7FW4BpE7gYq7PQ'
);