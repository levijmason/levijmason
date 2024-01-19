import { createDirectus, rest } from "@directus/sdk";

const cms = createDirectus(`${process.env.CMS_URL}`).with(rest());

export default cms;
