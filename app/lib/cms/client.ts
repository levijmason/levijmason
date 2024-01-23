import { createDirectus, rest } from "@directus/sdk";

const cms = createDirectus("https://directus.levijmason.dev").with(rest());

export default cms;
